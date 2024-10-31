export abstract class Constants {
  //otros
  public static readonly TODAS = 'Todas';
  public static readonly NACIONAL = 2;
  public static readonly ESTADO_VIGENTE = 'VIGENTE';
  public static readonly ESTADO_HABILITADA = 'HABILITADA';
  public static readonly MSJ_NO_INFORMACION = 'No hay información';
  public static readonly FUNCIONARIO_DT = 'Funcionario DT';
  public static readonly FUNCIONARIO_OT = 'Funcionario OT';

  //TIPOS DOCUMENTOS
  public static readonly CARNET_DIPOMATICO = 'Carnet Diplomático';
  public static readonly CEDULA_CIUDADANIA = 'Cédula Ciudadanía';
  public static readonly CEDULA_EXTRANJERIA = 'Cédula de Extranjería';
  public static readonly NIT = 'NIT';
  public static readonly PERSONA_NN = 'Persona NN';
  public static readonly PASAPORTE = 'Pasaporte';
  public static readonly PERMISO_PROTECCION_TEMPORAL = 'Permiso por Protección Temporal';
  public static readonly REGISTRO_CIVIL = 'Registro Civil';
  public static readonly SIN_REGISTRO = 'Sin Registro';
  public static readonly TI2 = 'TI2';
  public static readonly TARJETA_IDENTIDAD = 'Tarjeta de Identidad';
  public static readonly TIPO_DOCUMENTO_NO_IDENTIFICADO = 'Tipo documento no identificado';

  public static mapperTipoDocumento(tipoDocumento: string): string {
    switch (tipoDocumento) {
      case 'D':
        return Constants.CARNET_DIPOMATICO;
      case 'C':
        return Constants.CEDULA_CIUDADANIA;
      case 'E':
        return Constants.CEDULA_EXTRANJERIA;
      case 'N':
        return Constants.NIT;
      case 'X':
        return Constants.PERSONA_NN;
      case 'P':
        return Constants.PASAPORTE;
      case 'Y':
        return Constants.PERMISO_PROTECCION_TEMPORAL;
      case 'U':
        return Constants.REGISTRO_CIVIL;
      case 'S':
        return Constants.SIN_REGISTRO;
      case 'O':
        return Constants.TI2;
      case 'T':
        return Constants.TARJETA_IDENTIDAD;
      default:
        return Constants.TIPO_DOCUMENTO_NO_IDENTIFICADO;
    }
  }

  public static mapperEstado(estado: string): string {
    switch (estado) {
      case this.ESTADO_HABILITADA:
        return Constants.ESTADO_VIGENTE;
      default:
        return estado;
    }
  }
}
