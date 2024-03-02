import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models';
import { stringValidator } from '../../custom-validators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?:Course
  ) {
    this.courseForm = this.fb.group({
      name: this.fb.control('', [Validators.required, stringValidator] ),
      description: this.fb.control('', [Validators.required, stringValidator] ),
      schedule: this.fb.control('', [Validators.required, stringValidator] ),
      price: this.fb.control('', [Validators.required, stringValidator] ),
    });



    if(editingCourse){
      this.courseForm.patchValue(editingCourse)
    }
  }

  onSave(): void {
    if (this.courseForm.valid) {
      this.dialogRef.close(this.courseForm.value);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos deben ser completados.',
      });
    }
  }

}
