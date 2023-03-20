import { Component } from '@angular/core';
import { LoanService } from '../Services/loan.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
currentTitle = 'Loans';
isLoading: boolean = false;


loans: any  = [];
displayedLoans: any = [];
pageSize: number = 5;
pageSizeOptions: number[] = [5, 10, 25, 100];
constructor(private loanService: LoanService){


}

ngOnInit() {
    this.fetchAllLoans();
  }

 fetchAllLoans() {
   this.isLoading = true;
   this.loanService.fetchAllLoans().subscribe({
     next: (data) => {
       this.loans = data;
       this.isLoading = false;
      this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.loans.length });
     },
     error: (error) => {
       console.error('Error fetching all loans:', error);
       this.loans = [
         {
           loanApplicationId: 1,
           loanAmount: 10000.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: false,
           decisionDate: null,
         },
         {
           loanApplicationId: 2,
           loanAmount: 123423424.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: true,
           decisionDate: 981525600000,
         },
         {
           loanApplicationId: 3,
           loanAmount: 123423424.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: false,
           decisionDate: null,
         },
         {
           loanApplicationId: 4,
           loanAmount: 123423424.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: false,
           decisionDate: null,
         }, {
           loanApplicationId: 1,
           loanAmount: 10000.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: false,
           decisionDate: null,
         }, {
           loanApplicationId: 1,
           loanAmount: 10000.0,
           userFirstName: 'Testathan',
           userLastName: 'Testman',
           userDOB: 981525600000,
           userEmailAddress: 'test@testing.test',
           userAddress: {
             id: 1,
             city: 'Test City',
             state: 'Iowa',
             street: '2000 Test Avenue',
             zipCode: '00000',
           },
           socialSecurityNumber: 123123123,
           motherMaidenName: 'asd',
           residenceOwnershipStatus: 'RENT',
           housingPayment: 1.0,
           employmentStatus: 'SELF_EMPLOYED',
           grossAnnualIncome: 1.0,
           approved: false,
           decisionDate: null,
         },
       ];
       this.isLoading = false;
       this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.loans.length });
     },
   });
 }

  pageChanged(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedLoans = this.loans.slice(startIndex, endIndex);
  }

}
