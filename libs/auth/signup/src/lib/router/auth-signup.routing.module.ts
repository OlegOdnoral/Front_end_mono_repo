import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedHeaderModule } from '@rank-active/auth/shared/header';
import { AuthSharedFooterModule } from '@rank-active/auth/shared/footer';
import { RouterModule } from '@angular/router';
import { AuthSignupModuleRoutes } from './routes.list';

@NgModule({
  imports: [
    CommonModule,
    AuthSharedHeaderModule,
    AuthSharedFooterModule,
    RouterModule.forChild(AuthSignupModuleRoutes)
  ],
  exports: [RouterModule]
})
export class AuthSignupRoutingModule {}