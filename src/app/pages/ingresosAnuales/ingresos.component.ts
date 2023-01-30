import {NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef,AfterViewInit, OnInit} from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import { DxDataGridComponent, } from 'devextreme-angular';
import { CurrencyPipe } from '@angular/common';
import { DxChartComponent, } from 'devextreme-angular';
import { ServiceSales } from '../tasks/app.serviceSales';
import { AniosModel} from './../../shared/models/rentabilidad-contable/renta-contable.model';

@Component({
  
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss'],
  providers: [UnidadesService,ServiceSales, CurrencyPipe],
})

export class IngresosComponent implements OnInit {
  
  
  @ViewChild(DxChartComponent, { static: false }) chart: any;

  @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent | undefined;

  pivotGridDataSource: any;

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

  paginacion = 60; 
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];
  
  constructor( private unidadesService: UnidadesService, private service: ServiceSales, private currencyPipe: CurrencyPipe) {

    this.IdUnidadNegocio = 0;
    this.UnidadNegocio = "Nacional";
    this.Anio = 2022;
    this.treeDataSource = unidadesService.getUnidades();
    
    this.isTreeBoxOpened = false;
    
    this.treeBoxValue = ['0'];

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
  }

  getIngresosAnuales(Anio: number, UnidadNegocio: number)
  {
    console.log(Anio)
    console.log(UnidadNegocio)
      this.service.getIndicadores(Anio, UnidadNegocio).subscribe((response) => {
    
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

  total: number = 0;
  anioAnt: number = 0;
  resTotal: number = 0;
  onRowPrepared(e: any) {
    
    if (e.rowType == 'groupFooter'){

      if(e.groupIndex == 0){
        console.log(e)
        //Sacando valores para la operacion
        if(e.summaryCells.length != 0){
          this.total = e.summaryCells[4][0].value;
          this.anioAnt = e.summaryCells[5][0].value; 
          console.log(this.total + '  ' + this.anioAnt)
        }
        //Operacion de valores
        if(this.total && this.anioAnt != undefined){
          console.log(this.total + '  ' + this.anioAnt)
          this.resTotal = this.total / this.anioAnt;
        } 
 
        //Resultado de valores
        if(this.resTotal != undefined){
          console.log(this.resTotal)
          e.summaryCells[6][0].value = this.resTotal;
        }
      } 

    }
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



}
