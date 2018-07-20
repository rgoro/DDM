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

  entityHasUDAs(): boolean {
    return this.entity.values && Object.keys(this.entity.values).length > 0;
  }

  modifyUda(key: string, value: string): void {
    this.entity.values[key] = value;
  }
  ngOnInit() {
    this.disabled = this.disabled == null || this.disabled == undefined ? false : true;
    this.showId = this.showId == null || this.showId == undefined ? false : true;
  }

}
