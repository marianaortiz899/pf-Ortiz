import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from './models';
import { UserService } from '../../../../core/services/users.service';
import { Observable, forkJoin } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {

  roles: string[] = [];
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
    role: '',
    token: ''
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
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.UserService.getRoles(),
      this.UserService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value [0];
        this.dataSource = value [1];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
      
    })

  }


  onUserSubmitted(ev: User): void {
    this.loadingService.setIsLoading(true);

    const currentUserCount= this.dataSource.length

    this.UserService
      .createUser(ev)
      .subscribe({
        next: (users: any) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      });
  }
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

  

  editarUsuario(user: User) {
    this.userEdit = { ...user };
    this.editar = !this.editar;
  }

  guardar() {
    const index = this.dataSource.findIndex(user => user.id === this.userEdit.id);

    if (index !== -1) {
      this.dataSource[index] = this.userEdit;

      this.dataSource = [...this.dataSource];
    }
    this.editar = false;
  }
}

