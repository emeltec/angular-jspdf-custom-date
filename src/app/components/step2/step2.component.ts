import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  company = {};
  companies = []

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    this.company = this.store.company.getValue();
    this.companies = this.store.companies.getValue();
  }

}
