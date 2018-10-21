import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpManagerComponent } from './sign-up-manager.component';

describe('SignUpManagerComponent', () => {
  let component: SignUpManagerComponent;
  let fixture: ComponentFixture<SignUpManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
