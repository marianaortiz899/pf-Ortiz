import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionsActions } from './inscriptions.actions';
import { InscriptionsService } from '../inscriptions.service';
import { UserService } from '../../../../../core/services/users.service';
import { CoursesService } from '../../courses/courses.service';

@Injectable()
export class InscriptionsEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionsActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscriptionsService.getInscriptions().pipe(
          map(data => InscriptionsActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error }))))
      )
    );
  });

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.loadStudents),
      concatMap(() => 
        this.usersService.
          getAllStudents()
          .pipe(map((resp) => InscriptionsActions.loadStudentsSuccess({data: resp})),
          catchError((error)=> { 
            return of (InscriptionsActions.loadStudentsFailure({ error }))
          })
        )
      )
    )
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionsActions.loadCourses),
      concatMap(() => {
        return this.coursesService.getCourses()
          .pipe(map((resp) => InscriptionsActions.loadCoursesSuccess({ data: resp})),
          catchError((error)=> of(InscriptionsActions.loadCoursesFailure({ error })
          ),)
        )
      })
    )
  });

  createInscription$= createEffect (()=>{
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscription),
      concatMap((action)=> {
        return this.inscriptionsService.createInscriptions(action.data).pipe(
          map((resp)=> InscriptionsActions.createInscriptionSuccess({ data : resp})),
          catchError((error)=> of(InscriptionsActions.createInscriptionFailure({ error })))
        )
      })
    )
  })

  createInscriptionSuccess$= createEffect (()=>{
    return this.actions$.pipe(
      ofType(InscriptionsActions.createInscriptionSuccess),
      map(()=> InscriptionsActions.loadInscriptions())
    )
  })

  deleteInscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InscriptionsActions.deleteInscription),
      mergeMap((action) =>
        this.inscriptionsService.deleteInscription(action.id).pipe(
          map(() => InscriptionsActions.loadInscriptions()) 
        )
      )
    )
  );

  editInscription$ = createEffect(()=>
    this.actions$.pipe(
      ofType(InscriptionsActions.editInscription),
      mergeMap((action)=>
        this.inscriptionsService.updateInscriptionById(action.data.id, action.data).pipe(
          map(()=> InscriptionsActions.loadInscriptions())
        )
      )
    )
  )
  
  constructor(
    private actions$: Actions, 
    private inscriptionsService: InscriptionsService, 
    private usersService: UserService,
    private coursesService: CoursesService
    ) {}
}
