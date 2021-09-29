import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { AppComponent } from './app.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { ConstancyComponent } from './commons/constancy/constancy.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'employee',
    component: BaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
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
  { path: '**', pathMatch: 'full', redirectTo: 'employee' },
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
