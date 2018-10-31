import { Component, OnInit } from '@angular/core';
import {RegisteredUser} from '../../shared/models/registeredUser.model';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
export class UserResponseComponent implements OnInit {
  registeredUser = new RegisteredUser();
  value1 = 1;
  value2 = 0;
  isVisibleMiddle = false;
  // Will need to add expand field to the data coming from backend
  dataSet = [
    {
      position: 'Camera',
      productionName: 'My Production',
      name: 'Person A',
      email: 'e@mail.com',
      interests: 'interests...................',
      experience: 'experience................',
      productionDate: '10/20/18',
      callTime: '8:00AM',
      timeCommitment: '10 hours',
      expand: false
    },
    {
      position: 'Audience',
      productionName: 'My Production',
      name: 'Person B',
      email: 'e@mail.com',
      interests: 'interests...................',
      experience: 'experience................',
      productionDate: '10/20/18',
      callTime: '8:00AM',
      timeCommitment: '10 hours',
      expand: false
    },
    {
      position: 'Boom',
      productionName: 'My Production',
      name: 'person C',
      email: 'e@mail.com',
      interests: 'interests...................',
      experience: 'experience................',
      productionDate: '10/20/18',
      callTime: '8:00AM',
      timeCommitment: '10 hours',
      expand: false
    },
    {
      position: 'Camera',
      productionName: 'My Production',
      name: 'Person D',
      email: 'e@mail.com',
      interests: 'interests...................',
      experience: 'experience................',
      productionDate: '10/20/18',
      callTime: '8:00AM',
      timeCommitment: '10 hours',
      expand: false
    },
    {
      position: 'Audience',
      productionName: 'My Production',
      name: 'Person E',
      email: 'e@mail.com',
      interests: 'interests...................',
      experience: 'experience................',
      productionDate: '10/20/18',
      callTime: '8:00AM',
      timeCommitment: '10 hours',
      expand: false
    },
    // {
    //   position: 'Boom',
    //   expand: false,
    //   date: '10/20/18',
    //   description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    // },
    // {
    //   position: 'Camera',
    //   expand: false,
    //   date: '10/20/18',
    //   description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    // },
    // {
    //   position: 'Audience',
    //   expand: false,
    //   date: '10/20/18',
    //   description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    // },
    // {
    //   position: 'Boom',
    //   expand: false,
    //   date: '10/20/18',
    //   description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    // }
  ];

  ngOnInit() {

  }

  appliedForJob(job) {

  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
