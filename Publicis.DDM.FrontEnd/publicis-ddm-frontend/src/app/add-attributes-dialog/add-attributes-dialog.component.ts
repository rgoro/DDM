import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EntityDialogData } from '../entity-dialog-data';
import { Entity } from '../entity';
import { AddUdaRepeaterComponent } from '../add-uda-repeater/add-uda-repeater.component';
import { EntityService } from '../entity.service';
import { UdasHelperService } from '../udas-helper.service';

@Component({
  selector: 'app-add-attributes-dialog',
  templateUrl: './add-attributes-dialog.component.html',
  styleUrls: ['./add-attributes-dialog.component.css']
})
export class AddAttributesDialog implements OnInit {

  entity: Entity;
  entityType: string;
  @Input() userDefinedAttributes: [{}];

  @ViewChild(AddUdaRepeaterComponent)
  private repeater: AddUdaRepeaterComponent;

  constructor(
    public dialogRef: MatDialogRef<AddAttributesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EntityDialogData,
    private entityService: EntityService,
    private udasHelperService: UdasHelperService) { }

    save(): void {
      if(this.repeater.userDefinedAttributes)
      {
        let data = this.udasHelperService.assignUdasToEntity(this.entity, this.repeater.userDefinedAttributes);
        this.entityService.Update(this.entityType, this.entity.id, data).subscribe(
          response => {
            this.dialogRef.close(data);
          }
        )
      } else {
        // TODO: handle error
      }
    }

    discard(): void {
      this.dialogRef.close();    
    }

  ngOnInit() {
    this.entity = this.data.entity;
    this.entityType = this.data.entityType;
  }

}
