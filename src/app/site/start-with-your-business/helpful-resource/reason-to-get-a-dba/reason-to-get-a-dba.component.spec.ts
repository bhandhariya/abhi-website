import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToGetADBAComponent } from './reason-to-get-a-dba.component';

describe('ReasonToGetADBAComponent', () => {
  let component: ReasonToGetADBAComponent;
  let fixture: ComponentFixture<ReasonToGetADBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonToGetADBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonToGetADBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
