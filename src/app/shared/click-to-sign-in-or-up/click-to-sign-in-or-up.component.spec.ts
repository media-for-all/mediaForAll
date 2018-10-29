import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToSignInOrUpComponent } from './click-to-sign-in-or-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';

describe('ClickToSignInOrUpComponent', () => {
  let component: ClickToSignInOrUpComponent;
  let fixture: ComponentFixture<ClickToSignInOrUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToSignInOrUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToSignInOrUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
