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
import { IUser } from 'src/app/shared/services';

import { UltimoStatusService } from 'src/app/services/ultimoStatus/ultimoStatus.service';

import dxSelectBox from 'devextreme/ui/select_box';
import { runInThisContext } from 'vm';

import { NgZone } from '@angular/core';





@Component({
  selector: 'app-ultimoStatus',
  templateUrl: './ultimoStatus.component.html',
  styleUrls: ['./ultimoStatus.component.scss']
})
export class UltimoStatusComponent implements OnInit {

  private _user: IUser | null = null;

  intervalId: any;
  viajesCargados: any[] = [];
  viajesVacios: any[] = [];
  sinViajes: any[] = [];

  arrPreCotizaciones: CotizacionModel[] = [];
  arrUnidadesNegocio: UnidadesNegocioModel[] = [];
  arrTipoOperacion: TiposOperacionModel[] = [];
  arrVariables: VariablesCotizacionModel[] = [];
  arrDetalleCotizacion: DetalleCotizacionModel[] = [];
  arrClasificaciones: string[] = [];
 

  itemCotizacion: any = {
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
    ingresoPorKm:0,
    rend_cargado:0,
    rend_vacio:0
    
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

  buttonOptionsActualizar: any;
  buttonOptionsAprobar: any;
  buttonOptionsCerar: any;

  bolModal: boolean = false;
  positionOf: string = '#myDiv';
  tituloModal: string = '';

  bolModalVariables = false;
  bolModalDetalleCotizacion = false;
  readonly allowedPageSizes = [5, 10, 20, 50];

  tipoRegistro: string = '';
  operacion: string = '';
  rowIndex: number = -1;
  bolEsViajeSencillo = true;
  bolEsPrecioTonelada = true;
  bolEsViajeVacio = true;
  bolBotonAprobarCotizacion = false;
  bolFormSoloLectura = false;

  modConfimation: boolean= false


   udn: any[] = [
    {idArea: 1, nombre: 'ORIZABA' },
    {idArea: 2, nombre: 'GUADALAJARA' },
    {idArea: 3, nombre: 'RAMOS ARIZPE' },
    {idArea: 4, nombre: 'MEXICALI' },
    {idArea: 5, nombre: 'HERMOSILLO' },
    {idArea: 8, nombre: 'CUAUTITLAN' },
    {idArea: 9, nombre: 'TULTITLAN' },

  ]

  selectedUdn: number = 0;
  loadingVisible = false;

  constructor(
    private cotizadorService: CotizadorService,
    private renContService: RentContService,
    private renGerService: RentGerService,
    private pdfReport: ReportsPDFService,
    private ultimoStService: UltimoStatusService,
    private ngZone: NgZone
  ) {
    const that = this;
    
  

  }

  ngOnInit(): void {
    
  }

  // //#region :::: GETTERS ::::
  getUltmoSta() {
    this.ultimoStService.getUltimoSt(this.selectedUdn).subscribe(res => {
      
      this.viajesCargados = res.data.enViajeCargado.sort((a, b) => (a.tiempo < b.tiempo ? -1 : 1));
      this.viajesVacios = res.data.enViajeVacio.sort((a, b) => (a.tiempo < b.tiempo ? -1 : 1));
      this.sinViajes = res.data.sinViaje.sort((a, b) => (a.tiempo < b.tiempo ? -1 : 1));
      console.log(res.data)

      this.loadingVisible = false;
    });
  }





  selectUdn(value: any){
    this.selectedUdn = value.value;
    console.log(this.selectedUdn)
  }


   buscarClick = (e: any) => {
    if (this.selectedUdn !==  0) {
      this.loadingVisible = true;
      
      if (this.intervalId) {
        console.log("INTERVAL ID: " + this.intervalId);
        clearInterval(this.intervalId);
      }
  
      this.getUltmoSta();

      this.actualizarIntervalo();
    }

    

  };

  actualizarIntervalo() {


    this.ngZone.run(() => {

    this.intervalId = setInterval(() => {
        console.log('Interval ejecutado');
        this.getUltmoSta();
      }, 5000);
    });
     
  }

  detenerIntervalo() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  ngOnDestroy(): void {
    // Por seguridad, detenerlo al destruir el componente
    this.detenerIntervalo();
  }

   onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }

 
  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //   }
    // }
  }






  mouseoverAprobarCotizacion(e: any) {
    //TODO: Validar que sea tamien el gerente
    this.bolBotonAprobarCotizacion = e.value === 'PRECOTIZACION';

  }
 
  asignarFolio() {
    
      this.itemCotizacion.folio = 1 ;
  }
  //#endregion :::: FIN EVENTOS ::::


  onRowPreparedVC(e){

    if(e.rowType == 'header'){
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          // c.cellElement.style.fontSize = "18px";
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.color = "#000000"

          if(c.columnIndex == 5 || c.columnIndex == 6 || c.columnIndex == 7 || c.columnIndex == 8 || c.columnIndex == 9
            || c.columnIndex == 10 || c.columnIndex == 11 || c.columnIndex == 12 || c.columnIndex == 13 || c.columnIndex == 14 || c.columnIndex == 15
          ){
            c.cellElement.style.background = "#DCDCDC";
            // c.cellElement.style.fontSize = "18px";
            c.cellElement.style.fontWeight = "bolder";

          }
        }
      })
     // console.log(e)
    }
    
  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {
      if(c.columnIndex == 0 || c.columnIndex == 2 || c.columnIndex == 3 || c.columnIndex == 4 || c.columnIndex == 16){
          if(c.cellElement?.style !== undefined){
            c.cellElement.style.color = "#001029"
            c.cellElement.style.fontWeight = "bolder";
          }
      }

      if(c.columnIndex == 1){
          

      if (c.data.clasificacion == "12 Hrs.") {
        console.log(c.data)
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#a9d08e";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ffd966";
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ff5050";
        }

      }
      }
    }
    });
  }
  }
  onContentReadyVC(e){
  }
  onCellPreparedVC(e){
  }

  onRowPreparedVV(e){

    if(e.rowType == 'header'){
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          // c.cellElement.style.fontSize = "18px";
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.color = "#000000"

          if(c.columnIndex == 5 || c.columnIndex == 6 || c.columnIndex == 7 || c.columnIndex == 8 || c.columnIndex == 9
            || c.columnIndex == 10 || c.columnIndex == 11 || c.columnIndex == 12
          ){
            c.cellElement.style.background = "#DCDCDC";
                      // c.cellElement.style.fontSize = "18px";
          c.cellElement.style.fontWeight = "bolder";

          }
        }
      })
      //console.log(e)
    }

  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {
      if(c.columnIndex == 0 || c.columnIndex == 2 || c.columnIndex == 3 || c.columnIndex == 4 || c.columnIndex == 13){
          if(c.cellElement?.style !== undefined){
            c.cellElement.style.color = "#001029"
            c.cellElement.style.fontWeight = "bolder";
          }
      }


      if(c.columnIndex == 1){
          
        console.log(c.data.clasificacion)
      if (c.data.clasificacion == "12 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#a9d08e";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ffd966"
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ff5050";
        }

      }
      }
    }
    });
  }
  }
  onContentReadyVV(e){
  }
  onCellPreparedVV(e){
  }

  onRowPreparedSV(e){

    if(e.rowType == 'header'){
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          // c.cellElement.style.fontSize = "18px";
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.color = "#000000"

          if(c.columnIndex == 5 || c.columnIndex == 6 || c.columnIndex == 7 || c.columnIndex == 8 || c.columnIndex == 9
            || c.columnIndex == 10 || c.columnIndex == 11 || c.columnIndex == 12 || c.columnIndex == 13 || c.columnIndex == 14
            || c.columnIndex == 15 || c.columnIndex == 16
          ){
            c.cellElement.style.background = "#DCDCDC";
                      // c.cellElement.style.fontSize = "18px";
          c.cellElement.style.fontWeight = "bolder";

          }
        }
      })
    }

  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {


      if(c.columnIndex == 0 || c.columnIndex == 2 || c.columnIndex == 3 || c.columnIndex == 4 || c.columnIndex == 17){
          if(c.cellElement?.style !== undefined){
            c.cellElement.style.color = "#001029"
            c.cellElement.style.fontWeight = "bolder";
          }
      }

      if(c.columnIndex == 1){
          
      if (c.data.clasificacion == "12 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#a9d08e";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ffd966";
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "#ff5050";
        }

      }
      }
      



    }
    });
  }
  }
  onContentReadySV(e){
  }
  onCellPreparedSV(e){
  }


}
