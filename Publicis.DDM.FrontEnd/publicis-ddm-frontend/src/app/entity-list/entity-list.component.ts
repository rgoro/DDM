import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Entity } from '../entity';
//import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  @Input() entities: Entity[];
  @Input() title: string;
  @Output() entitySelected = new EventEmitter<Entity>();

  faSearch = faSearch;

  constructor() { }

  selectEntity(entity: Entity) {
    this.entitySelected.emit(entity);
  }
  
  ngOnInit() {
  }

}
