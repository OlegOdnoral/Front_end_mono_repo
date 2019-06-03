import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthFooterComponent],
  exports: [AuthFooterComponent]
})
export class AuthFooterModule {}
