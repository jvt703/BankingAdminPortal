import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardType } from 'src/app/Interfaces/creditCardType.model';
import { CreditCardTypeService } from 'src/app/Services/credit-card-type.service';
import { CreditCardTypesComponent } from './credit-card-types.component';
import { of } from 'rxjs';
import { CreditCardTypeEditDialogComponent } from '../credit-card-type-edit-dialog/credit-card-type-edit-dialog.component';
import {SectionComponent} from '../../section/section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

describe('CreditCardTypesComponent', () => {
  let component: CreditCardTypesComponent;
  let fixture: ComponentFixture<CreditCardTypesComponent>;
  let creditCardTypeServiceMock: Partial<CreditCardTypeService>;

  beforeEach(async () => {
    creditCardTypeServiceMock = {
      getCreditCardTypes: jasmine.createSpy('getCreditCardTypes').and.returnValue(of([])),
    };
    const httpClientMock = {
      get: jasmine.createSpy('get').and.returnValue(of({})),
    };
    

    await TestBed.configureTestingModule({
      declarations: [CreditCardTypesComponent, SectionComponent],
      imports: [
        FormsModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
      ],
      providers: [
        { provide: CreditCardTypeService, useValue: creditCardTypeServiceMock },
        { provide: HttpClient, useValue: httpClientMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch credit card types on init', () => {
    expect(creditCardTypeServiceMock.getCreditCardTypes).toHaveBeenCalled();
  });

  it('should open the edit dialog', () => {
    const dialogRefSpy = spyOn(TestBed.inject(MatDialog), 'open').and.callThrough();
    const creditCardType: CreditCardType = {
      id: 1,
      rewardsName: 'Rewards Test',
      interestRate: 15,
      minimumPayment: 50,
      creditLimit: 1000,
    };

    component.openEditDialog(creditCardType);
    expect(dialogRefSpy).toHaveBeenCalledWith(CreditCardTypeEditDialogComponent, {
      width: '500px',
      data: creditCardType,
    });
  });
});
