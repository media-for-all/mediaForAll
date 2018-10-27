import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NzDrawerComponent, NzDrawerModule, NzHeaderComponent} from 'ng-zorro-antd';
import {LogInFormComponent} from './log-in/log-in-form/log-in-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzDrawerModule
  ],
  providers: [
    NzHeaderComponent
  ],
  declarations: [
    LogInFormComponent
  ],
  exports: [NzDrawerComponent]
})
export class SharedModule { }
