import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageService } from './storage.service';

export interface CacheStorageRecord<T> {
    expires: Date;
    value: T;
}

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    /**
     * Default expiry in seconds
     *
     * @type {number}
     */
    public defaultExpires: number = 86400; //24Hrs
    /**
     * Creates an instance of local cache service.
     * @param storageService StorageService
     */
    constructor(private storageService: StorageService) {}
    /**
     * Cache or use result from observable
     *
     * If cache key does not exist or is expired, observable supplied in argument is returned and result cached
     *
     * @param key
     * @param observable
     * @param expires
     * @returns {Observable<T>}
     */
    public observable<T>(
        key: string,
        observable: Observable<T>,
        expires: number = this.defaultExpires
    ): Observable<T> {
        // First fetch the item from localstorage (even though it may not exist)
        return of(this.storageService.get(key)).pipe(
            // If the cached value has expired, nullify it, otherwise pass it through
            map((val: CacheStorageRecord<T>) => {
                if (val) {
                    return new Date(val.expires).getTime() > Date.now()
                        ? val
                        : null;
                }
                return null;
            }),
            // At this point, if we encounter a null value, either it doesnt exist in the cache or it has expired.
            // If it doesnt exist, simply return the observable that has been passed in, caching its value as it passes through
            switchMap((val: CacheStorageRecord<T> | null) => {
                if (val) {
                    return of(val.value);
                } else {
                    return observable.pipe(
                        switchMap((val: any) => this.value(key, val, expires))
                    ); //The result may have 'expires' explicitly set
                }
            })
        );
    }

    /**
     * Cache supplied value until expiry
     *
     * @param key string
     * @param value T
     * @param expires number | string | Date
     * @returns {Observable<T>}
     */
    public value<T>(
        key: string,
        value: T,
        expires: number | string | Date = this.defaultExpires
    ): Observable<T> {
        let _expires: Date = this.sanitizeAndGenerateDateExpiry(expires);

        return of(
            this.storageService.set(key, {
                expires: _expires,
                value: value,
            })
        ).pipe(
            map((item: any) => {
                return item.value;
            })
        );
    }
    /**
     * Expires local cache service
     *
     * @param key string
     * @returns Observable<void>
     */
    expire(key: string): Observable<void> {
        return of(this.storageService.delete(key));
    }
    /**
     * Sanitizes and generate date expiry
     *
     * @param expires string | number | Date
     * @returns Date
     */
    private sanitizeAndGenerateDateExpiry(
        expires: string | number | Date
    ): Date {
        let expiryDate: Date = this.expiryToDate(expires);
        //Dont allow expiry dates in the past
        if (expiryDate.getTime() <= Date.now()) {
            return new Date(Date.now() + this.defaultExpires);
        }

        return expiryDate;
    }
    /**
     * Expirys to date
     *
     * @param expires number | string | Date
     * @returns Date
     */
    private expiryToDate(expires: number | string | Date): Date {
        if (Number(expires)) {
            return new Date(Date.now() + Math.abs(expires as number) * 1000);
        }

        if (String(expires)) {
            return new Date(expires);
        }

        if (new Date(expires)) {
            return expires as Date;
        }

        return new Date();
    }
}
