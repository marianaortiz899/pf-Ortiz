import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsIntroComponent } from './rxjs-intro.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    RxjsIntroComponent
  ],
  imports: [
    CommonModule, MatProgressSpinnerModule
  ],
  exports:[RxjsIntroComponent],
})
export class RxjsIntroModule { }
