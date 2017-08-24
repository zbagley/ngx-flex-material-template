import { Component, OnInit } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {


  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
  	return this.acctService.isLoggedIn();
  }

}
