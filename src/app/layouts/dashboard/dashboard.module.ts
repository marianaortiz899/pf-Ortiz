import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';
import { TitleDirective } from '../shared/direct/title.directive';
import { SharedModule } from '../shared/shared.module';
import { RxjsIntroModule } from './pages/rxjs-intro/rxjs-intro.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UsersdetailComponent } from './pages/users/usersdetail/usersdetail.component';
import { MatTableModule } from '@angular/material/table';
import { CoursesModule } from './pages/courses/courses.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { UserGuard } from '../../core/guards/user.guard';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, 
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    UsersModule,
    MatIconModule,
    SharedModule,
    RxjsIntroModule,
    RouterOutlet,
    RouterModule.forChild([
        {
          path: 'users/:id',
          canActivate:[UserGuard],
          loadChildren: ()=>
            import('./pages/users/usersdetail/usersdetail.module').then(
              (m)=> m. UsersdetailModule
          )
        },
        {
          path:'users/:role',
          canActivate:[UserGuard],
          loadChildren: ()=>
            import('./pages/users/users.module').then(
              (m)=> m.UsersModule
          )
        },
        {
          path:'courses',
          loadChildren: ()=>
            import('./pages/courses/courses.module').then(
              (m)=> m.CoursesModule
          )
        },
        {
          path:'home',
          loadChildren: ()=>
            import('./pages/home/home.module').then(
              (m)=> m.HomeModule
          )
        },
        {
          path:'teacher',
          redirectTo:'home'

        }

    ]),
    MatListModule,
    HomeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    CoursesModule
  ],
  exports: [DashboardComponent,],
  providers: [TitleDirective,],
})
export class DashboardModule { }
