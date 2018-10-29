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
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      position: 'Audience',
      expand: false,
      date: '10/20/18',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      position: 'Boom',
      expand: false,
      date: '10/20/18',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    },
    {
      position: 'Camera',
      expand: false,
      date: '10/20/18',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      position: 'Audience',
      expand: false,
      date: '10/20/18',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      position: 'Boom',
      expand: false,
      date: '10/20/18',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    },
    {
      position: 'Camera',
      expand: false,
      date: '10/20/18',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
      position: 'Audience',
      expand: false,
      date: '10/20/18',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
      position: 'Boom',
      expand: false,
      date: '10/20/18',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
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
