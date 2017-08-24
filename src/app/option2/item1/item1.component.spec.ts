import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { Item1Component } from './item1.component';

describe('Item1Component', () => {
  let component: Item1Component;
  let fixture: ComponentFixture<Item1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1Component ],
      imports: [ SharedModule, BrowserAnimationsModule, RouterTestingModule ],
      providers: [
        { provide: AcctService, useClass: AcctService },
        { provide: RouterTestingModule, useClass: RouterTestingModule }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
