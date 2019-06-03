import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHeaderModule } from '@rank-active/auth/header';
import { AuthFooterModule } from '@rank-active/auth/footer';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSignupRoutingModule } from './router/auth-signup.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthHeaderModule,
    AuthFooterModule,
    AuthSignupRoutingModule
  ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule {}
