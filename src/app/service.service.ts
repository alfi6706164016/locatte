import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Countries } from './countries';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private psmItems = new Subject<any>();
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(`https://restcountries.eu/rest/v2/all `);
  }

  getFlag(): Observable<[]> {
    return this.http.get<[]>(`https://restcountries.eu/rest/v2/all`);
  }
}
