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
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AccountHomeComponent,
    SectionComponent,
    HomeCardsComponent,
    LoansComponent,
    LoansCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
