import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { AppComponent } from './app.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { ConstancyComponent } from './commons/constancy/constancy.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'base',
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'base',
    component: BaseComponent,
    children: [
      {
        path: 'paso1',
        component: Step1Component
      },
      {
        path: 'paso2',
        component: Step2Component
      },
      {
        path: 'pdf',
        component: ConstancyComponent
      },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
