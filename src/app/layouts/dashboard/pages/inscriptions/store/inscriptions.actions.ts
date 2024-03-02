import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscription, createInscription } from '../models';
import { User } from '../../users/models';
import { Course } from '../../courses/models';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: User[]}>(),
    'Load Students Failure': props<{ error: unknown}>(),
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[]}>(),
    'Load Courses Failure': props<{ error: unknown}>(),
    'Create Inscription': props<{data : createInscription}>(),
    'Create Inscription Success': props<{ data: Inscription}>(),
    'Create Inscription Failure': props<{ error: unknown}>(),
    'Edit Inscription': props<{data : createInscription}>(),
    'Edit Inscription Success': props<{ data: Inscription}>(),
    'Edit Inscription Failure': props<{ error: unknown}>(),
    'Delete Inscription': props<{ id: number }>(),
  }
});

