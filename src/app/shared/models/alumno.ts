export interface Alumno {
  tipoDocumento: string;
  numeroDocumento: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  tipoCategoria: string;
  horasRegistradas: {
    teoricas: number;
    practicas: number;
    taller: number;
  };
  tipoTramite: string;
  fechaRegistroCurso: string;
}
