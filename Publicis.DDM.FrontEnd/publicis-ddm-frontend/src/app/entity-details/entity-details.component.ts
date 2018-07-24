import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { EntityService } from '../entity.service';
import { EntityUserDefinedAttributesPipe } from '../entity-udas.pipe';

import { Entity } from '../entity';
import { AddAttributesDialog } from '../add-attributes-dialog/add-attributes-dialog.component';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute, private dialog: MatDialog) { }

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
    const deleteDialog = this.dialog.open(ConfirmationDialog, {
      width: '40%',
      data: { 
        title: 'Delete',
        innerHtml: 
        '<p>You will delete entity with <br><br>' +
        '<span style="font-weight:bold;">Id</span>: ' + this.entity.id + '<br>' +
        '<span style="font-weight:bold;">Name</span>: ' + this.entity.name
      }
    });
    deleteDialog.afterClosed().subscribe(
      confirm => {
        if (confirm)
        {
          this.entityService.Delete(this.entityType, this.entity.id)
          .subscribe(
            response => {
              this.entityDeleted.emit(this.entity.id);
              this.disabled = true;
              this.entity = null;
            }
          )
        }
      }
    )    
  }

  addAttributes(): void {
    const attrDialog = this.dialog.open(AddAttributesDialog, {
      width: '40%',
      data: { 
        entity: this.entity,
        entityType: this.entityType
      }
    });
    attrDialog.afterClosed().subscribe(
      entity => {
        if(entity) {
          // create a new reference of the object in order to triger Angular's change detection
          let values = JSON.parse(JSON.stringify(entity.values));
          this.entity.values = values;
        }
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