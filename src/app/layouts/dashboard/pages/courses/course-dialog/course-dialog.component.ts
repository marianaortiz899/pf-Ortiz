import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../models';
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
      name: this.fb.control(''),
      tname: this.fb.control(''),
    });

    if(editingCourse){
      this.courseForm.patchValue(editingCourse)
    }
  }

  onSave(): void {
    this.dialogRef.close(this.courseForm.value);
  }


}
