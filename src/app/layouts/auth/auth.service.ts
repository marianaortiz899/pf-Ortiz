import { Injectable } from "@angular/core";
import { User } from "../dashboard/pages/users/models";
import { Router } from "@angular/router";
import { AlertsService } from "../../core/services/alerts.service";
import { Observable, delay, finalize, map, of, tap } from "rxjs";
import { LoadingService } from "../../core/services/loading.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

interface LoginData{
    email: null | string,
    password: null | string
}

const ADMIN ={
            id: 4,
            firstName: 'ADMINNAME',
            lastName: 'ADMINLASTNAME',
            password: '280503',
            email:'admin@gmail.com',
            role: 'ADMIN',
            token: 'adrfrvrg4',
};

@Injectable({providedIn: 'root'})
export class AuthService{

    authUser: User | null = null

    constructor(
        private router: Router, 
        private alertsService: AlertsService, 
        private loadingService: LoadingService,
        private HttpClient: HttpClient){}

    private setAuthUser(user: User): void{
        this.authUser = user;
        localStorage. setItem(
            'token', user.token
        )
    }

    login(data: LoginData): void {
        this.HttpClient
          .get<User[]>(
            `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
          )
          .subscribe({
            next: (response) => {
                if(!!response[0]){
                    this.setAuthUser(response[0]);
                    this.router.navigate(['dashboard', 'home'])
                }else{
                    this.alertsService.showError('EMAIL INVALIDO')
                }
            }
          }

          )
    }
    
    logout(): void {
        this.authUser = null;
        this.router.navigate(['auth', 'login']);
        localStorage.removeItem('token');
    }

    verifyToken() {
         return this.HttpClient
      .get<User[]>(
        `${environment.apiURL}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.authUser = null;
            localStorage.removeItem('token');
            return false;
          }
        })
      );
     }

}
