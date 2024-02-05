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
import { LoadingService } from '../../services/loading.service';
import { UserService } from '../../services/users.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UsersdetailComponent } from './pages/users/usersdetail/usersdetail.component';
import { MatTableModule } from '@angular/material/table';
import { CoursesModule } from './pages/courses/courses.module';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
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
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'users/:id',
          component: UsersdetailComponent,
        },
        {
          path:'**',
          redirectTo: '**'
        },
        {
          path:'students',
          component: UsersComponent
        },
        {
          path:'courses',
          component: CoursesComponent
        },
        {
          path:'teacher',
          redirectTo:''
        },
        {
          path:'',
          component: HomeComponent
        }
    ]),
    MatListModule,
    HomeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    CoursesModule
  ],
exports: [DashboardComponent,],
  providers: [TitleDirective, LoadingService, UserService],
})
export class DashboardModule { }
