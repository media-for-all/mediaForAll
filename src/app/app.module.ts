import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, ErrorHandler} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {JobsTableComponent} from './user/jobs-table/jobs-table.component';
import {SignUpManagerComponent} from './user/sign-up-manager/sign-up-manager.component';
import {CreateAccountFormComponent} from './user/sign-up-manager/create-account-form/create-account-form.component';
import {ExperienceAndInterestsFormComponent} from './user/sign-up-manager/experience-and-interests-form/experience-and-interests-form.component';
import {StepsHeaderComponent} from './user/sign-up-manager/steps-header/steps-header.component';
import {JobFormComponent} from './admin/job-form/job-form.component';
import { UserResponseComponent } from './admin/user-response/user-response.component';
import {MediaForAllHeaderModule} from './shared/media-for-all-header/media-for-all-header.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    JobsTableComponent,
    SignUpManagerComponent,
    CreateAccountFormComponent,
    ExperienceAndInterestsFormComponent,
    StepsHeaderComponent,
    JobFormComponent,
    UserResponseComponent,
    LandingPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MediaForAllHeaderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
