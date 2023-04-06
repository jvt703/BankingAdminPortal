import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { AccountHomeComponent } from './account-home.component';
import { AccountService } from '../../Services/account.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import {SectionComponent} from "../../section/section.component"

describe('AccountHomeComponent', () => {
  let component: AccountHomeComponent;
  let fixture: ComponentFixture<AccountHomeComponent>;
  let accountService: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonToggleModule,
        MatButtonModule,
        HttpClientTestingModule,
      ],
      declarations: [AccountHomeComponent, SectionComponent],
      providers: [AccountService],
    }).compileComponents();
  });

  beforeEach(() => {
    spyOn(AccountHomeComponent.prototype, 'fetchAccounts').and.callThrough();
    fixture = TestBed.createComponent(AccountHomeComponent);
    component = fixture.componentInstance;
    accountService = TestBed.inject(AccountService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch accounts on initialization', () => {
    const mockAccounts = [
      {
          "id": 1,
          "userId": 1,
          "accountTypeName": "Checking",
          "accountTypeDescription": "General purpose account for everyday expenses",
          "balance": 5000.0,
          "confirmation": false,
          "active": true,
          "pointsBalance": 0,
          "accountName": "Checking",
          "createdDate": 1679478515191
      }
  ];

    spyOn(accountService, 'getAccounts').and.returnValue(of(mockAccounts));
    expect(component.fetchAccounts).toHaveBeenCalled();
  });

  it('should search accounts with query', () => {
    const mockQuery = 'firstName=John&lastName=Doe';
    spyOn(accountService, 'getAccounts').and.returnValue(of([]));
  
    component.searchableFields[1].value = 'John';
    component.searchableFields[2].value = 'Doe';
  
    component.searchWithQuery();
    expect(accountService.getAccounts).toHaveBeenCalledWith(mockQuery);
  });

  it('should update account activation', () => {
    const mockAccount = {
      "id": 1,
      "userId": 1,
      "accountTypeName": "Checking",
      "accountTypeDescription": "General purpose account for everyday expenses",
      "balance": 5000.0,
      "confirmation": false,
      "active": true,
      "pointsBalance": 0,
      "accountName": "Checking",
      "createdDate": 1679478515191
    };

    spyOn(accountService, 'updateAccountActivation').and.returnValue(of());
    component.updateAccountActivation(mockAccount, true);
    expect(accountService.updateAccountActivation).toHaveBeenCalledWith(mockAccount, true);
  });
});