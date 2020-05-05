import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLCVsCorporationComponent } from './llc-vs-corporation.component';

describe('LLCVsCorporationComponent', () => {
  let component: LLCVsCorporationComponent;
  let fixture: ComponentFixture<LLCVsCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLCVsCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLCVsCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
