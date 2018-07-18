import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { Agency } from '../agency';

import { EntityListComponent } from '../entity-list/entity-list.component';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.css']
})
export class AgenciesListComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  agencies: Agency[];
  agency: Agency;
  title: string;

  getAll(): void {
    this.entityService.getAll('Agency')
      .subscribe(
        agencies => { this.agencies = agencies  }      
      )
  }

  getById(id: number): void {
    this.entityService.getById('Agency', id)
      .subscribe(
        agency => { this.agency = agency[0] }
      )
  }

  Find(filter: string): void {
    this.entityService.Find('Agency', filter)
      .subscribe(
        agencies => { this.agencies = agencies }      
      )
  }

  ngOnInit() {
    this.route.data
    .subscribe((data: { agencies: Agency[]}) => 
      { this.agencies = data.agencies }      
    );
    this.title = this.route.snapshot.data['title'];
  }

}
