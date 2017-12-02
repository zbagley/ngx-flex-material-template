import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AcctService } from '../../services/acct/acct.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(100),
                                       Validators.email]);
  password = new FormControl('', [Validators.required,
                                          Validators.minLength(6)]);

  constructor(
    private acctService: AcctService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  login() {
    this.acctService.login();
    this.router.navigate(['/home']);
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

}
