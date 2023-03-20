;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountHomeComponent } from './Accounts/account-home.component';
import { SectionComponent } from './section/section.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { LoansComponent } from './loans/loans.component';
import { LoansCardComponent } from './loans-card/loans-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanInfoModalComponent } from './loan-info-modal/loan-info-modal.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    LoanInfoModalComponent
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
    MatPaginatorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
