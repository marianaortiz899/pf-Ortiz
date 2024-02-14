import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {
  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {
   
    if(!!errors){
      if(errors['required']) return 'Este campo es requerido'
      if(errors ['email']) return 'Email invalido'
    } 

    return null
  }
}
