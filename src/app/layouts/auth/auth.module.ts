import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatIconButton } from '@angular/material/button';
import { AlertsService } from '../../core/services/alerts.service';
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule, MatIconButton],
  providers: [AlertsService]
})
export class AuthModule {}
