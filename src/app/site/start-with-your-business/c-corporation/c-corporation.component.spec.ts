import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCorporationComponent } from './c-corporation.component';

describe('CCorporationComponent', () => {
  let component: CCorporationComponent;
  let fixture: ComponentFixture<CCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
