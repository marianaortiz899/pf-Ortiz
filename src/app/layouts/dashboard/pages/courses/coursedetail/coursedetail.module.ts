import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursedetailRoutingModule } from './coursedetail-routing.module';
import { CoursedetailComponent } from './coursedetail.component';


@NgModule({
  declarations: [
    CoursedetailComponent
  ],
  imports: [
    CommonModule,
    CoursedetailRoutingModule
  ]
})
export class CoursedetailModule { }
