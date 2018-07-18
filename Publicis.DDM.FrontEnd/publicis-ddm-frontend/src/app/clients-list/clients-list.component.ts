import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntityService } from '../entity.service';
import { Client } from '../client';

import { EntityListComponent } from '../entity-list/entity-list.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private entityService: EntityService, private route: ActivatedRoute) { }

  clients: Client[];
  client: Client;
  title: string;

  getAll(): void {
    this.entityService.getAll('Client')
      .subscribe(
        clients => { this.clients = clients  }      
      )
  }

  getById(id: number): void {
    this.entityService.getById('Client', id)
      .subscribe(
        client => { this.client = client[0] }
      )
  }

  Find(filter: string): void {
    this.entityService.Find('Client', filter)
      .subscribe(
        clients => { this.clients = clients }      
      )
  }

  ngOnInit() {
    this.route.data
    .subscribe((data: { clients: Client[]}) => 
      { this.clients = data.clients }      
    );
    this.title = this.route.snapshot.data['title'];
  }

}
