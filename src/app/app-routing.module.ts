import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './Accounts/account-home/account-home.component';
import { CreditCardTypeCreateComponent } from './CreditCardTypes/credit-card-type-create/credit-card-type-create.component';
import { CreditCardTypesComponent } from './CreditCardTypes/credit-card-types/credit-card-types.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansComponent } from './loans/loans.component';
import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserHomeComponent } from './Users/user-home.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  //don't have beginning slash
  {path: "users", component: UserHomeComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "accounts", component: AccountHomeComponent},
  {path: "accounts/create", component: AccountHomeComponent},
  {path: "transactions", component: HomePageComponent},
  {path: "transactions/create", component: HomePageComponent},
  {path: "loans", component: LoansComponent},
  {path: "loans/create", component: AccountHomeComponent},
  {path: "creditcards", component: CreditCardsComponent},
  {path: "loanapplication", component: AccountHomeComponent},
  {path: "creditcardtypes", component: CreditCardTypesComponent},
  {path: "creditcardtypes/create", component: CreditCardTypeCreateComponent},
  // WildCard route to handle unknown paths (always last)
  {path: '**', component:HomePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
