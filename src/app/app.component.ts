import { Component, OnDestroy, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { ChartDefault } from './chart/chart.default';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  watcher: Subscription;
  chartHidden = true;
  chartApi = ChartDefault;
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

  ngOnInit() {
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
      	if (e.url === "/") {
      		this.chartHidden = false;
      	} else {
      	    this.chartHidden = true;
      	}
      }
    })
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  setSmallSize() {
    this.chartHeight = window.innerHeight.toFixed();
    this.chartWidth = window.innerWidth.toFixed();
  }

  setLargeSize() {
    if( window.innerHeight.toFixed() > window.innerWidth.toFixed() ) {
      this.chartHeight = (document.getElementById('topNav') && document.getElementById('footer')) ?
        (
          window.innerHeight -
          (
            document.getElementById('topNav').offsetHeight
            +
            document.getElementById('footer').offsetHeight
          )
        ).toFixed(): '400';
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
        ).toFixed(): '400';
      this.chartWidth = window.innerHeight.toFixed();
    }
    if (!(document.getElementById('topNav') && document.getElementById('footer'))) {
      setTimeout( () => this.setLargeSize(), 500);
    }
  }

}
