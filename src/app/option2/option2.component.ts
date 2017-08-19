import { Component, OnInit } from '@angular/core';
import { AcctService } from '../services/acct/acct.service';

@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.css']
})
export class Option2Component implements OnInit {

  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

}
