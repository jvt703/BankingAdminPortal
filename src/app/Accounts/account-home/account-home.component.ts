import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Account from '../../Interfaces/account.model';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent {
  currentTitle ='Accounts'

  accounts?: Account[];

  columns = [
    {
      "field": "id",
      "visible": true,
      "display": "ID"
    },
    {
      "field": "userId",
      "visible": true,
      "display": "UserID"
    },
    {
      "field": "accountTypeName",
      "visible": true,
      "display": "Type"
    },
    {
      "field": "accountTypeDescription",
      "visible": false,
      "display": "Type description"
    },
    {
      "field": "balance",
      "visible": true,
      "display": "Balance"
    },
    {
      "field": "active",
      "visible": true,
      "display": "Active"
    },
    {
      "field": "pointsBalance",
      "visible": true,
      "display": "Rewards points"
    },
    {
      "field": "accountName",
      "visible": true,
      "display": "Name"
    },
    {
      "field": "createdDate",
      "visible": true,
      "display": "Creation date"
    },
  ]

  searchableFields = [
    {
      name: "id", type: Number, display: "id", value: ""
    },
    {
      name: "firstName", type: String, display: "first name", value: ""
    },
    {
      name: "lastName", type: String, display: "last name", value: ""
    },
    {
      name: "accountTypeId", type: Number, display: "accountType id", value: ""
    },
    {
      name: "active", type: Boolean, display: "active", value: ""
    },
    {
      name: "accountName", type: String, display: "account name", value: ""
    },
    {
      name: "createdDate", type: Number, display: "creation date", value: ""
    }
  ]

  searchWithQuery(){
    this.fetchAccounts(this.searchableFields
      .filter(field => field.value)
      .map(field => `${field.name}=${field.value}`)
      .join("&"))
  }
  
  fetchAccounts(queryString: String = ""){
    this.accountService.getAccounts(queryString)
    .subscribe((accountArray: Account[]) => {
      this.dataSource.data = accountArray
        .map((acct: Account) => {
            return {
                ...acct,
                createdDate: new Date(<number>acct.createdDate).toLocaleString()
            }
        })
    })
  }

  getColumnsForDisplay(){
    return [...this.columns
      .filter(col => col.visible)
      .map(col => col.field)
    , "modifyButton"]
  }

  public dataSource = new MatTableDataSource<Account>();

  updateAccountActivation(account: Account, active: boolean){
    this.accountService.updateAccountActivation(account, active)
    .subscribe(console.log)
  }

  constructor(private accountService: AccountService) {
    this.fetchAccounts()
  }

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

}
