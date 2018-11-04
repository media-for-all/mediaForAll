import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import {map, share} from 'rxjs/operators';

@Injectable()
export class AppServices {

  constructor(private http: HttpClient) {}

  data;
  observable;

  getAllApplicants() {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get('/api/Application/GetAll', {
        observe: 'response'
      })
        .pipe(map(response =>  {
          this.observable = null;
          if (response.status === 400) {
            return 'Request failed.';
          } else if (response.status === 200) {
            this.data = response.body;
            return this.data;
          }
        }))
        .pipe(share());
      return this.observable;
    }
  }

}
