import { Component, Output, EventEmitter } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
    selector: 'pm-user',
    template: `
      <ul class='nav navbar-nav'>
        <li>
            <a *ngIf="!authService.isLoggedIn()" [routerLink]="['/login']">Log In</a>
            <a *ngIf="authService.isLoggedIn()">Welcome {{ authService.currentUser.userName }}</a>
        </li>
        <li *ngIf="authService.isLoggedIn()">
            <a (click)="logout()">Logout</a>
        </li>
      </ul>
    `
})
export class UserLinkComponent {
    @Output() loggedOut: EventEmitter<string> = new EventEmitter<string>() ;

    constructor(public authService: AuthService) { }

    logout(): void {
        this.authService.logout();
        this.loggedOut.emit("User logged out");
    }
}
