import { Injectable } from '@angular/core';
import { ListDisputes } from './mock-data/listDisputes';
import { GetDispute } from './mock-data/getDispute';
import { getDisputeData } from './mock-data/mockGet';
import { list } from './mock-data/mockSearch';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DisputeApiServService {

  private baseUrl = 'https://api.sandbox.paypal.com/v1/customer/disputes/';

  private tokenSubject =
  new BehaviorSubject<string>('A21AAH6b7IxgianJ-XzvmEutxuXbewMSRcREJ-ck66R-Ki2grwOY_lIM1fdeHG-6BPYMt9Oqrw8ymzmaMZJpHeKH7l-XYajYg');
  currentToken = this.tokenSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  updateToken(newToken: string): void {
    this.tokenSubject.next(newToken);
  }

  getDisputes(): Observable<ListDisputes> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.tokenSubject.getValue()
      })
    };
    return this.httpClient.get<ListDisputes>(this.baseUrl, httpOptions).pipe(
        catchError(this.handleError<ListDisputes>('search')));
  }

  getDisputeByID(disputeId: string): Observable<GetDispute> {
    const url = this.baseUrl + disputeId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.tokenSubject.getValue()
      })
    };
    return this.httpClient.get<GetDispute>(url, httpOptions).pipe(
      catchError(this.handleError<GetDispute>('get ')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
