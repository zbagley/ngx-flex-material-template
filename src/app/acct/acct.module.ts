import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AcctRoutingModule } from './acct-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AcctRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, MyAccountComponent]
})
export class AcctModule { }
