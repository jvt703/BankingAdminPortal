import { Component } from '@angular/core';
import { LoanService } from '../Services/loan.service';
import { PageEvent } from '@angular/material/paginator';
import { Loan } from '../Interfaces/loans.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {
currentTitle = 'Loans';
isLoading: boolean = false;
searchValue: string = '';
apiURL: string = '';
firstname: string= '';
lastname: string = '';
id: string = '';
approval: string= '';
decisionMade: string= '';
showAdditionalInputs: boolean = false;
loans: Loan[] = [];
displayedLoans: any = [];
pageSize: number = 5;
pageSizeOptions: number[] = [5, 10, 25, 100];
constructor(private loanService: LoanService, private snackBar: MatSnackBar){


}

ngOnInit() {
    this.fetchAllLoans();
  }
    showMore() {
    this.showAdditionalInputs = true;
  }

  showLess() {
    this.showAdditionalInputs = false;
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
           userFirstName: 'Bob',
           userLastName: 'jankins',
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
           loanApplicationId: 5,
           loanAmount: 10000.0,
           userFirstName: 'loco',
           userLastName: 'motive',
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
           loanApplicationId: 6,
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
  let loansToDisplay = this.loans.slice(startIndex, endIndex);
 
 if (this.firstname) {
     this.displayedLoans= this.displayedLoans.filter((loan: Loan) => {
      return loan.userFirstName.toLowerCase().includes(this.firstname.toLowerCase()) 
            
    })
    console.log(this.displayedLoans, "hre")
  }
  this.displayedLoans = loansToDisplay;
}
onFirstnameChange(value: string) {

  this.firstname = value;
}

searchLoan(): void {
    let concatURL = this.apiURL + '?';
    concatURL += ((this.id ?? '') != '' ? `id=${this.id}&` : '');
    concatURL += ((this.firstname ?? '') != '' ? `firstName=${this.firstname}&` : '');
    concatURL += ((this.lastname ?? '') != '' ? `lastName=${this.lastname}&` : '');
    concatURL += ((this.approval ?? '') != '' ? `approved=${this.approval}&` : '');
    concatURL += ((this.decisionMade ?? '') != '' ? `decisionMade=${this.approval}&` : '');
    
    this.isLoading = true;
    this.loanService.fetchLoanSearch(concatURL).subscribe({
      next: (data)=>{
        this.loans=data;
        this.isLoading = false;
        this.displayedLoans = this.loans;
      },
     error: (error) => {
       console.error('Error fetching all loans:', error);
      
       this.snackBar.open('Error Fetching Loans', 'Close', {
          duration: 5000,
        })
       this.isLoading = false;
  
     }

    })

  }



}
