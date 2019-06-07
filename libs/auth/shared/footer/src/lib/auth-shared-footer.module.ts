import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedFooterComponent } from './auth-shared-footer/auth-shared-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthSharedFooterComponent],
  exports: [AuthSharedFooterComponent]
})
export class AuthSharedFooterModule {}
