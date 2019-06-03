import { Routes } from '@angular/router';

export const AppModuleRoutes: Routes = [
  {
    path: 'signup',
    loadChildren: '@rank-active/auth/signup#AuthSignupModule'
  }
];