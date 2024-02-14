import { CommonModule } from "@angular/common";
import { FullNamePipe } from "./fullname.pipe";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgModule } from "@angular/core";
import { ValidationErrorsPipe } from './validation-errors.pipe';

@NgModule({
  declarations: [
    FullNamePipe,
    ValidationErrorsPipe,],
  imports: [
    CommonModule,
  ],
  exports: [
    FullNamePipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatPaginatorModule,
    ValidationErrorsPipe,

  ],
})
export class SharedModule { }