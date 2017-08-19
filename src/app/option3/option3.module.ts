import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Option3RoutingModule } from './option3-routing.module';

import { Option3Component } from './option3.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Option3RoutingModule
  ],
  declarations: [Option3Component]
})
export class Option3Module { }
