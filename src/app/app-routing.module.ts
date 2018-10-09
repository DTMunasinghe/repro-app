import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'selfcare', loadChildren: './selfcare/selfcare.module#SelfcareModule'},
    {path: 'myorange', loadChildren: './selfcare/selfcare.module#SelfcareModule'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }
