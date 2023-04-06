import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { CreditCardsComponent } from './credit-cards.component';
import { CreditcardService } from '../../Services/creditcard.service';
import { of } from 'rxjs';
import CreditCard from 'src/app/Interfaces/creditCards.model';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import {SectionComponent} from "../../section/section.component";


describe('CreditCardsComponent', () => {
  let component: CreditCardsComponent;
  let fixture: ComponentFixture<CreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatPaginatorModule,
        MatIconModule
      ],
      declarations: [CreditCardsComponent, NavBarComponent, SectionComponent],
      providers: [CreditcardService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('fetchAllCreditCards', () => {
    it('should call fetchAll method from CreditcardService', () => {
      const creditCardService = TestBed.inject(CreditcardService);
      spyOn(creditCardService, 'fetchAll').and.returnValue(of([]));

      component.fetchAllCreditCards();

      expect(creditCardService.fetchAll).toHaveBeenCalled();
    });

    it('should set isLoading to false and call pageChanged method after successful fetch', () => {
      const creditCardService = TestBed.inject(CreditcardService);
      spyOn(creditCardService, 'fetchAll').and.returnValue(of([]));
      spyOn(component, 'pageChanged');

      component.fetchAllCreditCards();

      expect(component.isLoading).toBe(false);
      expect(component.pageChanged).toHaveBeenCalledWith({
        pageIndex: 0,
        pageSize: component.pageSize,
        length: 0
      });
    });
  });

  describe('search', () => {
    it('should call fetchAll method from CreditcardService with the correct query', () => {
      const creditCardService = TestBed.inject(CreditcardService);
      spyOn(creditCardService, 'fetchAll').and.returnValue(of([]));

      component.id = '123';
      component.firstname = 'John';
      component.lastname = 'Doe';
      component.approval = 'True';
      component.decisionMade = 'True';

      component.search();

      const expectedQuery = 'id=123&firstName=John&lastName=Doe&approved=True&decisionMade=True&';
      expect(creditCardService.fetchAll).toHaveBeenCalledWith(expectedQuery);
    });

    it('should set isLoading to false and update displayedCreditCards after successful fetch', () => {
      const creditCardService = TestBed.inject(CreditcardService);
      spyOn(creditCardService, 'fetchAll').and.returnValue(of([]));

      component.search();

      expect(component.isLoading).toBe(false);
      expect(component.displayedCreditCards).toEqual([]);
    });
  });
  
});