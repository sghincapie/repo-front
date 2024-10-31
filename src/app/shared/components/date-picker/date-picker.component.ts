import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: [],
})
export class DatePickerComponent {
  @Input()
  public id? = '';
  @Input()
  public name? = '';
  @Input()
  public placeholder? = '';
  @Input()
  public labelError? = '';
  @Input()
  public controlName = '';
  @Input()
  public controlStartName = '';
  @Input()
  public controlEndName = '';
  @Input()
  public control!: FormControl;
  @Input()
  public form!: FormGroup;
  @Input()
  public rangeGroup!: FormGroup;
  @Input()
  public type = '';
  @Input()
  public tooltip? = '';
  @Input()
  public change?: () => void;
  @Input()
  public minDate!: Date | null;
  @Input()
  public maxDate!: Date | null;
  constructor() {}

  /**
   * Función encargada de limpiar la fecha de creación
   */
  public clearDate(): void {
    if (this.form && this.rangeGroup) {
      this.rangeGroup.get(this.controlStartName)?.setValue(null);
      this.rangeGroup.get(this.controlEndName)?.setValue(null);
    } else if (this.form && this.controlName) {
      this.form.get(this.controlName)?.setValue(null);
    }
  }

  public getValueDate(): void {
    return this.form.get(this.controlName)?.value;
  }

  public getValueStartDate(): any {
    return this.rangeGroup.get(this.controlStartName)?.value;
  }

  public changeEvent() {
    if (this.change) {
      this.change();
    }
  }
}
