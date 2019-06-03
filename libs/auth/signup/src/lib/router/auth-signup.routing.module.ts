import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderModule } from '@rank-active/auth/header';
import { AuthFooterModule } from '@rank-active/auth/footer';
import { RouterModule } from '@angular/router';
import { AuthSignupModuleRoutes } from './routes.list';

@NgModule({
  imports: [
    CommonModule,
    AuthHeaderModule,
    AuthFooterModule,
    RouterModule.forChild(AuthSignupModuleRoutes)
  ],
  exports: [RouterModule]
})
export class AuthSignupRoutingModule {}