import { Component, OnInit } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {


  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
  	return this.acctService.isLoggedIn();
  }

}
