import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '1', component: Option1Component },
      { path: '2', component: Option2Component },
      { path: '3', component: Option3Component },
      { path: '', redirectTo: '/options/1' },
      { path: '**', redirectTo: '/options/1' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
