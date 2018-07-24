import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributesDialog } from './add-attributes-dialog.component';

describe('AddAttributesDialog', () => {
  let component: AddAttributesDialog;
  let fixture: ComponentFixture<AddAttributesDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttributesDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttributesDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
