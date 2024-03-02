import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersdetailComponent } from './usersdetail.component';

const routes: Routes = [
  {
    path: 'users/:id',
    component: UsersdetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdetailRoutingModule {}