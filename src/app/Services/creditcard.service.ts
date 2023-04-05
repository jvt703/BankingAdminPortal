import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  constructor(private http: HttpClient) {}

  fetchAll(queryString: string = ""): Observable<any> {
    return this.http.get(environment.apiBaseUrl + "/creditCardApplications?" + queryString);
  }
  approve(creditCardApplicationId: number, approved: boolean): Observable<any> {
    const url = environment.apiBaseUrl + "/creditCardApplication/" + creditCardApplicationId;
    return this.http.post(url, {approved});
  }

}
