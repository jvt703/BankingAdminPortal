import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInfoModalComponent } from './loan-info-modal.component';

describe('LoanInfoModalComponent', () => {
  let component: LoanInfoModalComponent;
  let fixture: ComponentFixture<LoanInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
