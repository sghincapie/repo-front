import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDepartamento } from '../models/departamento';
import { HttpApi } from '../../core/models/http-api';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor(private http: HttpClient) {}

  obtenerDepartamentoById(id: string): Observable<IDepartamento> {
    return this.http
      .get<IDepartamento>(
        `${HttpApi.HOST_MS}/${HttpApi.DEPARTAMENTOS}/${id}`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error.descripcionRespuesta) {
            throw error.error.descripcionRespuesta;
          } else {
            return throwError(() => 'El servidor no ha respondido');
          }
        })
      );
  }

  obtenerDepartamentos(): Observable<IDepartamento[]> {
    return this.http
      .get<IDepartamento[]>(`${HttpApi.HOST_MS}/${HttpApi.DEPARTAMENTOS}`, {})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error.descripcionRespuesta) {
            throw error.error.descripcionRespuesta;
          } else {
            return throwError(() => 'El servidor no ha respondido');
          }
        })
      );
  }
}
