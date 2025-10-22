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
  observaciones: any[] = [];
  cvetra: number = 0;
  verCvetra: number = 0;
  
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

    var printMes= "" ;
    var printAnio = "";
    var filtro = ""
    printAnio = new Date(this.formFilter.Fecha.toISOString()).toLocaleString('es-MX',{year: 'numeric' });
    printMes = new Date(this.formFilter.Fecha.toISOString()).toLocaleString('es-MX',{month:'numeric' });
    
    
    this.loadingVisible = true;
    this.liquidacionService.getLiquidacion(printAnio, printMes).subscribe((response) => {
      this.liquidacion = response.data;
      console.log(this.liquidacion)
      //this.graficaPXClasificado = myGrafica;

     


      this.loadingVisible = false;
    })
  }

  /*======================SELECTE FUNCIONS================================================*/

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
