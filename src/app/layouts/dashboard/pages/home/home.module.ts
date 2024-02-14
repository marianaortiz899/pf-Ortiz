import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoadingService } from '../../../../core/services/loading.service';
import { SharedModule } from '../../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, MatProgressSpinnerModule, SharedModule, MatTableModule, HomeRoutingModule
  ],
  exports:[HomeComponent],
  providers: [LoadingService]
})
export class HomeModule { }