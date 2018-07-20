import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service-interceptor';

import { AppComponent } from './app.component';

import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityPanelComponent } from './entity-panel/entity-panel.component';
import { EntityListComponent } from './entity-list/entity-list.component';

import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntityUserDefinedAttributesPipe } from './entity-udas.pipe';
import { AddNewEntityDialog } from './add-new-entity-dialog/add-new-entity-dialog.component';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { AddUdaRepeaterComponent } from './add-uda-repeater/add-uda-repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    EntityDetailsComponent,
    EntityPanelComponent,
    EntityUserDefinedAttributesPipe,
    AddNewEntityDialog,
    EntityFormComponent,
    AddUdaRepeaterComponent,    
  ],
  entryComponents: [
    AddNewEntityDialog    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
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
