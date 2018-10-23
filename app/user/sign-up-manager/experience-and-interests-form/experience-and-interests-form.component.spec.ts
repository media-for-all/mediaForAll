import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndInterestsFormComponent } from './experience-and-interests-form.component';

describe('ExperienceAndInterestsFormComponent', () => {
  let component: ExperienceAndInterestsFormComponent;
  let fixture: ComponentFixture<ExperienceAndInterestsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAndInterestsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAndInterestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
