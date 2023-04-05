import { Component, Input, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreditcardService } from 'src/app/Services/creditcard.service';

@Component({
  selector: 'app-creditcard-info-modal',
  templateUrl: './creditcard-info-modal.component.html',
  styleUrls: ['./creditcard-info-modal.component.css']
})
export class CreditcardInfoModalComponent {

@Input() creditCardData: any;
@Input() approvedBool: boolean;
loading: boolean = false;

  constructor( public dialogRef: MatDialogRef<CreditcardInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private creditCardService: CreditcardService, private snackBar: MatSnackBar
  ) {
    this.creditCardData = data.creditCardData;
    this.approvedBool = data.approvedBool
  }

 approve(approved: boolean) {
  this.loading = true;
    this.creditCardService.approve(this.creditCardData.creditCardApplicationId, approved).subscribe({
      next: data => {
        this.creditCardData = data;
        if(data.approved) {
          this.snackBar.open('Credit Card Approved', 'Close', {
            duration: 5000,
          })
        } else{
        this.snackBar.open('Credit Card Disapproved', 'Close', {
            duration: 5000,
          })
        }
      this.loading=false;
      this.dialogRef.close();
      },
      error: error => {
        console.error('Error approving Credit Card:', error);
        this.creditCardData.approved=true;
        this.creditCardData.decisionDate= new Date().getTime();
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
