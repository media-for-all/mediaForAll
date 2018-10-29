import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
export class UserResponseComponent implements OnInit {
  value1 = 1;
  value2 = 0;

  constructor() { }

  ngOnInit() {
  }

}
