import { Component, OnInit } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

}
