import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialReportsComponent } from './initial-reports.component';

describe('InitialReportsComponent', () => {
  let component: InitialReportsComponent;
  let fixture: ComponentFixture<InitialReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
