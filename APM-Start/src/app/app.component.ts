import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import {
    Router,
    Event,
    NavigationStart,
    NavigationEnd,
    NavigationError,
    NavigationCancel,
    RouterEvent
} from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation]
})
export class AppComponent {
    pageTitle = 'Acme Product Management';
    loading = true;

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }

    get userName(): string {
        if (this.authService.currentUser) {
            return this.authService.currentUser.userName;
        }
        return '';
    }

    constructor(private authService: AuthService, private router: Router) {
        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (
            routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError
        ) {
            this.loading = false;
        }
    }

    logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
        console.log('Log out');
    }
}
