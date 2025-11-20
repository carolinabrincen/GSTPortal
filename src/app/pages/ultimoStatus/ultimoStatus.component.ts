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







@Component({
  selector: 'app-ultimoStatus',
  templateUrl: './ultimoStatus.component.html',
  styleUrls: ['./ultimoStatus.component.scss']
})
export class UltimoStatusComponent implements OnInit {

  private _user: IUser | null = null;

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
    {idArea: 1, nombre: 'TBK ORI' },
    {idArea: 2, nombre: 'TBK GDL' },
    {idArea: 3, nombre: 'TBK RAMOS' },
    {idArea: 4, nombre: 'TBK MEX' },
    {idArea: 5, nombre: 'TBK HER' },
    {idArea: 6, nombre: 'TBK PAZ' },
    {idArea: 7, nombre: 'ATM' },
    {idArea: 8, nombre: 'TEISA' },
    {idArea: 9, nombre: 'GEMINIS' },
    {idArea: 10, nombre: 'GST' },

  ]

  selectedUdn: number = 0;
  loadingVisible = false;

  constructor(
    private cotizadorService: CotizadorService,
    private renContService: RentContService,
    private renGerService: RentGerService,
    private pdfReport: ReportsPDFService,
    private ultimoStService: UltimoStatusService
  ) {
    const that = this;
    
  

  }

  ngOnInit(): void {
    
  }

  // //#region :::: GETTERS ::::
  getUltmoSta() {
    this.ultimoStService.getUltimoSt(this.selectedUdn).subscribe(res => {
      this.viajesCargados = res.data.enViajeCargado;
      this.viajesVacios = res.data.enViajeVacio ;
      this.sinViajes = res.data.sinViaje;
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
      
      this.getUltmoSta();
    }

  };

   onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
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

        if(c.columnIndex == 5 || c.columnIndex == 6 || c.columnIndex == 7 || c.columnIndex == 8 || c.columnIndex == 9
          || c.columnIndex == 10 || c.columnIndex == 11 || c.columnIndex == 12 || c.columnIndex == 13 || c.columnIndex == 14 || c.columnIndex == 15
        ){
          c.cellElement.style.background = "#DCDCDC";
        }
      })
      console.log(e)
    }
    
  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {
      if(c.columnIndex == 1){
          
        console.log(c.data.clasificacion)
      if (c.data.clasificacion == "12 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "green";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "yellow";
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "red";
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

  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {
      if(c.columnIndex == 1){
          
        console.log(c.data.clasificacion)
      if (c.data.clasificacion == "12 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "green";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "yellow";
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "red";
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

  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

    if (c.cellElement) {
      if(c.columnIndex == 1){
          
        console.log(c.data.clasificacion)
      if (c.data.clasificacion == "12 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "green";
        }

      }
      

      if (c.data.clasificacion == "24 Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          // c.cellElement.style.color = "white"
          c.cellElement.style.background = "yellow";
        }

      }

      if (c.data.clasificacion == "25+ Hrs.") {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.fontWeight = "bolder";
          // c.cellElement.style.fontSize = "15px";
          c.cellElement.style.color = "white"
          c.cellElement.style.background = "red";
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
