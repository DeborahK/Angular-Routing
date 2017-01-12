import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData),
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
