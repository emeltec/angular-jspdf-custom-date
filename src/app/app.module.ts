import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './components/base/base.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { HttpClientModule } from '@angular/common/http';
import { ConstancyComponent } from './commons/constancy/constancy.component';
import { PdfComponent } from './commons/pdf/pdf.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    ConstancyComponent,
    PdfComponent,
  ],
  exports:[
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
