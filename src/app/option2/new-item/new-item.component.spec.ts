import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AcctService } from '../../services/acct/acct.service';
import { SharedModule } from '../../shared/shared.module';

import { NewItemComponent } from './new-item.component';

describe('NewItemComponent', () => {
  let component: NewItemComponent;
  let fixture: ComponentFixture<NewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemComponent ],
      imports: [ SharedModule, BrowserAnimationsModule, RouterTestingModule ],
      providers: [
        { provide: AcctService, useClass: AcctService },
        { provide: RouterTestingModule, useClass: RouterTestingModule }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
