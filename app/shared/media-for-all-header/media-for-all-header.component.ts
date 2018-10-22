import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-for-all-header',
  templateUrl: './media-for-all-header.component.html',
  styleUrls: ['./media-for-all-header.component.css']
})
export class MediaForAllHeaderComponent implements OnInit {
  visible = false;

  constructor() { }

  ngOnInit() {
  }
  openDrawer(): void {
    this.visible = true;
  }

  closeDrawer(): void {
    this.visible = false;
  }

  GoToRegistration(): void {
    // router link to registration page
  }

}
