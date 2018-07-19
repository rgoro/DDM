import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { EntityDetailsComponent } from './entity-details/entity-details.component';
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
                component: EntityDetailsComponent,
                resolve: {
                    entity: EntityResolver
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
        },
        children: [
            { 
                path: ':id',
                component: EntityDetailsComponent,
                resolve: {
                    entity: EntityResolver
                },
                data: {
                    type: 'Agency'
                },
            }
        ]
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
        },
        children: [
            { 
                path: ':id',
                component: EntityDetailsComponent,
                resolve: {
                    entity: EntityResolver
                },
                data: {
                    type: 'Market'
                },
            }
        ]
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