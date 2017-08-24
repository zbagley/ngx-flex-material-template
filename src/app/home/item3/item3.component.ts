import { Component, OnInit } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {


  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
  	return this.acctService.isLoggedIn();
  }

}
