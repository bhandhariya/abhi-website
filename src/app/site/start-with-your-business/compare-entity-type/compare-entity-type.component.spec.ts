import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareEntityTypeComponent } from './compare-entity-type.component';

describe('CompareEntityTypeComponent', () => {
  let component: CompareEntityTypeComponent;
  let fixture: ComponentFixture<CompareEntityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareEntityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareEntityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
