import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', '../../../theme.less']
})
export class LandingPageComponent implements OnInit {
  value1 = 1;
  value2 = 0;
  isVisibleTop = false;
  isVisibleMiddle = false;

  constructor() {
  }

  ngOnInit() {
  }

}
