import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';
import { Router } from '@angular/router';
import { AlertsService } from './alerts.service';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';

interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 48,
  email: 'test@mail.com',
  firstName: 'FAKENAME',
  lastName: 'FAKELASTNAME',
  password: '123456',
  role: 'ADMIN',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  login() {
    throw new Error('Method not implemented.');
  }
  authUser: User | null = null;

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
  }
}
