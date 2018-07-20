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
  entityType: string;

  public cancelEntityEdit: boolean;
  public selectedEntity: Entity;

  
  entitySelected(entity: Entity) {
    this.selectedEntity = entity;
  }

  addNewEntity() :void {
    const dialogRef = this.dialog.open(AddNewEntityDialog, {
      width: '40%',
      data: { entityType: this.entityType }
    });
    dialogRef.afterClosed().subscribe(
      id => {
        this.entityService.getById(this.entityType, id).subscribe(
          entity => {
            this.entities.push(entity);
          }
        )
      }
    )
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
    this.entityType = this.route.snapshot.data.type;
  }
}
