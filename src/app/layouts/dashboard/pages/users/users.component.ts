import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from './models';
import { UserService } from '../../../../services/users.service';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../../services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'fecha', 'delete'];
  dataSource: User[] = []
  isLoading = false;

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
  user: any;

  constructor(
    private cdr: ChangeDetectorRef, 
    private UserService: UserService, 
    private loadingService: LoadingService){

      this.loadingService.setIsLoading(true);
    }

  ngOnInit(): void {
    this.loadingService.setIsLoading(true);
    this.loadingService.isLoading$.subscribe(data=> {
      this.isLoading = data
    })
    this.UserService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      complete: () => {
        this.loadingService.setIsLoading(false)
      }
    })
  }

  onUserSubmitted(ev: User): void {
    this.loadingService.setIsLoading(true);

    const currentUserCount= this.dataSource.length

    this.UserService
      .createUser({ ...ev, id: currentUserCount + 1 })
      .subscribe({
        next: (users: any) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      });
  }
  // UsersComponent.onDeleteUser(ev: User): void
  onDeleteUser(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.UserService.deleteUser(ev.id).subscribe({
      next: (users: any) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

//eliminarUsuario(id: number): void {
//this.dataSource = this.dataSource.filter(user => user.id !== id);
//}
  

  editarUsuario(user: User) {
    this.userEdit = { ...user };
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

