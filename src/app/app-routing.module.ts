import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { NotfoundComponent } from './layouts/auth/pages/notfound/notfound.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[AuthGuard],
    component: DashboardComponent,
    loadChildren:()=> import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth/auth.module').then((m) => m.AuthModule),
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
