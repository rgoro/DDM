import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EntityDialogData } from '../entity-dialog-data';
import { Entity } from '../entity';


@Component({
  selector: 'app-add-new-entity-dialog',
  templateUrl: './add-new-entity-dialog.component.html',
  styleUrls: ['./add-new-entity-dialog.component.css']
})
export class AddNewEntityDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewEntityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EntityDialogData) {}

  entityType: string;
  entity: Entity;
  userDefinedAttributes: [{}];

  onNoClick(): void {
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
