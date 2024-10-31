import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  /**
   * Método para obtener un objeto del formulario
   * @param control Nombre del control a obtener
   * @returns
   */
  getFormControl(form: FormGroup, control: string): AbstractControl {
    return form.controls[control];
  }
}
