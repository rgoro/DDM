import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { EntityValuesPipe } from '../entity-values.pipe';

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

  ngOnInit() {
    this.route.data
      .subscribe((data: { entity: Entity}) => 
        { this.entity = data.entity }      
    );
    this.disabled = this.disabled == null || this.disabled == undefined? true : false;
  }
}