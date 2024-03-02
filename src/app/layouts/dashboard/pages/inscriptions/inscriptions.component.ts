import { Component, OnDestroy } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from './store/inscriptions.actions';
import { selectInscriptions, selectInscriptionsIsLoading } from './store/inscriptions.selectors';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Inscription, createInscription } from './models';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';
import Swal from 'sweetalert2';
import { User } from '../users/models';
import { selectAuthUser } from '../../../../core/store/auth/selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnDestroy {
  inscriptions: Inscription[] = [];
  isLoading$: Observable<boolean>;
  inscriptionsSubscription?: Subscription;
  displayedColumns: string[] = ['id', 'student', 'course','action' ];
  dialog: any;
  updateInscriptionById: any;

  role?: string = '';
  authUser$?: Observable<User | null>

  constructor ( private inscriptionsService: InscriptionsService, private store: Store, private matDialog: MatDialog) {
    this.inscriptionsSubscription = this.store.select(selectInscriptions).subscribe({next: (inscriptions)=> {this.inscriptions=inscriptions}})
    this.isLoading$ = this.store.select(selectInscriptionsIsLoading);
    this.store.dispatch(InscriptionsActions.loadInscriptions())
    this.authUser$ = this.store.select(selectAuthUser)
    this.authUser$.subscribe(data=> {
      this.role = data?.role;
    });
  }

  createInscription():void{
    const dialog = this.matDialog.open(InscriptionDialogComponent, {data: {edit: false}})
    dialog.afterClosed().subscribe(data => {
      if (data)Swal.fire('Éxito', 'La clase se creó correctamente', 'success');
    })
  }
  
  ngOnDestroy(): void {
    this.inscriptionsSubscription?.unsubscribe();
  }

  editInscription(inscription: Inscription) {
    const dialog = this.matDialog.open(InscriptionDialogComponent, {data: {inscription: inscription, edit: true}})
    dialog.afterClosed().subscribe(data => {
      if (data)Swal.fire('Éxito', 'La clase se editó correctamente', 'success');
    })
  }

  deleteInscription(id: number): void {
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(InscriptionsActions.deleteInscription({ id }));
        Swal.fire('Eliminado', 'La inscripción ha sido eliminada', 'success');
      }
    });
  }

}
