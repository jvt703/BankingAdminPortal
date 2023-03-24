import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CreditCardType from '../Interfaces/creditCardType.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreditCardTypeService {

  constructor(private http: HttpClient) { }

  createCreditCardType(creditCardType: CreditCardType): Observable<CreditCardType> {
    return this.http.post<CreditCardType>(environment.apiBaseUrl + '/creditCardType', creditCardType);
  }
}
