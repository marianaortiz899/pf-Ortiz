import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from './layouts/shared/shared.module';
import { CoursesModule } from './layouts/dashboard/pages/courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    SharedModule, MatProgressSpinnerModule, CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
