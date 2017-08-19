import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;
  navIcon = 'chevron_left';
  navIsClosed = false;

  sideNavToggle() {
    if ( this.sidenav._isOpened ) {
      this.navIcon = 'chevron_right';
      this.navIsClosed = true;
    } else {
      this.navIcon = 'chevron_left';
      this.navIsClosed = false;
    }
    this.sidenav.toggle();
  }

}
