import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';

const url: string = "https://localhost:8080/api/Currency/";

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  public GetAllCurrencies(): Observable<string[]> {
    return this.http.get<string[]>(url + 'GetAllCurrencies');
  }

  public GetExchangeRates(currency: string): Observable<KeyValue<string, number>[]> {
    return this.http.get<KeyValue<string, number>[]>(url + 'GetExchangeRates/' + currency);
  }
}
