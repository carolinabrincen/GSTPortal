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

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';

@Component({
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss'],
  providers: [UnidadesService,ServiceSales, CurrencyPipe, Service],
})

export class IngresosComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart: any;

  @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent | undefined;

  @ViewChild('priceDataGrid', { static: false }) priceDataGrid: DxDataGridComponent;

  @ViewChild('ratingDataGrid', { static: false }) ratingDataGrid: DxDataGridComponent;

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

  totalPor = new TotalPorcentajes;
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
        console.log(this.indicadores)

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
        //console.log(e.summaryCells)
        //Octubre
        this.totalPor.totalOC = e.summaryCells[86][0].value;
        this.totalPor.anioAntOC = e.summaryCells[87][0].value;
        this.totalPor.presupuestoOC = e.summaryCells[89][0].value;
        this.totalPor.proyeccionOC = e.summaryCells[91][0].value;
        //Noviembre
        // this.totalPor.totalNV = e.summaryCells[][0].value;
        // this.totalPor.anioAntNV = e.summaryCells[][0].value;
        // this.totalPor.presupuestoNV = e.summaryCells[][0].value;
        // this.totalPor.proyeccionNV = e.summaryCells[][0].value;
        //Diciembre
        // this.totalPor.totalDC = e.summaryCells[][0].value;
        // this.totalPor.anioAntDC = e.summaryCells[][0].value;
        // this.totalPor.presupuestoDC = e.summaryCells[][0].value;
        // this.totalPor.proyeccionDC = e.summaryCells[][0].value;

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
        // this.totalPor.aniATotalNV = this.totalPor.totalNV / this.totalPor.anioAntNV;
        // this.totalPor.presTotalNV = this.totalPor.totalNV / this.totalPor.presupuestoNV;
        // this.totalPor.ProyTotalNV = this.totalPor.proyeccionNV / this.totalPor.presupuestoNV;
        //Diciembre
        // this.totalPor.aniATotalDC = this.totalPor.totalDC / this.totalPor.anioAntDC;
        // this.totalPor.presTotalDC = this.totalPor.totalDC / this.totalPor.presupuestoDC;
        // this.totalPor.ProyTotalDC = this.totalPor.proyeccionDC / this.totalPor.presupuestoDC;

        //Enero
        e.summaryCells[6][0].value = this.totalPor.aniATotalE;
        e.summaryCells[8][0].value = this.totalPor.presTotalE;
        e.summaryCells[10][0].value = this.totalPor.ProyTotalE;
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
        // e.summaryCells[][0].value = this.totalPor.aniATotalNV;
        // e.summaryCells[][0].value = this.totalPor.presTotalNV;
        // e.summaryCells[][0].value = this.totalPor.ProyTotalNV;
        //Diciembre
        // e.summaryCells[][0].value = this.totalPor.aniATotalDC;
        // e.summaryCells[][0].value = this.totalPor.presTotalDC;
        // e.summaryCells[][0].value = this.totalPor.ProyTotalDC;

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

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }


  exportGrids(e) {
    const context = this;
    const workbook = new Workbook();
    const priceSheet = workbook.addWorksheet('Price');
    // const ratingSheet = workbook.addWorksheet('Rating');

    priceSheet.getRow(2).getCell(2).value = 'Price';
    priceSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    // ratingSheet.getRow(2).getCell(2).value = 'Rating';
    // ratingSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    function setAlternatingRowsBackground(gridCell, excelCell) {
      if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
        if (excelCell.fullAddress.row % 2 === 0) {
          excelCell.fill = {
            type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' },
          };
        }
      }
    }

    exportDataGrid({
      worksheet: priceSheet,
      component: context.priceDataGrid.instance,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        setAlternatingRowsBackground(gridCell, excelCell);
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
      });
    });
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


  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return "$ "+myFormat.join("");

  }

}
