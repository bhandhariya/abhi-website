import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLiacencePermitComponent } from './business-liacence-permit.component';

describe('BusinessLiacencePermitComponent', () => {
  let component: BusinessLiacencePermitComponent;
  let fixture: ComponentFixture<BusinessLiacencePermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLiacencePermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLiacencePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
