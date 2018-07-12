import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private clientsService: ClientsService) { }

  clients: Client[];
  client: Client;

  getAll(): void {
    this.clientsService.getAll()
      .subscribe(
        clients => { this.clients = clients }      
      )
  }

  getById(id: number): void {
    this.clientsService.getById(id)
      .subscribe(
        client => { this.client = client[0] }
      )
  }

  Find(filter: string): void {
    this.clientsService.Find(filter)
      .subscribe(
        clients => { this.clients = clients }      
      )
  }

  ngOnInit() {
    this.getAll();
  }

}
