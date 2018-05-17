import { Component, OnInit } from '@angular/core';
import { AcctService } from '../services/acct/acct.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.css']
})
export class Option3Component implements OnInit {
  currentRoute: Array<string>;
  currentSpecies: number;
  currentGenus: number;
  currentFamily: number;
  currentSubmenu: Array<string>;
  colors = [];

  order =
    { family: [
      {
        id: 'felidae',
        genus: [
        {
          id: 'felis',
          species: ['catus', 'chaus', 'silvestris', 'nigripes', 'margarita', 'bieti']
        },
        {
          id: 'prionailurus',
          species: ['bengalensis', 'rubiginosus', 'viverrinus', 'planiceps', 'javanensis']
        },
        {
          id: 'leopardus',
          species: ['pardalis', 'tigrinus', 'guigna', 'colocolo', 'wiedii', 'geoffroyi']
        },
        ]
      },
      {
        id: 'canidae',
        genus: [
        {
          id: 'canis',
          species: ['lupus', 'latrans', 'dirus']
        },
        {
          id: 'vulpes',
          species: ['vulpes', 'lagopus']
        }
        ]
      },
      {
        id: 'dromaeosauridae',
        genus: [
        {
          id: 'ornithodesmus',
          species: ['cluniculus']
        },
        {
          id: 'dromaeosaurinae',
          species: ['deinonychus']
        }
        ]
      }
    ]};

  username = this.acctService.username;
  constructor(
    private acctService: AcctService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    for ( let i = 0; i < 10; i++ ) {
      this.colors.push(this.getRandomColor());
    }
    this.route.params.subscribe( (params) => {
      if ( params.lvl1 ) {
        this.currentFamily = Number(params.lvl1);
        if ( params.lvl2 ) {
          this.currentGenus = Number(params.lvl2);
          if ( params.lvl3 ) {
            this.currentSpecies = Number(params.lvl3);
            this.currentSubmenu = this.order.family[this.currentFamily].genus[this.currentGenus].species;
          } else {
            this.currentSpecies = -1;
            this.currentSubmenu = this.order.family[this.currentFamily].genus[this.currentGenus].species;
          }
        } else {
          this.currentSpecies = -1;
          this.currentGenus = -1;
          this.currentSubmenu = this.order.family[this.currentFamily].genus.map(data => data.id);
        }
      } else {
        this.currentSpecies = -1;
        this.currentGenus = -1;
        this.currentFamily = -1;
        this.currentSubmenu = this.order.family.map(data => data.id);
      }
    });
  }

  setItem(item) {
    if ( this.currentSpecies !== -1 ) {
      this.currentSpecies = this.currentSubmenu.findIndex( data => data === item );
      this.loadRoute('species');
    } else if (this.currentGenus !== -1 ) {
      this.currentSpecies = this.currentSubmenu.findIndex( data => data === item );
      this.loadRoute('species');
    } else if (this.currentFamily !== -1) {
      this.currentGenus = this.currentSubmenu.findIndex( data => data === item );
      this.loadRoute('genus');
    } else {
      this.currentFamily = this.currentSubmenu.findIndex( data => data === item );
      this.loadRoute('family');
    }
  }

  isLoggedIn(): boolean {
    return this.acctService.isLoggedIn();
  }

  loadRoute(r) {
    if ( r === 'family') { this.router.navigate(['/option3', this.currentFamily]);
    } else if ( r === 'genus' ) { this.router.navigate(['/option3', this.currentFamily, this.currentGenus]);
    } else if ( r === 'species' ) { this.router.navigate(['/option3', this.currentFamily, this.currentGenus, this.currentSpecies]); }
  }

  getRandomColor(): string {
    const color = JSON.parse(JSON.stringify('#' + Math.floor(Math.random() * 16777215).toString(16)));
    return color;
  }
}
