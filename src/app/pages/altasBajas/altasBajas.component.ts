import { NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import { DxDataGridComponent, } from 'devextreme-angular';
import { CurrencyPipe } from '@angular/common';
import { DxChartComponent, } from 'devextreme-angular';
import { ServiceSales } from '../tasks/app.serviceSales';
import { AniosModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Service } from '../../shared/models/ingresos/ingreso.service'
import { TotalPorcentajes } from '../../shared/models/ingresos/totalporcentajes.model'
import { ModeloGrafica } from '../../shared/models/ingresos/modeloGrafica.model';
import { Modelos } from '../../shared/models/ingresos/modelos.model';
import { AltasBjasService } from 'src/app/services/altasBajas/altasBajas.service';
import { TotalesXDisponibilidad, TotalOperacion, TotalesXTracos, TotalOpeT, TotalesXRemolques, TotalOpeR  } from '../../shared/models/disponiblidad/totalesXDisponibilidad';
import { AltasBajas } from 'src/app/shared/models/altasBajas/balanza.model';
import notify from 'devextreme/ui/notify';

import {
  Sales, SalesByState, SalesByStateAndCity, SalesOrOpportunitiesByCategory,
} from 'src/app/types/analytics';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';
import { Observable, forkJoin } from 'rxjs';

const totalesPor = new TotalPorcentajes;
const printMes = new AltasBajas;

type DashboardData = SalesOrOpportunitiesByCategory | Sales | SalesByState | SalesByStateAndCity | null;
type DataLoader = (startDate: string, endDate: string) => Observable<Object>;

@Component({
  templateUrl: './altasBajas.component.html',
  styleUrls: ['./altasBajas.component.scss'],
  providers: [UnidadesService, ServiceSales, CurrencyPipe, Service],
})

export class AltasBajasComponent implements OnInit {

  @ViewChild(DxChartComponent, { static: false }) chart: any;


  @ViewChild('gridModal', { static: false }) gridModal: DxDataGridComponent;



  //loading
  loadingVisible = false;

  paginacion = 5;
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];


  openModalOperador: boolean = false;
  openModalUnidades: boolean = false;

  expandGroup: boolean = true;
  isVisible = false;

  grid1: any[] = [];
  grid2: any[] = [];
  grid3: any[] = [];
 

 

  selectedUdn: number = 0;
  selectedPeriodo: number = 0;



  printUdn: string = "";

  formFilter: any = {
    Fecha: ''
  }

  bolFormSoloLectura = false;

  anual: any[] = [];
  mensualAltas: any[] = [];
  mensualBajas: any[] = [];
  mensualSaldos: any[] = [];
  detalleAltas: any[] = [];
  detalleBajas: any[] = [];
  resumenInicio: any[] = [];
  resumenAltas: any[] = [];
  resumenBajas: any[] = [];
  resumenFin: any[] = [];
  resumenMes: any[] = []

  mes1: string = "";
  mes2: string = "";
  mes3: string = "";



  opportunities: SalesOrOpportunitiesByCategory = null;
  sales: Sales = null;
  salesByState: SalesByState = null;
  salesByCategory: SalesByStateAndCity = null;
  conversion: any;
  leads: any;


  constructor(
    private altasBajasService: AltasBjasService,
    private service: ServiceSales,
    private currencyPipe: CurrencyPipe,
    testService: Service
  ) {

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.formFilter   
  }

  title="Inicio"

  ngOnInit(): void {
    // this.getDisponiblidadAnual();
  }

  getAltasBajas() {

     var Navidad = new Date(this.formFilter.Fecha);
    
     printMes.mes1 = Navidad.getMonth() + 1;

    console.log(printMes.mes1)

    if(printMes.mes1 == 1){
      this.mes1 = "Noviembre"
      this.mes2 = "Diciembre"
      this.mes3 = "Enero"
    }else if(printMes.mes1 == 2){
      this.mes1 = "Diciembre"
      this.mes2 = "Enero"
      this.mes3 = "Febrero"
    }else if(printMes.mes1 == 3){
      this.mes1 = "Enero"
      this.mes2 = "Febrero"
      this.mes3 = "Marzo"
    }else if(printMes.mes1 == 4){
      this.mes1 = "Febrero"
      this.mes2 = "Marzo"
      this.mes3 = "Abril"
    }else if(printMes.mes1 == 5){
      this.mes1 = "Marzo"
      this.mes2 = "Abril"
      this.mes3 = "Mayo"
    }else if(printMes.mes1 == 6){
      this.mes1 = "Abril"
      this.mes2 = "Mayo"
      this.mes3 = "Junio"
    }else if(printMes.mes1 == 7){
      this.mes1 = "Mayo"
      this.mes2 = "Junio"
      this.mes3 = "Julio"
    }else if(printMes.mes1 == 8){
      this.mes1 = "Junio"
      this.mes2 = "Julio"
      this.mes3 = "Agosto"
    }else if(printMes.mes1 == 9){
      this.mes1 = "Julio"
      this.mes2 = "Agosto"
      this.mes3 = "Septiembre"
    }else if(printMes.mes1 == 10){
      this.mes1 = "Agosto"
      this.mes2 = "Septiembre"
      this.mes3 = "Octubre"
    }else if(printMes.mes1 == 11){
      this.mes1 = "Septiembre"
      this.mes2 = "Octubre"
      this.mes3 = "Noviembre"
    }else if(printMes.mes1 == 12){
      this.mes1 = "Octubre"
      this.mes2 = "Noviembre"
      this.mes3 = "Diciembre"
    }

    this.altasBajasService.getAltasBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
      
      this.anual = response.data.anual;
      this.anual.sort((a, b) => (a.orden < b.orden ? -1 : 1));

      this.mensualAltas = response.data.mensualAltas;
      this.mensualAltas.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      this.mensualBajas = response.data.mensualBajas;
      this.mensualBajas.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      this.mensualSaldos = response.data.mensualSaldos;
      this.mensualSaldos.sort((a, b) => (a.orden < b.orden ? -1 : 1));

      this.detalleAltas = response.data.detalleAltas;
      this.detalleBajas = response.data.detalleBajas;

      var resumenI = response.data.resumenMes.filter((word) => word.tipo == "Inicio");
      this.resumenInicio = resumenI;
      var resumenA = response.data.resumenMes.filter((word) => word.tipo == "Altas");
      this.resumenAltas = resumenA;
      var resumenB = response.data.resumenMes.filter((word) => word.tipo == "Bajas");
      this.resumenBajas = resumenB;
      var resumenF = response.data.resumenMes.filter((word) => word.tipo == "Fin"); 
      this.resumenFin = resumenF;

      this.resumenMes = response.data.resumenMes;

      // const myingresos24 = data.data.scIng.filter((word) => word.mes !== "");      
      // this.ingresos24 = myingresos24//data.data.scIng;

      console.log(response.data)
      this.loadingVisible = false;
      // this.formFilter.Fecha = undefined
    });
  }

  /*======================SELECTE FUNCIONS================================================*/
  selectUdn(value: any) {
    this.selectedUdn = value.value;
    //console.log(this.selectedUdn)
    if (this.selectedUdn === 0) {
      this.printUdn = "TODOS";
    }
    if (this.selectedUdn === 1) {
      this.printUdn = "ORIZABA";
    }
    if (this.selectedUdn === 2) {
      this.printUdn = "GUADALAJARA";
    }
    if (this.selectedUdn === 3) {
      this.printUdn = "RAMOS ARIZPE";
    }
    if (this.selectedUdn === 4) {
      this.printUdn = "MEXICALI";
    }
    if (this.selectedUdn === 5) {
      this.printUdn = "HERMOSILLO";
    }
    if (this.selectedUdn === 8) {
      this.printUdn = "CUAUTITLAN";
    }
    if (this.selectedUdn === 9) {
      this.printUdn = "TULTITLAN";
    }
  }
  selectFecha(value: any) {
   
  }
 
  onClick(value: any){
    console.log(value)
  }

  buscarClick = (e: any) => {
    if (this.formFilter.Fecha !== "") {
      this.loadingVisible = true;
      
      this.getAltasBajas();
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






  ngAfterViewInit() {

    // this.pivotGrid.instance.bindChart(this.chart.instance, {
    //   dataFieldsDisplayMode: 'splitPanes',
    //   alternateDataFields: false,
    // });
  }

  customizeTooltip(args: any) {
    const valueText = (args.seriesName.indexOf('Total') != -1)
      ? new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(args.originalValue)
      : args.originalValue;

    return {
      html: `${args.seriesName}<div class='currency'>${valueText}</div>`,
    };
  }

  print() {
    this.chart.instance.print();
  }
  export() {
    this.chart.instance.exportTo('Example', 'png');
  }

  onRowPreparedResumenO(e: any) {
  
    if (e.rowType == 'totalFooter') {
      e.cells.forEach((c: any) => {
        if (c.cellElement) {
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "16px";
          c.cellElement.style.background = "#ff9460";
          c.cellElement.style.color = "black";
        }
      });
    };
  }

  onCellPreparedResumenO(e: any) {
  

  }

  onRowPreparedAnual(e: any) {
  
    if (e.rowType == 'totalFooter') {
      e.cells.forEach((c: any) => {
        if (c.cellElement) {
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "16px";
          c.cellElement.style.background = "#ff9460";
          c.cellElement.style.color = "black";
        }
      });
    };
  }

  onCellPreparedAnual(e: any) {
    var myRotacion  = 0;
    var totalRotacion = 0;
    if (e.rowType == 'totalFooter') {

      // e.totalItem.cells.forEach((c: any) => {
      //   myRotacion = c.totalItem.summaryCells[5][0].value;
        
      //   totalRotacion = myRotacion / 100;
      //   var mypercent = Math.trunc(totalRotacion);
      //   c.totalItem.summaryCells[5][0].value = mypercent;
      //  // console.log(c.totalItem.summaryCells)
      // })
    }
  }

  customizeOp(e) {
    var gridCell = e.gridCell;

    if (gridCell.rowType === 'data') {

      if (e.gridCell.column.dataField == "disponibles") {
        e.backgroundColor = "#DCDCDC";
        e.fontWeight = "bolder"
        e.font = { bold: true }
      }

      if (e.gridCell.column.dataField == "instructor") {
        e.backgroundColor = "#DCDCDC";
        e.fontWeight = "bolder"
        e.font = { bold: true }
      }

      if (e.gridCell.column.dataField == "noDisponibles") {
        e.backgroundColor = "#DCDCDC";
        e.fontWeight = "bolder"
        e.font = { bold: true }
      }

      if (e.gridCell.column.dataField == "bajaPor") {
        e.fontWeight = "bolder"
        e.font = { bold: true }
      }

      if (e.gridCell.column.dataField == "total") {
        e.backgroundColor = "#DCDCDC";
        e.fontWeight = "bolder"
        e.font = { bold: true }
      }

     
    }

    if (gridCell.rowType === 'groupFooter') {
      e.backgroundColor = "#DCDCDC";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }

    if (gridCell.rowType === 'totalFooter') {
      
      e.backgroundColor = "#ff9460";
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }
  }

  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //   }
    // }
  }

  //==================Formato a la data de la grafica==================================
  formatSliderTooltip(value) {

    return Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
  }

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }



  customizeK(e) {

    var gridCell = e.gridCell;
    if (gridCell.rowType === 'group') {

      e.backgroundColor = "#DCDCDC";
      e.fontWeight = "bolder"
      e.font = { bold: true }

    }

    if (gridCell.rowType === 'totalFooter') {

      e.backgroundColor = "#ff9460";
      e.fontWeight = "bolder"
      e.font = { bold: true }

    }


  }

  customizeExportData(cols, rows) {
    //console.log(cols)
    rows.forEach((row: any) => {

      //console.log(row)
      if (row.rowType == "groupFooter") {


      }

      if (row.rowType == "totalFooter") {
        //Enero
        row.values[5].value = totalesPor.totalE;
        row.values[7].value = totalesPor.presupuestoE;
        row.values[9].value = totalesPor.proyeccionE;
        //Febrero
        row.values[14].value = totalesPor.totalFB;
        row.values[16].value = totalesPor.presupuestoFB;
        row.values[18].value = totalesPor.proyeccionFB;
        //Marzo
        row.values[23].value = totalesPor.totalM;
        row.values[25].value = totalesPor.presupuestoM;
        row.values[27].value = totalesPor.proyeccionM;
        //Abril
        row.values[32].value = totalesPor.totalA;
        row.values[34].value = totalesPor.presupuestoA;
        row.values[36].value = totalesPor.proyeccionA;
        //Mayo
        row.values[41].value = totalesPor.totalMY;
        row.values[43].value = totalesPor.presupuestoMY;
        row.values[45].value = totalesPor.proyeccionMY;
        //JUnio
        row.values[50].value = totalesPor.totalJN;
        row.values[52].value = totalesPor.presupuestoJN;
        row.values[54].value = totalesPor.proyeccionJN;
        //Julio
        row.values[59].value = totalesPor.totalJL;
        row.values[61].value = totalesPor.presupuestoJL;
        row.values[63].value = totalesPor.proyeccionJL;
        //Agosto
        row.values[68].value = totalesPor.totalAG;
        row.values[70].value = totalesPor.presupuestoAG;
        row.values[72].value = totalesPor.proyeccionAG;
        //Septiembre
        row.values[77].value = totalesPor.totalS;
        row.values[79].value = totalesPor.presupuestoS;
        row.values[81].value = totalesPor.proyeccionS;
        //Octubre
        row.values[87].value = totalesPor.totalOC;
        row.values[89].value = totalesPor.presupuestoOC;
        row.values[91].value = totalesPor.proyeccionOC;
        //Noviembre
        row.values[96].value = totalesPor.totalNV;
        row.values[98].value = totalesPor.presupuestoNV;
        row.values[100].value = totalesPor.proyeccionNV;
        //Diciembre
        row.values[105].value = totalesPor.totalDC;
        row.values[107].value = totalesPor.presupuestoDC;
        row.values[109].value = totalesPor.proyeccionDC;

      }

    });
  }


  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    return "$ " + myFormat.join("");

  }

  dateBixInicio(value) {
    console.log(value)
  }

   calculatePercent(value){
    var mypercent = Math.trunc(value);
    mypercent / 100;
    
    return mypercent +"%";
  }

  formatRedondear(value){
    var numero = value;
    var numeroR
    numero = Number(numero.toFixed(2));
    numeroR = Math.round(numero)
    return numeroR
  }
}
