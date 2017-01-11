import { Component, HostBinding } from '@angular/core';

import { slideInOutAnimation } from '../animations';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    animations: [ slideInOutAnimation ]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
}
