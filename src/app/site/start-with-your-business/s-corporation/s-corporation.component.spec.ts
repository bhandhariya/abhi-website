import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCorporationComponent } from './s-corporation.component';

describe('SCorporationComponent', () => {
  let component: SCorporationComponent;
  let fixture: ComponentFixture<SCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
