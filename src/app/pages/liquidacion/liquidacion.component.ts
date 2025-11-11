import { NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { UnidadesService } from 'src/app/services/unidades/unidades.services';
import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';
import { CommonModule, formatDate } from '@angular/common';
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
import { Liquidacion, totalesBajas} from 'src/app/shared/models/liquidacion/liquidacion.model'
import notify from 'devextreme/ui/notify';
import { StorageService } from '../../shared/services/storage.service';

import { analyticsPanelItems } from 'src/app/types/resource';
import { Options as DataSourceConfig } from 'devextreme/ui/pivot_grid/data_source';
// import { DxDropDownButtonTypes } from 'devextreme-angular/ui/drop-down-button';

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
  graficaUO: any[] = [];
  titulosMes: any;
  observaciones: any[] = [];
  viajesPenLiq: any[] = [];
  LiqPag: any[] = [];
  bajasMA: any[] = [];
  salesByCategory: any[] = [];
  salesByDateAndCategory: any[] = null;

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

  visualRange = [1, 12]
  customRange = analyticsPanelItems[5].value.split('/').map((d) => new Date(d));
  isLoading: boolean = false;
  periodoMA = ['Mensual', 'Anual'];
  periodoUdn = ['TODOS', 'CUAUTITLAN', 'GUADALAJARA', 'HERMOSILLO', 'MEXICALI', 'ORIZABA', 'RAMOS ARIZPE', 'TULTITLAN'];
  periodoUO = ['Udn', 'Operación'];
  groupByPeriods = ['Mensual', 'Anual'];
  
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

   loadData = (groupBy: string) => {
    // const [startDate, endDate] = analyticsPanelItems[4].value.split('/');
    // const tasks = [
    //   ['sales', this.service.getSales(startDate, endDate)],
    //   ['salesByDateAndCategory', this.service.getSalesByOrderDate(groupBy)],
    // ].map(([dataName, loader]: [string, Observable<Sale[]>]) => {
    //     const task = loader.pipe(share());
    //     task.subscribe((data) => this[dataName] = data);
    //     return task;
    //   }
    // );

    // forkJoin(tasks).subscribe(() => {
    //   this.isLoading = false;
    // });
  };

  ngOnInit(): void {
    // this.getDisponiblidadAnual();
    // this.loadData(this.groupByPeriods[1].toLowerCase());
//     this.visualRange = this.customRange;
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
      this.graficaUO = response.data.graficaUDN;
      //console.log(response.data)
      //this.graficaPXClasificado = myGrafica;
      this.loadingVisible = false;
    })
  }

  getBajas() {
    this.bajasMA = [];
    //this.loadingVisible = true;
    this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
      var myBaja = response.data.bajasMensuales;
      var myTotalesBP = [];
      
       myBaja.forEach((row: any) =>{ 

        if(row.motivo == "AUSENTISMO"){
          
          var mytotalBA = 0;
          mytotalBA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPA = 0;
          mytotalPA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBA;
          myTotalesBajasA.motivo = "AUSENTISMO";
          myTotalesBajasA.porcentaje = mytotalPA;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "DEFUNCION"){
          
          var mytotalBD = 0;
          mytotalBD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPD = 0;
          mytotalPD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBD;
          myTotalesBajasA.motivo = "DEFUNCION";
          myTotalesBajasA.porcentaje = mytotalPD;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "OTROS"){
          
          var mytotalBO = 0;
          mytotalBO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPO = 0;
          mytotalPO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBO;
          myTotalesBajasA.motivo = "OTROS";
          myTotalesBajasA.porcentaje = mytotalPO;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "RESICION DE CONTRATO"){
          
          var mytotalBR = 0;
          mytotalBR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPR = 0;
          mytotalPR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBR;
          myTotalesBajasA.motivo = "RESICION DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPR;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "SEPARACION VOLUNTARIA"){
          
          var mytotalBS = 0;
          mytotalBS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPS = 0;
          mytotalPS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBS;
          myTotalesBajasA.motivo = "SEPARACION VOLUNTARIA";
          myTotalesBajasA.porcentaje = mytotalPS;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }
       })

      var result = myTotalesBP.reduce((unique, o) => {
          if(!unique.some(obj => obj.motivo === o.motivo)) {
            unique.push(o);
          }
          return unique;
      },[]);
      this.bajasMA = result;
      //console.log(this.bajasMA)
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
      this.getBajas();
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



    onRangeChanged = ({value: dates}) => {
    const [startDate, endDate] = dates.map((date) => formatDate(date, 'yyyy-MM-dd', 'en'));

    //this.isLoading = true;

    // this.service.getSalesByCategory(startDate, endDate)
    //   .subscribe((result) => {
    //     this.salesByCategory = result;
    //     this.isLoading = false;
    //   });
  };

    selectionChange({item: period}: any) {
   // this.isLoading = true;

    // this.service.getSalesByOrderDate(period.toLowerCase())
    //   .subscribe((result) => {
    //     this.salesByDateAndCategory = result;
    //     this.isLoading = false;
    //   })
  }

  selectionMotivosB({item: period}: any) {
    if(period == "Anual"){
      console.log("ANUAL")
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
          var myBaja = response.data.bajasAnuales;
      var myTotalesBP = [];
      
       myBaja.forEach((row: any) =>{ 

        if(row.motivo == "AUSENTISMO"){
          
          var mytotalBA = 0;
          mytotalBA = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPA = 0;
          mytotalPA = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBA;
          myTotalesBajasA.motivo = "AUSENTISMO";
          myTotalesBajasA.porcentaje = mytotalPA;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "DEFUNCION"){
          
          var mytotalBD = 0;
          mytotalBD = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPD = 0;
          mytotalPD = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBD;
          myTotalesBajasA.motivo = "DEFUNCION";
          myTotalesBajasA.porcentaje = mytotalPD;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "OTROS"){
          
          var mytotalBO = 0;
          mytotalBO = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPO = 0;
          mytotalPO = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBO;
          myTotalesBajasA.motivo = "OTROS";
          myTotalesBajasA.porcentaje = mytotalPO;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "RESICION DE CONTRATO"){
          
          var mytotalBR = 0;
          mytotalBR = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPR = 0;
          mytotalPR = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBR;
          myTotalesBajasA.motivo = "RESICION DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPR;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "SEPARACION VOLUNTARIA"){
          
          var mytotalBS = 0;
          mytotalBS = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPS = 0;
          mytotalPS = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBS;
          myTotalesBajasA.motivo = "SEPARACION VOLUNTARIA";
          myTotalesBajasA.porcentaje = mytotalPS;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "ABANDONO DE EMPLEO"){
          
          var mytotalBAE = 0;
          mytotalBAE = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "ABANDONO DE EMPLEO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPAE = 0;
          mytotalPAE = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "ABANDONO DE EMPLEO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBAE;
          myTotalesBajasA.motivo = "ABANDONO DE EMPLEO";
          myTotalesBajasA.porcentaje = mytotalPAE;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "JUBILACION"){
          
          var mytotalJ = 0;
          mytotalJ = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "JUBILACION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPJ = 0;
          mytotalPJ = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "JUBILACION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalJ;
          myTotalesBajasA.motivo = "JUBILACION";
          myTotalesBajasA.porcentaje = mytotalPJ;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "PENSION"){  
          
          var mytotalP = 0;
          mytotalP = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "PENSION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPP = 0;
          mytotalPP = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "PENSION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalP;
          myTotalesBajasA.motivo = "PENSION";
          myTotalesBajasA.porcentaje = mytotalPP;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "TERMINO DE CONTRATO"){  
          
          var mytotalT = 0;
          mytotalT = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "TERMINO DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPT = 0;
          mytotalPT = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "TERMINO DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalT;
          myTotalesBajasA.motivo = "TERMINO DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPT;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }
       })

      var result = myTotalesBP.reduce((unique, o) => {
          if(!unique.some(obj => obj.motivo === o.motivo)) {
            unique.push(o);
          }
          return unique;
      },[]);
      this.bajasMA = result;
      //console.log(this.bajasMA)
        this.loadingVisible = false;
      })
    }else if(period == "Mensual"){
      console.log("MENSUAL")
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
          var myBaja = response.data.bajasMensuales;
      var myTotalesBP = [];
      
       myBaja.forEach((row: any) =>{ 

        if(row.motivo == "AUSENTISMO"){
          
          var mytotalBA = 0;
          mytotalBA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPA = 0;
          mytotalPA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBA;
          myTotalesBajasA.motivo = "AUSENTISMO";
          myTotalesBajasA.porcentaje = mytotalPA;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "DEFUNCION"){
          
          var mytotalBD = 0;
          mytotalBD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPD = 0;
          mytotalPD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBD;
          myTotalesBajasA.motivo = "DEFUNCION";
          myTotalesBajasA.porcentaje = mytotalPD;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "OTROS"){
          
          var mytotalBO = 0;
          mytotalBO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPO = 0;
          mytotalPO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBO;
          myTotalesBajasA.motivo = "OTROS";
          myTotalesBajasA.porcentaje = mytotalPO;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "RESICION DE CONTRATO"){
          
          var mytotalBR = 0;
          mytotalBR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPR = 0;
          mytotalPR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBR;
          myTotalesBajasA.motivo = "RESICION DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPR;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "SEPARACION VOLUNTARIA"){
          
          var mytotalBS = 0;
          mytotalBS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPS = 0;
          mytotalPS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBS;
          myTotalesBajasA.motivo = "SEPARACION VOLUNTARIA";
          myTotalesBajasA.porcentaje = mytotalPS;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }
       })

      var result = myTotalesBP.reduce((unique, o) => {
          if(!unique.some(obj => obj.motivo === o.motivo)) {
            unique.push(o);
          }
          return unique;
      },[]);
      this.bajasMA = result;
      //console.log(this.bajasMA)
        this.loadingVisible = false;
      })
    }
  }

  selectionUdnMen({item: period}: any) {
    console.log("MENSUAL")
    if(period == "TODOS"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
          var myBaja = response.data.bajasMensuales;
      var myTotalesBP = [];
      
       myBaja.forEach((row: any) =>{ 

        if(row.motivo == "AUSENTISMO"){
          
          var mytotalBA = 0;
          mytotalBA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPA = 0;
          mytotalPA = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBA;
          myTotalesBajasA.motivo = "AUSENTISMO";
          myTotalesBajasA.porcentaje = mytotalPA;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "DEFUNCION"){
          
          var mytotalBD = 0;
          mytotalBD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPD = 0;
          mytotalPD = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBD;
          myTotalesBajasA.motivo = "DEFUNCION";
          myTotalesBajasA.porcentaje = mytotalPD;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "OTROS"){
          
          var mytotalBO = 0;
          mytotalBO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPO = 0;
          mytotalPO = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBO;
          myTotalesBajasA.motivo = "OTROS";
          myTotalesBajasA.porcentaje = mytotalPO;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "RESICION DE CONTRATO"){
          
          var mytotalBR = 0;
          mytotalBR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPR = 0;
          mytotalPR = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBR;
          myTotalesBajasA.motivo = "RESICION DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPR;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "SEPARACION VOLUNTARIA"){
          
          var mytotalBS = 0;
          mytotalBS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPS = 0;
          mytotalPS = response.data.bajasMensuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBS;
          myTotalesBajasA.motivo = "SEPARACION VOLUNTARIA";
          myTotalesBajasA.porcentaje = mytotalPS;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }
       })

      var result = myTotalesBP.reduce((unique, o) => {
          if(!unique.some(obj => obj.motivo === o.motivo)) {
            unique.push(o);
          }
          return unique;
      },[]);
      this.bajasMA = result;
      //console.log(this.bajasMA)
        this.loadingVisible = false;
      })
    }else if(period == "ORIZABA"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "ORIZABA");;
        //console.log("MEN ==> ORIZABA", this.bajasMA)
        this.loadingVisible = false;
    })
    }else if(period == "GUADALAJARA"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "GUADALAJARA");;
        //console.log("MEN ==> GUADALAJARA")
        this.loadingVisible = false;
      })
    }else if(period == "RAMOS ARIZPE"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "RAMOS ARIZPE");;
        //console.log("MEN ==> RAMOS ARIZPE")
        this.loadingVisible = false;
      })
    }else if(period == "MEXICALI"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "MEXICALI");;
        //console.log("MEN ==> MEXICALI")
        this.loadingVisible = false;
      })
    }else if(period == "HERMOSILLO"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "HERMOSILLO");;
        //console.log("MEN ==> HERMOSILLO")
        this.loadingVisible = false;
      })
    }else if(period == "CUAUTITLAN"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "CUAUTITLAN");;
        //console.log("MEN ==> CUAUTITLAN")
        this.loadingVisible = false;
      })
    }else if(period == "TULTITLAN"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasMensuales.filter((word) => word.udn == "TULTITLAN");;
        //console.log("MEN ==> TULTITLAN")
        this.loadingVisible = false;
      })
    }
  }
  
  selectionUdnAnu({item: period}: any) {
      console.log("ANUAL")
    if(period == "TODOS"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
         var myBaja = response.data.bajasAnuales;
      var myTotalesBP = [];
      
        myBaja.forEach((row: any) =>{ 

        if(row.motivo == "AUSENTISMO"){
          
          var mytotalBA = 0;
          mytotalBA = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPA = 0;
          mytotalPA = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "AUSENTISMO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBA;
          myTotalesBajasA.motivo = "AUSENTISMO";
          myTotalesBajasA.porcentaje = mytotalPA;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "DEFUNCION"){
          
          var mytotalBD = 0;
          mytotalBD = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPD = 0;
          mytotalPD = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "DEFUNCION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBD;
          myTotalesBajasA.motivo = "DEFUNCION";
          myTotalesBajasA.porcentaje = mytotalPD;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "OTROS"){
          
          var mytotalBO = 0;
          mytotalBO = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPO = 0;
          mytotalPO = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "OTROS") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBO;
          myTotalesBajasA.motivo = "OTROS";
          myTotalesBajasA.porcentaje = mytotalPO;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "RESICION DE CONTRATO"){
          
          var mytotalBR = 0;
          mytotalBR = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPR = 0;
          mytotalPR = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "RESICION DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBR;
          myTotalesBajasA.motivo = "RESICION DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPR;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "SEPARACION VOLUNTARIA"){
          
          var mytotalBS = 0;
          mytotalBS = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPS = 0;
          mytotalPS = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "SEPARACION VOLUNTARIA") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBS;
          myTotalesBajasA.motivo = "SEPARACION VOLUNTARIA";
          myTotalesBajasA.porcentaje = mytotalPS;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "ABANDONO DE EMPLEO"){
          
          var mytotalBAE = 0;
          mytotalBAE = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "ABANDONO DE EMPLEO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPAE = 0;
          mytotalPAE = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "ABANDONO DE EMPLEO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalBAE;
          myTotalesBajasA.motivo = "ABANDONO DE EMPLEO";
          myTotalesBajasA.porcentaje = mytotalPAE;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "JUBILACION"){
          
          var mytotalJ = 0;
          mytotalJ = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "JUBILACION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPJ = 0;
          mytotalPJ = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "JUBILACION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalJ;
          myTotalesBajasA.motivo = "JUBILACION";
          myTotalesBajasA.porcentaje = mytotalPJ;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "PENSION"){  
          
          var mytotalP = 0;
          mytotalP = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "PENSION") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPP = 0;
          mytotalPP = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "PENSION") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalP;
          myTotalesBajasA.motivo = "PENSION";
          myTotalesBajasA.porcentaje = mytotalPP;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }

        if(row.motivo == "TERMINO DE CONTRATO"){  
          
          var mytotalT = 0;
          mytotalT = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "TERMINO DE CONTRATO") return acc + val.bajas;
            return acc;
          }, 0);

          var mytotalPT = 0;
          mytotalPT = response.data.bajasAnuales.reduce((acc, val) => {
            if (val.motivo == "TERMINO DE CONTRATO") return acc + val.porcentaje;
            return acc;
          }, 0);

          let myTotalesBajasA = new totalesBajas;
          myTotalesBajasA.bajas = mytotalT;
          myTotalesBajasA.motivo = "TERMINO DE CONTRATO";
          myTotalesBajasA.porcentaje = mytotalPT;

          myTotalesBP.push(myTotalesBajasA)
          //console.log(this.bajasMA)
        }
       })

      var result = myTotalesBP.reduce((unique, o) => {
          if(!unique.some(obj => obj.motivo === o.motivo)) {
            unique.push(o);
          }
          return unique;
      },[]);
      this.bajasMA = result;
      console.log(response.data.bajasAnuales)
        this.loadingVisible = false;
      })
    }else if(period == "ORIZABA"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "ORIZABA");;
        //console.log("ANU ==> ORIZABA", this.bajasMA)
        this.loadingVisible = false;
    })
    }else if(period == "GUADALAJARA"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "GUADALAJARA");;
        //console.log("ANU ==> GUADALAJARA")
        this.loadingVisible = false;
      })
    }else if(period == "RAMOS ARIZPE"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "RAMOS ARIZPE");;
        //console.log("ANU ==> RAMOS ARIZPE")
        this.loadingVisible = false;
      })
    }else if(period == "MEXICALI"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "MEXICALI");;
        //console.log("ANU ==> MEXICALI")
        this.loadingVisible = false;
      })
    }else if(period == "HERMOSILLO"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "HERMOSILLO");;
        //console.log("ANU ==> HERMOSILLO")
        this.loadingVisible = false;
      })
    }else if(period == "CUAUTITLAN"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "CUAUTITLAN");;
        //console.log("ANU ==> CUAUTITLAN")
        this.loadingVisible = false;
      })
    }else if(period == "TULTITLAN"){
      this.bajasMA = [];
      this.loadingVisible = true;
      this.liquidacionService.getBajas(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.bajasMA = response.data.bajasAnuales.filter((word) => word.udn == "TULTITLAN");;
        //console.log("ANU ==> TULTITLAN")
        this.loadingVisible = false;
      })
    }
  }

  selectionGraficaUO({item: period}: any) {
    if(period == "Udn"){
      this.graficaUO = [];

      this.loadingVisible = true;
      this.liquidacionService.getLiquidacion(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.graficaUO = response.data.graficaUDN;
        console.log(response.data)
        this.loadingVisible = false;
      });

    }else if(period == "Operación"){
      this.graficaUO = [];

      this.loadingVisible = true;
      this.liquidacionService.getLiquidacion(this.formFilter.Fecha.toISOString()).subscribe((response) => {
        this.graficaUO = response.data.graficaOperacion;
        console.log(response.data)
        this.loadingVisible = false;
      });

    }
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



    onRowPreparedG(e: any){
  //  if (e.rowType == 'data') {

  //   e.cells.forEach((c: any) => {

  //     if (c.value && c.value.toString().startsWith('-')) {
  //       if(c.cellElement?.style !== undefined){
  //         c.cellElement.style.color = "red";
  //       }

  //     }

  //     if (c.cellElement) {
  //       if(c.columnIndex == 12){
  //         c.cellElement.style.fontWeight = "bolder";
  //         c.cellElement.style.fontSize = "15px";
  //         c.cellElement.style.background = "#cdcbcb";
  //       }

  //       if(c.columnIndex == 15){
  //         c.cellElement.style.fontWeight = "bolder";
  //         c.cellElement.style.fontSize = "15px";
  //         c.cellElement.style.background = "#cdcbcb";
  //       }

  //     }
  //   });
  // }

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

  onCellPreparedG(e: any){
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
