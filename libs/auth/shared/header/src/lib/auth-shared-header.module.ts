import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedHeaderComponent } from './auth-shared-header/auth-shared-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AuthSharedHeaderComponent],
  exports: [AuthSharedHeaderComponent]
})
export class AuthSharedHeaderModule {}
