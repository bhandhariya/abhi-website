import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBAComponent } from './dba.component';

describe('DBAComponent', () => {
  let component: DBAComponent;
  let fixture: ComponentFixture<DBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
