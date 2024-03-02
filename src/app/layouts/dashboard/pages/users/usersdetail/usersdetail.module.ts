import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersdetailComponent } from './usersdetail.component';
import { UserdetailRoutingModule,} from './userdetail.routing.module';



@NgModule({
  declarations: [
    UsersdetailComponent
  ],
  imports: [
    CommonModule, UserdetailRoutingModule
  ]
})
export class UsersdetailModule { }
