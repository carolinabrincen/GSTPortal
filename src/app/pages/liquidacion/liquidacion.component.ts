import { NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import { DxDataGridComponent, DxFormComponent} from 'devextreme-angular';
import { CurrencyPipe, NumberFormatStyle } from '@angular/common';
import { DxChartComponent, } from 'devextreme-angular';
import { ServiceSales } from '../tasks/app.serviceSales';
import { AniosModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Service } from '../../shared/models/ingresos/ingreso.service'
import { TotalPorcentajes } from '../../shared/models/ingresos/totalporcentajes.model'
import { ModeloGrafica } from '../../shared/models/ingresos/modeloGrafica.model';
import { Modelos } from '../../shared/models/ingresos/modelos.model';
import { LiquidacionService } from 'src/app/services/liquidacion/liquidacion';
import { Liquidacion} from 'src/app/shared/models/liquidacion/liquidacion.model'
import notify from 'devextreme/ui/notify';
import { StorageService } from '../../shared/services/storage.service';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';

const getcvetra =new Liquidacion; 

@Component({
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.scss'],
  providers: [UnidadesService, ServiceSales, CurrencyPipe, Service],
})

export class LiquidacionComponent implements OnInit {

  @ViewChild(DxChartComponent, { static: false }) chart: any;
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent;


  @ViewChild('gridModal', { static: false }) gridModal: DxDataGridComponent;


  //loading
  loadingVisible = false;
  isVisible = false;

  paginacion = 5;
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];
  autogroupingAC = false;
  chart_visualRange = [1, 31];

  formFilter: any = {
    Fecha: ''
  }
  pagos: any[] = []
  pagosXDia: any[] = [];  
  pagosXMes: any[] = [];
  pagosDetalleP: any[] = [];
  graficaPXMesResumen: any[] = [];
  graficaPXClasificado: any[] = [
    {total: 0}
  ];

  liquidacion: any[] = [];
  titulosMes: any;
  observaciones: any[] = [];
  viajesPenLiq: any[] = [];
  LiqPag: any[] = [];

  cvetra: number = 0;
  cvetra2: number = 0;
  verCvetra: number = 0;

  modTotal: boolean = false;
  modObservaciones: boolean = false;
  modVerObs: boolean = false;
  bolFormSoloLectura = false;
  buttonOptionsCancelar: any

  formObs: any = {
    cvetra: 0,
    idUsuario: "",
    observaciones: "",
  }

   buttonOptions: any = {
    text: 'Guardar',
    type: 'success',
    useSubmitBehavior: true,

  };

  username: string


  constructor(
    private liquidacionService: LiquidacionService,
    private service: ServiceSales,
    private currencyPipe: CurrencyPipe,
    testService: Service,
    private storageService: StorageService,
  ) {

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.formFilter

    const that = this;
    this.buttonOptionsCancelar= {
          text: 'Cancelar',
          type: 'danger',
          onClick(e: any) {
            that.modObservaciones = false;
          },
        };
  }

  ngOnInit(): void {
    // this.getDisponiblidadAnual();
    this.getUserName();
  }

  getLiquidacion() {

    // var printMes= "" ;
    // var printAnio = "";
    // var filtro = ""
    // printAnio = new Date(this.formFilter.Fecha.toISOString()).toLocaleString('es-MX',{year: 'numeric' });
    // printMes = new Date(this.formFilter.Fecha.toISOString()).toLocaleString('es-MX',{month:'numeric' });
    
    
    this.loadingVisible = true;
    this.liquidacionService.getLiquidacion(this.formFilter.Fecha.toISOString()).subscribe((response) => {
      this.titulosMes = response.data;
      this.liquidacion = response.data.spLiquidacionesMensuales;
      console.log(this.titulosMes)
      //this.graficaPXClasificado = myGrafica;

     


      this.loadingVisible = false;
    })
  }

  /*======================SELECTE FUNCIONS================================================*/

  verTotal(value){
    this.viajesPenLiq = [];
    this.LiqPag = [];
    this.cvetra2 = 0;

    this.cvetra2 = value.data.idPersonal;
     
    if(getcvetra.cvetra !== undefined){
      this.getDetalleOperador()
    }
    
    
    this.modTotal = true;


  }

  agregarObs(value){
    //console.log(value.data) 
    this.formObs.observaciones = "";
    this.cvetra = 0;

    this.cvetra = value.data.idPersonal;
    console.log(this.cvetra)
    this.modObservaciones = true;
  }

  VerObs(value){
    this.observaciones = []
    this.verCvetra = 0

    this.verCvetra = value.data.idPersonal;
    this.modVerObs = true;

    if(getcvetra.cvetra !== undefined){
      this.getObservaciones()
    }
  }
  
  buscarClick = (e: any) => {
    if (this.formFilter.Fecha !== "") {

      this.getLiquidacion();
      }else{
        notify({
          message: "Debe seleccionar la Fecha",
          position: {
            my: 'top center',
            at: 'top center',
          },
        }, 'warning', 4000);
      }
    };

    calcularPorcentajes(options: any) {
      //
      if (options.summaryProcess === 'calculate') {
        if (options.name === 'grupMargenUtilidaPor') {
          options.totalValue = .17;
        }
      }
    }


  getUserName(){
    this.username = this.storageService.getSession("username");

    //console.log(this.username)
  }

  guardarObservacion(e) {
      e.preventDefault();

        this.loadingVisible = true;
        console.log(this.formObs)
        this.liquidacionService.postObservaciones(this.cvetra, this.username, this.formObs.observaciones).subscribe(data =>{
          console.log(data)
        
          if (data.responseCode === 200) {

            notify({
          message: "La observación se guardo con exito",
          position: {
            my: 'center',
            at: 'center',
          },
        }, 'success', 4000);

              this.modObservaciones = false;
              this.bolFormSoloLectura = false;
              this.loadingVisible = false;
          }

       
        })
  }

  getObservaciones(){
    this.loadingVisible = true;
    //console.log(this.cvetra)
    this.liquidacionService.getObservaciones(this.verCvetra).subscribe(data =>{
      this.observaciones = data.data;
      //console.log(this.observaciones)
      this.loadingVisible = false;
    })
  }

  getDetalleOperador(){
    this.loadingVisible = true;

    this.liquidacionService.getDetalleOperador(this.formFilter.Fecha.toISOString(),this.cvetra2).subscribe(data =>{
      this.viajesPenLiq = data.data.liquidacionesPendientes;
      this.LiqPag = data.data.liquidacionSemanal;
      console.log(data.data)
      this.loadingVisible = false;
    })
  }


  ngAfterViewInit() {

    // this.pivotGrid.instance.bindChart(this.chart.instance, {
    //   dataFieldsDisplayMode: 'splitPanes',
    //   alternateDataFields: false,
    // });
  }
 onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }
  onRowPreparedObs(e: any){
   if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }

  }
  onCellPreparedObs(e: any){
    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }


  onRowPreparedPXD(e: any){
   if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

      if (c.value && c.value.toString().startsWith('-')) {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.color = "red";
        }

      }

      if (c.cellElement) {
        if(c.columnIndex == 12){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

        if(c.columnIndex == 15){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

      }
    });
  }

  if (e.rowType == 'totalFooter') {
    e.cells.forEach((c: any) => {


      // if(c.columnIndex == 11){
      //   c.cellElement.style.fontWeight = "bolder";
      //   c.cellElement.style.fontSize = "15px";
      //   c.cellElement.style.background = "#cdcbcb";
      // }

      // if(c.columnIndex == 17){
      //   c.cellElement.style.fontWeight = "bolder";
      //   c.cellElement.style.fontSize = "15px";
      //   c.cellElement.style.background = "#cdcbcb";
      // }

      // if(c.columnIndex == 20){
      //     c.cellElement.style.fontWeight = "bolder";
      //     c.cellElement.style.fontSize = "15px";
      //     c.cellElement.style.background = "#cdcbcb";
      //  }

      // if(c.columnIndex == 21){
      //     c.cellElement.style.fontWeight = "bolder";
      //     c.cellElement.style.fontSize = "15px";
      //     c.cellElement.style.background = "#cdcbcb";
      // }

    });
  }

    if (e.rowType == 'group') {

     //console.log(e)
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }

  }

  onCellPreparedPXD(e: any){
  if (e.rowType === 'groupFooter'){


      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
    }    


    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

  customizeOct(e) {  
  var gridCell = e.gridCell;
  if (gridCell.rowType === 'data') {


    if(e.gridCell.column.dataField == "promedioMensual"){
      e.backgroundColor = "#cdcbcb";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }
    
    if(e.gridCell.column.dataField == "total"){
      e.backgroundColor = "#cdcbcb";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }
  }

  if (gridCell.rowType === 'groupFooter') {
    
    e.backgroundColor = "#cdcbcb";
    e.fontWeight = "bolder"
    e.font = {bold: true}
  }

  if (gridCell.rowType === 'totalFooter') {
      
    e.backgroundColor = "#ff9460";
    e.fontWeight = "bolder"
    e.font = {bold: true}

    // if(e.gridCell.column.dataField == "promedioMensual"){
    //    e.backgroundColor = "#cdcbcb";
    //     e.fontWeight = "bolder"
    //     e.font = {bold: true}
    // }

    //     if(e.gridCell.column.dataField == "liquidado"){
    //    e.backgroundColor = "#cdcbcb";
    //     e.fontWeight = "bolder"
    //     e.font = {bold: true}
    // }

    //     if(e.gridCell.column.dataField == "noLiquidado"){
    //    e.backgroundColor = "#cdcbcb";
    //     e.fontWeight = "bolder"
    //     e.font = {bold: true}
    // }

    //     if(e.gridCell.column.dataField == "total"){
    //    e.backgroundColor = "#cdcbcb";
    //     e.fontWeight = "bolder"
    //     e.font = {bold: true}
    // }

   
  }
  }

  onRowPreparedVPL(e: any){
 if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

      if (c.value && c.value.toString().startsWith('-')) {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.color = "red";
        }

      }

      if (c.cellElement) {
        if(c.columnIndex == 12){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

      }
    });
  }

  if (e.rowType == 'totalFooter') {
    e.cells.forEach((c: any) => {
      // console.log(e)
      // if(e.summaryCell[8].length == 0){
      //   console.log("Entre!!!!!")
      //   e.summaryCell[8]
      // }
    });
  }

    if (e.rowType == 'group') {

     //console.log(e)
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }
  }

  onCellPreparedVPL(e: any){
 if (e.rowType === 'groupFooter'){


      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
    }    


    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   


        // console.log(c.totalItem.summaryCells)
        if(c.totalItem.summaryCells[8].length == 0){
          console.log("Entre !!")
          c.totalItem.summaryCells[8]= [{value: 0}];
        }

        if(c.totalItem.summaryCells[10].length == 0){
          console.log("Entre !!")
          c.totalItem.summaryCells[10]= [{value: 0}];
        }

        if(c.totalItem.summaryCells[11].length == 0){
          console.log("Entre !!")
          c.totalItem.summaryCells[11]= [{value: 0}];
        }

      });
    }
  }

  customizeVPL(e) {  
  var gridCell = e.gridCell;

  if (gridCell.rowType === 'data') {
    
    if(e.gridCell.column.dataField == "total"){
      e.backgroundColor = "#cdcbcb";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }
  }

  if (gridCell.rowType === 'groupFooter') {
    
    e.backgroundColor = "#cdcbcb";
    e.fontWeight = "bolder"
    e.font = {bold: true}
  }

  if (gridCell.rowType === 'totalFooter') {
      
      if(e.gridCell.column.dataField == "pagoXTonelada"){
          e.value = 0; 
      }
      if(e.gridCell.column.dataField == "maniobraAutocarga"){
          e.value = 0; 
      }
      if(e.gridCell.column.dataField == "maniobraFull"){
          e.value = 0; 
      }
      
      e.backgroundColor = "#ff9460";
      e.fontWeight = "bolder"
      e.font = {bold: true}   
  }
  }

  onRowPreparedLP(e: any){
 if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

      if (c.value && c.value.toString().startsWith('-')) {
        if(c.cellElement?.style !== undefined){
          c.cellElement.style.color = "red";
        }

      }

      if (c.cellElement) {
        if(c.columnIndex == 3){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

      }
    });
  }

  if (e.rowType == 'totalFooter') {
    e.cells.forEach((c: any) => {

    });
  }

    if (e.rowType == 'group') {

     //console.log(e)
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }
  }
  onCellPreparedLP(e: any){
 if (e.rowType === 'groupFooter'){


      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
    }    


    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

    customizeLP(e) {  
  var gridCell = e.gridCell;
  if (gridCell.rowType === 'data') {
    
    if(e.gridCell.column.dataField == "total"){
      e.backgroundColor = "#cdcbcb";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }
  }

  if (gridCell.rowType === 'groupFooter') {
    
    e.backgroundColor = "#cdcbcb";
    e.fontWeight = "bolder"
    e.font = {bold: true}
  }

  if (gridCell.rowType === 'totalFooter') {
      
    e.backgroundColor = "#ff9460";
    e.fontWeight = "bolder"
    e.font = {bold: true}   
  }
  }

  /**=========================PAGOS POR MES=========================================== */
  onRowPreparedPXM(e: any){
    // if (e.rowType == 'data') {
    //   e.cells.forEach((c: any) => {

    //     if (c.cellElement) {
    //       if (c.value && c.value.toString().startsWith('-')) {
    //         c.cellElement.style.color = "red";
    //         c.cellElement.style.fontWeight = "bolder";
    //       }
    //     }

        

    //   });
    // }

    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }

  }

  //==================Formato a la data de la grafica==================================
  customizeTooltip(args: any) {
    const valueText = (args.seriesName.indexOf('Total') != -1)
      ? new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(args.originalValue)
      : args.originalValue;

      var myvalue = Math.trunc(valueText);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return {
      html: `${args.seriesName}<div class='currency'>$ ${myFormat}</div>`,
    };
  }

  formatSliderTooltip(value) {

    return Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
  }

  onHidden() {}

  calculatePercent(value){
    var mypercent = Math.trunc(value);
    mypercent / 100;
    
    return mypercent +"%";
  }

  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    return "$ " + myFormat.join("");

  }
  
 
}
