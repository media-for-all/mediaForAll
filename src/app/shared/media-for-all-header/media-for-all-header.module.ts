import {MediaForAllHeaderComponent} from './media-for-all-header.component';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NzDrawerComponent, NzDrawerModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzDrawerModule
  ],
  declarations: [MediaForAllHeaderComponent],
  exports: [MediaForAllHeaderComponent],
  providers: [NzDrawerComponent]
})
export class MediaForAllHeaderModule { }
