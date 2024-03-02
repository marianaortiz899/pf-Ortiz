import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Inscription, createInscription } from "./models";
import { Observable, catchError, concatMap, throwError } from "rxjs";
import { User } from "../users/models";
import { Store } from '@ngrx/store';
import { InscriptionsActions } from "./store/inscriptions.actions";

let inscriptions: createInscription[] = [
    {
      id: 394,
      courseId: '1',
      userId: "555"
    }]

@Injectable({providedIn: 'root' })

export class InscriptionsService{
    constructor(private http: HttpClient,) {}

    getInscriptions() {
        return this.http.get<Inscription[]>(`${environment.apiURL}/inscriptions?_embed=user&_embed=course`)
    }

    getInscriptionsById(userId: number | string) {
        return this.http.get<User>(`${environment.apiURL}/users/${userId}`)
        .pipe(
            concatMap((user)=> 
                this.http.get(`${environment.apiURL}/inscriptions?userId=${user.id}`)
            ),
            catchError((error)=>{
                return throwError(()=>error)
            })
        );
    }

    createInscriptions(data : createInscription){
        return this.http.post<Inscription>(`${environment.apiURL}/inscriptions`, data)
    }
    
    deleteInscription(id: number): Observable<any> {
    const url = `${environment.apiURL}/inscriptions/${id}`;
    return this.http.delete(url);
    }
     
    updateInscriptionById(id: number, data: createInscription): Observable<any> {
        const url = `${environment.apiURL}/inscriptions/${id}`;
        return this.http.put(url, data).pipe(
          catchError((error) => {
            console.error('Error en la solicitud PUT:', error);
            throw error;
          })
        );
    }
}