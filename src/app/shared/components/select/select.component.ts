import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: [],
})
export class SelectComponent {
  @Input()
  public id = '';
  @Input()
  public name? = '';
  @Input()
  public tooltip? = '';
  @Input()
  public controlName = '';
  @Input()
  public form!: FormGroup;
  @Input()
  public items: object[] = [];
  @Input()
  public type = '';
  @Input()
  public change!: () => void;
  @Input()
  public labelError? = '';
  constructor() {}

  public changeEvent(): void {
    if (this.change) {
      this.change();
    }
  }

  /**
   * Funcion encagarda de mostrar los items de la lista
   * @param item
   * @param campo
   * @returns
   */
  public validateItem(item: object, campo: string) {
    if (Object.prototype.hasOwnProperty.call(item, campo)) {
      const map = new Map();
      for (let index = 0; index < Object.keys(item).length; index++) {
        map.set(Object.keys(item)[index], Object.values(item)[index]);
      }
      Object(item)[campo];
      return Object(item)[campo];
    }
  }
}
