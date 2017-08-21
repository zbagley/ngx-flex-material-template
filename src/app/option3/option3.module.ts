import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Option3RoutingModule } from './option3-routing.module';

import { Option3Component } from './option3.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Option3RoutingModule
  ],
  declarations: [Option3Component, Item1Component, Item2Component, Item3Component, NewItemComponent]
})
export class Option3Module { }
