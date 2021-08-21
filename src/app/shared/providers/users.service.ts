import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    get(page: number) {
        return this.http.get('https://reqres.in/api/users', {
            params: { page },
        });
    }
}
