import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { User } from '../../users/models';
import { selectInscriptionsCourses, selectInscriptionsStudents } from '../store/inscriptions.selectors';
import { Course } from '../../courses/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Inscription, createInscription } from '../models';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss'
})
export class InscriptionDialogComponent {
  students$: Observable<User[]>;
  courses$: Observable<Course[]>;
  inscriptionForm: FormGroup;

  inscription: createInscription = {
    id: 0,
    userId: null,
    courseId: null
  };

  edit: boolean = false;;

  constructor (private store:Store, 
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<InscriptionDialogComponent>,){
    this.inscriptionForm = this.formBuilder.group({
      courseId: this.formBuilder.control('',[Validators.required]),
      userId: this.formBuilder.control('',[Validators.required]),
    })
    this.edit = data.edit;
    if (this.edit) {
      this.inscription = data.inscription;
      
      this.inscriptionForm.get('userId')?.disable();
      this.inscriptionForm.get('userId')?.setValue(data.inscription.userId);
      this.inscriptionForm.get('courseId')?.setValue(data.inscription.courseId);
    }
    this.store.dispatch(InscriptionsActions.loadStudents())
    this.courses$= this.store.select(selectInscriptionsCourses)
    this.store.dispatch(InscriptionsActions.loadCourses())
    this.students$ = this.store.select(selectInscriptionsStudents)

    
  }

  onSubmit():void{
    if(this.inscriptionForm.invalid){
      this.inscriptionForm.markAllAsTouched();
    }else{
      if (this.edit) {
        this.store.dispatch(
          InscriptionsActions.editInscription({data: {id: this.inscription.id, courseId: this.inscriptionForm.controls['courseId'].value, userId: this.inscription.userId}})
        )
        this.matDialogRef.close(true);
      } else {
        this.store.dispatch(
          InscriptionsActions.createInscription({data: this.inscriptionForm.value})
        )
        this.matDialogRef.close(true);
      }
    }
  }
  
  


}
