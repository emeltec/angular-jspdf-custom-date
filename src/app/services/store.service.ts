import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public companies = new BehaviorSubject([]);
  public services = new BehaviorSubject([]);

  public company = new BehaviorSubject({});
  public service = new BehaviorSubject({});
  public codeClient = new BehaviorSubject('');

  comments = new BehaviorSubject([]);

constructor() { }



}
