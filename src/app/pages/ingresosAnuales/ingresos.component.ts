import {NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef,AfterViewInit, OnInit} from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import { DxDataGridComponent, } from 'devextreme-angular';
import { CurrencyPipe } from '@angular/common';
import { DxChartComponent, } from 'devextreme-angular';
import { ServiceSales } from '../tasks/app.serviceSales';
import { AniosModel} from './../../shared/models/rentabilidad-contable/renta-contable.model';
import {Service} from '../../shared/models/ingresos/ingreso.service'
import { TotalPorcentajes } from '../../shared/models/ingresos/totalporcentajes.model'
import { ModeloGrafica } from '../../shared/models/ingresos/modeloGrafica.model';
import { Modelos } from '../../shared/models/ingresos/modelos.model';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';

const totalesPor  = new TotalPorcentajes;
const totalesPorGr  = new TotalPorcentajes;

const totalesPor24  = new TotalPorcentajes;
const totalesPorGr24  = new TotalPorcentajes;

const groupName = new Modelos;

@Component({
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss'],
  providers: [UnidadesService,ServiceSales, CurrencyPipe, Service],
})

export class IngresosComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart: any;

  @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent | undefined;

  @ViewChild('gridModal', {static: false}) gridModal: DxDataGridComponent;

  @ViewChild('gridDetalleI', { static: false }) gridDetalleI: DxDataGridComponent;

  employee: any;
  treeBoxValue: string[];
  treeDataSource: any;

  dataSource: any;
  indicadores: IngresosModel[] = [];
  indicadores2024: IngresosModel[] = [];
  indicadoresGrafica: any;
  kms: any;
  kmsGrafica: any;
  viajes: any;
  viajesGrafica: any;
  toneladas: any;
  toneladasGrafica: any;

  isTreeBoxOpened: boolean;
  
  gridDataSource: any;

  gridBoxValue: number[] = [3];

  dataGridInstance!: DataGrid;

  IdUnidadNegocio: number;
  UnidadNegocio: string;
  Anio: number;
 
  //loading
  loadingVisible = false;

  gridColumns: any = ['unidadNegocio','tipoOperacion', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
 

  anios: AniosModel[] = [
    { idAnio: 2023, anio: "2023" },
    { idAnio: 2022, anio: "2022" }
  ];

  anioSeleccionado: number;

  paginacion = 5; 
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];
  
  applyChangesModes: any;

  applyChangesMode: any;

  layouts: any[];

  pivotGridDataSource: any;

  openModReal2023: boolean = false;
  openModReal2024: boolean = false;
  positionOf: string = '#myDiv';
  expandGroup: boolean = true;
  isVisible = false;

  totalPor = new TotalPorcentajes;
  totalFoPo = new TotalPorcentajes;

  totalPor24 = new TotalPorcentajes;
  totalFoPo24 = new TotalPorcentajes;

  graficaModel2023: ModeloGrafica[] = [];
  graficaModel2024: ModeloGrafica[] = [];

  constructor( 
    private unidadesService: UnidadesService, 
    private service: ServiceSales, 
    private currencyPipe: CurrencyPipe,
    testService: Service
    ) {

    this.IdUnidadNegocio = 0;
    this.UnidadNegocio = "Nacional";
    this.Anio = 2022;
    this.treeDataSource = unidadesService.getUnidades();
    
    this.isTreeBoxOpened = false;
    
    this.treeBoxValue = ['0'];

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
  }

  ngOnInit(): void {
    this.getIngresosAnuales();
    this.getIngresosAnuales2024();
  }

  getIngresosAnuales(){
    this.loadingVisible = true;
    var myanio = 2023;
    var myUdN = 0;
      this.service.getIndicadores(myanio, myUdN).subscribe((response) => {
    
         const orderIngreso: IngresosModel[] = response.data;
      let neworderIngreso = [];
      neworderIngreso.push(orderIngreso[3],orderIngreso[2],orderIngreso[0],orderIngreso[1],orderIngreso[4],
                        orderIngreso[6],orderIngreso[7],orderIngreso[5],
                        orderIngreso[9],orderIngreso[8],
                        orderIngreso[11],orderIngreso[10],
                        orderIngreso[13],orderIngreso[12],
                        orderIngreso[15],orderIngreso[16],orderIngreso[14],
                        orderIngreso[18],orderIngreso[17]);

        this.indicadores = neworderIngreso;
        //console.log(this.indicadores)
      });
  }

  getIngresosAnuales2024(){
    this.loadingVisible = true;
    var myanio = 2024;
    var myUdN = 0;
      this.service.getIndicadores2024(myanio, myUdN).subscribe((response) => {
    
         const orderIngreso: IngresosModel[] = response.data;
      // let neworderIngreso = [];
      // neworderIngreso.push(orderIngreso[3],orderIngreso[2],orderIngreso[0],orderIngreso[1],orderIngreso[4],
      //                   orderIngreso[6],orderIngreso[7],orderIngreso[5],
      //                   orderIngreso[9],orderIngreso[8],
      //                   orderIngreso[11],orderIngreso[10],
      //                   orderIngreso[13],orderIngreso[12],
      //                   orderIngreso[15],orderIngreso[16],orderIngreso[14],
      //                   orderIngreso[18],orderIngreso[17]);
        this.indicadores2024 = response.data;
        console.log(this.indicadores2024)
      });
  }

    getIngresosAnualesChart (Anio: number, UnidadNegocio: number)
   {
    this.service.getIndicadoresGrafica(Anio, UnidadNegocio).subscribe((response) => {
       
      this.indicadoresGrafica = response.data;
      
      
      
    });
    }

    seleccionarAnio(e: any) {
      this.anioSeleccionado = e.value;
    }


    clickClientesRutas = (e: any) => {
      this.getIngresosAnuales();
      this.dataGrid?.instance.refresh();
     };

  saveGridInstance (e:any) {
    this.dataGridInstance = e.component;
  }

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

  makeAsyncDataSource(http: any, jsonFile: any) {
    // return new CustomStore({
    //   loadMode: 'raw',
    //   key: 'ID',
    //   load() {
    //     return http.get(`data/${jsonFile}`)
    //       .toPromise();
    //   },
    // });
  }

  print() {
    this.chart.instance.print();
  }
  export() {
    this.chart.instance.exportTo('Example', 'png');
  }

  treeView_itemSelectionChanged(e:any) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
    this.UnidadNegocio = e.node.text;
    
    
    this.IdUnidadNegocio = Number.parseInt(this.treeBoxValue[0]);
    
  
  }



  onTreeBoxOptionChanged(e:any) {
    if (e.name === 'value') {
      this.isTreeBoxOpened = false;
      // this.ref.detectChanges();
    }
  }

  onRowPrepared(e: any) {

    if (e.rowType == 'totalFooter') {
      //console.log(e.summaryCells)
  /*====================================PERIODO 2023==================================================*/
      this.graficaModel2023 = [
        {mes: "ENERO", total: e.summaryCells[2][0]?.value, presupuesto: e.summaryCells[3][0]?.value},
        {mes: "FEBRERO", total: e.summaryCells[4][0]?.value, presupuesto: e.summaryCells[5][0]?.value},
        {mes: "MARZO", total: e.summaryCells[6][0]?.value, presupuesto: e.summaryCells[7][0]?.value},
        {mes: "ABRIL", total: e.summaryCells[8][0]?.value, presupuesto: e.summaryCells[9][0]?.value},
        {mes: "MAYO", total: e.summaryCells[10][0]?.value, presupuesto: e.summaryCells[11][0]?.value},
        {mes: "JUNIO", total: e.summaryCells[12][0]?.value, presupuesto: e.summaryCells[13][0]?.value},
        {mes: "JULIO", total: e.summaryCells[14][0]?.value, presupuesto: e.summaryCells[15][0]?.value},
        {mes: "AGOSTO", total: e.summaryCells[16][0]?.value, presupuesto: e.summaryCells[17][0]?.value},
        {mes: "SEPTIEMBRE", total: e.summaryCells[18][0]?.value, presupuesto: e.summaryCells[19][0]?.value},
        {mes: "OCTUBRE", total: e.summaryCells[20][0]?.value, presupuesto: e.summaryCells[21][0]?.value},
        {mes: "NOVIEMBRE", total: e.summaryCells[22][0]?.value, presupuesto: e.summaryCells[23][0]?.value},
        {mes: "DICIEMBRE", total: e.summaryCells[24][0]?.value, presupuesto: e.summaryCells[25][0]?.value},
      ]
  /*====================================PERIODO 2024==================================================*/
    

       //console.log(e.summaryCells)


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
  onCellPrepared(e: any) {
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }
  onContentReady(e: any) {

    this.loadingVisible = false;

  }

  onRowPrepared2024(e: any) {

    if (e.rowType == 'totalFooter') {
      //console.log(e.summaryCells)
  /*====================================PERIODO 2024==================================================*/
  this.graficaModel2024 = [
    {mes: "ENERO", total: e.summaryCells[2][0]?.value, presupuesto: e.summaryCells[3][0]?.value},  
    {mes: "FEBRERO", total: e.summaryCells[4][0]?.value, presupuesto: e.summaryCells[5][0]?.value},
    {mes: "MARZO", total:0, presupuesto:0},
    {mes: "ABRIL", total:0, presupuesto:0},
    {mes: "MAYO", total:0, presupuesto:0},
    {mes: "JUNIO", total:0, presupuesto:0},
    {mes: "JULIO", total:0, presupuesto:0},
    {mes: "AGOSTO", total:0, presupuesto:0},
    {mes: "SEPTIEMBRE", total:0, presupuesto:0},
    {mes: "OCTUBRE", total:0, presupuesto:0},
    {mes: "NOVIEMBRE", total:0, presupuesto:0},
    {mes: "DICIEMBRE", total:0, presupuesto:0},
  ]
  //        {mes: "MARZO", total: e.summaryCells[6][0]?.value, presupuesto: e.summaryCells[7][0]?.value},
  //console.log(e.summaryCells)

       //console.log(e.summaryCells)


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
  onCellPrepared2024(e: any) {
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }
  onContentReady2024(e: any) {

    this.loadingVisible = false;

  }

  onRowPreparedDetalle(e: any){
    if (e.rowType == 'groupFooter'){
      if(e.groupIndex == 0){
        //Enero
        this.totalPor.totalE = e.summaryCells[4][0].value;
        this.totalPor.anioAntE = e.summaryCells[5][0].value;
        this.totalPor.presupuestoE = e.summaryCells[7][0].value;
        this.totalPor.proyeccionE = e.summaryCells[9][0].value;
        //Febrero
        this.totalPor.totalFB = e.summaryCells[13][0].value;
        this.totalPor.anioAntFB = e.summaryCells[14][0].value;
        this.totalPor.presupuestoFB = e.summaryCells[16][0].value;
        this.totalPor.proyeccionFB = e.summaryCells[18][0].value;
        //Marzo
        this.totalPor.totalM = e.summaryCells[22][0].value;
        this.totalPor.anioAntM = e.summaryCells[23][0].value;
        this.totalPor.presupuestoM = e.summaryCells[25][0].value;
        this.totalPor.proyeccionM = e.summaryCells[27][0].value;
        //Abril
        this.totalPor.totalA = e.summaryCells[31][0].value;
        this.totalPor.anioAntA = e.summaryCells[32][0].value;
        this.totalPor.presupuestoA = e.summaryCells[34][0].value;
        this.totalPor.proyeccionA = e.summaryCells[36][0].value;
        //Mayo
        this.totalPor.totalMY = e.summaryCells[40][0].value;
        this.totalPor.anioAntMY = e.summaryCells[41][0].value;
        this.totalPor.presupuestoMY = e.summaryCells[43][0].value;
        this.totalPor.proyeccionMY = e.summaryCells[45][0].value;
        //Junio
        this.totalPor.totalJN = e.summaryCells[49][0].value;
        this.totalPor.anioAntJN = e.summaryCells[50][0].value;
        this.totalPor.presupuestoJN = e.summaryCells[52][0].value;
        this.totalPor.proyeccionJN = e.summaryCells[54][0].value;
        //Juio
        this.totalPor.totalJL = e.summaryCells[58][0].value;
        this.totalPor.anioAntJL = e.summaryCells[59][0].value;
        this.totalPor.presupuestoJL = e.summaryCells[61][0].value;
        this.totalPor.proyeccionJL = e.summaryCells[63][0].value;
        //Agosto
        this.totalPor.totalAG = e.summaryCells[67][0].value;
        this.totalPor.anioAntAG = e.summaryCells[68][0].value;
        this.totalPor.presupuestoAG = e.summaryCells[70][0].value;
        this.totalPor.proyeccionAG = e.summaryCells[72][0].value;
        //Septiembre
        this.totalPor.totalS = e.summaryCells[76][0].value;
        this.totalPor.anioAntS = e.summaryCells[77][0].value;
        this.totalPor.presupuestoS = e.summaryCells[79][0].value;
        this.totalPor.proyeccionS = e.summaryCells[81][0].value;
        //Octubre
        this.totalPor.totalOC = e.summaryCells[86][0].value;
        this.totalPor.anioAntOC = e.summaryCells[87][0].value;
        this.totalPor.presupuestoOC = e.summaryCells[89][0].value;
        this.totalPor.proyeccionOC = e.summaryCells[91][0].value;
        //Noviembre
        this.totalPor.totalNV = e.summaryCells[95][0].value;
        this.totalPor.anioAntNV = e.summaryCells[96][0].value;
        this.totalPor.presupuestoNV = e.summaryCells[98][0].value;
        this.totalPor.proyeccionNV = e.summaryCells[100][0].value;
        //Diciembre
        this.totalPor.totalDC = e.summaryCells[104][0].value;
        this.totalPor.anioAntDC = e.summaryCells[105][0].value;
        this.totalPor.presupuestoDC = e.summaryCells[107][0].value;
        this.totalPor.proyeccionDC = e.summaryCells[109][0].value;
        //console.log(e.summaryCells)

        //Enero
        this.totalPor.aniATotalE = this.totalPor.totalE / this.totalPor.anioAntE;
        this.totalPor.presTotalE = this.totalPor.totalE / this.totalPor.presupuestoE;
        this.totalPor.ProyTotalE = this.totalPor.proyeccionE / this.totalPor.presupuestoE;
        //Febrero
        this.totalPor.aniATotalFB = this.totalPor.totalFB / this.totalPor.anioAntFB;
        this.totalPor.presTotalFB = this.totalPor.totalFB / this.totalPor.presupuestoFB;
        this.totalPor.ProyTotalFB = this.totalPor.proyeccionFB / this.totalPor.presupuestoFB;
        //Marzo
        this.totalPor.aniATotalM = this.totalPor.totalM / this.totalPor.anioAntM;
        this.totalPor.presTotalM = this.totalPor.totalM / this.totalPor.presupuestoM;
        this.totalPor.ProyTotalM = this.totalPor.proyeccionM / this.totalPor.presupuestoM;
        //Abril
        this.totalPor.aniATotalA = this.totalPor.totalA / this.totalPor.anioAntA;
        this.totalPor.presTotalA = this.totalPor.totalA / this.totalPor.presupuestoA;
        this.totalPor.ProyTotalA = this.totalPor.proyeccionA / this.totalPor.presupuestoA;
        //Mayo
        this.totalPor.aniATotalMY = this.totalPor.totalMY / this.totalPor.anioAntMY;
        this.totalPor.presTotalMY = this.totalPor.totalMY / this.totalPor.presupuestoMY;
        this.totalPor.ProyTotalMY = this.totalPor.proyeccionMY / this.totalPor.presupuestoMY;
        //Junio
        this.totalPor.aniATotalJN = this.totalPor.totalJN / this.totalPor.anioAntJN;
        this.totalPor.presTotalJN = this.totalPor.totalJN / this.totalPor.presupuestoJN;
        this.totalPor.ProyTotalJN = this.totalPor.proyeccionJN / this.totalPor.presupuestoJN;
        //Julio
        this.totalPor.aniATotalJL = this.totalPor.totalJL / this.totalPor.anioAntJL;
        this.totalPor.presTotalJL = this.totalPor.totalJL / this.totalPor.presupuestoJL;
        this.totalPor.ProyTotalJL = this.totalPor.proyeccionJL / this.totalPor.presupuestoJL;
        //Agosto
        this.totalPor.aniATotalAG = this.totalPor.totalAG / this.totalPor.anioAntAG;
        this.totalPor.presTotalAG = this.totalPor.totalAG / this.totalPor.presupuestoAG;
        this.totalPor.ProyTotalAG = this.totalPor.proyeccionAG / this.totalPor.presupuestoAG;
        //Septiembre
        this.totalPor.aniATotalS = this.totalPor.totalS / this.totalPor.anioAntS;
        this.totalPor.presTotalS = this.totalPor.totalS / this.totalPor.presupuestoS;
        this.totalPor.ProyTotalS = this.totalPor.proyeccionS / this.totalPor.presupuestoS;
        //Octubre
        this.totalPor.aniATotalOC = this.totalPor.totalOC / this.totalPor.anioAntOC;
        this.totalPor.presTotalOC = this.totalPor.totalOC / this.totalPor.presupuestoOC;
        this.totalPor.ProyTotalOC = this.totalPor.proyeccionOC / this.totalPor.presupuestoOC;
        //Noviembre
        this.totalPor.aniATotalNV = this.totalPor.totalNV / this.totalPor.anioAntNV;
        this.totalPor.presTotalNV = this.totalPor.totalNV / this.totalPor.presupuestoNV;
        this.totalPor.ProyTotalNV = this.totalPor.proyeccionNV / this.totalPor.presupuestoNV;
        //Diciembre
        this.totalPor.aniATotalDC = this.totalPor.totalDC / this.totalPor.anioAntDC;
        this.totalPor.presTotalDC = this.totalPor.totalDC / this.totalPor.presupuestoDC;
        this.totalPor.ProyTotalDC = this.totalPor.proyeccionDC / this.totalPor.presupuestoDC;

        //Enero
        e.summaryCells[6][0].value = this.totalPor.aniATotalE;
        e.summaryCells[8][0].value = this.totalPor.presTotalE;
        e.summaryCells[10][0].value = this.totalPor.ProyTotalE;

        totalesPorGr.totalE = e.summaryCells[6][0].value;
        //Febrero
        e.summaryCells[15][0].value = this.totalPor.aniATotalFB;
        e.summaryCells[17][0].value = this.totalPor.presTotalFB;
        e.summaryCells[19][0].value = this.totalPor.ProyTotalFB;
        //Marzo
        e.summaryCells[24][0].value = this.totalPor.aniATotalM;
        e.summaryCells[26][0].value = this.totalPor.presTotalM;
        e.summaryCells[28][0].value = this.totalPor.ProyTotalM;
        //Abril
        e.summaryCells[33][0].value = this.totalPor.aniATotalA;
        e.summaryCells[35][0].value = this.totalPor.presTotalA;
        e.summaryCells[37][0].value = this.totalPor.ProyTotalA;
        //Mayo
        e.summaryCells[42][0].value = this.totalPor.aniATotalMY;
        e.summaryCells[44][0].value = this.totalPor.presTotalMY;
        e.summaryCells[46][0].value = this.totalPor.ProyTotalMY;
        //Junio
        e.summaryCells[51][0].value = this.totalPor.aniATotalJN;
        e.summaryCells[53][0].value = this.totalPor.presTotalJN;
        e.summaryCells[55][0].value = this.totalPor.ProyTotalJN;
        //Julio
        e.summaryCells[60][0].value = this.totalPor.aniATotalJL;
        e.summaryCells[62][0].value = this.totalPor.presTotalJL;
        e.summaryCells[64][0].value = this.totalPor.ProyTotalJL;
        //Agosto
        e.summaryCells[69][0].value = this.totalPor.aniATotalAG;
        e.summaryCells[71][0].value = this.totalPor.presTotalAG;
        e.summaryCells[73][0].value = this.totalPor.ProyTotalAG;
        //Septiembre
        e.summaryCells[78][0].value = this.totalPor.aniATotalS;
        e.summaryCells[80][0].value = this.totalPor.presTotalS;
        e.summaryCells[82][0].value = this.totalPor.ProyTotalS;
        //Octubre
        e.summaryCells[88][0].value = this.totalPor.aniATotalOC;
        e.summaryCells[90][0].value = this.totalPor.presTotalOC;
        e.summaryCells[92][0].value = this.totalPor.ProyTotalOC;
        //Noviembre
        e.summaryCells[97][0].value = this.totalPor.aniATotalNV;
        e.summaryCells[99][0].value = this.totalPor.presTotalNV;
        e.summaryCells[101][0].value = this.totalPor.ProyTotalNV;
        //Diciembre
        e.summaryCells[106][0].value = this.totalPor.aniATotalDC;
        e.summaryCells[108][0].value = this.totalPor.presTotalDC;
        e.summaryCells[110][0].value = this.totalPor.ProyTotalDC;

      }
    }

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
  onCellPreparedDetalle(e: any) {
    if (e.rowType == 'groupFooter'){
      
        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }

    if(e.rowType == 'totalFooter'){

      e.totalItem.cells.forEach((c: any) => {
        //Enero
        let totalE = c.totalItem.summaryCells[4][0].value;
        let anioAntE = c.totalItem.summaryCells[5][0].value;
        let presupuestoE = c.totalItem.summaryCells[7][0].value;
        let proyeccionE = c.totalItem.summaryCells[9][0].value;
        //Febrero
        let totalFB = c.totalItem.summaryCells[13][0].value;
        let anioAntFB = c.totalItem.summaryCells[14][0].value;
        let presupuestoFB = c.totalItem.summaryCells[16][0].value;
        let proyeccionFB = c.totalItem.summaryCells[18][0].value;
        //Marzo
        let totalM = c.totalItem.summaryCells[22][0].value;
        let anioAntM = c.totalItem.summaryCells[23][0].value;
        let presupuestoM = c.totalItem.summaryCells[25][0].value;
        let proyeccionM = c.totalItem.summaryCells[27][0].value;
        //Abril
        let totalA = c.totalItem.summaryCells[31][0].value;
        let anioAntA = c.totalItem.summaryCells[32][0].value;
        let presupuestoA = c.totalItem.summaryCells[34][0].value;
        let proyeccionA = c.totalItem.summaryCells[36][0].value;
        //Mayo
        let totalMY = c.totalItem.summaryCells[40][0].value;
        let anioAntMY = c.totalItem.summaryCells[41][0].value;
        let presupuestoMY = c.totalItem.summaryCells[43][0].value;
        let proyeccionMY = c.totalItem.summaryCells[45][0].value;
        //Junio
        let totalJN = c.totalItem.summaryCells[49][0].value;
        let anioAntJN = c.totalItem.summaryCells[50][0].value;
        let presupuestoJN = c.totalItem.summaryCells[52][0].value;
        let proyeccionJN = c.totalItem.summaryCells[54][0].value;
        //Juio
        let totalJL = c.totalItem.summaryCells[58][0].value;
        let anioAntJL = c.totalItem.summaryCells[59][0].value;
        let presupuestoJL = c.totalItem.summaryCells[61][0].value;
        let proyeccionJL = c.totalItem.summaryCells[63][0].value;
        //Agosto
        let totalAG = c.totalItem.summaryCells[67][0].value;
        let anioAntAG = c.totalItem.summaryCells[68][0].value;
        let presupuestoAG = c.totalItem.summaryCells[70][0].value;
        let proyeccionAG = c.totalItem.summaryCells[72][0].value;
        //Septiembre
        let totalS = c.totalItem.summaryCells[76][0].value;
        let anioAntS = c.totalItem.summaryCells[77][0].value;
        let presupuestoS = c.totalItem.summaryCells[79][0].value;
        let proyeccionS = c.totalItem.summaryCells[81][0].value;
        //Octubre
        let totalOC = c.totalItem.summaryCells[86][0].value;
        let anioAntOC = c.totalItem.summaryCells[87][0].value;
        let presupuestoOC = c.totalItem.summaryCells[89][0].value;
        let proyeccionOC = c.totalItem.summaryCells[91][0].value;
        //Noviembre
        let totalNV = c.totalItem.summaryCells[95][0].value;
        let anioAntNV = c.totalItem.summaryCells[96][0].value;
        let presupuestoNV = c.totalItem.summaryCells[98][0].value;
        let proyeccionNV = c.totalItem.summaryCells[100][0].value;
        //Diciembre
        let totalDC = c.totalItem.summaryCells[104][0].value;
        let anioAntDC = c.totalItem.summaryCells[105][0].value;
        let presupuestoDC = c.totalItem.summaryCells[107][0].value;
        let proyeccionDC = c.totalItem.summaryCells[109][0].value;
        //console.log(c.totalItem.summaryCells)

        //Calculo de Porcentajes
        //Enero
        if(c.totalItem.summaryCells[6][0] !== undefined){
          totalE === 0 ? c.totalItem.summaryCells[6][0].value = 0 : c.totalItem.summaryCells[6][0].value = totalE/anioAntE;
          presupuestoE === 0 ? c.totalItem.summaryCells[8][0].value = 0 : c.totalItem.summaryCells[8][0].value = totalE/presupuestoE;
          proyeccionE === 0 ? c.totalItem.summaryCells[10][0].value = 0 : c.totalItem.summaryCells[10][0].value = totalE/proyeccionE;

          totalesPor.totalE = c.totalItem.summaryCells[6][0].value;
          totalesPor.presupuestoE = c.totalItem.summaryCells[8][0].value;
          totalesPor.proyeccionE = c.totalItem.summaryCells[10][0].value;

        }
        //Febrero
        if(c.totalItem.summaryCells[13][0] !== undefined){
          totalFB === 0 ? c.totalItem.summaryCells[15][0].value = 0 : c.totalItem.summaryCells[15][0].value = totalFB/anioAntFB;
          presupuestoFB === 0 ? c.totalItem.summaryCells[17][0].value = 0 : c.totalItem.summaryCells[17][0].value = totalFB/presupuestoFB;
          proyeccionFB === 0 ? c.totalItem.summaryCells[19][0].value = 0 : c.totalItem.summaryCells[19][0].value = totalFB/proyeccionFB;

          totalesPor.totalFB = c.totalItem.summaryCells[15][0].value
          totalesPor.presupuestoFB = c.totalItem.summaryCells[17][0].value
          totalesPor.proyeccionFB = c.totalItem.summaryCells[19][0].value
        }
        //Marzo
        if(c.totalItem.summaryCells[22][0] !== undefined){
          totalM === 0 ? c.totalItem.summaryCells[24][0].value = 0 : c.totalItem.summaryCells[24][0].value = totalM/anioAntM;
          presupuestoM === 0 ? c.totalItem.summaryCells[26][0].value = 0 : c.totalItem.summaryCells[26][0].value = totalM/presupuestoM;
          proyeccionM === 0 ? c.totalItem.summaryCells[28][0].value = 0 : c.totalItem.summaryCells[28][0].value = totalM/proyeccionM;

          totalesPor.totalM = c.totalItem.summaryCells[24][0].value
          totalesPor.presupuestoM = c.totalItem.summaryCells[26][0].value
          totalesPor.proyeccionM = c.totalItem.summaryCells[28][0].value
        }
        //Abril
        if(c.totalItem.summaryCells[31][0] !== undefined){
          totalA === 0 ? c.totalItem.summaryCells[33][0].value = 0 : c.totalItem.summaryCells[33][0].value = totalA/anioAntA;
          presupuestoA === 0 ? c.totalItem.summaryCells[35][0].value = 0 : c.totalItem.summaryCells[35][0].value = totalA/presupuestoA;
          proyeccionA === 0 ? c.totalItem.summaryCells[37][0].value = 0 : c.totalItem.summaryCells[37][0].value = totalA/proyeccionA;

          totalesPor.totalA = c.totalItem.summaryCells[33][0].value
          totalesPor.presupuestoA = c.totalItem.summaryCells[35][0].value
          totalesPor.proyeccionA = c.totalItem.summaryCells[37][0].value
        }
        //Mayo
        if(c.totalItem.summaryCells[40][0] !== undefined){
          totalMY === 0 ? c.totalItem.summaryCells[42][0].value = 0 : c.totalItem.summaryCells[42][0].value = totalMY/anioAntMY;
          presupuestoMY === 0 ? c.totalItem.summaryCells[44][0].value = 0 : c.totalItem.summaryCells[44][0].value = totalMY/presupuestoMY;
          proyeccionMY === 0 ? c.totalItem.summaryCells[46][0].value = 0 : c.totalItem.summaryCells[46][0].value = totalMY/proyeccionMY;

          totalesPor.totalMY = c.totalItem.summaryCells[42][0].value
          totalesPor.presupuestoMY = c.totalItem.summaryCells[44][0].value
          totalesPor.proyeccionMY = c.totalItem.summaryCells[46][0].value
        }
        //Junio
        if(c.totalItem.summaryCells[49][0] !== undefined){
          totalJN === 0 ? c.totalItem.summaryCells[51][0].value = 0 : c.totalItem.summaryCells[51][0].value = totalJN/anioAntJN;
          presupuestoJN === 0 ? c.totalItem.summaryCells[53][0].value = 0 : c.totalItem.summaryCells[53][0].value = totalJN/presupuestoJN;
          proyeccionJN === 0 ? c.totalItem.summaryCells[55][0].value = 0 : c.totalItem.summaryCells[55][0].value = totalJN/proyeccionJN;

          totalesPor.totalJN = c.totalItem.summaryCells[51][0].value
          totalesPor.presupuestoJN = c.totalItem.summaryCells[53][0].value
          totalesPor.proyeccionJN = c.totalItem.summaryCells[55][0].value
        }
        //Julio
        if(c.totalItem.summaryCells[58][0] !== undefined){
          totalJL === 0 ? c.totalItem.summaryCells[60][0].value = 0 : c.totalItem.summaryCells[60][0].value = totalJL/anioAntJL;
          presupuestoJL === 0 ? c.totalItem.summaryCells[62][0].value = 0 : c.totalItem.summaryCells[62][0].value = totalJL/presupuestoJL;
          proyeccionJL === 0 ? c.totalItem.summaryCells[64][0].value = 0 : c.totalItem.summaryCells[64][0].value = totalJL/proyeccionJL;

          totalesPor.totalJL = c.totalItem.summaryCells[60][0].value
          totalesPor.presupuestoJL = c.totalItem.summaryCells[62][0].value
          totalesPor.proyeccionJL = c.totalItem.summaryCells[64][0].value
        }
        //Agosto
        if(c.totalItem.summaryCells[67][0] !== undefined){
          totalAG === 0 ? c.totalItem.summaryCells[69][0].value = 0 : c.totalItem.summaryCells[69][0].value = totalAG/anioAntAG;
          presupuestoAG === 0 ? c.totalItem.summaryCells[71][0].value = 0 : c.totalItem.summaryCells[71][0].value = totalAG/presupuestoAG;
          proyeccionAG === 0 ? c.totalItem.summaryCells[73][0].value = 0 : c.totalItem.summaryCells[73][0].value = totalAG/proyeccionAG;

          totalesPor.totalAG = c.totalItem.summaryCells[69][0].value
          totalesPor.presupuestoAG = c.totalItem.summaryCells[71][0].value
          totalesPor.proyeccionAG = c.totalItem.summaryCells[73][0].value
        }
        //Septiembre
        if(c.totalItem.summaryCells[76][0] !== undefined){
          totalS === 0 ? c.totalItem.summaryCells[78][0].value = 0 : c.totalItem.summaryCells[78][0].value = totalS/anioAntS;
          presupuestoS === 0 ? c.totalItem.summaryCells[80][0].value = 0 : c.totalItem.summaryCells[80][0].value = totalS/presupuestoS;
          proyeccionS === 0 ? c.totalItem.summaryCells[82][0].value = 0 : c.totalItem.summaryCells[82][0].value = totalS/proyeccionS;

          totalesPor.totalS = c.totalItem.summaryCells[78][0].value
          totalesPor.presupuestoS = c.totalItem.summaryCells[80][0].value
          totalesPor.proyeccionS = c.totalItem.summaryCells[82][0].value
        }
        //Octubre
        if(c.totalItem.summaryCells[86][0] !== undefined){
          totalOC === 0 ? c.totalItem.summaryCells[88][0].value = 0 : c.totalItem.summaryCells[88][0].value = totalOC/anioAntOC;
          presupuestoOC === 0 ? c.totalItem.summaryCells[90][0].value = 0 : c.totalItem.summaryCells[90][0].value = totalOC/presupuestoOC;
          proyeccionOC === 0 ? c.totalItem.summaryCells[92][0].value = 0 : c.totalItem.summaryCells[92][0].value = totalOC/proyeccionOC;

          totalesPor.totalOC = c.totalItem.summaryCells[88][0].value
          totalesPor.presupuestoOC = c.totalItem.summaryCells[90][0].value
          totalesPor.proyeccionOC = c.totalItem.summaryCells[92][0].value
        }
        //Noviembre
        if(c.totalItem.summaryCells[95][0] !== undefined){
          totalNV === 0 ? c.totalItem.summaryCells[97][0].value = 0 : c.totalItem.summaryCells[97][0].value = totalNV/anioAntNV;
          presupuestoNV === 0 ? c.totalItem.summaryCells[99][0].value = 0 : c.totalItem.summaryCells[99][0].value = totalNV/presupuestoNV;
          proyeccionNV === 0 ? c.totalItem.summaryCells[101][0].value = 0 : c.totalItem.summaryCells[101][0].value = totalNV/proyeccionNV;

          totalesPor.totalNV = c.totalItem.summaryCells[97][0].value
          totalesPor.presupuestoNV = c.totalItem.summaryCells[99][0].value
          totalesPor.proyeccionNV = c.totalItem.summaryCells[101][0].value
        }
        //Diciembre
        if(c.totalItem.summaryCells[104][0] !== undefined){
          totalDC === 0 ? c.totalItem.summaryCells[106][0].value = 0 : c.totalItem.summaryCells[106][0].value = totalDC/anioAntDC;
          presupuestoDC === 0 ? c.totalItem.summaryCells[108][0].value = 0 : c.totalItem.summaryCells[108][0].value = totalDC/presupuestoDC;
          proyeccionDC === 0 ? c.totalItem.summaryCells[110][0].value = 0 : c.totalItem.summaryCells[110][0].value = totalDC/presupuestoDC;

          totalesPor.totalDC = c.totalItem.summaryCells[106][0].value
          totalesPor.presupuestoDC = c.totalItem.summaryCells[108][0].value
          totalesPor.proyeccionDC = c.totalItem.summaryCells[110][0].value
        }
      })
      
    }
  }
  onRowPreparedDetalle2024(e: any){
    if (e.rowType == 'groupFooter'){
      if(e.groupIndex == 0){
        //ENERO 2024
        this.totalPor24.totalE = e.summaryCells[4][0]?.value;
        this.totalPor24.anioAntE = e.summaryCells[5][0]?.value;
        this.totalPor24.presupuestoE = e.summaryCells[7][0]?.value;
        this.totalPor24.proyeccionE = e.summaryCells[9][0]?.value;
        //Febrero
        console.log(e.summaryCells)
        this.totalPor24.totalFB = e.summaryCells[13][0].value;
        this.totalPor24.anioAntFB = e.summaryCells[14][0].value;
        this.totalPor24.presupuestoFB = e.summaryCells[16][0].value;
        this.totalPor24.proyeccionFB = e.summaryCells[18][0].value;
        // //Marzo
        this.totalPor24.totalM = e.summaryCells[22][0].value;
        this.totalPor24.anioAntM = e.summaryCells[23][0].value;
        this.totalPor24.presupuestoM = e.summaryCells[25][0].value;
        this.totalPor24.proyeccionM = e.summaryCells[27][0].value;
        // //Abril
        // this.totalPor.totalA = e.summaryCells[31][0].value;
        // this.totalPor.anioAntA = e.summaryCells[32][0].value;
        // this.totalPor.presupuestoA = e.summaryCells[34][0].value;
        // this.totalPor.proyeccionA = e.summaryCells[36][0].value;
        // //Mayo
        // this.totalPor.totalMY = e.summaryCells[40][0].value;
        // this.totalPor.anioAntMY = e.summaryCells[41][0].value;
        // this.totalPor.presupuestoMY = e.summaryCells[43][0].value;
        // this.totalPor.proyeccionMY = e.summaryCells[45][0].value;
        // //Junio
        // this.totalPor.totalJN = e.summaryCells[49][0].value;
        // this.totalPor.anioAntJN = e.summaryCells[50][0].value;
        // this.totalPor.presupuestoJN = e.summaryCells[52][0].value;
        // this.totalPor.proyeccionJN = e.summaryCells[54][0].value;
        // //Juio
        // this.totalPor.totalJL = e.summaryCells[58][0].value;
        // this.totalPor.anioAntJL = e.summaryCells[59][0].value;
        // this.totalPor.presupuestoJL = e.summaryCells[61][0].value;
        // this.totalPor.proyeccionJL = e.summaryCells[63][0].value;
        // //Agosto
        // this.totalPor.totalAG = e.summaryCells[67][0].value;
        // this.totalPor.anioAntAG = e.summaryCells[68][0].value;
        // this.totalPor.presupuestoAG = e.summaryCells[70][0].value;
        // this.totalPor.proyeccionAG = e.summaryCells[72][0].value;
        // //Septiembre
        // this.totalPor.totalS = e.summaryCells[76][0].value;
        // this.totalPor.anioAntS = e.summaryCells[77][0].value;
        // this.totalPor.presupuestoS = e.summaryCells[79][0].value;
        // this.totalPor.proyeccionS = e.summaryCells[81][0].value;
        // //Octubre
        // this.totalPor.totalOC = e.summaryCells[86][0].value;
        // this.totalPor.anioAntOC = e.summaryCells[87][0].value;
        // this.totalPor.presupuestoOC = e.summaryCells[89][0].value;
        // this.totalPor.proyeccionOC = e.summaryCells[91][0].value;
        // //Noviembre
        // this.totalPor.totalNV = e.summaryCells[95][0].value;
        // this.totalPor.anioAntNV = e.summaryCells[96][0].value;
        // this.totalPor.presupuestoNV = e.summaryCells[98][0].value;
        // this.totalPor.proyeccionNV = e.summaryCells[100][0].value;
        // //Diciembre
        // this.totalPor.totalDC = e.summaryCells[104][0].value;
        // this.totalPor.anioAntDC = e.summaryCells[105][0].value;
        // this.totalPor.presupuestoDC = e.summaryCells[107][0].value;
        // this.totalPor.proyeccionDC = e.summaryCells[109][0].value;
        //console.log(e.summaryCells)

        //ENERO2024
        this.totalPor24.aniATotalE = this.totalPor24.totalE / this.totalPor24.anioAntE;
        this.totalPor24.presTotalE = this.totalPor24.totalE / this.totalPor24.presupuestoE;
        this.totalPor24.ProyTotalE = this.totalPor24.proyeccionE / this.totalPor24.presupuestoE;
        // //Febrero
        this.totalPor24.aniATotalFB = this.totalPor24.totalFB / this.totalPor24.anioAntFB;
        this.totalPor24.presTotalFB = this.totalPor24.totalFB / this.totalPor24.presupuestoFB;
        this.totalPor24.ProyTotalFB = this.totalPor24.proyeccionFB / this.totalPor24.presupuestoFB;
        // //Marzo
        this.totalPor24.aniATotalM = this.totalPor24.totalM / this.totalPor24.anioAntM;
        this.totalPor24.presTotalM = this.totalPor24.totalM / this.totalPor24.presupuestoM;
        this.totalPor24.ProyTotalM = this.totalPor24.proyeccionM / this.totalPor24.presupuestoM;
        // //Abril
        // this.totalPor.aniATotalA = this.totalPor.totalA / this.totalPor.anioAntA;
        // this.totalPor.presTotalA = this.totalPor.totalA / this.totalPor.presupuestoA;
        // this.totalPor.ProyTotalA = this.totalPor.proyeccionA / this.totalPor.presupuestoA;
        // //Mayo
        // this.totalPor.aniATotalMY = this.totalPor.totalMY / this.totalPor.anioAntMY;
        // this.totalPor.presTotalMY = this.totalPor.totalMY / this.totalPor.presupuestoMY;
        // this.totalPor.ProyTotalMY = this.totalPor.proyeccionMY / this.totalPor.presupuestoMY;
        // //Junio
        // this.totalPor.aniATotalJN = this.totalPor.totalJN / this.totalPor.anioAntJN;
        // this.totalPor.presTotalJN = this.totalPor.totalJN / this.totalPor.presupuestoJN;
        // this.totalPor.ProyTotalJN = this.totalPor.proyeccionJN / this.totalPor.presupuestoJN;
        // //Julio
        // this.totalPor.aniATotalJL = this.totalPor.totalJL / this.totalPor.anioAntJL;
        // this.totalPor.presTotalJL = this.totalPor.totalJL / this.totalPor.presupuestoJL;
        // this.totalPor.ProyTotalJL = this.totalPor.proyeccionJL / this.totalPor.presupuestoJL;
        // //Agosto
        // this.totalPor.aniATotalAG = this.totalPor.totalAG / this.totalPor.anioAntAG;
        // this.totalPor.presTotalAG = this.totalPor.totalAG / this.totalPor.presupuestoAG;
        // this.totalPor.ProyTotalAG = this.totalPor.proyeccionAG / this.totalPor.presupuestoAG;
        // //Septiembre
        // this.totalPor.aniATotalS = this.totalPor.totalS / this.totalPor.anioAntS;
        // this.totalPor.presTotalS = this.totalPor.totalS / this.totalPor.presupuestoS;
        // this.totalPor.ProyTotalS = this.totalPor.proyeccionS / this.totalPor.presupuestoS;
        // //Octubre
        // this.totalPor.aniATotalOC = this.totalPor.totalOC / this.totalPor.anioAntOC;
        // this.totalPor.presTotalOC = this.totalPor.totalOC / this.totalPor.presupuestoOC;
        // this.totalPor.ProyTotalOC = this.totalPor.proyeccionOC / this.totalPor.presupuestoOC;
        // //Noviembre
        // this.totalPor.aniATotalNV = this.totalPor.totalNV / this.totalPor.anioAntNV;
        // this.totalPor.presTotalNV = this.totalPor.totalNV / this.totalPor.presupuestoNV;
        // this.totalPor.ProyTotalNV = this.totalPor.proyeccionNV / this.totalPor.presupuestoNV;
        // //Diciembre
        // this.totalPor.aniATotalDC = this.totalPor.totalDC / this.totalPor.anioAntDC;
        // this.totalPor.presTotalDC = this.totalPor.totalDC / this.totalPor.presupuestoDC;
        // this.totalPor.ProyTotalDC = this.totalPor.proyeccionDC / this.totalPor.presupuestoDC;
     

        //ENERO2024
        if(e.summaryCells[10][0].value !== undefined){
          e.summaryCells[6][0].value = this.totalPor24.aniATotalE;
          e.summaryCells[8][0].value = this.totalPor24.presTotalE;
          e.summaryCells[10][0].value = this.totalPor24.ProyTotalE;
  
        }
        totalesPorGr.totalE = e.summaryCells[6][0]?.value;
        //Febrero
        if(e.summaryCells[15][0].value !== undefined){
          e.summaryCells[15][0].value = this.totalPor24.aniATotalFB;
          e.summaryCells[17][0].value = this.totalPor24.presTotalFB;
          e.summaryCells[19][0].value = this.totalPor24.ProyTotalFB;
        }
        // //Marzo
        if(e.summaryCells[24][0].value !== undefined){
          e.summaryCells[24][0].value = this.totalPor24.aniATotalM;
          e.summaryCells[26][0].value = this.totalPor24.presTotalM;
          e.summaryCells[28][0].value = this.totalPor24.ProyTotalM;
        }
        // //Abril
        // e.summaryCells[33][0].value = this.totalPor.aniATotalA;
        // e.summaryCells[35][0].value = this.totalPor.presTotalA;
        // e.summaryCells[37][0].value = this.totalPor.ProyTotalA;
        // //Mayo
        // e.summaryCells[42][0].value = this.totalPor.aniATotalMY;
        // e.summaryCells[44][0].value = this.totalPor.presTotalMY;
        // e.summaryCells[46][0].value = this.totalPor.ProyTotalMY;
        // //Junio
        // e.summaryCells[51][0].value = this.totalPor.aniATotalJN;
        // e.summaryCells[53][0].value = this.totalPor.presTotalJN;
        // e.summaryCells[55][0].value = this.totalPor.ProyTotalJN;
        // //Julio
        // e.summaryCells[60][0].value = this.totalPor.aniATotalJL;
        // e.summaryCells[62][0].value = this.totalPor.presTotalJL;
        // e.summaryCells[64][0].value = this.totalPor.ProyTotalJL;
        // //Agosto
        // e.summaryCells[69][0].value = this.totalPor.aniATotalAG;
        // e.summaryCells[71][0].value = this.totalPor.presTotalAG;
        // e.summaryCells[73][0].value = this.totalPor.ProyTotalAG;
        // //Septiembre
        // e.summaryCells[78][0].value = this.totalPor.aniATotalS;
        // e.summaryCells[80][0].value = this.totalPor.presTotalS;
        // e.summaryCells[82][0].value = this.totalPor.ProyTotalS;
        // //Octubre
        // e.summaryCells[88][0].value = this.totalPor.aniATotalOC;
        // e.summaryCells[90][0].value = this.totalPor.presTotalOC;
        // e.summaryCells[92][0].value = this.totalPor.ProyTotalOC;
        // //Noviembre
        // e.summaryCells[97][0].value = this.totalPor.aniATotalNV;
        // e.summaryCells[99][0].value = this.totalPor.presTotalNV;
        // e.summaryCells[101][0].value = this.totalPor.ProyTotalNV;
        // //Diciembre
        // e.summaryCells[106][0].value = this.totalPor.aniATotalDC;
        // e.summaryCells[108][0].value = this.totalPor.presTotalDC;
        // e.summaryCells[110][0].value = this.totalPor.ProyTotalDC;

      }
    }

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
  onCellPreparedDetalle2024(e: any) {
    if (e.rowType == 'groupFooter'){
      
        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }

    if(e.rowType == 'totalFooter'){

      e.totalItem.cells.forEach((c: any) => {
        //ENERO 2024
        let total24E = c.totalItem.summaryCells[4][0]?.value;
        let anioAnt24E = c.totalItem.summaryCells[5][0]?.value;
        let presupuesto24E = c.totalItem.summaryCells[7][0]?.value;
        let proyeccion24E = c.totalItem.summaryCells[9][0]?.value;
        // //Febrero
        let total24FB = c.totalItem.summaryCells[13][0].value;
        let anioAnt24FB = c.totalItem.summaryCells[14][0].value;
        let presupuesto24FB = c.totalItem.summaryCells[16][0].value;
        let proyeccion24FB = c.totalItem.summaryCells[18][0].value;
        // //Marzo
        let total24M = c.totalItem.summaryCells[22][0].value;
        let anioAnt24M = c.totalItem.summaryCells[23][0].value;
        let presupuesto24M = c.totalItem.summaryCells[25][0].value;
        let proyeccion24M = c.totalItem.summaryCells[27][0].value;
        // //Abril
        // let totalA = c.totalItem.summaryCells[31][0].value;
        // let anioAntA = c.totalItem.summaryCells[32][0].value;
        // let presupuestoA = c.totalItem.summaryCells[34][0].value;
        // let proyeccionA = c.totalItem.summaryCells[36][0].value;
        // //Mayo
        // let totalMY = c.totalItem.summaryCells[40][0].value;
        // let anioAntMY = c.totalItem.summaryCells[41][0].value;
        // let presupuestoMY = c.totalItem.summaryCells[43][0].value;
        // let proyeccionMY = c.totalItem.summaryCells[45][0].value;
        // //Junio
        // let totalJN = c.totalItem.summaryCells[49][0].value;
        // let anioAntJN = c.totalItem.summaryCells[50][0].value;
        // let presupuestoJN = c.totalItem.summaryCells[52][0].value;
        // let proyeccionJN = c.totalItem.summaryCells[54][0].value;
        // //Juio
        // let totalJL = c.totalItem.summaryCells[58][0].value;
        // let anioAntJL = c.totalItem.summaryCells[59][0].value;
        // let presupuestoJL = c.totalItem.summaryCells[61][0].value;
        // let proyeccionJL = c.totalItem.summaryCells[63][0].value;
        // //Agosto
        // let totalAG = c.totalItem.summaryCells[67][0].value;
        // let anioAntAG = c.totalItem.summaryCells[68][0].value;
        // let presupuestoAG = c.totalItem.summaryCells[70][0].value;
        // let proyeccionAG = c.totalItem.summaryCells[72][0].value;
        // //Septiembre
        // let totalS = c.totalItem.summaryCells[76][0].value;
        // let anioAntS = c.totalItem.summaryCells[77][0].value;
        // let presupuestoS = c.totalItem.summaryCells[79][0].value;
        // let proyeccionS = c.totalItem.summaryCells[81][0].value;
        // //Octubre
        // let totalOC = c.totalItem.summaryCells[86][0].value;
        // let anioAntOC = c.totalItem.summaryCells[87][0].value;
        // let presupuestoOC = c.totalItem.summaryCells[89][0].value;
        // let proyeccionOC = c.totalItem.summaryCells[91][0].value;
        // //Noviembre
        // let totalNV = c.totalItem.summaryCells[95][0].value;
        // let anioAntNV = c.totalItem.summaryCells[96][0].value;
        // let presupuestoNV = c.totalItem.summaryCells[98][0].value;
        // let proyeccionNV = c.totalItem.summaryCells[100][0].value;
        // //Diciembre
        // let totalDC = c.totalItem.summaryCells[104][0].value;
        // let anioAntDC = c.totalItem.summaryCells[105][0].value;
        // let presupuestoDC = c.totalItem.summaryCells[107][0].value;
        // let proyeccionDC = c.totalItem.summaryCells[109][0].value;
        //console.log(c.totalItem.summaryCells)

        //Calculo de Porcentajes
        //ENERO 2024
        if(c.totalItem.summaryCells[6][0] !== undefined){
          total24E === 0 ? c.totalItem.summaryCells[6][0].value = 0 : c.totalItem.summaryCells[6][0].value = total24E/anioAnt24E;
          presupuesto24E === 0 ? c.totalItem.summaryCells[8][0].value = 0 : c.totalItem.summaryCells[8][0].value = total24E/presupuesto24E;
          proyeccion24E === 0 ? c.totalItem.summaryCells[10][0].value = 0 : c.totalItem.summaryCells[10][0].value = total24E/presupuesto24E;

          totalesPor24.totalE = c.totalItem.summaryCells[6][0].value
          totalesPor24.presupuestoE = c.totalItem.summaryCells[8][0].value
          totalesPor24.proyeccionE = c.totalItem.summaryCells[10][0].value
        }
        //Enero
        // if(c.totalItem.summaryCells[6][0] !== undefined){
        //   totalE === 0 ? c.totalItem.summaryCells[6][0].value = 0 : c.totalItem.summaryCells[6][0].value = totalE/anioAntE;
        //   presupuestoE === 0 ? c.totalItem.summaryCells[8][0].value = 0 : c.totalItem.summaryCells[8][0].value = totalE/presupuestoE;
        //   proyeccionE === 0 ? c.totalItem.summaryCells[10][0].value = 0 : c.totalItem.summaryCells[10][0].value = totalE/proyeccionE;

        //   totalesPor.totalE = c.totalItem.summaryCells[6][0].value;
        //   totalesPor.presupuestoE = c.totalItem.summaryCells[8][0].value;
        //   totalesPor.proyeccionE = c.totalItem.summaryCells[10][0].value;

        // }
        // //Febrero
        if(c.totalItem.summaryCells[15][0] !== undefined){
          total24FB === 0 ? c.totalItem.summaryCells[15][0].value = 0 : c.totalItem.summaryCells[15][0].value = total24FB/anioAnt24FB;
          presupuesto24FB === 0 ? c.totalItem.summaryCells[17][0].value = 0 : c.totalItem.summaryCells[17][0].value = total24FB/presupuesto24FB;
          proyeccion24FB === 0 ? c.totalItem.summaryCells[19][0].value = 0 : c.totalItem.summaryCells[19][0].value = total24FB/proyeccion24FB;

          totalesPor24.totalFB = c.totalItem.summaryCells[15][0].value
          totalesPor24.presupuestoFB = c.totalItem.summaryCells[17][0].value
          totalesPor24.proyeccionFB = c.totalItem.summaryCells[19][0].value
        }
        // //Marzo
        if(c.totalItem.summaryCells[24][0] !== undefined){
          total24M === 0 ? c.totalItem.summaryCells[24][0].value = 0 : c.totalItem.summaryCells[24][0].value = total24M/anioAnt24M;
          presupuesto24M === 0 ? c.totalItem.summaryCells[26][0].value = 0 : c.totalItem.summaryCells[26][0].value = total24M/presupuesto24M;
          proyeccion24M === 0 ? c.totalItem.summaryCells[28][0].value = 0 : c.totalItem.summaryCells[28][0].value = total24M/proyeccion24M;

          totalesPor24.totalM = c.totalItem.summaryCells[24][0].value
          totalesPor24.presupuestoM = c.totalItem.summaryCells[26][0].value
          totalesPor24.proyeccionM = c.totalItem.summaryCells[28][0].value
        }
        // //Abril
        // if(c.totalItem.summaryCells[31][0] !== undefined){
        //   totalA === 0 ? c.totalItem.summaryCells[33][0].value = 0 : c.totalItem.summaryCells[33][0].value = totalA/anioAntA;
        //   presupuestoA === 0 ? c.totalItem.summaryCells[35][0].value = 0 : c.totalItem.summaryCells[35][0].value = totalA/presupuestoA;
        //   proyeccionA === 0 ? c.totalItem.summaryCells[37][0].value = 0 : c.totalItem.summaryCells[37][0].value = totalA/proyeccionA;

        //   totalesPor.totalA = c.totalItem.summaryCells[33][0].value
        //   totalesPor.presupuestoA = c.totalItem.summaryCells[35][0].value
        //   totalesPor.proyeccionA = c.totalItem.summaryCells[37][0].value
        // }
        // //Mayo
        // if(c.totalItem.summaryCells[40][0] !== undefined){
        //   totalMY === 0 ? c.totalItem.summaryCells[42][0].value = 0 : c.totalItem.summaryCells[42][0].value = totalMY/anioAntMY;
        //   presupuestoMY === 0 ? c.totalItem.summaryCells[44][0].value = 0 : c.totalItem.summaryCells[44][0].value = totalMY/presupuestoMY;
        //   proyeccionMY === 0 ? c.totalItem.summaryCells[46][0].value = 0 : c.totalItem.summaryCells[46][0].value = totalMY/proyeccionMY;

        //   totalesPor.totalMY = c.totalItem.summaryCells[42][0].value
        //   totalesPor.presupuestoMY = c.totalItem.summaryCells[44][0].value
        //   totalesPor.proyeccionMY = c.totalItem.summaryCells[46][0].value
        // }
        // //Junio
        // if(c.totalItem.summaryCells[49][0] !== undefined){
        //   totalJN === 0 ? c.totalItem.summaryCells[51][0].value = 0 : c.totalItem.summaryCells[51][0].value = totalJN/anioAntJN;
        //   presupuestoJN === 0 ? c.totalItem.summaryCells[53][0].value = 0 : c.totalItem.summaryCells[53][0].value = totalJN/presupuestoJN;
        //   proyeccionJN === 0 ? c.totalItem.summaryCells[55][0].value = 0 : c.totalItem.summaryCells[55][0].value = totalJN/proyeccionJN;

        //   totalesPor.totalJN = c.totalItem.summaryCells[51][0].value
        //   totalesPor.presupuestoJN = c.totalItem.summaryCells[53][0].value
        //   totalesPor.proyeccionJN = c.totalItem.summaryCells[55][0].value
        // }
        // //Julio
        // if(c.totalItem.summaryCells[58][0] !== undefined){
        //   totalJL === 0 ? c.totalItem.summaryCells[60][0].value = 0 : c.totalItem.summaryCells[60][0].value = totalJL/anioAntJL;
        //   presupuestoJL === 0 ? c.totalItem.summaryCells[62][0].value = 0 : c.totalItem.summaryCells[62][0].value = totalJL/presupuestoJL;
        //   proyeccionJL === 0 ? c.totalItem.summaryCells[64][0].value = 0 : c.totalItem.summaryCells[64][0].value = totalJL/proyeccionJL;

        //   totalesPor.totalJL = c.totalItem.summaryCells[60][0].value
        //   totalesPor.presupuestoJL = c.totalItem.summaryCells[62][0].value
        //   totalesPor.proyeccionJL = c.totalItem.summaryCells[64][0].value
        // }
        // //Agosto
        // if(c.totalItem.summaryCells[67][0] !== undefined){
        //   totalAG === 0 ? c.totalItem.summaryCells[69][0].value = 0 : c.totalItem.summaryCells[69][0].value = totalAG/anioAntAG;
        //   presupuestoAG === 0 ? c.totalItem.summaryCells[71][0].value = 0 : c.totalItem.summaryCells[71][0].value = totalAG/presupuestoAG;
        //   proyeccionAG === 0 ? c.totalItem.summaryCells[73][0].value = 0 : c.totalItem.summaryCells[73][0].value = totalAG/proyeccionAG;

        //   totalesPor.totalAG = c.totalItem.summaryCells[69][0].value
        //   totalesPor.presupuestoAG = c.totalItem.summaryCells[71][0].value
        //   totalesPor.proyeccionAG = c.totalItem.summaryCells[73][0].value
        // }
        // //Septiembre
        // if(c.totalItem.summaryCells[76][0] !== undefined){
        //   totalS === 0 ? c.totalItem.summaryCells[78][0].value = 0 : c.totalItem.summaryCells[78][0].value = totalS/anioAntS;
        //   presupuestoS === 0 ? c.totalItem.summaryCells[80][0].value = 0 : c.totalItem.summaryCells[80][0].value = totalS/presupuestoS;
        //   proyeccionS === 0 ? c.totalItem.summaryCells[82][0].value = 0 : c.totalItem.summaryCells[82][0].value = totalS/proyeccionS;

        //   totalesPor.totalS = c.totalItem.summaryCells[78][0].value
        //   totalesPor.presupuestoS = c.totalItem.summaryCells[80][0].value
        //   totalesPor.proyeccionS = c.totalItem.summaryCells[82][0].value
        // }
        // //Octubre
        // if(c.totalItem.summaryCells[86][0] !== undefined){
        //   totalOC === 0 ? c.totalItem.summaryCells[88][0].value = 0 : c.totalItem.summaryCells[88][0].value = totalOC/anioAntOC;
        //   presupuestoOC === 0 ? c.totalItem.summaryCells[90][0].value = 0 : c.totalItem.summaryCells[90][0].value = totalOC/presupuestoOC;
        //   proyeccionOC === 0 ? c.totalItem.summaryCells[92][0].value = 0 : c.totalItem.summaryCells[92][0].value = totalOC/proyeccionOC;

        //   totalesPor.totalOC = c.totalItem.summaryCells[88][0].value
        //   totalesPor.presupuestoOC = c.totalItem.summaryCells[90][0].value
        //   totalesPor.proyeccionOC = c.totalItem.summaryCells[92][0].value
        // }
        // //Noviembre
        // if(c.totalItem.summaryCells[95][0] !== undefined){
        //   totalNV === 0 ? c.totalItem.summaryCells[97][0].value = 0 : c.totalItem.summaryCells[97][0].value = totalNV/anioAntNV;
        //   presupuestoNV === 0 ? c.totalItem.summaryCells[99][0].value = 0 : c.totalItem.summaryCells[99][0].value = totalNV/presupuestoNV;
        //   proyeccionNV === 0 ? c.totalItem.summaryCells[101][0].value = 0 : c.totalItem.summaryCells[101][0].value = totalNV/proyeccionNV;

        //   totalesPor.totalNV = c.totalItem.summaryCells[97][0].value
        //   totalesPor.presupuestoNV = c.totalItem.summaryCells[99][0].value
        //   totalesPor.proyeccionNV = c.totalItem.summaryCells[101][0].value
        // }
        // //Diciembre
        // if(c.totalItem.summaryCells[104][0] !== undefined){
        //   totalDC === 0 ? c.totalItem.summaryCells[106][0].value = 0 : c.totalItem.summaryCells[106][0].value = totalDC/anioAntDC;
        //   presupuestoDC === 0 ? c.totalItem.summaryCells[108][0].value = 0 : c.totalItem.summaryCells[108][0].value = totalDC/presupuestoDC;
        //   proyeccionDC === 0 ? c.totalItem.summaryCells[110][0].value = 0 : c.totalItem.summaryCells[110][0].value = totalDC/presupuestoDC;

        //   totalesPor.totalDC = c.totalItem.summaryCells[106][0].value
        //   totalesPor.presupuestoDC = c.totalItem.summaryCells[108][0].value
        //   totalesPor.proyeccionDC = c.totalItem.summaryCells[110][0].value
        // }

      })
      
    }
  }




  verDetallesClick2023(event) {

    if(event.cellElement.innerText == "Enero" || event.cellElement.innerText == "Febrero" || event.cellElement.innerText == "Marzo"
    || event.cellElement.innerText == "Abril" || event.cellElement.innerText == "Mayo" || event.cellElement.innerText == "Junio"
    || event.cellElement.innerText == "Julio" || event.cellElement.innerText == "Agosto" || event.cellElement.innerText == "Septiembre"
    || event.cellElement.innerText == "Octubre" || event.cellElement.innerText == "Noviembre" || event.cellElement.innerText == "Diciembre" ){

        this.openModReal2023 = true;
    }
  }

  verDetallesClick2024(event) {

    if(event.cellElement.innerText == "Enero" || event.cellElement.innerText == "Febrero" || event.cellElement.innerText == "Marzo"
    || event.cellElement.innerText == "Abril" || event.cellElement.innerText == "Mayo" || event.cellElement.innerText == "Junio"
    || event.cellElement.innerText == "Julio" || event.cellElement.innerText == "Agosto" || event.cellElement.innerText == "Septiembre"
    || event.cellElement.innerText == "Octubre" || event.cellElement.innerText == "Noviembre" || event.cellElement.innerText == "Diciembre" ){

        this.openModReal2024 = true;
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
  formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
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
      e.font = {bold: true}

    }

    if (gridCell.rowType === 'totalFooter') {
        
      e.backgroundColor = "#ff9460";
      e.fontWeight = "bolder"
      e.font = {bold: true}

    }


  }

  customizeExportData(cols, rows){  
    //console.log(cols)
    rows.forEach((row: any) =>{  
      
      //console.log(row)
      if(row.rowType == "groupFooter"){
          // row.values[5].value = 123;
          // console.log(row.values[5])
      }

      if(row.rowType == "totalFooter"){
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

  /**================TEST==================================*/
  exportGrids(e) {
    const context = this;
    const workbook = new Workbook();

    const carteraSheet = workbook.addWorksheet('DETALLE INGRESO');

    function setAlternatingRowsBackground(gridCell, excelCell) {
      if (gridCell.rowType === 'header') {

          excelCell.fill = {
            type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' },
        }
      }
  
      if(gridCell.rowType == 'groupFooter'){
        if(gridCell.column.dataField == 'eneroPor'){
          console.log(gridCell)
        }

      }
  
      if (gridCell.rowType === 'totalFooter') {
        // if(gridCell.column.caption !== "Nombre de cliente" && gridCell.column.caption !== "Intercompañia"){
        //   var currency = excelCell._value.model.value;
        //   var number = Number(currency.replace(/[^0-9.-]+/g,""));
        //   excelCell._value.model.value = number;
        // }

          excelCell.fill = {
            type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF9460' }, bgColor: { argb: 'FF9460' },
          };
      }

      if (gridCell.rowType === 'group') {
          excelCell.fill = {
            type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' },
          }
      }
    }

    // carteraSheet.columns = [
    //   { width: 10 }, { width: 35 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 }, { width: 18 },{ width: 18 }
    // ];

    carteraSheet.views = [{state: 'normal'}];

    exportDataGrid({
      worksheet: carteraSheet,
      component: context.gridDetalleI.instance,
      keepColumnWidths: false,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        setAlternatingRowsBackground(gridCell, excelCell);
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Cartera Cliente.xlsx');
      });
    });
  }

  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return "$ "+myFormat.join("");

  }

}
