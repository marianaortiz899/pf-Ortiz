import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './fullname.pipe';
import { TitleDirective } from './direct/title.directive';

@NgModule({
  declarations: [FullNamePipe, TitleDirective],
  imports: [
    CommonModule
  ],
  exports: [FullNamePipe, TitleDirective],
})
export class PipesModule { }
