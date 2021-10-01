import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF, { jsPDFOptions } from 'jspdf';
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'app-constancy',
  templateUrl: './constancy.component.html',
  styleUrls: ['./constancy.component.scss']
})
export class ConstancyComponent implements OnInit {

  @ViewChild(PdfComponent) pdfComp: PdfComponent;
  @ViewChild('pdfData') pdfData: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  public downloadAsPDF() {
    const options: jsPDFOptions = {
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    }
    const sheet = this.pdfComp.pdfTable.nativeElement.cloneNode(true)
    sheet.style.display = ''
    const doc = new jsPDF(options);

    doc.html(sheet, {
      callback: function (doc) {
        doc.save('constancia.pdf');
      },
      margin:[40,20],
      image: {type:'jpeg', quality:1},
      html2canvas: {width:600, scale:0.75}
   })
  }

}
