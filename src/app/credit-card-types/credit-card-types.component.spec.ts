import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTypesComponent } from './credit-card-types.component';

describe('CreditCardTypesComponent', () => {
  let component: CreditCardTypesComponent;
  let fixture: ComponentFixture<CreditCardTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
