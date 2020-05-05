import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeNameSearchComponent } from './free-name-search.component';

describe('FreeNameSearchComponent', () => {
  let component: FreeNameSearchComponent;
  let fixture: ComponentFixture<FreeNameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeNameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
