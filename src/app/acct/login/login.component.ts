import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  username = new FormControl('', [Validators.required,
                                  Validators.minLength(2),
                                  Validators.maxLength(30),
                                  Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
                                          Validators.minLength(6)]);
  accounttype = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      accounttype: this.accounttype
    });
  }

  homeClick() {
    this.router.navigate(['/home']);
  }

  login() {
  }

  emailRegistrant() {
  }

  addRegistrant() {
  }

  register() {
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

}
