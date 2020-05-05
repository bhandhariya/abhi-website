import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulResourceComponent } from './helpful-resource.component';

describe('HelpfulResourceComponent', () => {
  let component: HelpfulResourceComponent;
  let fixture: ComponentFixture<HelpfulResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfulResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
