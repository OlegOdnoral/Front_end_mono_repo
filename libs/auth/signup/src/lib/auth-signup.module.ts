import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedHeaderModule } from '@rank-active/auth/shared/header';
import { AuthSharedFooterModule } from '@rank-active/auth/shared/footer';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSignupRoutingModule } from './router/auth-signup.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthSharedHeaderModule,
    AuthSharedFooterModule,
    AuthSignupRoutingModule
  ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule {}
