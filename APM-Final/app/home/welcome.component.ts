import { Component } from '@angular/core';

import { slideInOutAnimation } from '../animations';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    // host: {
    //     '[@routeAnimation]': 'true',
    //     '[style.display]': "'block'",
    //     '[style.position]': "'absolute'"
    // },
    // animations: [slideInOutAnimation]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
