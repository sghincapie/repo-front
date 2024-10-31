import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [],
})
export class InputComponent {
  @Input()
  public id = '';
  @Input()
  public name? = '';
  @Input()
  public tooltip? = '';
  @Input()
  public form!: FormGroup;
  @Input()
  public maxLength: string | null = null;
  @Input()
  public minLength: string | null = null;
  @Input()
  public required = false;
  @Input()
  public controlName? = '';
  @Input()
  public type? = '';
  @Input()
  public labelError? = '';
  @Input()
  public change!: () => void;

  constructor() {}
}
