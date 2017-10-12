import { Component, OnInit, Input } from '@angular/core';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {
  @Input() family;
  @Input() genus;
  @Input() species;

  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.acctService.isLoggedIn();
  }

}
