export interface UnidadesNegocioModel{
  idUnidad: number,
  nombre: string,
  ciudad: string
}
export interface MesesModel{
  idMes: number,
  nombre: string,
}

export interface OpcionesModel{
  idMes: number,
  nombre: string,
}
export interface AniosModel{
  idAnio: number,
  anio: string,
}

export interface CompaniaModel{
  idComp: number,
  compania: string,
}


export interface RentContModel {
  idUnidadNegocio: number,
  unidadNegocio: string,
  tracto: string,
  idOperador: number,
  operador: string,
  noLiquidacion: number,
  inicio: Date,
  fin: Date,
  diasViaje: number,
  viajes: number,
  kmsCargados: number,
  kmsVacios: number,
  lstDiesel: number,
  rendimiento:number,
  ingresoTotal: number,
  combustible: number,
  combustiblePor: number,
  casetas: number,
  casetasPor: number,
  sueldosLiquidacion: number,
  sueldosLiquidacionPor: number,
  otros: number,
  otrosPor: number,
  costosDirectosViaje: number,
  costosDirectosViajePor: number,
  sueldoBase: number,
  sueldoBasePor: number,
  cargaSocialNomina: number,
  cargaSocialNominaPor: number,
  fijoMtto: number,
  fijoMttoPor: number
  varMtto: number,
  varMttoPor: number,
  fijoTrans: number,
  fijoTransPor: number,
  varTrans: number,
  varTransPor: number,
  costosAdicionales: number,
  costosAdicionalesPor: number,
  margenUtilida: number,
  margenUtilidaPor: number
}
