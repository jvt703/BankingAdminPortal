import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoanInfoModalComponent } from '../loan-info-modal/loan-info-modal.component';
@Component({
  selector: 'app-loans-card',
  templateUrl: './loans-card.component.html',
  styleUrls: ['./loans-card.component.css']
})
export class LoansCardComponent {
@Input() loanData: any;


loading: boolean = false;


constructor( private dialog: MatDialog) { 



}
formatCurrency(amount: number): string {
  //stack overflow regex for currency
  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


openDialog(approved: boolean){
  const dialogRef = this.dialog.open(LoanInfoModalComponent, {
    data: { loanData: this.loanData, approvedBool: approved },
    width: '600px' 
  });
 

}



  convertDate(dateofbirth: number){
    var date = new Date(dateofbirth).toLocaleDateString()
    return date
  }
}
