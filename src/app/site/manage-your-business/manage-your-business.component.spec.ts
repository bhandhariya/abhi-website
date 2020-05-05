import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageYourBusinessComponent } from './manage-your-business.component';

describe('ManageYourBusinessComponent', () => {
  let component: ManageYourBusinessComponent;
  let fixture: ComponentFixture<ManageYourBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageYourBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageYourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
