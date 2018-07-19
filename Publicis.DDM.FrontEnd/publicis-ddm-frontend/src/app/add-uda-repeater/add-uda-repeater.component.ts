import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-uda-repeater',
  templateUrl: './add-uda-repeater.component.html',
  styleUrls: ['./add-uda-repeater.component.css']
})
export class AddUdaRepeaterComponent implements OnInit {

  constructor() { }

  @Output() userDefinedAttributes: [{}];
  @Input() udaName: string;
  @Input() udaValue: string;

  addUDA(): void {
    if(!this.userDefinedAttributes) {
      this.userDefinedAttributes = [
        {
          0: '',
          1: ''
        }
      ];      
    } else {
      this.userDefinedAttributes.push(
        {
          0: '',
          1: ''
        }
      );
    }    
  }
  ngOnInit() {
  }

}
