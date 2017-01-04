import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';
import { UserLinkComponent } from './user-link.component';

import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    LoginComponent,
    UserLinkComponent
  ],
  providers: [ AuthService ],
  exports: [ UserLinkComponent ]
})
export class UserModule { }
