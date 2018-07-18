import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service-interceptor';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { EntityFormComponent } from './entity-form/entity-form.component';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { MarketsListComponent } from './markets-list/markets-list.component';
import { EntityListComponent } from './entity-list/entity-list.component';

import { AppRoutingModule } from './app-routing.module';

import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientsListComponent,
    AgenciesListComponent,
    MarketsListComponent,
    EntityListComponent,
    EntityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
