import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Course } from "./models";
import { LoadingService } from "../../../../services/loading.service";

 let courses : Course[]= [{
            id: 1,
            name: 'Curso online de JavaScript',
            tname:'Valentina Morales'
        }
    ]


@Injectable ()
export class CoursesService {
  
    constructor(private loadingService: LoadingService) {}
    
    getCourses(){
        this.loadingService.setIsLoading(true);
    return of(courses).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false))
    );
    }
    
    deleteCourseById(id: number) {
        courses = courses.filter((el) => el.id != id);
        return this.getCourses();
    }

    createCourse(data:Course){
        courses = [...courses,{...data, id: courses.length + 1}]
        return this.getCourses();
    }

    updateCourseByID(id: number, data: Course){
        courses = courses.map((el)=> el.id === id ? {...el, ...data} : el)
        return this.getCourses();
    }
}