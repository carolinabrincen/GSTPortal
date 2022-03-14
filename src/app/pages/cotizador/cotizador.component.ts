import { ReportsPDFService } from './../../shared/reports/reports-pdf.service';
import { CotizadorService } from './../../services/cotizador/cotizador.service';
import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Component, OnInit } from '@angular/core';
import {
  DxDataGridModule,
  DxDataGridComponent,
  DxTemplateModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';
import { UnidadesNegocioModel } from 'src/app/shared/models/rentabilidad-contable/renta-contable.model';
import { RentContService } from 'src/app/services/rentabilidad-contable/rent-cont.service';
import { RentGerService } from 'src/app/services/rentabilidad-gerencial/rent-ger.service';
import { TiposOperacionModel } from 'src/app/shared/models/rentabilidad-gerencial/renta-geren.model';
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent implements OnInit {

  arrCotizaciones: CotizacionModel[] = [];
  arrPreCotizaciones: CotizacionModel[] = [];
  arrUnidadesNegocio: UnidadesNegocioModel[] = [];
  arrTipoOperacion: TiposOperacionModel[] = [];
  arrVariables: VariablesCotizacionModel[] = [];
  arrDetalleCotizacion: DetalleCotizacionModel[] = [];
  arrClasificaciones: string[] = [];

  itemCotizacion: CotizacionModel = {
    idCotizacion: undefined,
    folio: "0001",
    idUnidadNegocio: 1,
    unidadNegocio: undefined,
    idTipoOperacion: undefined,
    tipoOperacion: undefined,
    cliente: undefined,
    origen: undefined,
    destino: undefined,
    diesel: undefined,
    costo: 18.77,
    FactorCargaSolcial: .58,
    distanciaTotal: undefined,
    fletePorViaje: undefined,
    velKmsHr: 50,
    tiempoCarga: undefined,
    tiempoDescarga: undefined,
    descansos: undefined,
    transitoCargado: 38.9,
    transitoVacio: 38.9,
    totalTiempo: 89.9,
    numLlantas: 34,
    rendimientoKms: 160000,
    costoLlanta: 5000,
    costoLlantaKmFull: 1.06,
    precioVtaFinal:0
  };

  buttonOptions: any = {
    text: 'Guardar',
    type: 'default',
    icon: 'check',
    useSubmitBehavior: true,

  };
  buttonCalcularVariables: any;
  buttonOptionsVariables: any;
  buttonOptionsPre: any;
  buttonOptionsImprimir: any;
  buttonOptionsRadioTipoViaje: any;
  RadioButtonTipoViaje: any;
  RadioButtonRegreso: any;
  RadioButtonClientePagaCasetas: any;


  bolModal: boolean = false;
  positionOf: string = '#myDiv';
  tituloModal: string = '';

  bolModalVariables = false;
  bolModalDetalleCotizacion = false;
  readonly allowedPageSizes = [5, 10, 20, 50];

  tipoRegistro: string = '';
  rowIndex: number = -1;
  bolEsViajeSencillo = true;
  bolEsViajeVacio = true;
  bolBotonAprobarCotizacion = false;
  bolFormSoloLectura = false;

  constructor(
    private cotizadorService: CotizadorService,
    private renContService: RentContService,
    private renGerService: RentGerService,
    private pdfReport: ReportsPDFService
  ) {
    const that = this;
    this.editarCotizacionClick = this.editarCotizacionClick.bind(this);
    this.eliminarCotizcionClick = this.eliminarCotizcionClick.bind(this);
    this.verCortizacionClick = this.verCortizacionClick.bind(this);
    this.distanciaTotalValueChanged = this.distanciaTotalValueChanged.bind(this);
    this.dieselValueChanged = this.dieselValueChanged.bind(this);

    //Configuracion de botones
    //CALCULAR VARIABLES
    this.buttonCalcularVariables = {
      type: 'normal',
      text: 'calcular',
      icon: 'datafield',

      onClick(e: any) {
        console.log('Calcular Variables', that.itemCotizacion);
        if (that.itemCotizacion.idUnidadNegocio && that.itemCotizacion.idTipoOperacion >= 0 && that.itemCotizacion.clasificacion !== '') {

        } else {
          notify({
            message: 'Debe seleccionar: Unidad de Negocio, Tipo de Operacion y Clasificación, verifique!',
            position: {
              my: 'center center',
              at: 'center center',
            },
          }, 'warning', 3000);

        }


      },
    };
    //VER VARIABLES
    this.buttonOptionsVariables = {
      type: 'normal',
      text: 'Ver variables',
      icon: 'fieldchooser',

      onClick(e: any) {
        that.bolModalVariables = true;
        console.log('modal variables');

      },
    };
    //PREVIZUALIZAR
    this.buttonOptionsPre = {
      type: 'normal',
      text: 'Previsualizar',
      icon: 'file',

      onClick(e: any) {
        that.bolModalDetalleCotizacion = true;
        console.log('Detalle Cotizacion');

      },
    };
    //IMPRIMIR
    this.buttonOptionsImprimir = {
      type: 'normal',
      text: 'Imprimir',
      icon: 'print',

      onClick(e: any) {
        console.log('mostrar PDF');
        pdfReport.obtenerReporte();

      },
    };
    //Configuracion de radiobutton Tipo de viaje
    this.RadioButtonTipoViaje = {
      items: ['Solo de ida', 'Redondo'],
      value: 'Solo de ida',
      layout: 'horizontal',
      onValueChanged: (e) => {
        this.bolEsViajeSencillo = e.value === 'Solo de ida' ? true : false;
        console.log(e);
      },
    };
    //Configuracion de radiobutton Regreso
    this.RadioButtonRegreso = {
      items: ['Vacio', 'Cargado'],
      value: 'Vacio',
      layout: 'horizontal',
      onValueChanged: (e) => {
        this.bolEsViajeVacio = e.value === 'Vacio' ? true : false;
        console.log(e);
      },
    };
    //Configuracion de radiobutton Cliente Paga Casetas
    this.RadioButtonClientePagaCasetas = {
      items: ['No', 'Si'],
      value: 'No',
      layout: 'horizontal',
      onValueChanged: (e) => {
      },
    };

  }

  ngOnInit(): void {
    this.getCotizaciones();
    this.getPreCotizaciones();
    this.getUnidadesNegocio();
    this.getTiposOperacion();
    this.getVariablesCotizacion();
    this.getDetalleCotizacion();
    this.getClasificaciones();
  }

  //#region :::: GETTERS ::::
  getClasificaciones() {
    this.arrClasificaciones = [];
    this.arrClasificaciones = this.cotizadorService.getClasificaciones();
  }

  getDetalleCotizacion() {
    this.arrDetalleCotizacion = [];
    this.arrDetalleCotizacion = this.cotizadorService.getDetalleCotizacion();
  }

  getVariablesCotizacion() {
    this.arrVariables = [];
    this.arrVariables = this.cotizadorService.getVariablesCotizacion();
  }
  getCotizaciones() {
    this.arrCotizaciones = [];
    this.arrCotizaciones = this.cotizadorService.getCotizaciones();
  }
  getPreCotizaciones() {
    this.arrPreCotizaciones = [];
    this.arrPreCotizaciones = this.cotizadorService.getPreCotizaciones();
  }

  getUnidadesNegocio() {
    this.arrUnidadesNegocio = [];
    this.renContService.getUnidadesNegocio().subscribe(res => {
      this.arrUnidadesNegocio = res.data;
    });
  }

  getTiposOperacion() {
    this.arrTipoOperacion = [];
    this.renGerService.getTiposOperacion().subscribe(res => {
      this.arrTipoOperacion = res.data;
      console.log(this.arrTipoOperacion);
    });

  }
  //#endregion :::: FIN GETTERS ::::

  //#endregion :::: EVENTOS :::::
  dieselValueChanged(e: any) {
    this.itemCotizacion.costo =  e.value === 0 ? 0 :  +(this.itemCotizacion.diesel / 1.16).toFixed(2);
  }

  distanciaTotalValueChanged(e: any) {
    this.itemCotizacion.distanciaTotal = this.itemCotizacion.distanciaIda +
      this.itemCotizacion.distanaciaRetorno;
  }

  mouseoverAprobarCotizacion(e: any) {
    console.log(e);
    //TODO: Validar que sea tamien el gerente
    this.bolBotonAprobarCotizacion = e.value === 'PRECOTIZACION';

  }
  aprobarCotizacionClick(e: any) {
    console.log(e);
    const clonedItem = { ...e.row.data };
    let result = confirm("<i>Esta seguro de aprobar la cotización: <b>" +
      clonedItem.folio + "</b></i>", "Confirmar Operación");
    result.then((dialogResult) => {
      if (dialogResult) {
        //TODO: Implementar endpoint para aprobar cotizacion
        e.row.data.status = 'APROBADA';
        notify({
          message: 'Cotización aprobada con exito!',
          position: {
            my: 'center center',
            at: 'center center',
          },
        }, 'success', 3000);
      }
    });
  }

  guardarCotizacionClick(e: any) {
    e.preventDefault();
    console.log('🚗', this.itemCotizacion);
    switch (this.tipoRegistro) {
      case 'nuevo':
        this.itemCotizacion.status = "PRECOTIZACION";
        this.arrPreCotizaciones.push(this.itemCotizacion);
        notify({
          message: 'Cotización guardada con exito!',
          position: {
            my: 'center center',
            at: 'center center',
          },
        }, 'success', 3000);
        break;
      case 'editar':
        this.arrCotizaciones[this.rowIndex] = this.itemCotizacion;
        notify({
          message: 'Cotización modificada con exito!',
          position: {
            my: 'center center',
            at: 'center center',
          },
        }, 'success', 3000);
        break;
      default:
        break;
    }
    this.limpiarForm();
    this.bolModal = false;
    this.bolFormSoloLectura = false;
  }

  editarCotizacionClick(e: any) {
    this.bolFormSoloLectura = false;
    e.event.preventDefault();
    this.tipoRegistro = "editar";
    const clonedItem = { ...e.row.data };
    this.rowIndex = e.row.rowIndex;
    console.log(this.rowIndex);
    this.itemCotizacion = clonedItem;
    this.tituloModal = "Editando Cotizacion Folio: " + this.itemCotizacion.folio;
    this.bolModal = true;
  }

  verCortizacionClick(e: any) {
    e.event.preventDefault();
    this.bolFormSoloLectura = true;
    const clonedItem = { ...e.row.data };
    this.itemCotizacion = clonedItem;
    this.tituloModal = "Cotizacion Folio: " + this.itemCotizacion.folio + " (Solo Lectura)";
    this.bolModal = true;
  }

  nuevaCotizacionClick() {
    this.bolFormSoloLectura = false;
    this.tituloModal = 'Nueva Cotización';
    this.tipoRegistro = 'nuevo';
    this.limpiarForm();
    this.asignarFolio();
    this.bolModal = true;
  }

  eliminarCotizcionClick(e: any) {
    const clonedItem = { ...e.row.data };
    let result = confirm("<i>Esta seguro de eliminar cotización: " +
      clonedItem.folio + "</i>", "Confirmar Operación");
    result.then((dialogResult) => {
      if (dialogResult) {
        // this.arrCotizaciones.splice(e.row.rowIndex);
        this.arrCotizaciones = this.arrCotizaciones.filter(e => e.folio !== clonedItem.folio);
        notify({
          message: 'Cotización eliminada con exito!',
          position: {
            my: 'center center',
            at: 'center center',
          },
        }, 'success', 3000);
      }
    });
  }

  limpiarForm() {
    this.bolFormSoloLectura = false;
    this.itemCotizacion = {};
    this.itemCotizacion = {
      tipoViaje: 'Solo de ida',
      regreso: 'Vacio',
      clientePagaCasetas: 'No',
      idCotizacion: undefined,
      folio: "",
      idUnidadNegocio: undefined,
      unidadNegocio: undefined,
      idTipoOperacion: undefined,
      tipoOperacion: undefined,
      clasificacion: '',
      cliente: undefined,
      origen: undefined,
      destino: undefined,
      diesel: 0,
      costo: 0,
      FactorCargaSolcial: 0,
      distanciaTotal: 0,
      fletePorViaje: 0,
      velKmsHr: 0,
      tiempoCarga: 0,
      tiempoDescarga: 0,
      descansos: 0,
      transitoCargado: 0,
      transitoVacio: 0,
      totalTiempo: 0,
      numLlantas: 0,
      rendimientoKms: 0,
      rendimientoKmsVacio: 0,
      costoLlanta: 0,
      costoLlantaKmFull: 0,
      distanciaIda: 0,
      distanaciaRetorno: 0,
      precioVtaFinal: 0
    };
  }

  asignarFolio() {
    this.arrCotizaciones.length == 0 ?
      this.itemCotizacion.folio = "0001" :
      this.itemCotizacion.folio = ((this.arrCotizaciones.length + this.arrPreCotizaciones.length) + 1).toString().padStart(4, '0');
  }
  //#endregion :::: FIN EVENTOS ::::

}
