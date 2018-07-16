import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service-interceptor';

import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
