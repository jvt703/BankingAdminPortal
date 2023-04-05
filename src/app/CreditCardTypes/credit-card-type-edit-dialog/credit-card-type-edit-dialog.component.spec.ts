import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTypeEditDialogComponent } from './credit-card-type-edit-dialog.component';

describe('CreditCardTypeEditDialogComponent', () => {
  let component: CreditCardTypeEditDialogComponent;
  let fixture: ComponentFixture<CreditCardTypeEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardTypeEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardTypeEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
