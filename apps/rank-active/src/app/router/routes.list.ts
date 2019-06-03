import { Routes } from '@angular/router';

import { AuthSignupModule } from '@rank-active/auth/signup';

export const AppModuleRoutes: Routes = [
  {
    path: 'signup',
    loadChildren: '@rank-active/auth/signup#AuthSignupModule'
  }
];