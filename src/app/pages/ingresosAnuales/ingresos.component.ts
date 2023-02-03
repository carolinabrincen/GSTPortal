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

@Component({
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss'],
  providers: [UnidadesService,ServiceSales, CurrencyPipe, Service],
})

export class IngresosComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart: any;

  @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent | undefined;
  employee: any;
  treeBoxValue: string[];
  treeDataSource: any;

  dataSource: any;
  indicadores: IngresosModel[] = [];
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

  openModReal: boolean = false;
  positionOf: string = '#myDiv';
  expandGroup: boolean = true;
  isVisible = false;

  totalPor: TotalPorcentajes;

  graficaModel: ModeloGrafica[] = [];

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
  }

  getIngresosAnuales()
  {
    var myanio = 2023;
    var myUdN = 0;
      this.service.getIndicadores(myanio, myUdN).subscribe((response) => {
    
        this.indicadores = response.data;
 
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

      this.graficaModel = [
        {mes: "ENERO", total: e.summaryCells[2][0].value, presupuesto: e.summaryCells[3][0].value},
        {mes: "FEBRERO", total: e.summaryCells[4][0].value, presupuesto: e.summaryCells[5][0].value},
        {mes: "MARZO", total: e.summaryCells[6][0].value, presupuesto: e.summaryCells[7][0].value},
        {mes: "ABRIL", total: e.summaryCells[8][0].value, presupuesto: e.summaryCells[9][0].value},
        {mes: "MAYO", total: e.summaryCells[10][0].value, presupuesto: e.summaryCells[11][0].value},
        {mes: "JUNIO", total: e.summaryCells[12][0].value, presupuesto: e.summaryCells[13][0].value},
        {mes: "JULIO", total: e.summaryCells[14][0].value, presupuesto: e.summaryCells[15][0].value},
        {mes: "AGOSTO", total: e.summaryCells[16][0].value, presupuesto: e.summaryCells[17][0].value},
        {mes: "SEPTIEMBRE", total: e.summaryCells[18][0].value, presupuesto: e.summaryCells[19][0].value},
        {mes: "OCTUBRE", total: e.summaryCells[20][0].value, presupuesto: e.summaryCells[21][0].value},
        {mes: "NOVIEMBRE", total: e.summaryCells[22][0].value, presupuesto: e.summaryCells[23][0].value},
        {mes: "DICIEMBRE", total: e.summaryCells[24][0].value, presupuesto: e.summaryCells[25][0].value},  
      ]
      // e.summaryCells[7][0].value


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

  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //   }
    // }
  }

  onContentReady(e: any) {

    this.loadingVisible = false;

  }

  onCellPrepared(e: any) {
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }

  total: number = 0;
  anioAnt: number = 0;
  presupuesto: number = 0;
  proyeccion: number = 0;
  aniATotal: number = 0;
  presTotal: number = 0;
  ProyTotal: number = 0;

  totalFB: number = 0;
  anioAntFB: number = 0;
  presupuestoFB: number = 0;
  proyeccionFB: number = 0;
  aniATotalFB: number = 0;
  presTotalFB: number = 0;
  ProyTotalFB: number = 0;

  onRowPreparedDetalle(e: any){
    if (e.rowType == 'groupFooter'){
      if(e.groupIndex == 0){
        this.total = e.summaryCells[4][0].value;
        this.anioAnt = e.summaryCells[5][0].value;
        this.presupuesto = e.summaryCells[7][0].value;
        this.proyeccion = e.summaryCells[9][0].value;

        this.totalFB = e.summaryCells[13][0].value;
        this.anioAntFB = e.summaryCells[14][0].value;
        this.presupuestoFB = e.summaryCells[16][0].value;
        this.proyeccionFB = e.summaryCells[18][0].value;

        this.aniATotal = this.total / this.anioAnt;
        this.presTotal = this.total / this.presupuesto;
        this.ProyTotal = this.proyeccion / this.presupuesto;

        this.aniATotalFB = this.totalFB / this.anioAntFB;
        this.presTotalFB = this.totalFB / this.presupuestoFB;
        this.ProyTotalFB = this.proyeccionFB / this.presupuestoFB;

        e.summaryCells[6][0].value = this.aniATotal;
        e.summaryCells[8][0].value = this.presTotal;
        e.summaryCells[10][0].value = this.ProyTotal;

        e.summaryCells[15][0].value = this.aniATotalFB;
        e.summaryCells[17][0].value = this.presTotalFB;
        e.summaryCells[19][0].value = this.ProyTotalFB;

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
  }

  verDetallesClick(event) {

    if(event.cellElement.innerText == "Enero" || event.cellElement.innerText == "Febrero" || event.cellElement.innerText == "Marzo"
    || event.cellElement.innerText == "Abril" || event.cellElement.innerText == "Mayo" || event.cellElement.innerText == "Junio"
    || event.cellElement.innerText == "Julio" || event.cellElement.innerText == "Agosto" || event.cellElement.innerText == "Septiembre"
    || event.cellElement.innerText == "Octubre" || event.cellElement.innerText == "Noviembre" || event.cellElement.innerText == "Diciembre" ){

      // if(this.indicadores.length !== 0){
        this.openModReal = true;
      // }else{
      //   this.isVisible = true;
      // } 

    }


  }

  //==================Formato a la data de la grafica==================================
  formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
}

}
