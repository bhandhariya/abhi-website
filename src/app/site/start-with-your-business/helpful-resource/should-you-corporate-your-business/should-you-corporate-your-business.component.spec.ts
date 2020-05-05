import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldYouCorporateYourBusinessComponent } from './should-you-corporate-your-business.component';

describe('ShouldYouCorporateYourBusinessComponent', () => {
  let component: ShouldYouCorporateYourBusinessComponent;
  let fixture: ComponentFixture<ShouldYouCorporateYourBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldYouCorporateYourBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldYouCorporateYourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
