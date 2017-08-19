import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getColorForRoute(route): string {
    if ( this.router.url.lastIndexOf('/home', 0) === 0 && route === 'home') {
      return 'accent';
    } else if ( this.router.url.lastIndexOf('/option2', 0) === 0 && route === 'option2' ) {
      return 'accent';
    } else if ( this.router.url.lastIndexOf('/option3', 0) === 0 && route === 'option3' ) {
      return 'accent';
    } else {
      return 'primary';
    }
  }

}
