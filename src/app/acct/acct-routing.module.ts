import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';

import { LoggedInGuard, LoggedOutGuard } from '../guards';

const routes: Routes = [
  {
  	path: '',
  	children: [
  	  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  	  { path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard]  },
      { path: 'myaccount', component: MyAccountComponent, canActivate: [LoggedInGuard] },
      { path: '', redirectTo: '/acct/login' },
  	  { path: '**', redirectTo: '/acct/login' }
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcctRoutingModule { }
