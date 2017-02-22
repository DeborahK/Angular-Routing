import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
