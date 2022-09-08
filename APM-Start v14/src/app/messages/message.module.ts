import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
