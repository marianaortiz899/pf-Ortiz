import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
    displayedColumns: string[] = ['id','fullName','role'];
    dataSource: User[] = [
      {
        id: 1,
        firstName: 'Naruto',
        lastName: 'Uzumaki',
        email: 'jds',
        password:'kdmdc',
        role: 'USER',
      }
    ]
    onUserSubmitted(ev: User):void {
      this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
    }
}

