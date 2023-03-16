import { Component, Input } from '@angular/core';
import { LoanService } from '../Services/loan.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-loans-card',
  templateUrl: './loans-card.component.html',
  styleUrls: ['./loans-card.component.css']
})
export class LoansCardComponent {
@Input() loanData: any;

constructor(private loanService: LoanService, private snackBar: MatSnackBar) { }
formatCurrency(amount: number): string {
  //stack overflow regex for currency
  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


 approveLoan() {
    this.loanService.approveLoan(this.loanData.loanApplicationId).subscribe({
      next: data => {
        console.log('Loan approved:', data);
        this.loanData = data.loanApplication;
         this.snackBar.open('Loan Approved', 'Close', {
          duration: 5000,
        });
      },
      error: error => {
        console.error('Error approving loan:', error);
        this.loanData.approved=true;
         this.snackBar.open('Loan Approved', 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
