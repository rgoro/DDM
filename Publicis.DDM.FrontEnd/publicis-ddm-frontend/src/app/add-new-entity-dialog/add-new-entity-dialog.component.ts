import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EntityDialogData } from '../entity-dialog-data';
import { Entity } from '../entity';
import { EntityService } from '../entity.service';
import { AddUdaRepeaterComponent } from '../add-uda-repeater/add-uda-repeater.component';
import { EntityFormComponent } from '../entity-form/entity-form.component';
import { UdasHelperService } from '../udas-helper.service';

@Component({
  selector: 'app-add-new-entity-dialog',
  templateUrl: './add-new-entity-dialog.component.html',
  styleUrls: ['./add-new-entity-dialog.component.css']
})
export class AddNewEntityDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewEntityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EntityDialogData,
    private entityService: EntityService,
    private udasHelper: UdasHelperService) {}

  entityType: string;
  entity: Entity;
  @Input() userDefinedAttributes: [{}];

  @ViewChild(AddUdaRepeaterComponent)
  private repeater: AddUdaRepeaterComponent;

  @ViewChild(EntityFormComponent)
  private entityForm: EntityFormComponent;

  onNoClick(): void {
    this.dialogRef.close();
  }
  save(): void {
    let repeater = this.repeater.userDefinedAttributes
    let data = this.udasHelper.assignUdasToEntity(this.entity, repeater);
    this.entityService.Post(this.entityType, data).subscribe(
      id => {
        this.dialogRef.close(id);
      }
    );
  }
  discard(): void {
    this.repeater.userDefinedAttributes = [{}];
    this.entityForm.entity.name = '';
    this.dialogRef.close();    
  }
  ngOnInit() {
    this.entityType = this.data.entityType;
    this.entity = {
      id: '',
      name: '',
      values: null
    }
  }
}
