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
import { PagosService } from 'src/app/services/pagos/pagos.service';
import { TotalesXDisponibilidad, TotalOperacion, TotalesXTracos, TotalOpeT, TotalesXRemolques, TotalOpeR  } from '../../shared/models/disponiblidad/totalesXDisponibilidad';

import notify from 'devextreme/ui/notify';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';

@Component({
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss'],
  providers: [UnidadesService, ServiceSales, CurrencyPipe, Service],
})

export class PagosComponent implements OnInit {

  @ViewChild(DxChartComponent, { static: false }) chart: any;


  @ViewChild('gridModal', { static: false }) gridModal: DxDataGridComponent;


  //loading
  loadingVisible = false;
  isVisible = false;

  paginacion = 5;
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  chart_visualRange = [1, 30];

  formFilter: any = {
    Fecha: ''
  }
  pagos: any[] = []
  pagosXDia: any[] = [];  
  pagosXMes: any[] = [];
  graficaPXMesResumen: any[] = [];
  pagosDetalleP: any[] = [];


  constructor(
    private pagosService: PagosService,
    private service: ServiceSales,
    private currencyPipe: CurrencyPipe,
    testService: Service
  ) {

    this.customizeTooltip = this.customizeTooltip.bind(this);
    // this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.formFilter
  }

  ngOnInit(): void {
    // this.getDisponiblidadAnual();
  }

  getPagos() {
    this.loadingVisible = true;
    this.pagosService.getPagos(this.formFilter.Fecha.toISOString()).subscribe((response) => {
    
      this.pagos = response.data;
      this.pagosXDia = response.data.pagoXDia;      
      this.pagosXMes = response.data.pagoXMes
      this.graficaPXMesResumen = response.data.pagoXMesResumen;
      this.pagosDetalleP = response.data.detallePagos;
      
      // console.log(response.data)

      this.loadingVisible = false;
    })
  }

  /*======================SELECTE FUNCIONS================================================*/

  buscarClick = (e: any) => {
    if (this.formFilter.Fecha !== "") {
      this.getPagos();
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
 onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

/**=========================PAGOS POR DIA=========================================== */
  onRowPreparedPXD(e: any){
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

  onCellPreparedPXD(e: any){
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

  onCellPreparedPXM(e: any){
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



  customizeTooltip(args: any) {
    const valueText = (args.seriesName.indexOf('Total') != -1)
      ? new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(args.originalValue)
      : args.originalValue;

    return {
      html: `${args.seriesName}<div class='currency'>${valueText}</div>`,
    };
  }



  //==================Formato a la data de la grafica==================================
  formatSliderTooltip(value) {

    return Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
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
