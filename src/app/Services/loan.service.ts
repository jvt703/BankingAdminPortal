import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private apiUrl = 'https://localhost:3000/loanApplications';

  constructor(private http: HttpClient) {}

  fetchAllLoans(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
approveLoan(loanApplicationId: number, approval: boolean): Observable<any> {
    const url = `https://localhost:3000/loanApplication/${loanApplicationId}`;
    const requestBody = {
      approved: approval
    };
    return this.http.post(url, requestBody);
  }

  editLoan(){



  }

}