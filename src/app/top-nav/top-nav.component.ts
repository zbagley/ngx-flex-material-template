import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcctService } from '../services/acct/acct.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  username = this.acctService.username;

  constructor(
    private router: Router,
    private acctService: AcctService) { }

  logout() {
    this.acctService.logout();
  }

  isLoggedIn(): boolean {
    return this.acctService.isLoggedIn();
  }

  acctClick() {
    this.router.navigate(['/acct']);
  }
}
