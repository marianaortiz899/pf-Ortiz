import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './models';
import { LoadingService } from '../../../../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
[x: string]: any;
  displayedColumns: string[] = ['id', 'courseName','teacherName', 'actions',];

  courses: Course[] =[]
  
  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    public dialog: MatDialog)
    {
    this.coursesService.getCourses().subscribe({
      next: (courses)=>{
        this.courses = courses;
      },
      complete: ()=>{
        this.loadingService.setIsLoading(false)
      }
    })
  }

  onCreate(): void {
    this.dialog.open(CourseDialogComponent).
    afterClosed().
    subscribe({
      next:(result)=>{
        if (result){
          this.coursesService.createCourse(result).subscribe({
            next: (courses)=> (this.courses = courses),
          })
        }
      }
    })
  }

  onEdit(course: Course) {
    this.dialog
      .open(CourseDialogComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.coursesService
              .updateCourseByID(course.id, result)
              .subscribe({
                next: (courses) => (this.courses = courses),
              });
          }
        },
      });
  }

  onDelete(id: number) {
    if (confirm('Esta seguro?')) {
      this.coursesService.deleteCourseById(id).subscribe({
        next: (courses) => {
          this.courses = courses;
        },
      });
    }
  }
}
