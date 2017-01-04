import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export  class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.authService.isLoggedIn()) {
            return true
        }
        return false;
    }
}
