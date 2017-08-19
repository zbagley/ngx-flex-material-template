import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Option2RoutingModule } from './option2-routing.module';

import { Option2Component } from './option2.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Option2RoutingModule
  ],
  declarations: [Option2Component]
})
export class Option2Module { }
