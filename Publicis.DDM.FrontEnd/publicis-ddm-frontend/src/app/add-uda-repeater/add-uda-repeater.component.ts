import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-uda-repeater',
  templateUrl: './add-uda-repeater.component.html',
  styleUrls: ['./add-uda-repeater.component.css']
})
export class AddUdaRepeaterComponent implements OnInit {

  constructor() { }

  @Input() userDefinedAttributes: [{}];

  ngOnInit() {
  }

}
