import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdMenuModule,
  MdSidenavModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdSidenavModule,
    MdTabsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdSidenavModule,
    MdTabsModule
  ]
})
export class SharedModule { }
