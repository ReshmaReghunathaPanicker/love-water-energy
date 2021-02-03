import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'business-energy',
      component: DashboardComponent
  },
  {
      path: 'home-energy',
      component: DashboardComponent
  },
  {
      path: 'other-services',
      component: DashboardComponent
  },
  {
      path: 'content-hub',
      component: DashboardComponent
  },
  {
      path: 'about-us',
      component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
