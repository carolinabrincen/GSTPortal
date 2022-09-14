import internal from "stream"

export interface OpcionesModel{
    id: number,
    periodo: string
  }

  export interface KilometrosModel{
        Anio: number,
        Mes: string, 
        UdN: string,
        NoViaje: string,
        Operador: string,
        Cliente: string,
        Tracto: string,
        Rem1: string,
        DescRem1: string,
        Rem2: string,
        Descripcion: string,
        TipoViaje: string,
        Operacion: string,
        Fecha: Date,
        Origen: string,
        EdoOrigen: string,
        Destino: string,
        EdoDestino: string,
        Modelo: string,
        KmsRuta: number,
        KmsReal: number,
        Desviacion: number,
        Autorizado: string,
        KmsReporte: number,
        Diesel: number,
        Rendimiento: number,
        Liquidado: string,
        No_liquidacion?: string,
        Fecha_liquidacion?: Date,
        MesLiquidacion: string,
        DespachoViaje: string,
        FinViaje?: Date,
        Finalizado: string,
        DiasSinLiquidar: number,
        Periodo: string,
        Flete: number,
        Status: string
}