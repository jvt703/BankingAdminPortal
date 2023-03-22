import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'https://localhost:8080/loanApplications';

  constructor(private http: HttpClient) {}

  fetchAllLoans(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
approveLoan(loanApplicationId: number, approval: boolean): Observable<any> {
    const url = `https://localhost:8080/loanApplication/${loanApplicationId}`;
    const requestBody = {
      approved: approval
    };
    return this.http.post(url, requestBody);
  }

  editLoan(){

  }

  fetchLoanSearch(searchUrl: string): Observable<any>{
    let searchstring = this.apiUrl + searchUrl
  
    return this.http.get(searchstring);

  }

}