import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({template: ''})
export class EmptyComponent {}

const routes: Routes = [
  { path: 'acct', loadChildren: './acct/acct.module#AcctModule' },
  { path: 'option2', loadChildren: './option2/option2.module#Option2Module' },
  { path: 'option3', loadChildren: './option3/option3.module#Option3Module' },
  { path: '404', component: PageNotFoundComponent },
  { path: '', component: EmptyComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
