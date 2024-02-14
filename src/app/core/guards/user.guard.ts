import { inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';

export const UserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.authUser?.role === 'ADMIN'
    ? true
    : router.createUrlTree(['dashboard','courses']);
};
