import { Injectable } from "@angular/core";
import { User } from "../../layouts/dashboard/pages/users/models";
import { Observable, catchError, delay, mergeMap, of, tap } from "rxjs";
import { AlertsService } from "./alerts.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

let ROLES_DB: string[]=['ADMIN', 'USER']

let USERS_DB: User[] = [
    
]

@Injectable({providedIn: 'root'})

export class UserService{
    constructor(private alerts: AlertsService, private httpClient: HttpClient){}

    getUsersById(id:number | string):Observable<User | undefined> {
        return this.httpClient.get<User>(`${environment.apiURL}/users/${id}`)
    }

    getRoles(): Observable<string[]>{
        return of (ROLES_DB).pipe(delay(1000))
    }

    getUsers(){
        return this.httpClient.get<User[]>(`${environment.apiURL}/users`).pipe(catchError((error) =>{
            this.alerts.showError('ERROR AL CARGAR')
            return of([])
        }))
        
    }
    createUser(payload:User){
        return this.httpClient.
        post<User[]>(`${environment.apiURL}/users`, payload ).
        pipe(mergeMap(()=> this.getUsers()))
    }

    deleteUser(userID: number){
        return this.httpClient.delete<User>(`${environment.apiURL}/users/${userID}`,).
        pipe(mergeMap(()=> this.getUsers()))
    }
    
    getAllStudents():Observable<User[]>{
        return this.httpClient.get<User[]>(`${environment.apiURL}/users?role=STUDENT`)
    }
}