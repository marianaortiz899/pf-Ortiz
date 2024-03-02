import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursesComponent } from './curses.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    CursesComponent
  ],
  imports: [
    CommonModule, MatIconModule, MatTableModule, CdkTableModule
  ],
})
export class CursesModule { }
