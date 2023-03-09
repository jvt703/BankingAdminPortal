import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './Accounts/account-home.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  //don't have beginning slash
  {path: "accounts", component: AccountHomeComponent},
  {path: "transactions", component: HomePageComponent},
  {path: "loans", component: AccountHomeComponent},
  {path: "creditcards", component: HomePageComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
