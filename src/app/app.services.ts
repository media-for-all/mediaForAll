import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import {map, share} from 'rxjs/operators';
import {Job} from './shared/models/job.model';
import {Applicant} from './shared/models/applicant.model';
import {Login} from './shared/models/login.model';

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
      this.observable = this.http.get(`/api/Application/GetAll`, {
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

  getApplicantById(applicantId: number) {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/Application/${applicantId}`, {
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

  addApplicant() {
    return this.http.post(`/api/Application`, Applicant);

  }

  updateApplicant() {
    return this.http.put(`/api/Application`, Applicant);

  }

  addJob() {
    return this.http.post(`/api/JobApplication`, Job);

  }

  getAllJobs() {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/JobApplication/GetAll`, {
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

  getAllJobsByApplicantId(applicantId: number) {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/JobApplication/${applicantId}`, {
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

  deleteJob(jobId: number) {
    return this.http.post(`/api/JobApplication/${jobId}`, Job);

  }

  getAllJobApplications() {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/JobApplication/GetAll`, {
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

  getPasswordByUserName(username: string) {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/Credential/${username}`, {
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

  updatePassword() {
    return this.http.put(`/api/Credential`, Login);
  }

  getAllUsers(username: string) {
    if (this.data) {
      return of(this.data);
    } else if (this.observable) {
      return this.observable;
    } else {
      this.observable = this.http.get(`/api/Credential/GetAll`, {
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
