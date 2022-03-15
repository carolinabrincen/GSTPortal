import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  arrCotizaciones: CotizacionModel[] = [];
  arrPreCotizaciones: CotizacionModel[] = [];
  arrVariables: VariablesCotizacionModel[] = [];
  arrDetalleCotizacion: DetalleCotizacionModel[] = [];
  arrClasificaciones: string[] = [];
  constructor() { }

  getClasificaciones(){
    this.arrClasificaciones = [];
    this.arrClasificaciones.push("CAJA SECA", "FULL (VARIOS)", "SENCILLOS");
    return this.arrClasificaciones;
  }

  getPreCotizaciones() {
    this.arrPreCotizaciones = [];
    this.arrPreCotizaciones.push(
      {
        tipoViaje: 'Redondo',
        regreso: 'Vacio',
        clientePagaCasetas: 'Si',
        idCotizacion: 1,
        folio: "0004",
        idUnidadNegocio: 1,
        unidadNegocio: "ORIZABA",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "CAJA SECA",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 98,
        distanciaIda: 105,
        casetas: 1850,
        dieselFinal: 8745,
        tarifa: 4325,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'PRECOTIZACION'
      },
      {
        tipoViaje: 'Solo de ida',
        regreso: 'Vacio',
        clientePagaCasetas: 'Si',
        idCotizacion: 2,
        folio: "0005",
        idUnidadNegocio: 1,
        unidadNegocio: "GUADALAJARA",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "FULL (VARIOS)",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 82,
        distanciaIda: 99,
        casetas: 2350,
        dieselFinal: 6845,
        tarifa: 5423,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'PRECOTIZACION'
      },
      {
        tipoViaje: 'Solo de ida',
        regreso: 'Cargado',
        clientePagaCasetas: 'No',
        idCotizacion: 3,
        folio: "0006",
        idUnidadNegocio: 1,
        unidadNegocio: "RAMOS ARIZPE",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "SENCILLOS",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 126,
        distanciaIda: 117,
        casetas: 2950,
        dieselFinal: 9236,
        tarifa: 4325,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'PRECOTIZACION'
      },
    );

    return this.arrPreCotizaciones;

  }

  getCotizaciones() {
    this.arrCotizaciones = [];
    this.arrCotizaciones.push(
      {
        tipoViaje: 'Redondo',
        regreso: 'Vacio',
        clientePagaCasetas: 'Si',
        idCotizacion: 1,
        folio: "0001",
        idUnidadNegocio: 1,
        unidadNegocio: "ORIZABA",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "CAJA SECA",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 98,
        distanciaIda: 105,
        casetas: 1850,
        dieselFinal: 8745,
        tarifa: 4325,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'APROBADA'
      },
      {
        tipoViaje: 'Solo de ida',
        regreso: 'Vacio',
        clientePagaCasetas: 'Si',
        idCotizacion: 2,
        folio: "0002",
        idUnidadNegocio: 1,
        unidadNegocio: "GUADALAJARA",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "FULL (VARIOS)",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 82,
        distanciaIda: 99,
        casetas: 2350,
        dieselFinal: 6845,
        tarifa: 5423,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'APROBADA'
      },
      {
        tipoViaje: 'Solo de ida',
        regreso: 'Cargado',
        clientePagaCasetas: 'No',
        idCotizacion: 3,
        folio: "0003",
        idUnidadNegocio: 1,
        unidadNegocio: "RAMOS ARIZPE",
        idTipoOperacion: 1,
        tipoOperacion: "CAJA SECA",
        clasificacion: "SENCILLOS",
        cliente: "MPM JALPITAN",
        origen: "JALTIPAN",
        destino: "SAN LUIS POTOSI",
        diesel: 21.77,
        costo: 18.77,
        FactorCargaSolcial: .58,
        distanciaTotal: 1946,
        fletePorViaje: 54706,
        numLlantas: 34,
        rendimientoKms: 160000,
        rendimientoKmsVacio: 380,
        costoLlanta: 5000,
        costoLlantaKmFull: 1.06,
        distanaciaRetorno: 126,
        distanciaIda: 117,
        casetas: 2950,
        dieselFinal: 9236,
        tarifa: 4325,
        costoPorKm: 568,
        ingresoPorKm: 978,
        tarifa25: 1423,
        tarifa30: 2745,
        tarifa35: 2354,
        tarifa40: 2512,
        porcentajeFinal: .37,
        tarifaFinal: 6725,
        status: 'APROBADA',
        precioVtaFinal: 8756.50
      },
    );

    return this.arrCotizaciones;

  }

  getVariablesCotizacion() {
    this.arrVariables = [];
    this.arrVariables.push(
      {
        descripcion: "Sueldo Base",
        valor: 77.71,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Sueldo Operador/Km",
        valor: 2.79,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Cuota por Viaje",
        valor: 178.16,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Costo en llantas directo",
        valor: 0.4442,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Absorción costo fijo transportación",
        valor: 2.0085,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Costo variable de mtto.",
        valor: 11680,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Absorción costo fijo de mtto.",
        valor: 0.9356,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Gastos de Administración",
        valor: 997.78,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Facilidades Administrativas",
        valor: 0.21,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Rendimiento Full",
        valor: 1.87,
        fechaAct: new Date(2022, 1, 5)
      },
      {
        descripcion: "Cuota por toneladas cargada",
        valor: undefined,
        fechaAct: undefined
      },
      {
        descripcion: "Maniobras doble remolque",
        valor: 148.46,
        fechaAct: new Date(2022, 1, 5)
      }
    );

    return this.arrVariables;
  }

  getDetalleCotizacion() {
    this.arrDetalleCotizacion = [];
    this.arrDetalleCotizacion.push(
      {
        descripcion: 'Ranking',
        valor: '1'
      },
      {
        descripcion: 'Cliente',
        valor: 'MPM JALTIPAN'
      },
      {
        descripcion: 'Distancia SCT',
        valor: '972'
      },
      {
        descripcion: 'KMS cargados ida',
        valor: '973'
      },
      {
        descripcion: 'KMS vacios regreso',
        valor: '973'
      },
      {
        descripcion: 'KMS totales',
        valor: '1,946'
      },
      {
        descripcion: 'Casetas',
        valor: '$ 4,447.00'
      },
      {
        descripcion: 'Ingreso',
        valor: '$ 54,706.00'
      },
      {
        descripcion: 'Diesel',
        valor: '$ 19,530.00',
        porcentaje: 0.36
      },
      {
        descripcion: 'Sueldo x Kilómetro',
        valor: '$ 2,812.00',
        porcentaje: 0.05
      },
      {
        descripcion: 'Cuota x viaje',
        valor: '$ 331.92',
        porcentaje: 0
      },
      {
        descripcion: 'Sueldo fijo',
        valor: '$ 307.00',
        porcentaje: 0.01
      },
      {
        descripcion: 'Carga social',
        valor: '$ 2,002.00',
        porcentaje: 0.04
      },
      {
        descripcion: 'Llantas',
        valor: '$ 2,068.00',
        porcentaje: 0.04
      },
      {
        descripcion: 'Casetas dobles',
        valor: '$ 8,894.00',
        porcentaje: 0.16
      },
      {
        descripcion: 'Facilidades administrativas',
        valor: '$ 415.00',
        porcentaje: 0.01
      },
      {
        descripcion: 'Mantenimiento var.',
        valor: '$ 4,804.00',
        porcentaje: 0.09
      },
      {
        descripcion: 'TOTAL VARIABLES',
        valor: '$ 41,162.00',
        porcentaje: 0.75
      },
      {
        descripcion: 'Costo fijo Transp.',
        valor: '$ 3,742.00',
        porcentaje: 0.07
      },
      {
        descripcion: 'Costo fijo Mtto.',
        valor: '$ 1,520.00',
        porcentaje: 0.03
      },
      {
        descripcion: 'Depreciación',
        valor: '$ 0.00',
        porcentaje: 0
      },
      {
        descripcion: 'TOTAL FIJO',
        valor: '$ 5,262.00',
        porcentaje: 0.10
      },
      {
        descripcion: 'TOTAL COSTOS',
        valor: '$ 46,424.00',
        porcentaje: 0.87
      },
      {
        descripcion: 'Gastos de administración',
        valor: '$ 998.00',
        porcentaje: 0.02
      },
      {
        descripcion: 'TOTAL COSTOS Y GASTOS',
        valor: '$ 47,422.00',
        porcentaje: 0.87
      },
      {
        descripcion: 'UTILIDAD BRUTA',
        valor: '$ 7,284.00',
        porcentaje: 0.13
      },
      {
        descripcion: 'Ingreso x Km.',
        valor: '$ 28.11',
      },
      {
        descripcion: 'Costo x Km.',
        valor: '$ 24.37',
      }
    );
    return this.arrDetalleCotizacion;
  }


}
