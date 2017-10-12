import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { Item3Component } from './item3.component';

describe('Item3Component', () => {
  let component: Item3Component;
  let fixture: ComponentFixture<Item3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item3Component ],
      imports: [ SharedModule, BrowserAnimationsModule ],
      providers: [
        { provide: AcctService, useClass: AcctService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item3Component);
    component = fixture.componentInstance;
    component.family = { id: 'test' };
    component.genus = { id: 'test' };
    component.species = { id: 'test' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
