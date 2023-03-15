import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCardComponent } from './loans-card.component';

describe('LoansCardComponent', () => {
  let component: LoansCardComponent;
  let fixture: ComponentFixture<LoansCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
