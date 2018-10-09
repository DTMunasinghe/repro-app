import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Step2Component } from './step2.component';

const routes: Routes = [
  {path: '', component: Step2Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Step2Component],
    exports: [
    Step2Component
  ]
})
export class Step2Module { }
