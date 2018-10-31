import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingPageComponent} from './shared/landing-page/landing-page.component';
import {ClickToSignInOrUpComponent} from './shared/click-to-sign-in-or-up/click-to-sign-in-or-up.component';
import {JobsTableComponent} from './user/jobs-table/jobs-table.component';
import {UserResponseComponent} from './admin/user-response/user-response.component';
import {SignUpManagerComponent} from './user/sign-up-manager/sign-up-manager.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'media-for-all/job-listings',
    pathMatch: 'full' },
  { path: 'home',
    redirectTo: 'media-for-all',
    pathMatch: 'full' },
  { path: 'media-for-all',
    component: LandingPageComponent
  },
  { path: 'media-for-all/sign-in-or-up',
    component: ClickToSignInOrUpComponent
  },
  { path: 'media-for-all/job-listings',
    component: JobsTableComponent
  },
  { path: 'media-for-all/sign-up/:stage',
    component: SignUpManagerComponent
  },
  { path: 'media-for-all/admin',
    component: AdminPageComponent
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
