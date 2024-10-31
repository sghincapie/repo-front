import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-compound',
  templateUrl: './form-compound.component.html',
  styleUrls: ['./form-compound.component.scss'],
})
export class FormCompoundComponent {
  @Input()
  titlePage = '';

  @Input()
  title = '';

  @Input()
  consultar!: () => void;

  @Input()
  cancelar!: () => void;
}
