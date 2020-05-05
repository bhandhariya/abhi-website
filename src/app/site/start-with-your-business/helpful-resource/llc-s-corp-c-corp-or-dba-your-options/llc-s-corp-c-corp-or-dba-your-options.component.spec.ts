import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LLCSCorpCCorpOrDBAYourOptionsComponent } from './llc-s-corp-c-corp-or-dba-your-options.component';

describe('LLCSCorpCCorpOrDBAYourOptionsComponent', () => {
  let component: LLCSCorpCCorpOrDBAYourOptionsComponent;
  let fixture: ComponentFixture<LLCSCorpCCorpOrDBAYourOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LLCSCorpCCorpOrDBAYourOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LLCSCorpCCorpOrDBAYourOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
