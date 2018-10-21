import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-steps-header',
  templateUrl: './steps-header.component.html',
  styleUrls: ['./steps-header.component.css']
})
export class StepsHeaderComponent implements OnInit, OnChanges {
  @Input() stage = 'setup';
  current: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    switch (this.stage) {
      case 'setup':
        return this.current = 0;
      case 'experience':
        return this.current = 1;
      case 'interests':
        return this.current = 2;
    }
  }
}
