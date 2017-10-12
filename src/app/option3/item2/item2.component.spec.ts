import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { Item2Component } from './item2.component';

describe('Item2Component', () => {
  let component: Item2Component;
  let fixture: ComponentFixture<Item2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item2Component ],
      imports: [ SharedModule, BrowserAnimationsModule ],
      providers: [
        { provide: AcctService, useClass: AcctService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2Component);
    component = fixture.componentInstance;
    component.family = { id: 'test' };
    component.genus = { id: 'test' };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
