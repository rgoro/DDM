import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(clientsService: ClientsService) { }

  clients: Client[];

  ngOnInit() {

  }

}
