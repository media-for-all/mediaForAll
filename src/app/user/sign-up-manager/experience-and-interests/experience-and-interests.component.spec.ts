import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndInterestsComponent } from './experience-and-interests.component';

describe('ExperienceAndInterestsComponent', () => {
  let component: ExperienceAndInterestsComponent;
  let fixture: ComponentFixture<ExperienceAndInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAndInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAndInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
