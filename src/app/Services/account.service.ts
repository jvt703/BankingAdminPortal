import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import Account from "../Interfaces/account.model";
import { HttpClient } from '@angular/common/http';
//axios 
@Injectable({
    providedIn: 'root'
})

export class AccountService{
    constructor(private http: HttpClient){};

    getAccounts(queryString: String = "") {
        return this.http.get<Account[]>(environment.apiBaseUrl + "/accounts/all?" + queryString);
    }

    updateAccountActivation(account: Account, active: boolean){
        return this.http.put<Account>(environment.apiBaseUrl + `/account/${account.id}/activation`, {active});
    }

}
