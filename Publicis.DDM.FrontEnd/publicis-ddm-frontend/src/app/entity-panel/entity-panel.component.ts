import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { EntityService } from '../entity.service';
import { Entity } from '../entity';


@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.css']
})
export class EntityPanelComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  faPlus = faPlus;

  entities: Entity[];
  entity: Entity;
  title: string;

  getAll(entityType: string): void {
    this.entityService.getAll(entityType)
      .subscribe(
        entities => { this.entities = entities  }      
      )
  }

  getById(entityType: string, id: number): void {
    this.entityService.getById(entityType, id)
      .subscribe(
        entity => { this.entity = entity[0] }
      )
  }

  Find(entityType: string, filter: string): void {
    this.entityService.Find(entityType, filter)
      .subscribe(
        entities => { this.entities = entities }      
      )
  }

  ngOnInit() {
    this.route.data
    .subscribe((data: { entities: Entity[]}) => 
      { this.entities = data.entities }      
    );
    this.title = this.route.snapshot.data.title;
  }

}
