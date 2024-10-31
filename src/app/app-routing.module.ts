import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './consulta-departamentos/pages/departamento/departamento.component';

const routes: Routes = [
  {
    path: 'departamento',
    component: DepartamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
