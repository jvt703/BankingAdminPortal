import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreditcardInfoModalComponent } from '../creditcard-info-modal/creditcard-info-modal.component';
import { LoanInfoModalComponent } from '../loan-info-modal/loan-info-modal.component';

@Component({
  selector: 'app-creditcards-card',
  templateUrl: './creditcards-card.component.html',
  styleUrls: ['./creditcards-card.component.css']
})
export class CreditcardsCardComponent {
  @Input() creditCardData: any;

  loading: boolean = false;

  constructor( private dialog: MatDialog) { }

  openDialog(approved: boolean){
    const dialogRef = this.dialog.open(CreditcardInfoModalComponent, {
      data: { creditCardData: this.creditCardData, approvedBool: approved },
      width: '600px' 
    });
  }

  convertDate(dateofbirth: number){
    return new Date(dateofbirth).toLocaleDateString()
  }
}
