import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardsCardComponent } from './creditcards-card.component';

describe('CreditcardsCardComponent', () => {
  let component: CreditcardsCardComponent;
  let fixture: ComponentFixture<CreditcardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
