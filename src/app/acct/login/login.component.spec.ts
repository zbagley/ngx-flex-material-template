import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AcctService } from '../../services/acct/acct.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ SharedModule, BrowserAnimationsModule, RouterTestingModule ],
      providers: [
        { provide: AcctService, useClass: AcctService },
        { provide: FormBuilder, useClass: FormBuilder },
        { provide: RouterTestingModule, useClass: RouterTestingModule }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
