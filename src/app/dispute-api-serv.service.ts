import { Injectable } from '@angular/core';
import { ListDisputes } from './mock-data/listDisputes';
import { GetDispute } from './mock-data/getDispute';
import { getDisputeData } from './mock-data/mockGet';
import { list } from './mock-data/mockSearch';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DisputeApiServService {

  private baseUrl = 'https://api.sandbox.paypal.com/v1/customer/disputes/';

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer A21AAHy_jkFgnV3Q0mnKCzj0EdJdKLRr1ieQupO5ke3GtiVU_DoD_F9YuSM6L2AL9JKM2kxYmWfb2WT1Iup5pHG7kx3UJHXcg' })
  };
  constructor(private httpClient: HttpClient) { }

  getDisputes(): Observable<ListDisputes> {
    const url = this.baseUrl ;
    console.log('url is : ' + url);
    console.log('options is : ' + this.httpOptions.headers.get('Authorization'));


    // return of(getDisputeData);

    return this.httpClient.get<ListDisputes>(url, this.httpOptions).pipe(
      tap(_ => this.log(''),
        catchError(this.handleError<ListDisputes>(`getHero id`))
      ));
  }

  getDisputeByID(disputeId: string): Observable<GetDispute> {
    const url = this.baseUrl + disputeId;
    console.log('url is : ' + url);
    console.log('options is : ' + this.httpOptions.headers.get('Authorization'));


    // return of(getDisputeData);

    return this.httpClient.get<GetDispute>(url, this.httpOptions).pipe(
      tap(_ => this.log(''),
      catchError(this.handleError<GetDispute>(`getHero id=${disputeId}`))
    ));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ${message}');
  }
}
