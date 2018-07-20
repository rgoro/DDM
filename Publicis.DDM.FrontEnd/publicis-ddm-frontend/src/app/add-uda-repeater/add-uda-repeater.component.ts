import { Component, OnInit, Output, Input } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

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

  faMinus = faMinus;
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

  addKey(key: string, index: number) {
    this.userDefinedAttributes[index][0] = key;
  }
  addValue(value: string, index: number) {
    this.userDefinedAttributes[index][1] = value;
  }

  removeUDA(index: number) {
    this.userDefinedAttributes.splice(index, 1);
  }
  ngOnInit() {
  }

}
