import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedSocialButtonsComponent } from './auth-shared-social-buttons/auth-shared-social-buttons.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthSharedSocialButtonsComponent],
  exports: [AuthSharedSocialButtonsComponent]
})
export class AuthSharedSocialButtonsModule {}
