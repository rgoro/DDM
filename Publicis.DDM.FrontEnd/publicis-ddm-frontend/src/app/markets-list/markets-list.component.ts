import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { Market } from '../market';

import { EntityListComponent } from '../entity-list/entity-list.component';

@Component({
  selector: 'app-markets-list',
  templateUrl: './markets-list.component.html',
  styleUrls: ['./markets-list.component.css']
})
export class MarketsListComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  markets: Market[];
  market: Market;
  title: string;

  getAll(): void {
    this.entityService.getAll('Market')
      .subscribe(
        markets => { this.markets = markets  }      
      )
  }

  getById(id: number): void {
    this.entityService.getById('Market', id)
      .subscribe(
        market => { this.market = market[0] }
      )
  }

  Find(filter: string): void {
    this.entityService.Find('Market', filter)
      .subscribe(
        markets => { this.markets = markets }      
      )
  }

  ngOnInit() {
    this.route.data
    .subscribe((data: { markets: Market[]}) => 
      { this.markets = data.markets }      
    );
    this.title = this.route.snapshot.data['title'];
  }

}
