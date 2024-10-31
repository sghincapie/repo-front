import { CertificadoAptitudConduccion } from './certificadoAptitudConduccion';
import { Parametros } from './parametros';

export interface Instructor {
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidos: string;
  numeroLicencia: string;
  certificadosInstructor: CertificadoAptitudConduccion[];
  categorias: Parametros[];
  fechaIngresoCEA: string;
  fechaDesvinculacionCEA: string;
}
