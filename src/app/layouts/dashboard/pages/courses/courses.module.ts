import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatTableModule } from '@angular/material/table';
import { CoursesService } from './courses.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoadingService } from '../../../../services/loading.service';
import {MatDialogModule} from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../../../shared/shared.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent,],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, 
    SharedModule, MatProgressSpinner
  ],
  providers: [CoursesService, LoadingService]
})
export class CoursesModule { }
