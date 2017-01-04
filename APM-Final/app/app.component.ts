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

    logIn(): void {
        //this.router.navigate(['/login', { outlets: { popup: ['messages'] } }]);
        this.router.navigateByUrl('/login(popup:messages)');
    }

    logOut(message: string): void {
        this.authService.logout();
        this.router.navigate(['/home']);
    }
}
