import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    storage: any = sessionStorage;
    constructor() {}

    get(name: string) {
        return JSON.parse(this.storage.getItem(name));
    }

    set(name: string, value: any) {
      this.storage.setItem(name, JSON.stringify(value));
      return value;
    }

    delete(name: string) {
      this.storage.removeItem(name);
    }
}
