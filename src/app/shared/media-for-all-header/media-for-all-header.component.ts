import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-media-for-all-header',
  templateUrl: './media-for-all-header.component.html',
  styleUrls: ['./media-for-all-header.component.css']
})
export class MediaForAllHeaderComponent implements OnInit {
  visible = false;
  validateLogin: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateLogin = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  openDrawer(): void {
    this.visible = true;
  }

  closeDrawer(): void {
    this.visible = false;
  }

  goToRegistration(): void {
    // router link to registration page?
  }

  forgotPassword() {

  }

  submitForm(): void {
    for (const i in this.validateLogin.controls) {
      this.validateLogin.controls[i].markAsDirty();
      this.validateLogin.controls[i].updateValueAndValidity();
    }
  }

}
