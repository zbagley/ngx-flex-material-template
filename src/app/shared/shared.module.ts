import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ChartComponent } from '../chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ],
  declarations: [
    ChartComponent,
  ],
  exports: [
    ChartComponent,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
