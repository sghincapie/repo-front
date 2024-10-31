import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app--auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: [],
})
export class AutoCompleteComponent implements OnInit {
  @Input()
  public id = '';
  @Input()
  public name? = '';
  @Input()
  public tooltip? = '';
  @Input()
  public controlName = '';
  @Input()
  public placeholder? = '';
  @Input()
  public form!: FormGroup;
  @Input()
  public type? = '';
  @Input()
  public labelError? = '';
  @Input()
  public change!: () => void;
  @Input()
  destroySubjectEmpresa$: Subject<void> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Funcion encargada de ejecutar la accion luego de cambiar el valor en el select
   */
  public changeEvent(): void {
    if (this.change) {
      this.change();
    }
  }
}
