export interface ResponseDtoInterface<T> {
  error: boolean;
  codigoResultado: string;
  descripcionRespuesta: string;
  contenido: T;
}
