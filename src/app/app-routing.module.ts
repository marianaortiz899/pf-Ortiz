import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { NotfoundComponent } from './layouts/auth/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren:()=> import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren:()=> import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
