import { Route } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { FeatureComponent } from './feature.component';
import { StartComponent } from './start/start.component';

export const FEATURES_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [],
    component: FeatureComponent,
    children: [
      {
        path: 'start',
        component: StartComponent,
        providers: [],
      },
      {
        path: 'email',
        component: EmailComponent,
        providers: [],
      },
      { path: '', redirectTo: 'start', pathMatch: 'full' },
    ],
  },
];
