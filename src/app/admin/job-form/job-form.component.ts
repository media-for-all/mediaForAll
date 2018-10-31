import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Job} from '../../shared/models/job.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css', '../../../theme.less']
})
export class JobFormComponent implements OnInit {
  addJobForm: FormGroup;
  jobs = new Job();
  categories = ['Production Manager', 'Production Coordinator', '1st Assistant Director', '2nd Assistant Director', 'Production Assistant', 'Script Supervisor', 'Craft Services', 'Audience Manager', 'Props', 'Set Construction', 'Hair', 'Wardrobe', 'Makeup']

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addJobForm = this.fb.group({
      position: [ null, [ Validators.required ] ],
      productionName: [ null, [ Validators.required ] ],
      productionDate: [ null, [ Validators.required ] ],
      callTime: [ null, [ Validators.required ] ],
      timeCommitment: [ null, [ Validators.required ] ],
      notes: [ null ],
    });
  }
  addJob() {

  }
  submitForm(): void {
    for (const i in this.addJobForm.controls) {
      this.addJobForm.controls[ i ].markAsDirty();
      this.addJobForm.controls[ i ].updateValueAndValidity();
    }
  }
}
