import { Component, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { ChartApiModel } from './chart-api.model';

// HIGHCHARTS
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/funnel')(Highcharts);
Highcharts.setOptions({ lang: { thousandsSep: ','} })
let chartHolder;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  activeMediaQuery = '';
  @Input() chartApi;
  @Input() chartWidth;
  @Input() chartHeight;
  loaded = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.chartApi && changes.chartApi.currentValue.chart ) {
      let newOptions: ChartApiModel = JSON.parse(JSON.stringify(changes.chartApi.currentValue));
      if ( !this.loaded ) { chartHolder = Highcharts.chart('container', newOptions); } else {
        chartHolder.update(newOptions);
      }
    }
    if ( this.chartApi && changes.chartWidth ) {
      chartHolder.setSize(changes.chartWidth.currentValue, undefined);
    }
    if ( this.chartApi && changes.chartHeight ) {
      chartHolder.setSize(undefined, changes.chartHeight.currentValue);
    }
    this.resizeFix();
  }

  resizeFix() {
    const fix = setInterval( () => { window.dispatchEvent(new Event('resize')) }, 300 );
    setTimeout( () => clearInterval(fix), 1500);
  }
}
