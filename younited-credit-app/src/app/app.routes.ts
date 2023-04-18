import { Route } from '@angular/router';
import { FEATURES_ROUTES } from './features/features.routes';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/features/start', pathMatch: 'full' },
  {
    path: 'features',
    loadChildren: () => FEATURES_ROUTES,
  },
];
