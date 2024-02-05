import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './fullname.pipe';
import { TitleDirective } from './direct/title.directive';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FullNamePipe, TitleDirective],
  imports: [
    CommonModule,
  ],
  exports: [FullNamePipe, 
    TitleDirective, 
    MatTableModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule],
})
export class SharedModule { }