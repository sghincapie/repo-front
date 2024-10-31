import { CertificadoAptitudConduccion } from './certificadoAptitudConduccion';
import { Instructor } from './instructor';
import { Vehiculo } from './vehiculo';

export interface CentrosDeEnsenanza {
  id: number;
  tipoDoc: string;
  numDoc: string;
  nombre: string;
  razonSocial: string;
  grupoCategoria: string;
  detalleVehiculos: DetalleVehiculos;
  detalleInstructores: DetalleInstructores;
  detalleCertificados: DetalleCertificados;
}

export interface DetalleVehiculos {
  cantidadVehiculos: number;
  vehiculos: Vehiculo[];
}

export interface DetalleInstructores {
  instructoresActivos: number;
  instructores: Instructor[];
}

export interface DetalleCertificados {
  totalCertificadosExpedidos: number;
  totalCertificadosMaxAutorizados: number;
  certificados: CertificadoAptitudConduccion[];
}
