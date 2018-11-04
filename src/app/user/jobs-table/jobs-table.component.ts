import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.css', '../../../theme.less']
})
export class JobsTableComponent implements OnInit {
  value1 = 1;
  value2 = 0;
  isVisibleMiddle = false;
  dataSet = [
    {
      position: 'Camera',
      expand: false,
      date: '10/20/18',
      description: 'Work with camera, rehearsal day before.'
    },
    {
      position: 'Audience',
      expand: false,
      date: '10/20/18',
      description: 'Keep that audience excited!.'
    },
    {
      position: 'Boom',
      expand: false,
      date: '10/20/18',
      description: 'Do not drop the boom into the shot.'
    },
    {
      position: 'Assistant Camera',
      expand: false,
      date: '10/20/18',
      description: 'Assist with camera, rehearsal day before.'
    },
    {
      position: 'Craft Services',
      expand: false,
      date: '10/20/18',
      description: 'Supply snacks.'
    },
    {
      position: 'Production Assistant',
      expand: false,
      date: '10/20/18',
      description: 'Help where needed.'
    },
    {
      position: 'Hair Stylist',
      expand: false,
      date: '10/20/18',
      description: 'Basic contemporary styles- male.'
    },
    {
      position: '2nd Assistant Director',
      expand: false,
      date: '10/20/18',
      description: 'Help 1st AD.'
    }
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
