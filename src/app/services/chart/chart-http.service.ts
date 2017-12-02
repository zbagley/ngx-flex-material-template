import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

interface MongoData {
  _id: string;
  details: any;
  share: any;
  data: any;
}

@Injectable()
export class ChartHttpService implements OnDestroy {
  // auth change
  authChangeSub: Subscription;
  authChange: boolean;

  // Current BehSub
  private _currentChart: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentChart = this._currentChart.asObservable();

  private _currentTemplate: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentTemplate = this._currentTemplate.asObservable();

  private _currentSeriesGroup: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentSeriesGroup = this._currentSeriesGroup.asObservable();

  private _currentSeries: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentSeries = this._currentSeries.asObservable();

  private _currentSeriesList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentSeriesList = this._currentSeriesList.asObservable();

  private _currentItemList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentItemList = this._currentItemList.asObservable();

  // Headers
  headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('charset', 'UTF-8' );

  constructor(
    private http: HttpClient
  ) {
  }

  // GET DEFAULT CHART

  getPublicChart() {
    this.http.get<MongoData>('/api/chart/public/getone', { headers: this.headers })
      .subscribe(
        data => {
          this._currentChart.next(data);
          this.getTemplate(data.data.template.id);
          this.getSeriesGroup(data.data.seriesGroup.id);
        },
        e => console.log(e));
  }
  getPrivateChart(id) {
    this.http.get<MongoData>('/api/chart/my/getone/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentChart.next(data);
          this.getTemplate(data.data.template.id);
          this.getSeriesGroup(data.data.seriesGroup.id);
        },
        e => console.log(e));
  }


  // VARIABLE
  getAllPublic(type) {
    this.http.get<MongoData>('/api/' + type + '/public/all', { headers: this.headers })
      .subscribe(
        data => {
          this._currentItemList.next(data)
        },
        e => console.log(e));
  }
  getAllMy(type, id) {
    this.http.get<MongoData>('/api/' + type + '/my/all/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentItemList.next(data)
        },
        e => console.log(e));
  }
  getAllShared(type, id) {
    this.http.get<MongoData>('/api/' + type + '/shared/all/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentItemList.next(data)
        },
        e => console.log(e));
  }
  saveNew(type, obj) {
    this.http.post<MongoData>('/api/' + type + '/save/new', {body: JSON.stringify(obj)}, { headers: this.headers } )
      .subscribe(
        data => {
          console.log(data);
        },
        e => console.log(e));
  }
  saveOverwrite(type, obj, id) {
    this.http.post<MongoData>(
      '/api/' + type + '/save/overwrite',
      {body: JSON.stringify(obj), id: JSON.stringify(id)},
      { headers: this.headers }
    )
      .subscribe(
        data => {
          console.log(data);
        },
        e => console.log(e));
  }
  delete(type, id) {
    this.http.get<MongoData>('/api/' + type + '/delete/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
        },
        e => console.log(e));
  }

  // GET BY ID
  getChart(id) {
    this.http.get<MongoData>('/api/chart/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentChart.next(data);
          this.getTemplate(data.data.template.id);
          this.getSeriesGroup(data.data.seriesGroup.id);
        },
        e => console.log(e));
  }
  getTemplate(id) {
    this.http.get<MongoData>('/api/template/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentTemplate.next(data);
        },
        e => console.log(e));
  }
  getSeries(id) {
    this.http.get<MongoData>('/api/series/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentSeries.next(data);
        },
        e => console.log(e));
  }
  getSeriesList(id) {
    this.http.get<MongoData>('/api/series/list/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(
        data => {
          this._currentSeriesList.next(data);
        },
        e => console.log(e));
  }
  getSeriesGroup(id) {
    this.http.get<MongoData>('/api/seriesgroup/' + JSON.stringify(id), { headers: this.headers })
      .subscribe(data => {
        this._currentSeriesGroup.next(data);
        const array = [];
        for ( let i = 0; i < data.data.length; i++ ) { array.push(data.data[i].id); }
        this.getSeriesList(array);
      },
      e => console.log(e));
  }

  ngOnDestroy() {
    this.authChangeSub.unsubscribe();
  }
}
