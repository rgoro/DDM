import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { EntityUserDefinedAttributesPipe } from '../entity-udas.pipe';

import { Entity } from '../entity';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  @Input() disabled: boolean;
  @Input() entity: Entity;
  @Input() entityType: string;
  @Output() entityDeleted = new EventEmitter<string>();
  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
  disableEdit: boolean;

  save(): void {
    this.entityService.Update(this.entityType, this.entity.id, this.entity)
      .subscribe(
        response => {
          this.disabled = true
        }
      );
  }

  delete(): void {
    this.entityService.Delete(this.entityType, this.entity.id)
      .subscribe(
        response => {
          this.entityDeleted.emit(this.entity.id);
          this.disabled = true;
          this.entity = null;
        }
      )
  }
  ngOnInit() {
    this.disabled = true;
  }

  ngOnChanges(simpleChanges) {
    if(simpleChanges.entity.previousValue && simpleChanges.entity.currentValue && simpleChanges.entity.previousValue.id != simpleChanges.entity.currentValue.id)
    {
      this.disabled = true;
    }    
  }
}