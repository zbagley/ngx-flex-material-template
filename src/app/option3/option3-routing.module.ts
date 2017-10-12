import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option3Component } from './option3.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Option3Component },
      { path: ':lvl1/:lvl2/:lvl3', component: Option3Component },
      { path: ':lvl1/:lvl2', component: Option3Component },
      { path: ':lvl1', component: Option3Component },
      { path: '**', redirectTo: '/option3' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Option3RoutingModule { }
