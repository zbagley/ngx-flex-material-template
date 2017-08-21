import { Component, OnInit } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

}
