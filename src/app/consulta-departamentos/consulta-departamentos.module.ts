import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaDepartamentosRoutingModule } from './consulta-departamentos-routing.module';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { ConsultaDepartamentoComponent } from './components/consulta-departamento/consulta-departamento.component';
import { SharedModule } from '../shared/shared.module';
import { DepartamentoService } from './services/departamento.service';


@NgModule({
  declarations: [
    DepartamentoComponent,
    ConsultaDepartamentoComponent
  ],
  imports: [
    CommonModule,
    ConsultaDepartamentosRoutingModule,
    SharedModule
  ],
  providers : [DepartamentoService]
})
export class ConsultaDepartamentosModule { }
