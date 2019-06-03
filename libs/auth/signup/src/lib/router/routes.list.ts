import { Routes } from '@angular/router';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';

export const AuthSignupModuleRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthSignupComponent
  }
];