import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './Accounts/account-home/account-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansComponent } from './loans/loans.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  //don't have beginning slash
  {path: "users", component: HomePageComponent},
  {path: "users/create", component: HomePageComponent},
  {path: "accounts", component: AccountHomeComponent},
  {path: "accounts/create", component: AccountHomeComponent},
  {path: "transactions", component: HomePageComponent},
  {path: "transactions/create", component: HomePageComponent},
  {path: "loans", component: LoansComponent},
  {path: "loans/create", component: AccountHomeComponent},
  {path: "creditcards", component: HomePageComponent},
  {path: "creditcards/create", component: HomePageComponent},
  {path: "loanapplication", component: AccountHomeComponent}, 
  {path: "loanapplication/create", component: AccountHomeComponent} 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
