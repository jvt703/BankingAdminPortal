import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTypeCreateComponent } from './credit-card-type-create.component';

describe('CreditCardTypeCreateComponent', () => {
  let component: CreditCardTypeCreateComponent;
  let fixture: ComponentFixture<CreditCardTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
