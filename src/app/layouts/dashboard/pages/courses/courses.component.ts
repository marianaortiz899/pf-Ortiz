import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
[x: string]: any;
  displayedColumns: string[] = ['id', 'courseName','teacherName', 'actions',];
  isLoading = false;
  courses: Course[] =[]
  
  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    public dialog: MatDialog)
    {
    this.loadingService.setIsLoading(true);
    this.coursesService.getCourses().subscribe({
      next: (courses)=>{
        this.courses = courses;
      },
      complete: ()=>{
        this.loadingService.setIsLoading(false)
      }
    })
  }
  
  ngOnInit(): void {
    this.loadingService.setIsLoading(true);
    this.loadingService.isLoading$.subscribe(data=> {
      this.isLoading = data
    })
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
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
                next: (courses) => {
                  this.courses = courses
                  Swal.fire ('Exito','El curso se editó correctamente', 'success');
                },
                error: (error)=>{
                  Swal.fire('Error', 'Hubo un problema al editar el curso', 'error')
                }
              });
          }
        },
      });
  }

  onDelete(id: number) {
    Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
    }).then((result)=>{
        if  (result.isConfirmed) {
        this.coursesService.deleteCourseById(id).subscribe({
          next: (courses) => {
            this.courses = courses;
            Swal.fire('Realizado', 'Se eliminó correctamente', 'success');
          },
          error: (error) => {
            Swal.fire('Error', 'Hubo un problema al eliminar el curso', 'error');
          }
        });
      }
    })
    
  }
}
