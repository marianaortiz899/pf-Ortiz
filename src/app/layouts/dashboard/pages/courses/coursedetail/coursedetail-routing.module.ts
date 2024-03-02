import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailComponent } from './coursedetail.component';

const routes: Routes = [
  {
    path: 'courses/:id',
    component: CoursedetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursedetailRoutingModule { }
