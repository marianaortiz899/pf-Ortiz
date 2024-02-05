import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { FullNamePipe } from '../../../shared/fullname.pipe';
import { UserService } from '../../../../services/users.service';
import { RouterModule } from '@angular/router';
import { UsersdetailModule } from './usersdetail/usersdetail.module';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    RouterModule,
    UsersdetailModule,
    MatProgressSpinner
  ],
  exports: [UsersComponent,],
  providers: [FullNamePipe, UserService]
})
export class UsersModule { }
