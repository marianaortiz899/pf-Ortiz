import { Injectable } from "@angular/core";
import { User } from "../layouts/dashboard/pages/users/models";
import { Observable, delay, of, tap } from "rxjs";
import { AlertsService } from "./alerts.service";

let USERS_DB: User[] = [
    
]

@Injectable({providedIn: 'root'})

export class UserService{
    constructor(private alerts: AlertsService){}

    getUsersById(id:number | string):Observable<User | undefined> {
       return of( USERS_DB.find((user)=> user.id == id ))
    }
    getUsers(){
        return of(USERS_DB).pipe(delay(1000));
        
        
    }
    createUser(payload:User){
        USERS_DB.push(payload);

        return this.getUsers();
    }

    deleteUser(userID: number){
        USERS_DB = USERS_DB.filter((user)=>user.id !== userID);
        return this.getUsers().pipe(tap(() =>this.alerts.showSuccess('Realizado', 'Se eliminó correctamente')));
    }
}