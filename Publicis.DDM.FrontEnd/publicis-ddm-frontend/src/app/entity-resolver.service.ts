import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EntityService } from './entity.service';

import { Entity } from './entity';

@Injectable()
export class EntityResolver implements Resolve<Entity[]> {
  constructor(private router: Router, private entityService: EntityService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Entity[]> {      
        return this.entityService.getById(route.data['type'], route.params['id']);        
  }
}
