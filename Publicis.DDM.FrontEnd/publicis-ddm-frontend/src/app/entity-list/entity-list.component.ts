import { Component, OnInit, Input } from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Entity } from '../entity';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  @Input() entities: Entity[];
  @Input() title: string;

  faPlus = faPlus;
  faSearch = faSearch;
  constructor() { }
  
  ngOnInit() {
  }

}
