export interface CotizacionModel{
  tipoViaje?: string,
  regreso?: string,
  clientePagaCasetas?: string,
  idCotizacion?: number,
  folio?: string,
  idUnidadNegocio?: number,
  unidadNegocio?: string,
  idTipoOperacion?: number,
  tipoOperacion?: string,
  clasificacion?: string,
  cliente?: string,
  origen?: string,
  destino?: string,
  diesel?: number,
  costo?: number,
  FactorCargaSolcial?: number,
  distanciaTotal?: number,
  fletePorViaje?: number,
  numLlantas?: number,
  rendimientoKms?: number,
  rendimientoKmsVacio?:number,
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
  tarifa30?: number,
  tarifa35?: number,
  tarifa40?: number,
  porcentajeFinal?: number,
  tarifaFinal?: number,
  status?: string,
  precioVtaFinal?: number
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
