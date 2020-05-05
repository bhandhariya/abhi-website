import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporationWizardComponent } from './incorporation-wizard.component';

describe('IncorporationWizardComponent', () => {
  let component: IncorporationWizardComponent;
  let fixture: ComponentFixture<IncorporationWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorporationWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorporationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
