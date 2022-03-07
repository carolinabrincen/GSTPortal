export interface CotizacionModel{
  tipoViaje?: string,
  idCotizacion?: number,
  folio?: string,
  idUnidadNegocio?: number,
  unidadNegocio?: string,
  idTipoOperacion?: number,
  tipoOperacion?: string,
  cliente?: string,
  origen?: string,
  destino?: string,
  diesel?: number,
  costo?: number,
  FactorCargaSolcial?: number,
  distanciaTotal?: number,
  fletePorViaje?: number,
  velKmsHr?: number,
  tiempoCarga?: number,
  tiempoDescarga?: number,
  descansos?: number,
  transitoCargado?: number,
  transitoVacio?: number,
  totalTiempo?: number,
  numLlantas?: number,
  rendimientoKms?: number,
  costoLlanta?: number,
  costoLlantaKmFull?: number,
  distanciaIda?: number,
  distanaciaRetorno?: number,
  casetas?: number,
  dieselFinal?: number,
  tarifa?: number,
  costoPorKm?: number,
  ingresoPorKm?: number,
  tarifa25?: number,
  tarifa35?: number,
  tarifa40?: number,
  tarifa45?: number,
  porcentajeFinal?: number,
  tarifaFinal?: number,
  status?: string
}
export interface VariablesCotizacionModel{
  descripcion: string,
  valor?: number,
  fechaAct?:Date
}

export interface DetalleCotizacionModel{
  descripcion: string,
  valor?: string,
  porcentaje?:number
}
