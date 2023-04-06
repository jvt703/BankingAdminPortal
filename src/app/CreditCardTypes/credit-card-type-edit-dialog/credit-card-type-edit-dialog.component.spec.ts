import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CreditCardTypeService } from 'src/app/Services/credit-card-type.service';
import { CreditCardTypeEditDialogComponent } from './credit-card-type-edit-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';

class MatDialogRefMock {
  close() {}
}

describe('CreditCardTypeEditDialogComponent', () => {
  let component: CreditCardTypeEditDialogComponent;
  let fixture: ComponentFixture<CreditCardTypeEditDialogComponent>;
  let creditCardTypeServiceMock: Partial<CreditCardTypeService>;

  function configureTestBed(data: any = {}) {
    TestBed.configureTestingModule({
      declarations: [CreditCardTypeEditDialogComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
      ],
      providers: [
        FormBuilder,
        { provide: CreditCardTypeService, useValue: creditCardTypeServiceMock },
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
    }).compileComponents();
  }

  beforeEach(() => {
    creditCardTypeServiceMock = {
      updateCreditCardType: jasmine.createSpy('updateCreditCardType').and.returnValue(of({})),
    };

    configureTestBed();

    fixture = TestBed.createComponent(CreditCardTypeEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with provided data', () => {
    const data = {
      id: 1,
      rewardsName: 'Rewards Test',
      interestRate: 15,
      minimumPayment: 50,
      creditLimit: 1000,
    };

    TestBed.resetTestingModule();
    configureTestBed(data);

    const newFixture = TestBed.createComponent(CreditCardTypeEditDialogComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();

    const expectedFormValue = {
      rewardsName: data.rewardsName,
      interestRate: data.interestRate,
      minimumPayment: data.minimumPayment,
      creditLimit: data.creditLimit,
    };

    expect(newComponent.form.value).toEqual(expectedFormValue);
  });

  it('should call updateCreditCardType method on save when the form is valid', () => {
    const data = {
      id: 1,
      rewardsName: 'Rewards Test',
      interestRate: 15,
      minimumPayment: 50,
      creditLimit: 1000,
    };
  
    const formValue = {
      rewardsName: data.rewardsName,
      interestRate: data.interestRate,
      minimumPayment: data.minimumPayment,
      creditLimit: data.creditLimit,
    };
  
    component.data = data;
    component.form.setValue(formValue);
    fixture.detectChanges();
  
    const saveButton = fixture.debugElement.query(By.css('button[color="primary"]'));
    saveButton.triggerEventHandler('click', null);
  
    expect(creditCardTypeServiceMock.updateCreditCardType).toHaveBeenCalledWith(data.id, formValue);
  });
  
  it('should not call updateCreditCardType method on save when the form is invalid', () => {
    component.form.reset();
    fixture.detectChanges();
  
    const saveButton = fixture.debugElement.query(By.css('button[color="primary"]'));
    saveButton.triggerEventHandler('click', null);
  
    expect(creditCardTypeServiceMock.updateCreditCardType).not.toHaveBeenCalled();
  });
  
  it('should close the dialog on cancel', () => {
    const dialogRefSpy = spyOn(component.dialogRef, 'close');
    const cancelButton = fixture.debugElement.query(By.css('button:not([color="primary"])'));
    cancelButton.triggerEventHandler('click', null);
  
    expect(dialogRefSpy).toHaveBeenCalled();
  });
});