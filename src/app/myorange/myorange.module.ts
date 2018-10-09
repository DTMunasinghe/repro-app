import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyorangeRoutingModule } from './myorange-routing.module';
import { MyorangeComponent } from './myorange.component';

@NgModule({
  imports: [
    CommonModule,
    MyorangeRoutingModule
  ],
  declarations: [MyorangeComponent],
  exports: [MyorangeComponent]
})
export class MyorangeModule { }
