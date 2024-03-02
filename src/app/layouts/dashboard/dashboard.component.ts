import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { AuthService } from '../auth/auth.service';
import Swal from "sweetalert2";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './pages/users/models';
import { selectAuthUser } from '../../core/store/auth/selectors';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isLoading = false
  role?: string = '';
  authUser$: Observable<User | null>
  constructor(
    private loadingService: LoadingService, 
    private authService: AuthService,
    private store: Store){
    this.authUser$ = this.store.select(selectAuthUser)
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        setTimeout(()=>{
          this.isLoading = value;
        });
      },
    });
    this.authUser$.subscribe(data=> {
      this.role = data?.role;
    });
  }

  showFiller = false; 

  async logout(): Promise<void> {
    const result = await Swal.fire({
      title: '¿Quieres cerrar sesión?',
      text: 'Esta acción no se puede deshacer',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      this.authService.logout();
    }else{

    }
  }

}
