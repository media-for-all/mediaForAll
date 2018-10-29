import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css', '../../../../theme.less']
})
export class LogInFormComponent implements OnInit {
  @Input() wideInput = true;
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
  logInUser(): void {
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
