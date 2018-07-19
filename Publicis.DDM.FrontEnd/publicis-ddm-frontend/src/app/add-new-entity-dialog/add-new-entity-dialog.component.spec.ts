import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEntityDialog } from './add-new-entity-dialog.component';

describe('AddNewEntityDialogComponent', () => {
  let component: AddNewEntityDialog;
  let fixture: ComponentFixture<AddNewEntityDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEntityDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEntityDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
