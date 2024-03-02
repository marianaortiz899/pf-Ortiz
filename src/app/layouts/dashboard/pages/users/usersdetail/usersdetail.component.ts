import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../core/services/users.service';

@Component({
  selector: 'app-usersdetail',
  templateUrl: './usersdetail.component.html',
  styleUrl: './usersdetail.component.scss'
})
export class UsersdetailComponent {
  foundUser: any
  constructor(private route: ActivatedRoute, private usersService: UserService){
    this.usersService.getUsersById(this.route.snapshot.params['id']).subscribe({
      next:(findedUser)=>{
        this.foundUser=findedUser
      }
    })
      
  }
}
