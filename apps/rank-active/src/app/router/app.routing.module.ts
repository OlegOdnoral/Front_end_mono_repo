import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModuleRoutes } from './routes.list';

@NgModule({
  imports: [
    RouterModule.forRoot(AppModuleRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}