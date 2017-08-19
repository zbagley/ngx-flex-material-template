import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  openTwitter() {
    window.open('https://twitter.com/ZB_DSLimited');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/zbagley');
  }

  openBlog() {
    window.open('https://blog.datastandards.limited');
  }

}
