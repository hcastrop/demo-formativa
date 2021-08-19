import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ValidarInactivedGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const status: boolean = JSON.parse(localStorage.getItem('status') as string);
        console.log(status);
        if (!status) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
    }
}
