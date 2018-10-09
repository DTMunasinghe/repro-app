import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfcareRoutingModule } from './selfcare-routing.module';
import { SelfcareComponent } from './selfcare.component';

@NgModule({
  imports: [
    CommonModule,
    SelfcareRoutingModule
  ],
  declarations: [SelfcareComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SelfcareModule { }
