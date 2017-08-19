import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Option1Component } from './option1.component';

describe('Option1Component', () => {
  let component: Option1Component;
  let fixture: ComponentFixture<Option1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Option1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Option1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
