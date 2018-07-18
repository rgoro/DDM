import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { EntityValuesPipe } from '../entity-values.pipe';

import { Entity } from '../entity';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  disabled: boolean;
  entity: Entity;


  ngOnInit() {
    this.route.data
      .subscribe((data: { entity: Entity}) => 
        { this.entity = data.entity }      
    );
    this.disabled = true;
  }
  }

}
