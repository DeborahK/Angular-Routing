import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'products', loadChildren: 'app/products/product.module#ProductModule' },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]) //,  {enableTracing: true} )
    ],
    declarations: [ WelcomeComponent ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
