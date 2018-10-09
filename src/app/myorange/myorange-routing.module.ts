import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'tariff-change', loadChildren : '../flows/tpchange/tpchange.module#TpchangeModule'},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyorangeRoutingModule { }
