import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLCComponent } from './llc.component';

describe('LLCComponent', () => {
  let component: LLCComponent;
  let fixture: ComponentFixture<LLCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
