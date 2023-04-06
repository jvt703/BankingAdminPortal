import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CreditCardTypeService } from '../../Services/credit-card-type.service';
import { CreditCardTypeCreateComponent } from './credit-card-type-create.component';
import { OutgoingCreditCardTypeDto } from '../../Interfaces/creditCardType.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('CreditCardTypeCreateComponent', () => {
  let component: CreditCardTypeCreateComponent;
  let fixture: ComponentFixture<CreditCardTypeCreateComponent>;
  let creditCardTypeService: CreditCardTypeService;

  beforeEach(async () => {
    const creditCardTypeServiceMock = {
      createCreditCardType: jasmine.createSpy('createCreditCardType').and.returnValue(of({})),
    };

    await TestBed.configureTestingModule({
      declarations: [CreditCardTypeCreateComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule, MatFormFieldModule, MatInputModule],
      providers: [{ provide: CreditCardTypeService, useValue: creditCardTypeServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTypeCreateComponent);
    component = fixture.componentInstance;
    creditCardTypeService = TestBed.inject(CreditCardTypeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a FormGroup with all form controls', () => {
    expect(component.form.contains('rewardsName')).toBeTrue();
    expect(component.form.contains('interestRate')).toBeTrue();
    expect(component.form.contains('minimumPayment')).toBeTrue();
    expect(component.form.contains('creditLimit')).toBeTrue();
  });

  it('should call createCreditCardType and navigate to creditcardtypes on submit', () => {
    const routerSpy = spyOn((<any>component).router, 'navigate');
    const newCreditCardType: OutgoingCreditCardTypeDto = {
      rewardsName: 'Example Card',
      interestRate: 15.99,
      minimumPayment: 20,
      creditLimit: 5000,
    };

    component.form.setValue(newCreditCardType);
    component.createCreditCardType();

    expect(creditCardTypeService.createCreditCardType).toHaveBeenCalledWith(newCreditCardType);
    expect(routerSpy).toHaveBeenCalledWith(['creditcardtypes']);
  });

  it('should not call createCreditCardType if the form is invalid', () => {
    component.form.reset();
    component.createCreditCardType();

    expect(creditCardTypeService.createCreditCardType).not.toHaveBeenCalled();
  });
});