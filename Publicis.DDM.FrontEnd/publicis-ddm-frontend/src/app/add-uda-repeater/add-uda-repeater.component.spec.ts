import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUdaRepeaterComponent } from './add-uda-repeater.component';

describe('AddUdaRepeaterComponent', () => {
  let component: AddUdaRepeaterComponent;
  let fixture: ComponentFixture<AddUdaRepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUdaRepeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUdaRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
