import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
