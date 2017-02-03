import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            {
                path: 'products',
                loadChildren: 'app/products/product.module#ProductModule',
                canLoad: [ AuthGuard ]
            },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ] , { preloadingStrategy: PreloadAllModules, enableTracing: true }) // , enableTracing: true
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
