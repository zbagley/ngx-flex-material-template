import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AcctService } from '../services/acct/acct.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private acctService: AcctService, private router: Router) { }

  canActivate() {
    if (this.acctService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/acct/login']);
      return false;
    }
  }
}
