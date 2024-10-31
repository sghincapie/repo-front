import { AlumnoModel } from './alumno.interface';
import { CertificadoAptitudConduccion } from './certificadoAptitudConduccion';

export interface CertificadosConduccionAlumnos {
  alumno: AlumnoModel;
  certificados: CertificadoAptitudConduccion[];
}
