import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

declare const swal: any;
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log(req);

        const status = localStorage.getItem('status') as string;
        let request = req.clone({
            setHeaders: {
                authorization: status,
            },
        });

        return next.handle(request).pipe(
            catchError((e: HttpErrorResponse) => {
                switch (e.status) {
                    case 401:
                        swal('El usuario no se encuentra authorizado.', {
                            icon: 'error',
                        }).then(() => {
                            localStorage.clear();
                            this.router.navigate(['login']);
                        });
                        break;

                    default:
                        break;
                }
                return throwError(e);
            })
        );
    }
}
