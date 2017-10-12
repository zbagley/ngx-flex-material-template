import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Option2Component } from './option2.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Option2Component },
      { path: 'new', component: NewItemComponent },
      { path: 'page1', component: Item1Component },
      { path: 'page2', component: Item2Component },
      { path: 'page3', component: Item3Component },
      { path: '**', redirectTo: '/option2' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Option2RoutingModule { }
