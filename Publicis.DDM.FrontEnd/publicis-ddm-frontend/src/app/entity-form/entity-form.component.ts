import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit {

  constructor() { }
  @Input() entity: Entity;
  @Input() disabled: boolean;
  @Input() showId: boolean;

  entityHasValues(): boolean {
    return this.entity.values && Object.keys(this.entity.values).length > 0;
  }

  ngOnInit() {
    this.disabled = this.disabled == null || this.disabled == undefined ? false : true;
    this.showId = this.showId == null || this.showId == undefined ? false : true;
  }

}
