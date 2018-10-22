import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaForAllHeaderComponent } from './media-for-all-header.component';

describe('MediaForAllHeaderComponent', () => {
  let component: MediaForAllHeaderComponent;
  let fixture: ComponentFixture<MediaForAllHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaForAllHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaForAllHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
