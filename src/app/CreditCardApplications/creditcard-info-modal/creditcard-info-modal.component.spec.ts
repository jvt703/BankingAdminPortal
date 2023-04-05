import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardInfoModalComponent } from './creditcard-info-modal.component';

describe('CreditcardInfoModalComponent', () => {
  let component: CreditcardInfoModalComponent;
  let fixture: ComponentFixture<CreditcardInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
