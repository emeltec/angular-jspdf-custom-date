import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { calculateTotal } from 'src/app/commons/helpers';
import { CommonsService } from 'src/app/services/commons.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  title = 'unit-test';

  bills = [
    {
      name: 'fac1',
      amount: 10
    },
    {
      name: 'fac2',
      amount: 8
    },
  ]

  companies = [
    {
      id:12,
      name: 'Emeltec Arts'
    },
    {
      id:15,
      name: 'Black Arts'
    },
  ]

  totalAmount = 0;
  comments:any = [];
  constructor(
    private commonService: CommonsService,
    private store: StoreService
    ) { }

  ngOnInit() {
    this.totalAmount = calculateTotal(this.bills, 'amount');

    this.store.comments.asObservable().subscribe(response => {
      if(response.length > 0) {
        this.comments = response;
      } else {
        this.getComments();
      }
    });

  }

  getComments() {
    this.commonService.getComments().subscribe(res => {
      this.comments = res;
      console.log(res)
    })
  }

  saveToStore(){
    this.store.company.next(this.companies.find(com => com.id === 15));
    this.store.codeClient.next('2154');
    this.store.companies.next(this.companies);
  }

  ngOnDestroy(){
    this.saveToStore();
  }

}
