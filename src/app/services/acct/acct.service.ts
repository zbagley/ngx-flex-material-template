import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AcctService {

  public username = 'DemoUser';

  private _loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public loginState = this._loginState.asObservable();

  login() {
    this._loginState.next(true);
  }

  logout() {
    this._loginState.next(false);
  }

  isLoggedIn(): boolean {
    if (this._loginState.getValue()) {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

}
