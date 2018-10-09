import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step3RoutingModule } from './step3-routing.module';
import { Step3Component } from './step3.component';

@NgModule({
  imports: [
    CommonModule,
    Step3RoutingModule
  ],
  declarations: [Step3Component]
})
export class Step3Module { }
