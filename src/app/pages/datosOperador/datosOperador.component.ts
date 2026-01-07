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
import { DatosOperadorService } from 'src/app/services/datosOperador/datosOperador.service';

import notify from 'devextreme/ui/notify';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';

const totalesPor = new TotalPorcentajes;
const totalesPorGr = new TotalPorcentajes;

const groupName = new Modelos;

@Component({
  templateUrl: './datosOperador.component.html',
  styleUrls: ['./datosOperador.component.scss'],
  providers: [UnidadesService, ServiceSales, CurrencyPipe, Service],
})

export class DatosOperadorComponent implements OnInit {

  @ViewChild(DxChartComponent, { static: false }) chart: any;


  @ViewChild('gridModal', { static: false }) gridModal: DxDataGridComponent;


  //loading
  loadingVisible = false;

  paginacion = 5;
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];


  expandGroup: boolean = true;
  isVisible = false;

  datosOperador

  showFilterRow: boolean;
  currentFilter: any;
  applyFilterTypes: any;

  now: Date = new Date();

  bolFormSoloLectura = false;

  selectedUdn: number = 0;

  udn: any[] = [
    {idArea: 0, nombre: 'TODOS'},
    {idArea: 1, nombre: 'ORIZABA' },
    {idArea: 2, nombre: 'GUADALAJARA' },
    {idArea: 3, nombre: 'RAMOS ARIZPE' },
    {idArea: 4, nombre: 'MEXICALI' },
    {idArea: 5, nombre: 'HERMOSILLO' },
    {idArea: 8, nombre: 'CUAUTITLAN' },
    {idArea: 9, nombre: 'TULTITLAN' },

  ]

  constructor(
    private datosOpService: DatosOperadorService,
    private service: ServiceSales,
    private currencyPipe: CurrencyPipe,
    testService: Service
  ) {

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.showFilterRow = true;

    this.applyFilterTypes = [{
      key: 'auto',
      name: 'Immediately',
    }, {
      key: 'onClick',
      name: 'On Button Click',
    }];

    this.currentFilter = this.applyFilterTypes[0].key;
  }

  ngOnInit(): void {

  }

  getDatosOperador() {
      this.loadingVisible = true,
    this.datosOpService.getDatosOperador(this.selectedUdn).subscribe((response) => {
      this.datosOperador = response.data.vigentes;
      console.log(response.data)
      this.loadingVisible = false;
    });
  }

  selectUdn(value: any){
    this.selectedUdn = value.value;
    //console.log(this.selectedUdn)
  }

 

  buscarClick = (e: any) => {
    // if (this.selectedUdn !== undefined && this.formFilter.Fecha !== "") {
      this.loadingVisible = true;
      
    this.getDatosOperador();
      // }else{
      //   notify({
      //     message: "Debe seleccionar la Fecha",
      //     position: {
      //       my: 'top center',
      //       at: 'top center',
      //     },
      //   }, 'warning', 4000);
      // }
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

  onRowPrepared(e: any) {
    // if (e.rowType == 'data') {

    //   e.cells.forEach((c: any) => {

    //     if (c.cellElement) {
    //       if (c.columnIndex == 2) {
    //         c.cellElement.style.fontWeight = "bolder";
    //         c.cellElement.style.fontSize = "15px";
    //         c.cellElement.style.background = "#cdcbcb";
    //       }
    //     }
    //   });
    // }
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

  onCellPrepared(e: any) {
    if (e.rowType == 'group') {

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }

    // if (e.rowType == 'groupFooter') {


    //   if (e.columnIndex == 2) {
    //     e.cellElement.style.fontWeight = "bolder";
    //     e.cellElement.style.fontSize = "15px";
    //     e.cellElement.style.background = "#cdcbcb";
    //   }
    // }
  }

  customizeOp(e) {
    var gridCell = e.gridCell;

    // if (gridCell.rowType === 'data') {

    //   if (e.gridCell.column.dataField == "disponibles") {
    //     e.backgroundColor = "#DCDCDC";
    //     e.fontWeight = "bolder"
    //     e.font = { bold: true }
    //   }     
    // }

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

  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    return "$ " + myFormat.join("");

  }

}
