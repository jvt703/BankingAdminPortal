import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserHomeComponent } from './Users/user-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './Accounts/account-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionHomeComponent } from './Transactions/transaction-home.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  //don't have beginning slash
  {path: "users", component: UserHomeComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "accounts", component: AccountHomeComponent},
  {path: "accounts/create", component: AccountHomeComponent},
  {path: "transactions", component: TransactionHomeComponent},
  {path: "transactions/create", component: HomePageComponent},
  {path: "loans", component: AccountHomeComponent},
  {path: "loans/create", component: AccountHomeComponent},
  {path: "creditcards", component: HomePageComponent},
  {path: "creditcards/create", component: HomePageComponent},
  {path: "loanapplication", component: AccountHomeComponent},
  {path: "loanapplication/create", component: AccountHomeComponent},
  // WildCard route to handle unknown paths (always last)
  {path: '**', component:HomePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
