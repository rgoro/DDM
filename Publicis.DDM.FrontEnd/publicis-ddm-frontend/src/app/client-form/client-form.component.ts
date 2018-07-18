import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor() { }

  clients: Client[];

  ngOnInit() {

  }

}
