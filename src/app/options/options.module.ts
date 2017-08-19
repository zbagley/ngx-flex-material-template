import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { OptionsRoutingModule } from './options-routing.module';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OptionsRoutingModule
  ],
  declarations: [Option1Component, Option2Component, Option3Component]
})
export class OptionsModule { }
