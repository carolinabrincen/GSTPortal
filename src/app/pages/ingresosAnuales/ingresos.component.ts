import {NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef,AfterViewInit, OnInit} from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import { DxDataGridComponent, } from 'devextreme-angular';
import { CurrencyPipe } from '@angular/common';
import { DxChartComponent, } from 'devextreme-angular';
import { ServiceSales } from '../tasks/app.serviceSales';
import { AniosModel} from './../../shared/models/rentabilidad-contable/renta-contable.model';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

import {Sale, Service} from '../../shared/models/ingresos/ingreso.service'
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
    // this.verDetallesClick = this.verDetallesClick.bind(this)

    // this.pivotGridDataSource = new PivotGridDataSource({
    //   fields: [{
    //     caption: 'UdN',
    //     width: 120,
    //     dataField: 'unidadNegocio',
    //     area: 'row',
    //     headerFilter: {
    //       allowSearch: true,
    //     },
    //   }, {
    //     caption: 'Operacion',
    //     dataField: 'tipoOperacion',
    //     width: 150,
    //     area: 'row',
    //     headerFilter: {
    //       allowSearch: true,
    //     },
    //     selector(data: Sale) {
    //       return `${data.tipoOperacion} (${data.unidadNegocio})`;
    //     },
    //   }, {
    //     dataField: 'mes',
    //     dataType: 'string',
    //     area: 'column',
    //   }, {
    //     caption: 'Sales',
    //     dataField: 'eneroTotal',
    //     dataType: 'number',
    //     summaryType: 'sum',
    //     format: 'currency',
    //     area: 'data',
    //   }],
    //   store: testService.getSales(),
    // });

  }

  getIngresosAnuales(Anio: number, UnidadNegocio: number)
  {
    console.log(Anio)
    console.log(UnidadNegocio)
      this.service.getIndicadores(Anio, UnidadNegocio).subscribe((response) => {
    
        this.indicadores = response.data;
        console.log(this.indicadores)
    
        //llenado delGrid con columnas y filas

     
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
      
      // this.treeBoxValue = e.component.getSelectedNodeKeys();
      // this.UnidadNegocio = e.node.text;
      
      // this.IdUnidadNegocio = Number.parseInt(this.treeBoxValue[0]);
  
      
      this.getIngresosAnuales(this.anioSeleccionado, this.IdUnidadNegocio);
      //this.getIngresosAnualesChart(this.Anio, this.IdUnidadNegocio);
      // this.getKmsAnuales(this.Anio, this.IdUnidadNegocio);
      // this.getKmsAnualesChart(this.Anio, this.IdUnidadNegocio);
      // this.getViajesAnuales(this.Anio, this.IdUnidadNegocio);
      // this.getViajesAnualesChart(this.Anio, this.IdUnidadNegocio);
      // this.getToneladasAnuales(this.Anio, this.IdUnidadNegocio);
      // this.getToneladasAnualesChart(this.Anio, this.IdUnidadNegocio);
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
    
    
    // this.getIngresosAnuales(this.Anio, this.IdUnidadNegocio);
    // this.getIngresosAnualesChart(this.Anio, this.IdUnidadNegocio);
    // this.getKmsAnuales(this.Anio, this.IdUnidadNegocio);
    // this.getKmsAnualesChart(this.Anio, this.IdUnidadNegocio);
    // this.getViajesAnuales(this.Anio, this.IdUnidadNegocio);
    // this.getViajesAnualesChart(this.Anio, this.IdUnidadNegocio);
    // this.getToneladasAnuales(this.Anio, this.IdUnidadNegocio);
    // this.getToneladasAnualesChart(this.Anio, this.IdUnidadNegocio);
  
  }



  onTreeBoxOptionChanged(e:any) {
    if (e.name === 'value') {
      this.isTreeBoxOpened = false;
      // this.ref.detectChanges();
    }
  }

    
  ngOnInit(): void {
  }

  onRowPrepared(e: any) {
    
    if (e.rowType == 'data') {
      // e.cells.forEach((c: any) => {

      //   if (c.cellElement) {
      //     //poner en rojo negativos
      //     if (c.value && c.value.toString().startsWith('-')) {
      //       c.cellElement.style.color = "red";
      //     }

      //     //negrita columna margen utilidad
      //     if (c.columnIndex == 7  || c.columnIndex == 8  ||
      //         c.columnIndex == 23 || c.columnIndex == 24 ||
      //         c.columnIndex == 37 || c.columnIndex == 38) {
      //       c.cellElement.style.fontWeight = "bolder";
      //       c.cellElement.style.fontSize = "14px";
      //       c.cellElement.style.background = "#f5f5f5";
      //     }

      //     //porcentaje de combistuble > .25 en rojo
      //     if (c.columnIndex == 16 && c.value >= .25) {
      //       c.cellElement.style.color = "red";
      //     }
      //   }



      // });
    }

    if (e.rowType == 'group') {
      // if (e.groupIndex == 0) {
      //   e.rowElement.style.backgroundColor = '#ff9460';
      //   e.rowElement.style.color = "white";
      // }
      // else {
      //   e.rowElement.style.backgroundColor = '#dcdcdc';
      //   e.rowElement.style.color = "black";
      //   e.rowElement.style.fontWeight = "bolder";
      // }
    }

    if (e.rowType == 'groupFooter'){
      
      // if(e.groupIndex == 0 && e.data.key == 'CUAUTITLAN'){
      //   // console.log(e)

      //   e.cells.forEach((c: any) => {
      //     if (c.cellElement) {

      //     }    
      //   });
      // }


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

  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //     console.log('📵', options);
    //   }
    // }
  }

  onContentReady(e: any) {

    this.loadingVisible = false;

  }

  onCellPrepared(e: any) {
    if(e.rowType === "groupFooter" && e.column.dataField === "margenUtilida") {
      //console.log('👣', e);

        e.cellElement.style.color = "red";
        // Tracks the `Amount` data field
        // e.watch(function() {
        //     return e.data.Amount;
        // }, function() {
        //     e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
        // })
    }
  }

  total: number = 0;
  anioAnt: number = 0;
  presupuesto: number = 0;
  proyeccion: number = 0;
  aniATotal: number = 0;
  presTotal: number = 0;
  ProyTotal: number = 0;
  onRowPreparedDetalle(e: any){
    if (e.rowType == 'data') {
      e.cells.forEach((c: any) => {

        // if (c.cellElement) {
        //   //poner en rojo negativos
        //   if (c.value && c.value.toString().startsWith('-')) {
        //     c.cellElement.style.color = "red";
        //   }

        //   //negrita columna margen utilidad
        //   if (c.columnIndex == 7  || c.columnIndex == 8  ||
        //       c.columnIndex == 23 || c.columnIndex == 24 ||
        //       c.columnIndex == 37 || c.columnIndex == 38) {
        //     c.cellElement.style.fontWeight = "bolder";
        //     c.cellElement.style.fontSize = "14px";
        //     c.cellElement.style.background = "#f5f5f5";
        //   }

        //   //porcentaje de combistuble > .25 en rojo
        //   if (c.columnIndex == 16 && c.value >= .25) {
        //     c.cellElement.style.color = "red";
        //   }
        // }



      });
    }

    if (e.rowType == 'group') {
      // if (e.groupIndex == 0) {
      //   e.rowElement.style.backgroundColor = '#ff9460';
      //   e.rowElement.style.color = "white";
      // }
      // else {
      //   e.rowElement.style.backgroundColor = '#dcdcdc';
      //   e.rowElement.style.color = "black";
      //   e.rowElement.style.fontWeight = "bolder";
      // }
    }

    if (e.rowType == 'groupFooter'){
      if(e.groupIndex == 0){
        console.log(e)
        this.total = e.summaryCells[4][0].value;
        this.anioAnt = e.summaryCells[5][0].value;
        this.presupuesto = e.summaryCells[7][0].value;
        this.proyeccion = e.summaryCells[9][0].value;

        this.aniATotal = this.total / this.anioAnt;
        this.presTotal = this.total / this.presupuesto;
        this.ProyTotal = this.total / this.proyeccion;

        e.summaryCells[6][0].value = this.aniATotal;
        e.summaryCells[8][0].value = this.presTotal;
        e.summaryCells[10][0].value = this.ProyTotal;

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

  verDetallesClick(event) {

    if(event.cellElement.innerText == "Enero" || event.cellElement.innerText == "Febrero" || event.cellElement.innerText == "Marzo"
    || event.cellElement.innerText == "Abril" || event.cellElement.innerText == "Mayo" || event.cellElement.innerText == "Junio"
    || event.cellElement.innerText == "Julio" || event.cellElement.innerText == "Agosto" || event.cellElement.innerText == "Septiembre"
    || event.cellElement.innerText == "Octubre" || event.cellElement.innerText == "Noviembre" || event.cellElement.innerText == "Diciembre" ){
      //console.log(event)

      // if(this.indicadores.length !== 0){
        this.openModReal = true;
      // }else{
      //   this.isVisible = true;
      // } 

    }


  }

}
