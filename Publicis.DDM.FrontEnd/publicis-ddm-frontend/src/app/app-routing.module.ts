import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { AgenciesListComponent } from './agencies-list/agencies-list.component';
import { MarketsListComponent } from './markets-list/markets-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { EntityFormComponent } from './entity-form/entity-form.component';
import { EntityPanelComponent } from './entity-panel/entity-panel.component';

import { EntityListResolver } from './entity-list-resolver.service';
import { EntityResolver } from './entity-resolver.service';

const appRoutes: Routes = [
    { 
        path: 'clients',
        component: EntityPanelComponent,
        resolve: {
            entities: EntityListResolver
        },
        data: {
            title: 'Clients',
            type: 'Client'
        },
        children: [
            { 
                path: ':id',
                component: EntityFormComponent,
                resolve: {
                    client: EntityResolver
                },
                data: {
                    type: 'Client'
                },
            }
        ]
    },
    {
        path: 'agencies',
        component: EntityPanelComponent,
        resolve: {
            entities: EntityListResolver
        },
        data: {
            title: 'Agencies',
            type: 'Agency'
        }
    },
    { 
        path: 'markets',
        component: EntityPanelComponent,
        resolve: {
            entities: EntityListResolver
        },
        data: { 
            title: 'Markets',
            type: 'Market'
        }
    },
    { 
        path: '',
        redirectTo: '/clients',
        pathMatch: 'full'
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
    providers: [
        EntityListResolver,
        EntityResolver
    ]
  })
  export class AppRoutingModule {}