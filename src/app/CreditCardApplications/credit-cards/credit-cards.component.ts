import { Component } from '@angular/core';
import { CreditcardService } from '../../Services/creditcard.service';
import { PageEvent } from '@angular/material/paginator';
import CreditCard from '../../Interfaces/creditCards.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css']
})
export class CreditCardsComponent {
  currentTitle = 'Credit Cards';
  isLoading: boolean = false;
  searchValue: string = '';
  firstname: string= '';
  lastname: string = '';
  id: string = '';
  approval: string= '';
  decisionMade: string= '';
  showAdditionalInputs: boolean = false;
  creditCards: CreditCard[] = [];
  displayedCreditCards: any = [];
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private creditCardService : CreditcardService, private snackBar: MatSnackBar){}

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
   this.creditCardService.fetchAll().subscribe({
     next: (data) => {
       this.creditCards = data;
    
       this.isLoading = false;
       this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: this.creditCards.length });
     },
     error: (error) => {
       console.error('Error fetching credit cards:', error);
       
       this.isLoading = false;
       this.pageChanged({ pageIndex: 0, pageSize: this.pageSize, length: 0 });
     },
   });
 }


pageChanged(event: PageEvent) {
  const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  let creditCardsToDisplay = this.creditCards.slice(startIndex, endIndex);
 
 if (this.firstname) {
     this.displayedCreditCards= this.displayedCreditCards.filter((creditCard: CreditCard) => {
      return creditCard.userFirstName.toLowerCase().includes(this.firstname.toLowerCase()) 
    })

  }
  this.displayedCreditCards = creditCardsToDisplay;
}
onFirstnameChange(value: string) {
  this.firstname = value;
}

search(): void {
    let concatURL = "";
    concatURL += ((this.id ?? '') != '' ? `id=${this.id}&` : '');
    concatURL += ((this.firstname ?? '') != '' ? `firstName=${this.firstname}&` : '');
    concatURL += ((this.lastname ?? '') != '' ? `lastName=${this.lastname}&` : '');
    concatURL += ((this.approval ?? '') != '' ? `approved=${this.approval}&` : '');
    concatURL += ((this.decisionMade ?? '') != '' ? `decisionMade=${this.decisionMade}&` : '');
    
    this.isLoading = true;
    this.creditCardService.fetchAll(concatURL).subscribe({
      next: (data)=>{
        this.creditCards=data;
        this.isLoading = false;
        this.displayedCreditCards = this.creditCards;
      },
     error: (error) => {
       console.error('Error fetching credit cards:', error);
      
       this.snackBar.open('Error Fetching credit cards:', 'Close', {
          duration: 5000,
        })
       this.isLoading = false;
     }
    })
  }

}
