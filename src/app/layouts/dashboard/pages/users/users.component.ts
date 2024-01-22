import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
    displayedColumns: string[] = ['id','fullName','email','role', 'fecha' ,'delete'];
    dataSource: User[] = []

    editar: boolean = false;
    userEdit: User = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    }

    private idCounter: number = 0;

    constructor(private cdr: ChangeDetectorRef) {
      
    }

    onUserSubmitted(ev: User):void {
      ev.fecha=new Date();
      this.idCounter++;
      this.dataSource = [...this.dataSource, {...ev, id:this.idCounter}];
    }
      
    eliminarUsuario(id: number): void {
        this.dataSource = this.dataSource.filter(user => user.id !== id);
    }
    
    editarUsuario(user: User) {
      this.userEdit = {...user};
      this.editar = !this.editar;
    }
    
    guardar() {
      // Encuentra el índice del usuario en el dataSource
      const index = this.dataSource.findIndex(user => user.id === this.userEdit.id);

      if (index !== -1) {
          // Actualiza el usuario en el dataSource
          this.dataSource[index] = this.userEdit;

          // Notifica a Angular que los datos han cambiado
          this.dataSource = [...this.dataSource];
      }
      this.editar = false;
    }
}

