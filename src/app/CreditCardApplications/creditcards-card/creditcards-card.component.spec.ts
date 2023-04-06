import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditcardsCardComponent } from './creditcards-card.component';
import { CreditcardInfoModalComponent } from '../creditcard-info-modal/creditcard-info-modal.component';
import { MatIconModule } from '@angular/material/icon';

describe('CreditcardsCardComponent', () => {
  let component: CreditcardsCardComponent;
  let fixture: ComponentFixture<CreditcardsCardComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditcardsCardComponent],
      imports: [MatDialogModule, BrowserAnimationsModule, MatIconModule],
      providers: [MatDialog],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardsCardComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    component.creditCardData = {
      creditCardApplicationId: 1,
      userFirstName: 'John',
      userLastName: 'Doe',
      userEmailAddress: 'john.doe@example.com',
      userDOB: 1629219232000,
      userAddress: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
      },
      creditCardRewardsName: 'Basic Card',
      approved: false,
      decisionDate: null,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display credit card data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-title').textContent).toContain('Credit Card Application Id- 1');
    expect(compiled.querySelector('.loan-user-info').textContent).toContain('Name: John Doe');
    expect(compiled.querySelector('.loan-user-info').textContent).toContain('Email: john.doe@example.com');
    expect(compiled.querySelector('.loan-user-info').textContent).toContain('Date of Birth:');
    expect(compiled.querySelector('.loan-user-info').textContent).toContain('Address: 123 Main St, New York, NY');
    expect(compiled.querySelector('.loan-account-info').textContent).toContain('Credit Card type: Basic Card');
    expect(compiled.querySelector('.loan-account-info').textContent).toContain('Credit Card Approval: Not Approved');
  });

  it('should open the CreditcardInfoModalComponent when the Approve button is clicked', () => {
    spyOn(dialog, 'open').and.callThrough();
    const compiled = fixture.nativeElement;
    const approveButton = compiled.querySelector('.btn.btn-success');
    approveButton.click();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalledWith(CreditcardInfoModalComponent, {
      data: { creditCardData: component.creditCardData, approvedBool: true },
      width: '600px',
    });
  });

  it('should open the CreditcardInfoModalComponent when the Reject button is clicked', () => {
    spyOn(dialog, 'open').and.callThrough();
    const compiled = fixture.nativeElement;
    const rejectButton = compiled.querySelector('.btn.btn-danger');
    rejectButton.click();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalledWith(CreditcardInfoModalComponent, {
      data: { creditCardData: component.creditCardData, approvedBool: false },
      width: '600px',
    });
  });

  it('should convert the date correctly', () => {
    const dateString = component.convertDate(1629219232000);
    expect(dateString).toBe('8/17/2021');
  });
});