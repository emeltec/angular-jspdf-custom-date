import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { catchError, first, take, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  urlBase = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  public data$ = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private store: StoreService
    ) { }

  get getData(){
    return this.data$.getValue();
  }

  getComments():Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('xx3-token','X3ZH.ZEEX3.ETHAN');

    return this.http.get(this.urlBase, {headers}).pipe(
      tap((res:any) => {
        this.store.comments.next(res);
      }),
      catchError((error) => {
        return error;
      })
    );
  }


}
