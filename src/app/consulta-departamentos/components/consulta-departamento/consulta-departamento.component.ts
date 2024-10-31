import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from '../../services/departamento.service';
import { IDepartamento } from '../../models/departamento';

@Component({
  selector: 'app-consulta-departamento',
  templateUrl: './consulta-departamento.component.html',
  styleUrl: './consulta-departamento.component.css',
})
export class ConsultaDepartamentoComponent implements OnInit {
  public form!: FormGroup;
  public departamentos!: IDepartamento[];
  public departamento!: IDepartamento;
  public loading = false;
  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService
  ) {
    this.initFormBuilder();
  }

  ngOnInit(): void {
    this.consultasDepartamentos();
  }

  consultasDepartamentos() {
    this.setLoading(true);
    this.departamentoService.obtenerDepartamentos().subscribe({
      next: (departamentos) => {
        this.departamentos = departamentos;
        this.setLoading(false);
      },
      error: (error) => {
        console.error(error);
        this.setLoading(false);
      },
    });
  }

  /**
   * Método para inicializar el formulario
   */
  private initFormBuilder() {
    this.form = this.fb.group({
      idDepartamento: [null, [Validators.required]],
      departamento: [null, [Validators.required]],
    });
  }

  public buscarDepartamento() {
    if (this.form?.valid) {
      this.setLoading(true);
      this.departamentoService
        .obtenerDepartamentoById(this.form.get('idDepartamento')?.value)
        .subscribe({
          next: (departamento) => {
            this.departamento = departamento;
            this.setLoading(false);
          },
          error: (error) => {
            console.error(error);
            this.setLoading(false);
          },
        });
    } else {
      this.form?.markAllAsTouched();
      console.log(this.form?.valid);
    }
  }

  public setLoading(loading: boolean) {
    this.loading = loading;
  }
}
