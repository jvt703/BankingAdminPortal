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
    const url = `${this.apiUrl}/loans`;
    return this.http.get(url);
  }
}