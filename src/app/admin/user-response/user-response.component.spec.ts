import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResponseComponent } from './user-response.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppServices} from '../../app.services';

describe('UserResponseComponent', () => {
  let component: UserResponseComponent;
  let fixture: ComponentFixture<UserResponseComponent>;
  let dataSet= [];

  let appServices;
  class AppServicesStub {
    getAllApplicants(){
      return of(dataSet);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResponseComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: AppServices, useClass: AppServicesStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
