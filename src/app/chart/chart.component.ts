import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartApiModel } from '../services/chart/model/chart-api.model';
import { ChartService } from '../services/chart/chart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

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
  @Input() chartApi;
  loaded = false;

  constructor(
    private chartService: ChartService
    ) { }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.chartApi.currentValue.chart ) {
      const newOptions: ChartApiModel = JSON.parse(JSON.stringify(changes.chartApi.currentValue));
      if ( !this.loaded ) { chartHolder = Highcharts.chart('container', newOptions); } else {
        chartHolder.update(newOptions);
      }
    } else {
      this.loaded = false;
    }
  }
}
