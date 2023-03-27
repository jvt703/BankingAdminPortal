import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreditCardType, OutgoingCreditCardTypeDto } from '../Interfaces/creditCardType.model';

@Injectable({
  providedIn: 'root'
})
export class CreditCardTypeService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  createCreditCardType(data: OutgoingCreditCardTypeDto): Observable<CreditCardType> {
    return this.http.post<CreditCardType>(`${this.apiUrl}/creditCardType`, data);
  }

  getCreditCardTypes(): Observable<CreditCardType[]> {
    return this.http.get<CreditCardType[]>(`${this.apiUrl}/creditCardTypes`);
  }

  updateCreditCardType(id: number, data: OutgoingCreditCardTypeDto): Observable<CreditCardType> {
    return this.http.put<CreditCardType>(`${this.apiUrl}/creditCardType/${id}`, data);
  }
}