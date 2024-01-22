import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';
import { TitleDirective } from '../shared/direct/title.directive';
import { PipesModule } from '../shared/pipes.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule, MatSidenavModule,MatButtonModule,MatToolbarModule,MatIconModule, UsersModule, PipesModule
  ],
  exports: [DashboardComponent],
  providers: [TitleDirective],
})
export class DashboardModule { }
