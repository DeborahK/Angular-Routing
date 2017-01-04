import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './user/auth.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(private authService: AuthService,
                private router: Router) { }

    logOut(message: string): void {
        this.authService.logout();
        this.router.navigate(['/home']);
    }
}
