import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { Item2Component } from './item2.component';

describe('Item2Component', () => {
  let component: Item2Component;
  let fixture: ComponentFixture<Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2Component ],
      imports: [ SharedModule, BrowserAnimationsModule, RouterTestingModule ],
      providers: [
        { provide: AcctService, useClass: AcctService },
        { provide: RouterTestingModule, useClass: RouterTestingModule }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
