import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-up-manager',
  templateUrl: './sign-up-manager.component.html',
  styleUrls: ['./sign-up-manager.component.css']
})
export class SignUpManagerComponent implements OnInit, OnDestroy {
  stage: string;

  // let Angular know to grab pieces of the route
  private routeSubscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.paramMap.subscribe(params => {
      this.stage = params.get('stage');
      if (this.stage === null) {
        this.stage = 'setup';
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
