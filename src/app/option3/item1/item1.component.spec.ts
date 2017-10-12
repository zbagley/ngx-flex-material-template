import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { Item1Component } from './item1.component';

describe('Item1Component', () => {
  let component: Item1Component;
  let fixture: ComponentFixture<Item1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item1Component ],
      imports: [ SharedModule, BrowserAnimationsModule ],
      providers: [
        { provide: AcctService, useClass: AcctService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1Component);
    component = fixture.componentInstance;
    component.family = { id: 'test' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
