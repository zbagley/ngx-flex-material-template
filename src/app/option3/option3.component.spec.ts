import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AcctService } from '../services/acct/acct.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { Option3Component } from './option3.component';

describe('Option3Component', () => {
  let component: Option3Component;
  let fixture: ComponentFixture<Option3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Option3Component ],
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
    fixture = TestBed.createComponent(Option3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
