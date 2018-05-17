import { Component, OnDestroy, ViewEncapsulation, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, Event, NavigationStart } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

// default/filler chart data
import {
  ChartDefault,
  ChartDefault2,
  ChartDefault3,
  ChartDefault4
} from './chart/default';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('chartState', [
      state('visible', style({

      })),
      state('hidden', style({

      })),
      transition('visible => hidden', animate('100ms ease-in-out')),
      transition('hidden => visible', animate('100ms ease-in-out')),
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  chartState = 'hidden';
  chartList = [ChartDefault, ChartDefault2, ChartDefault3, ChartDefault4];
  chartApi = this.chartList[0];
  chartWidth = '600';
  chartHeight = '400';

  constructor(
    private media: ObservableMedia,
    private router: Router) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.loadChartSize(change);
    });
  }

  loadChartSize(change) {
    switch (change.mqAlias) {
      case 'xs':
        this.setSmallSize();
        break;
      case 'sm':
        this.setSmallSize();
        break;
      case 'md':
        this.setLargeSize();
        break;
      case 'lg':
        this.setLargeSize();
        break;
      case 'xl':
        this.setLargeSize();
        break;
    }
  }

  changeChart(n) {
    const index = this.chartList.findIndex( (data) => this.chartApi === data );
    if (index === 0 && n === -1) {
      this.chartApi = this.chartList[this.chartList.length - 1];
    } else if (index === this.chartList.length - 1 && n === 1) {
      this.chartApi = this.chartList[0];
    } else {
      this.chartApi = this.chartList[index + n];
    }
  }

  ngOnInit() {
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        if (e.url === '/') {
          this.chartState = 'visible';
        } else {
            this.chartState = 'hidden';
        }
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  setSmallSize() {
    this.chartHeight = window.innerHeight.toFixed();
    this.chartWidth = window.innerWidth.toFixed();
  }

  setLargeSize() {
    if ( window.innerHeight.toFixed() > window.innerWidth.toFixed() ) {
      this.chartHeight = (document.getElementById('topNav') && document.getElementById('footer')) ?
        (
          window.innerHeight -
          (
            document.getElementById('topNav').offsetHeight
            +
            document.getElementById('footer').offsetHeight
          )
        ).toFixed() : '400';
      this.chartWidth = window.innerWidth.toFixed();
    } else {
      this.chartHeight = (document.getElementById('topNav') && document.getElementById('footer')) ?
        (
          window.innerHeight -
          (
            document.getElementById('topNav').offsetHeight
            +
            document.getElementById('footer').offsetHeight
          )
        ).toFixed() : '400';
      this.chartWidth = window.innerHeight.toFixed();
    }
    if (!(document.getElementById('topNav') && document.getElementById('footer'))) {
      setTimeout( () => this.setLargeSize(), 500);
    }
  }

}
