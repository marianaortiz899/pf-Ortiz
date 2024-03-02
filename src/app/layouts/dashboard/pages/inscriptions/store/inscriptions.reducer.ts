import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionsActions } from './inscriptions.actions';
import { Inscription } from '../models';
import { User } from '../../users/models';
import { Course } from '../../courses/models';

export const inscriptionsFeatureKey = 'inscriptions';

export interface State {

  inscriptions: Inscription[];
  students: User[];
  courses: Course[];
  loading: boolean;
  error: unknown;
  loadingStudent: boolean;

}

export const initialState: State = {
  students: [],
  inscriptions: [],
  courses: [],
  loading: false,
  loadingStudent: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({ ...state, loading: true })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, action) => ({ ...state, loading: false, inscriptions: action.data })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
  on(InscriptionsActions.loadStudents, (state)=> {return {...state, loadingStudent: true} }),
  on(InscriptionsActions.loadStudentsSuccess, (state, action)=> {return {...state, loadingStudent: false, students: action.data} }),
  on(InscriptionsActions.loadStudentsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
  on(InscriptionsActions.loadCoursesSuccess, (state, action)=> ({...state, courses: action.data }) )
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});

