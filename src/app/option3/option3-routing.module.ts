import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option3Component } from './option3.component';

const routes: Routes = [
  {
  	path: '',
  	children: [
  	  { path: '', component: Option3Component },
  	  { path: '**', redirectTo: '/option3' }
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Option3RoutingModule { }
