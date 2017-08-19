import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Option2Component } from './option2.component';

describe('Option2Component', () => {
  let component: Option2Component;
  let fixture: ComponentFixture<Option2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Option2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Option2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
