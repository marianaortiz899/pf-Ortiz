import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Course } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";

 let courses : Course[]= [{
    
            id: 1,
            name: 'Curso online de JavaScript',
            description: 'Dominando JavaScript: Desde Principiantes hasta Desarrolladores Avanzados',
            schedule: 'Mon, Wed, Fri 10:00 - 12:00',
            price: 70000,
        }
    ]


@Injectable ()
export class CoursesService {
    constructor(private loadingService: LoadingService, private httpClient: HttpClient, private router: Router) {}
    
    
    getCourses(){
        this.loadingService.setIsLoading(true);
        return this.httpClient.get<Course[]>(`${environment.apiURL}/courses`).pipe(
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