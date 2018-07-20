import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EntityDialogData } from '../entity-dialog-data';
import { Entity } from '../entity';
import { EntityService } from '../entity.service';
import { AddUdaRepeaterComponent } from '../add-uda-repeater/add-uda-repeater.component';
import { EntityFormComponent } from '../entity-form/entity-form.component';


@Component({
  selector: 'app-add-new-entity-dialog',
  templateUrl: './add-new-entity-dialog.component.html',
  styleUrls: ['./add-new-entity-dialog.component.css']
})
export class AddNewEntityDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewEntityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EntityDialogData,
    private entityService: EntityService) {}

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
    let values = {};
    let repeater = this.repeater.userDefinedAttributes
    for(let i in repeater)
    {
      let key: string = repeater[i][0];
      let value: string = repeater[i][1];
      values[key] = value;
    }
    let data = {
      id: '',
      name: this.entityForm.entity.name,
      values: values
    }      
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
