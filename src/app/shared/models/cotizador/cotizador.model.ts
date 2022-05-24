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
  dieselRegreso?: number,
  costo?: number,
  distanciaTotal?: number,
  fletePorViaje?: number,
  distanciaIda?: number,
  distanaciaRetorno?: number,
  casetas?: number,
  casetasRegreso?: number,
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
  precioVtaFinal?: number,
  sencillo?: boolean,
  regresa_vacio?: boolean,
  dieselTotal?: number,
  casetas_sin_iva?: number,
  estancias?: number,
  estanciasRegreso?: number,
  maniobras?: number,
  maniobrasRegreso?: number,
  toneladas?: number,
  toneladasRegreso?: number,
  toneladas_num?: number,
  precio_toneladas?: number,
  variables?: VariablesCotizacionModel[],
  costos_ida?: DetalleCotizacionModel[],
  costos_regreso?: DetalleCotizacionModel[]
}
export interface VariablesCotizacionModel{
  variable: string,
  valor?: number
}

export interface DetalleCotizacionModel{
  descripcion: string,
  unidad_medida:string,
  costo?: string,
  subtotal?: string,
  porcentaje?:number
}

export interface NuevaCotizacionModel{
  idCotizacion?:number,
  sencillo: boolean,
  regresa_vacio: boolean,
  id_ingreso: string,
  id_area: number,
  id_tipo_operacion: number,
  clasificacion: string,
  cliente: string,
  origen: string,
  destino: string,
  kms_ida: number,
  kms_regreso: number,
  casetas: number,
  casetas_regreso: number,
  diesel: number,
  num_estancias_ida: number,
  num_maniobras_ida: number,
  ton_carga_ida: number,
  num_estancias_regreso: number,
  num_maniobras_regreso: number,
  ton_carga_regreso:number,
  cliente_paga: boolean,
  tarifaFinal: number,
  costoViaje: number,
  tipoViaje?: string,
  regreso?: string,
  clientePagaCasetas?: string,
  unidadNegocio?: string,
  tipoOperacion?: string,
  toneladas?: number,
  precio_tonelada?: number,
  variables?: VariablesCotizacionModel[],
  costos_ida?: DetalleCotizacionModel[],
  costos_regreso?: DetalleCotizacionModel[]
  
}
