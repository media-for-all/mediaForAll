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
<<<<<<< HEAD
    });
=======
    })
>>>>>>> 270406330e1c7e1ff1642408583242c73e65c10a
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
