;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountHomeComponent } from './Accounts/account-home/account-home.component';
import { SectionComponent } from './section/section.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { LoansComponent } from './loans/loans.component';
import { LoansCardComponent } from './loans-card/loans-card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanInfoModalComponent } from './loan-info-modal/loan-info-modal.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserHomeComponent } from './Users/user-home.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { CreditCardsComponent } from './CreditCardApplications/credit-cards/credit-cards.component';
import { CreditcardsCardComponent } from './CreditCardApplications/creditcards-card/creditcards-card.component';
import { CreditcardInfoModalComponent } from './CreditCardApplications/creditcard-info-modal/creditcard-info-modal.component';
import { CreditCardTypeCreateComponent } from './CreditCardTypes/credit-card-type-create/credit-card-type-create.component';
import { CreditCardTypesComponent } from './CreditCardTypes/credit-card-types/credit-card-types.component';
import { CreditCardTypeEditDialogComponent } from './CreditCardTypes/credit-card-type-edit-dialog/credit-card-type-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AccountHomeComponent,
    SectionComponent,
    HomeCardsComponent,
    LoansComponent,
    LoansCardComponent,
    LoanInfoModalComponent,
    UserHomeComponent,
    UserCreateComponent,
    CreditCardsComponent,
    CreditcardsCardComponent,
    CreditcardInfoModalComponent,
    CreditCardTypeCreateComponent,
    CreditCardTypesComponent,
    CreditCardTypeEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
