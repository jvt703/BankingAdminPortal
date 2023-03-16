import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './Accounts/account-home.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  //don't have beginning slash
  {path: "users", component: HomePageComponent},
  {path: "users/create", component: HomePageComponent},
  {path: "accounts", component: AccountHomeComponent},
  {path: "accounts/create", component: AccountHomeComponent},
  {path: "transactions", component: HomePageComponent},
  {path: "transactions/create", component: HomePageComponent},
  {path: "loans", component: AccountHomeComponent},
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
