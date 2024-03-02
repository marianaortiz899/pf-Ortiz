import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionsFeature } from './store/inscriptions.reducer';
import { InscriptionsEffects } from './store/inscriptions.effects';
import { SharedModule } from '../../../shared/shared.module';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';
import { CoursesService } from '../courses/courses.service';

@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ],
  providers: [CoursesService]
})
export class InscriptionsModule { }
