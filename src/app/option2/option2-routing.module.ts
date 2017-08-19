import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option2Component } from './option2.component';

const routes: Routes = [
  {
  	path: '',
  	children: [
  	  { path: '', component: Option2Component },
  	  { path: '**', redirectTo: '/option2' }
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Option2RoutingModule { }
