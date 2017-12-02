import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { ChartHttpService } from './chart-http.service';
import { ChartApiModel } from './model/chart-api.model';

export class ItemPerms {
    chart: string;
    template: string;
    data: string;
  }

@Injectable()
export class ChartService implements OnDestroy {
  chartHolder = new ChartApiModel;

  // loading status
  isLoaded = false;

  // change trackers
  seriesListChangeTracker = false;
  seriesGroupChangeTracker = false;
  templateChangeTracker = false;
  chartChangeTracker = false;
  seriesControlFlag = '';

  // perms
  _perms: BehaviorSubject<any> = new BehaviorSubject<any>({
    seriesgroup: '',
    template: '',
    series: ''
  });
  perms = this._perms.asObservable();
  _permsSeriesList: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  permsSeriesList = this._permsSeriesList.asObservable();
  _permsItemList: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  permsItemList = this._permsItemList.asObservable();

  // Http Observables
  currentChart: any;
  currentChartSub: Subscription;
  currentTemplate: any;
  currentTemplateSub: Subscription;
  currentSeries: any;
  currentSeriesSub: Subscription;
  currentSeriesGroup: any;
  currentSeriesGroupSub: Subscription;
  currentItemList: Array<any>;
  currentItemListSub: Subscription;
  currentSeriesList: Array<any>;
  currentSeriesListSub: Subscription;

  // Local data
  _localChart: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  localChart = this._localChart.asObservable();
  _localTemplate:  BehaviorSubject<any> = new BehaviorSubject<any>(null);
  localTemplate = this._localTemplate.asObservable();
  _localSeriesGroup: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  localSeriesGroup = this._localSeriesGroup.asObservable();
  _localSeriesList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  localSeriesList = this._localSeriesList.asObservable();
  _localItemList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  localItemList = this._localItemList.asObservable();

  // Series Clone * to-do * change to chart clone // implement local vars for items
  seriesDataClone: any;

  // CHART API
  private _chartApi: BehaviorSubject<any> = new BehaviorSubject<any>(this.chartHolder);
  public chartApi = this._chartApi.asObservable();

  constructor(
    private chartHttpService: ChartHttpService
  ) {
  }

  addSeries(id) {
    this.seriesControlFlag = 'add';
    this.callGetSeries(id);
  }

  seriesChangeController() {
    const data = this._localSeriesList.getValue()
    if ( this.seriesControlFlag === 'add' ) {
      data.push(this.currentSeries);
      this._localSeriesList.next(data);
      this.seriesControlFlag = '';
      this.setSeriesList();
    } else if ( this.seriesControlFlag === '' ) {
      this.setSeriesList();
    }
  }

  setSeriesList() {
    if ( this._localSeriesList.getValue() && this._localSeriesList.getValue().length ) {
      const chartOpt = this._chartApi.getValue();
      const seriesData = [];
      for ( let i = 0; i < this._localSeriesList.getValue().length; i++) {
        seriesData.push(this._localSeriesList.getValue()[i].data);
        seriesData[i].name = this._localSeriesList.getValue()[i].details.name;
      }
      chartOpt.series = seriesData;
      this._chartApi.next(chartOpt);
    }
  }

  setTemplate() {
    const chartOpt = this._chartApi.getValue();
    if (this.currentTemplate.data.chart ) { chartOpt.chart = this.currentTemplate.data.chart; }
    if (this.currentTemplate.data.colors ) { chartOpt.colors = this.currentTemplate.data.colors; }
    if (this.currentTemplate.data.legend ) { chartOpt.legend = this.currentTemplate.data.legend; }
    if (this.currentTemplate.data.plotOptions ) { chartOpt.plotOptions = this.currentTemplate.data.plotOptions; }
    if (this.currentTemplate.data.xAxis ) { chartOpt.xAxis = this.currentTemplate.data.xAxis; }
    if (this.currentTemplate.data.yAxis ) { chartOpt.yAxis = this.currentTemplate.data.yAxis; }
    if (this.currentTemplate.data.zAxis ) { chartOpt.zAxis = this.currentTemplate.data.zAxis; }
    this._chartApi.next(chartOpt);
  }

  getChartApi() {
    return this.chartApi;
  }

  isLoading() {
    const check = setInterval( () => {
      if (
        this.currentChart &&
        this.currentTemplate &&
        this.currentSeriesGroup &&
        this.currentSeriesList
      ) {
        this._localSeriesList.next(this.currentSeriesList);
        this._localTemplate.next(this.currentTemplate);
        this.setTemplate();
        this.setSeriesList();
        clearInterval(check);
        this.isLoaded = true;
      }
    }, 300 )
  }

  chartChangeState(bool) {
    this.chartChangeTracker = bool;
  }

  seriesListChangeState(bool) {
    this.seriesListChangeTracker = bool;
  }

  seriesGroupChangeState(bool) {
    this.seriesGroupChangeTracker = bool;
  }

  templateChangeState(bool) {
    this.templateChangeTracker = bool;
  }

  isChartChanged(): boolean {
    return this.chartChangeTracker;
  }

  isTemplateChanged(): boolean {
    return this.templateChangeTracker;
  }

  ngOnDestroy() {
    this.currentChartSub.unsubscribe();
    this.currentTemplateSub.unsubscribe();
    this.currentSeriesSub.unsubscribe();
    this.currentSeriesGroupSub.unsubscribe();
    this.currentSeriesListSub.unsubscribe();
    this.currentItemListSub.unsubscribe();
  }

  // HTTP CALLS
  callGetAllPublic(type) {
    this.chartHttpService.getAllPublic(type);
  }
  callGetAllMy(type, id) {
    this.chartHttpService.getAllMy(type, id);
  }
  callGetAllShared(type, id) {
    this.chartHttpService.getAllShared(type, id);
  }
  callGetPublicChart() {
    this.chartHttpService.getPublicChart();
  }
  callGetChart(id) {
    this.chartHttpService.getChart(id);
  }
  callGetTemplate(id) {
    this.chartHttpService.getTemplate(id);
  }
  callGetSeries(id) {
    this.chartHttpService.getSeries(id);
  }
  callGetSeriesGroup(id) {
    this.chartHttpService.getSeriesGroup(id);
  }

}
