import { Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
    displayedColumns: string[] = ['id','fullName','role', 'delete'];
    dataSource: User[] = []
    
    onUserSubmitted(ev: User):void {
      this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
    }
      
    eliminarUsuario(id: number): void {
        this.dataSource = this.dataSource.filter(user => user.id !== id);
    }
    
    
}

