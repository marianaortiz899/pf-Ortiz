import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthUser } from '../store/auth/selectors';

export const UserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const store = inject(Store);

  return store.select(selectAuthUser).pipe(
    map((user) => {
      return user?.role === 'ADMIN'
        ? true
        : router.createUrlTree(['dashboard', 'home']);
    })
  );

}
