import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { EntityService } from './entity.service';

import { Entity } from './entity';
@Injectable({
  providedIn: 'root'
})
export class EntityListResolver {

  constructor(private router: Router, private entityService: EntityService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Entity[]> {      
        return this.entityService.getAll(route.data['type']);        
  }
}
