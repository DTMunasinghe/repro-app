import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { Step2Component } from './step2/step2.component';

const routes: Routes = [
  {path: '', loadChildren : './recommendation/recommendation.module#RecommendationModule'},
  {path: 'recommendation', loadChildren : './recommendation/recommendation.module#RecommendationModule'},
  {path: 'step2', loadChildren : './step2/step2.module#Step2Module'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpchangeRoutingModule { }
