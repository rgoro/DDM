import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service-interceptor';

import { MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
