import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { customFormattedDate, formattedDate, formattedHour } from '../helpers';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  @ViewChild('pdfTable') public pdfTable: ElementRef;
  public currentDate: string;
  public currentHour: string;
  public customFDate: string;

  constructor() { }

  ngOnInit() {
    this.currentDate = formattedDate();
    this.currentHour = formattedHour();
    this.customFDate = customFormattedDate();
  }

}
