import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';

import { EntityService } from '../entity.service';
import { Entity } from '../entity';
import { AddNewEntityDialog } from '../add-new-entity-dialog/add-new-entity-dialog.component';

@Component({
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.css']
})
export class EntityPanelComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute, private dialog: MatDialog) { }

  faPlus = faPlus;

  entities: Entity[];
  title: string;
  cancelEntityEdit: boolean;

  public selectedEntity: Entity;

  entitySelected(entity: Entity) {
    this.cancelEntityEdit = this.selectedEntity && this.selectedEntity.id != entity.id;
    this.selectedEntity = entity;
  }

  addNewEntity() :void {
    const dialogRef = this.dialog.open(AddNewEntityDialog, {
      data: { entityType: this.route.snapshot.data.type }
    })
  }

  Find(entityType: string, filter: string): void {
    this.entityService.Find(entityType, filter)
      .subscribe(
        entities => { this.entities = entities }      
      )
  }

  ngOnInit() {
    this.route.data
    .subscribe((data: { entities: Entity[]}) => 
      { this.entities = data.entities }      
    );
    this.title = this.route.snapshot.data.title;
  }
}
