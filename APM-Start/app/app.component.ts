import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(private authService: AuthService) { }

    logIn(): void {
        console.log('Log in');
    }

    logOut(message: string): void {
        console.log('Log out');
    }

}
