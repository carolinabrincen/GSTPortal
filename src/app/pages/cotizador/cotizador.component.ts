import { ReportsPDFService } from './../../shared/reports/reports-pdf.service';
import { CotizadorService } from './../../services/cotizador/cotizador.service';
import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel} from './../../shared/models/cotizador/cotizador.model';
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
import { ifStmt } from '@angular/compiler/src/output/output_ast';







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
    folio: 0,
    sencillo:true,
    tipoViaje: "Solo de ida",
    regresa_vacio: false,
    regreso:"Vacio",
    id_ingreso: "0",
    id_area: undefined,
    unidadNegocio: "",
    id_tipo_operacion: 0,
    tipoOperacion: "",
    clasificacion: "",
    cliente: undefined,
    origen: undefined,
    destino: undefined,
    kms_ida: 0,
    kms_regreso:0,
    kms_totales: 0,
    casetas: 0,
    casetas_si: 0,
    casetas_regreso:0,
    casetas_regreso_si:0,
    casetas_total_sin_impuestos:0,
    diesel:0,
    diesel_sin_impuestos: 0,
    diesel_total_sin_impuestos:0,
    num_estancias_ida: 0,
    num_maniobras_ida: 0,
    ton_carga_ida:0,
    num_estancias_regreso:0,
    num_maniobras_regreso:0,
    ton_carga_regreso:0,
    clienta_paga: false,
    clientePagaCasetas:"No",
    tarifaFinal:0,
    costoViaje:0,
    toneladas:0,
    costo_tonelada:0,
    costoPorKm:0,
    ingresoPorKm:0
    
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
  RadioButtonPrecioXTonelada: any;


  bolModal: boolean = false;
  positionOf: string = '#myDiv';
  tituloModal: string = '';

  bolModalVariables = false;
  bolModalDetalleCotizacion = false;
  readonly allowedPageSizes = [5, 10, 20, 50];

  tipoRegistro: string = '';
  rowIndex: number = -1;
  bolEsViajeSencillo = true;
  bolEsPrecioTonelada = true;
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
    this.dieselValueChanged = this.dieselValueChanged.bind(this);
    this.caseta_ida_ValueChanged = this.caseta_ida_ValueChanged.bind(this);
    this.caseta_regreso_ValueChanged = this.caseta_regreso_ValueChanged.bind(this);
    this.toneladasTotalValueChanged = this.toneladasTotalValueChanged.bind(this);
    this.precioToneladasTotalValueChanged = this.precioToneladasTotalValueChanged.bind(this);

    
    //VER VARIABLES
    this.buttonOptionsVariables = {
      type: 'normal',
      text: 'Ver variables',
      icon: 'fieldchooser',

      onClick(e: any) {
        that.bolModalVariables = true;
        console.log(that.itemCotizacion.variables);
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
        console.log(this.bolEsViajeSencillo);
      },
    };

    //Configuracion de radiobutton Precio por tonelada
    this.RadioButtonPrecioXTonelada = {
      items: ['No', 'Si'],
      value: 'Precio por tonelada',
      layout: 'horizontal',
      onValueChanged: (e) => {
        this.bolEsPrecioTonelada = e.value === 'Si' ? true : false;
        
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
    // this.getClasificaciones();
  }

  // //#region :::: GETTERS ::::
  getCotizaciones() {
    this.arrCotizaciones = [];
    this.cotizadorService.getCotizaciones().subscribe(res => {
      this.arrCotizaciones = res.data;
    });
  }

  getPreCotizaciones() {
    this.arrPreCotizaciones = [];
    this.cotizadorService.getPreCotizaciones().subscribe(res => {
      this.arrPreCotizaciones = res.data;
        console.log(res.data);
    });
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
    this.itemCotizacion.diesel_sin_impuestos = e.value === 0 ? 0 : +(((this.itemCotizacion.diesel-0.40228)/1.16) + 0.40228).toFixed(2);
  }
 
  
  caseta_ida_ValueChanged(e: any) {
    this.itemCotizacion.casetas_si = e.value === 0 ? 0 : +((this.itemCotizacion.casetas)/1.16).toFixed(2);
  }

  caseta_regreso_ValueChanged(e: any) {
    console.log(e.value);
  
    
    this.itemCotizacion.casetas_regreso_si = e.value === 0 ? 0 : +((this.itemCotizacion.casetas_regreso)/1.16).toFixed(2);

   
 }
  toneladasTotalValueChanged(e: any) {
        console.log(this.itemCotizacion);
        if(this.itemCotizacion.costoViaje >0  && this.itemCotizacion.toneladas> 0)
        {
          if(this.itemCotizacion.tarifaFinal > 0)
          {
            this.itemCotizacion.costo_tonelada = this.itemCotizacion.tarifaFinal /
            e.value;
          }
          else
          {
          this.itemCotizacion.costo_tonelada = this.itemCotizacion.costoViaje /
            e.value;
          }
        }
        else
        {
          this.itemCotizacion.costo_tonelada = 0;
        }
   
  }

  precioToneladasTotalValueChanged(e: any) {
    
    if(this.itemCotizacion.costoViaje >0  && this.itemCotizacion.toneladas> 0)
    {

      var costoViaje = this.itemCotizacion.toneladas * e.value

      if(costoViaje > this.itemCotizacion.costoViaje )
      {
        this.itemCotizacion.tarifaFinal = costoViaje
      }
      else
      {
         this.itemCotizacion.tarifaFinal = 0;
         this.itemCotizacion.costo_tonelada = this.itemCotizacion.costoViaje / this.itemCotizacion.toneladas;
      }
    }
    else
    {
      this.itemCotizacion.costo_tonelada = 0;
    }

}

  mouseoverAprobarCotizacion(e: any) {
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
        this.cotizadorService.postAprobarCotizacion(clonedItem.idCotizacion).subscribe(res =>{
          if (res.responseCode === 200) {
            //agregamos precotizacion a las aprobadas
            const elementIndex = this.arrPreCotizaciones.findIndex(obj=> obj.idCotizacion == clonedItem.idCotizacion);
            this.arrPreCotizaciones[elementIndex].status = "APROBADA";
            this.arrCotizaciones.push(this.arrPreCotizaciones[elementIndex]);

            //Quitamos la aprobada de las precotizaciones
            this.arrPreCotizaciones = this.arrPreCotizaciones.filter(e => e.idCotizacion !== clonedItem.idCotizacion);

            notify({
              message: 'Cotización aprobada con exito!',
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'success', 3000);
          } else {
            notify({
              message: res.responseText,
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'error', 5000);
          }
        });
      }
    });
  }

  guardarCotizacionClick(e: any) {
    e.preventDefault();
    console.log('🚗', this.itemCotizacion);
    switch (this.tipoRegistro) {
      case 'nuevo':

        this.itemCotizacion.sencillo = this.itemCotizacion.tipoViaje === "Solo de ida" ? true : false;
        this.itemCotizacion.regresa_vacio = this.itemCotizacion.regreso === "Vacio" ? true : false;
        this.itemCotizacion.clienta_paga = this.itemCotizacion.clientePagaCasetas === "Si" ? true : false;
        this.itemCotizacion.idCotizacion = 0;
        
        
        console.log(this.itemCotizacion);
        this.cotizadorService.postNuevaCotizacion(this.itemCotizacion).subscribe(res => {
          if (res.responseCode === 200) {
            this.itemCotizacion = res.data;
            this.getPreCotizaciones();
            notify({
              message: 'Cotización guardada con exito!',
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'success', 3000);
          } else {
            notify({
              message: res.responseText,
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'error', 3000);
          }


        });
        break;
      case 'editar':
        console.log(this.itemCotizacion);
        this.itemCotizacion.sencillo = this.itemCotizacion.tipoViaje === "Solo de ida" ? true : false;
        this.itemCotizacion.regresa_vacio = this.itemCotizacion.regreso === "Vacio" ? true : false;
        this.itemCotizacion.clienta_paga = this.itemCotizacion.clientePagaCasetas === "Si" ? true : false;
        
        this.cotizadorService.postEditarCotizacion(this.itemCotizacion).subscribe(res => {
          if (res.responseCode === 200) {
            this.itemCotizacion = res.data;
            this.getPreCotizaciones();
            notify({
              message: 'Cotización guardada con exito!',
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'success', 3000);
          } else {
            notify({
              message: res.responseText,
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'error', 3000);
          }
        });
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
    // const clonedItem = { ...e.row.data };
    // this.rowIndex = e.row.rowIndex;
  
    // this.itemCotizacion = clonedItem;
    // this.tituloModal = "Editando Cotizacion Folio: " + this.itemCotizacion.folio;
    this.bolModal = true;
    this.cotizadorService.getCotizacion(e.row.data.idCotizacion).subscribe(res => {
      this.itemCotizacion = res.data;
      console.log(res.data);
      console.log(this.itemCotizacion);
      this.tituloModal = "Editando Cotizacion Folio: " + this.itemCotizacion.folio;
      
    });
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

        this.cotizadorService.postEliminarCotizacion(clonedItem.idCotizacion).subscribe(res =>{
          if (res.responseCode === 200) {
            this.arrPreCotizaciones = this.arrPreCotizaciones.filter(e => e.idCotizacion !== clonedItem.idCotizacion);
            notify({
              message: 'Cotización eliminada con exito!',
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'success', 3000);
          } else {
            notify({
              message: res.responseText,
              position: {
                my: 'center center',
                at: 'center center',
              },
            }, 'error', 3000);
          }
        });
      }
    });
  }

  limpiarForm() {
    console.log("limpiar");
    this.bolFormSoloLectura = false;
    //this.itemCotizacion = {};
    this.itemCotizacion = {
      idCotizacion: undefined,
      folio: 0,
      sencillo:true,
      tipoViaje: "Solo de ida",
      regresa_vacio: false,
      regreso:"Vacio",
      id_ingreso: "0",
      id_area: undefined,
      unidadNegocio: "",
      id_tipo_operacion: 0,
      tipoOperacion: "",
      clasificacion: "",
      cliente: undefined,
      origen: undefined,
      destino: undefined,
      kms_ida: 0,
      kms_regreso:0,
      kms_totales: 0,
      casetas: 0,
      casetas_si: 0,
      casetas_regreso:0,
      casetas_regreso_si: 0,
      casetas_total_sin_impuestos:0,
      diesel:0,
      diesel_sin_impuestos: 0,
      diesel_total_sin_impuestos:0,
      num_estancias_ida: 0,
      num_maniobras_ida: 0,
      ton_carga_ida:0,
      num_estancias_regreso:0,
      num_maniobras_regreso:0,
      ton_carga_regreso:0,
      clienta_paga: false,
      clientePagaCasetas:"No",
      tarifaFinal:0,
      costoViaje:0,
      toneladas:0,
      costo_tonelada:0,
      costoPorKm:0,
      ingresoPorKm:0
    };
  }

  asignarFolio() {
    
      this.itemCotizacion.folio = 1 ;
  }
  //#endregion :::: FIN EVENTOS ::::

}
