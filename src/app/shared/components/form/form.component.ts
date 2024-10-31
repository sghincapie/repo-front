import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [],
})
export class FormComponent {
  @Input()
  public titlePage = '';

  @Input()
  public title = '';

  @Input()
  public subtitle = '';

  @Input()
  public consultar!: () => void;

  @Input()
  public cancelar!: () => void;
}
