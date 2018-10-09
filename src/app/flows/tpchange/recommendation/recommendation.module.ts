import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { RecommendationComponent } from './recommendation.component';
import {RecommendationRoutingModule} from './recommendation-routing.module';



@NgModule({
  imports: [
    CommonModule,
    [RoundProgressModule],
    RecommendationRoutingModule
  ],
  declarations: [RecommendationComponent],
    exports: [
    RecommendationComponent
    ],
     schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class RecommendationModule { }
