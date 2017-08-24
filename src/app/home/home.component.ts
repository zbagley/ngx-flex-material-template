import { Component, OnInit } from '@angular/core';
import { AcctService } from '../services/acct/acct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
  	return this.acctService.isLoggedIn();
  }

}
