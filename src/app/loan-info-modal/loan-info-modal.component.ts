import { Component, Input, OnInit, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanService } from '../Services/loan.service';

@Component({
  selector: 'app-loan-info-modal',
  templateUrl: './loan-info-modal.component.html',
  styleUrls: ['./loan-info-modal.component.css']
})
export class LoanInfoModalComponent implements OnInit {

@Input() loanData: any;
@Input() approvedBool: boolean;
loading: boolean = false;

constructor( public dialogRef: MatDialogRef<LoanInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private loanService: LoanService, private snackBar: MatSnackBar
  ) {
    this.loanData = data.loanData;
    this.approvedBool = data.approvedBool
    }

ngOnInit(): void {
    
  }


 approveLoan(approval: boolean) {
  this.loading = true;
    this.loanService.approveLoan(this.loanData.loanApplicationId, approval).subscribe({
      next: data => {
        this.loanData = data.loanApplication;
        if(data.loanApplication.approval) {
        this.snackBar.open('Loan Approved', 'Close', {
          duration: 5000,
        })
        } else{
        this.snackBar.open('Loan Disapproved', 'Close', {
                  duration: 5000,
                })
        }
      this.loading=false;
      this.dialogRef.close();
      },
      error: error => {
        console.error('Error approving loan:', error);
        this.loanData.approved=true;
        this.loanData.decisionDate= new Date().getTime();
         this.snackBar.open('Loan Approved', 'Close', {
          duration: 5000,
        });
        this.loading=false;
        this.dialogRef.close();
      }
    });
    
  }

  onSubmit() {



   this.dialogRef.close();
  }



  
  
}
