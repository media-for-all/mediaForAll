import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JobsTableComponent} from './user/jobs-table/jobs-table.component';
import {SignUpManagerComponent} from './user/sign-up-manager/sign-up-manager.component';
import {JobFormComponent} from './admin/job-form/job-form.component';
import {UserResponseComponent} from './admin/user-response/user-response.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'media-for-all/job-listings',
    pathMatch: 'full' },

  { path: 'media-for-all/job-listings',
    component: JobsTableComponent
  },
  { path: 'media-for-all/sign-up/:stage',
    component: SignUpManagerComponent
  },
  { path: 'media-for-all/admin',
    component: JobFormComponent
  },
  { path: 'media-for-all/response',
    component: UserResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
