import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { CreditcardService } from 'src/app/Services/creditcard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreditcardInfoModalComponent } from './creditcard-info-modal.component';

//mocks to isolate behavior
class MatDialogRefMock {
  close(value?: any): void {}
}
class CreditcardServiceMock {
  approve(id: number, status: boolean) {
    return of({});
  }
}
class MatSnackBarMock {
  open(message: string, action: string, config?: any) {}
}

describe('CreditcardInfoModalComponent', () => {
  let component: CreditcardInfoModalComponent;
  let fixture: ComponentFixture<CreditcardInfoModalComponent>;
  let matDialogRef: MatDialogRef<CreditcardInfoModalComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({ 
      imports: [
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule 
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: CreditcardService, useClass: CreditcardServiceMock },
        { provide: MatSnackBar, useClass: MatSnackBarMock }
      ],
      declarations: [CreditcardInfoModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardInfoModalComponent);
    component = fixture.componentInstance;
    matDialogRef = TestBed.inject(MatDialogRef);

    component.creditCardData = {
      applicantFirstName: "Testathan",
      applicantLastName: "Testman",
      cardRewardsName: "Big Spender Rewards",
      approved: false
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content based on approvedBool', () => {
    component.approvedBool = true;
    fixture.detectChanges();

    const confirmation = fixture.nativeElement.querySelector('.confirmation');
    const approvalButton = fixture.nativeElement.querySelector('.approval-button');

    expect(confirmation.textContent).toContain('Warning This Action Cannot be Undone. Please Confirm Approval of Credit Card');
    expect(approvalButton.textContent).toContain('Approve');

    component.approvedBool = false;
    fixture.detectChanges();

    expect(confirmation.textContent).toContain('Warning This Action Cannot be Undone. Please Confirm Rejection of Credit Card');
    expect(approvalButton.textContent).toContain('Reject');
  });

  it('should call the close method on MatDialogRef with the approval status when approve is called', (done) => {
    spyOn(matDialogRef, 'close');
    const creditCardService = TestBed.inject(CreditcardService);
    spyOn(creditCardService, 'approve').and.returnValue(of({}));

    component.approve(true);

    setTimeout(() => {
      expect(matDialogRef.close).toHaveBeenCalled();
      expect(creditCardService.approve).toHaveBeenCalledWith(component.creditCardData.creditCardApplicationId, true);
      done();
    }, 0);
  });
});