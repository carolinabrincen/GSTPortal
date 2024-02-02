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
import { DisponibilidadAnualService } from '../../services/disponibilidadAnual/disponibilidadAnual.service';

import notify from 'devextreme/ui/notify';

import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver-es';
import { group } from 'console';

const totalesPor  = new TotalPorcentajes;
const totalesPorGr  = new TotalPorcentajes;

const groupName = new Modelos;

@Component({
  templateUrl: './disponiblidad.component.html',
  styleUrls: ['./disponiblidad.component.scss'],
  providers: [UnidadesService,ServiceSales, CurrencyPipe, Service],
})

export class disponiblidadComponent implements OnInit {

  @ViewChild(DxChartComponent, { static: false }) chart: any;


  @ViewChild('gridModal', {static: false}) gridModal: DxDataGridComponent;

 
  //loading
  loadingVisible = false;

  paginacion = 5; 
  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];
  

  openModReal: boolean = false;
  expandGroup: boolean = true;
  isVisible = false;

  unidadNegoios: any[] = [
    {idUnidad: 0, ciudad: 'TODOS'},
    {idUnidad: 1, ciudad: 'ORIZABA'},
    {idUnidad: 2, ciudad: 'GUADALAJARA'},
    {idUnidad: 3, ciudad: 'RAMOS ARIZPE'},
    {idUnidad: 4, ciudad: 'MEXICALI'},
    {idUnidad: 5, ciudad: 'HERMOSILLO'},
    {idUnidad: 8, ciudad: 'CUAUTITLAN'},
    {idUnidad: 9, ciudad: 'TULTITLAN'},
  ];

  status: any[] = [
    {id: 1, descripcion: 'Ausentismo/Suspendido', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 3, descripcion: 'Baja programada', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 4, descripcion: 'Capacitacion', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 5, descripcion: 'Descanso/Vacaciones', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 6, descripcion: 'Incapacidad', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 7, descripcion: 'Instructor', disponible: 'No Disponible', status: 'A', tipo: 'Manual'},
    {id: 8, descripcion: 'En espera de viaje', disponible: 'Disponible', status: 'A', tipo: 'Automatico'},
    {id: 9, descripcion: 'Operando', disponible: 'Disponible', status: 'A', tipo: 'Automatico'},
    {id: 10, descripcion: 'Disponible (Patio)', disponible: 'Disponible', status: 'A', tipo: 'Mixto'},
    {id: 11, descripcion: 'Taller', disponible: 'No Disponible', status: 'A', tipo: 'Automatico'},
    {id: 12, descripcion: 'Sin Estado', disponible: 'No Disponible', status: 'A', tipo: 'Automatico'},
  ]

  operaciones: any[] = [
    {id: 0, descripcion: 'SIN ASIGNAR'},
    {id: 4, descripcion: 'CAJA SECA'},
    {id: 10, descripcion: 'GONDOLA'},
    {id: 11, descripcion: 'TOLVA GRANEL'},
    {id: 8, descripcion: 'GRADO ALIMENT'},
    {id: 9, descripcion: 'ENCORTINADO'},



  ];

  selectedUdn: number = 0;
  selectedOperacion: number = 0;
  selectedTransporte: number = 0;
  selectedPeriodo: number = 0;
  selectedStatus: number = 0;


  printUdn: string = "";

  formFilter: any = {
    Fecha: ''
  }

  resumen: any = []
  tractos: any = []
  operadores: any = []
  remolque: any = []
  
  showFilterRow: boolean;
  currentFilter: any;
  applyFilterTypes: any;

  now: Date = new Date();
  constructor( 
    private disponibilidadService: DisponibilidadAnualService, 
    private service: ServiceSales, 
    private currencyPipe: CurrencyPipe,
    testService: Service
    ) {

    this.customizeTooltip = this.customizeTooltip.bind(this);
    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.formFilter
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
    // this.getDisponiblidadAnual();
  }

  getDisponiblidadAnual(){
    console.log(this.formFilter.Fecha)
   
      this.disponibilidadService.postDisponiblidad(this.selectedUdn, this.formFilter.Fecha).subscribe((response) => {
        this.resumen = response.data.resumen;
        this.tractos = response.data.tractos;
        this.operadores = response.data.operadores;
        this.remolque = response.data.remolques;
        console.log(this.remolque)
        this.loadingVisible = false

        this.selectedOperacion = undefined;
        this.selectedStatus = undefined;
      });
  }

/*======================SELECTE FUNCIONS================================================*/
  selectUdn(value: any){
    this.selectedUdn = value.value;
    //console.log(this.selectedUdn)
    if(this.selectedUdn === 0){
      this.printUdn = "TODOS";
    }
    if(this.selectedUdn === 1){
      this.printUdn = "ORIZABA";
    }
    if(this.selectedUdn === 2){
      this.printUdn = "GUADALAJARA";
    }
    if(this.selectedUdn === 3){
      this.printUdn = "RAMOS ARIZPE";
    }
    if(this.selectedUdn === 4){
      this.printUdn = "MEXICALI";
    }
    if(this.selectedUdn === 5){
      this.printUdn = "HERMOSILLO";
    }
    if(this.selectedUdn === 8){
      this.printUdn = "CUAUTITLAN";
    }
    if(this.selectedUdn === 9){
      this.printUdn = "TULTITLAN";
    }
  }
  selectFecha(value: any){
    //console.log(value)
  }
  selectOperacion(value: any){
    this.selectedOperacion = value.value
    console.log(this.selectedOperacion)
  }
  selectStatus(value: any){
    this.selectedStatus = value.value;
    console.log(value)
  }

  blurStatus(value:any){
    console.log(value)
    this.status.forEach(element => {
      if(element.id === this.selectedStatus){
        value.data.descripcionStManual = element.descripcion;

      }
    });
  }
/*========================Guardar Status Manual=========================================*/

  saveStatusManual(value){
    let myValue = value.data
    let myIdUser = sessionStorage.getItem('idUsuario')

    if(myValue.inicio !== null && myValue.fin !== null){
    this.loadingVisible = true;

    this.disponibilidadService.postStatusManual(myValue.id_personal, this.selectedStatus, myIdUser, myValue.inicio, myValue.fin, myValue.observaciones).subscribe(data =>{
      console.log(data)
      this.getDisponiblidadAnual()

      notify({
        message: data.data,
        position: {
          my: 'center center',
          at: 'center center',
        },
      }, 'success', 4000);
    })
  
    }else{
      notify({
        message: 'Falta datos por seleccionar o confirmar',
        position: {
          my: 'center center',
          at: 'center center',
        },
      }, 'warning', 3000);
    }

  }
/*========================Guardar Tipo Operacion Operador=========================================*/
saveTipoOperacionOper(value){
    let myValue = value.data
    let myIdUser = sessionStorage.getItem('idUsuario')
   
    this.loadingVisible = true;

    this.disponibilidadService.postTipoOperacionOpe(myValue.id_personal, this.selectedOperacion, myIdUser).subscribe(data =>{
      console.log(data)
      this.getDisponiblidadAnual()

      notify({
        message: data.data,
        position: {
          my: 'center center',
          at: 'center center',
        },
      }, 'success', 4000);
    })
  }

  buscarClick = (e: any) => {
    // if (this.selectedPeriodo !==  0 && this.selectedBoxCartera !== undefined) {
      this.loadingVisible = true;

      this.getDisponiblidadAnual();
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

  onRowPreparedResumen(e: any) {

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
  
  onCellPreparedResumen(e: any) {
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }

  onRowPreparedTractos(e: any) {

    if (e.rowType == 'totalFooter') {
      //console.log(e.summaryCells)
      // this.graficaModel = [
      //   {mes: "ENERO", total: e.summaryCells[2][0].value, presupuesto: e.summaryCells[3][0].value},
      //   {mes: "FEBRERO", total: e.summaryCells[4][0].value, presupuesto: e.summaryCells[5][0].value},
      //   {mes: "MARZO", total: e.summaryCells[6][0].value, presupuesto: e.summaryCells[7][0].value},
      //   {mes: "ABRIL", total: e.summaryCells[8][0].value, presupuesto: e.summaryCells[9][0].value},
      //   {mes: "MAYO", total: e.summaryCells[10][0].value, presupuesto: e.summaryCells[11][0].value},
      //   {mes: "JUNIO", total: e.summaryCells[12][0].value, presupuesto: e.summaryCells[13][0].value},
      //   {mes: "JULIO", total: e.summaryCells[14][0].value, presupuesto: e.summaryCells[15][0].value},
      //   {mes: "AGOSTO", total: e.summaryCells[16][0].value, presupuesto: e.summaryCells[17][0].value},
      //   {mes: "SEPTIEMBRE", total: e.summaryCells[18][0].value, presupuesto: e.summaryCells[19][0].value},
      //   {mes: "OCTUBRE", total: e.summaryCells[20][0].value, presupuesto: e.summaryCells[21][0].value},
      //   {mes: "NOVIEMBRE", total: e.summaryCells[22][0].value, presupuesto: e.summaryCells[23][0].value},
      //   {mes: "DICIEMBRE", total: e.summaryCells[24][0].value, presupuesto: e.summaryCells[25][0].value},  
      // ]
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
  
  onCellPreparedTractos(e: any) {
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }

  onRowPreparedOperador(e: any) {

    if (e.rowType == 'totalFooter') {
      //console.log(e.summaryCells)
      // this.graficaModel = [
      //   {mes: "ENERO", total: e.summaryCells[2][0].value, presupuesto: e.summaryCells[3][0].value},
      //   {mes: "FEBRERO", total: e.summaryCells[4][0].value, presupuesto: e.summaryCells[5][0].value},
      //   {mes: "MARZO", total: e.summaryCells[6][0].value, presupuesto: e.summaryCells[7][0].value},
      //   {mes: "ABRIL", total: e.summaryCells[8][0].value, presupuesto: e.summaryCells[9][0].value},
      //   {mes: "MAYO", total: e.summaryCells[10][0].value, presupuesto: e.summaryCells[11][0].value},
      //   {mes: "JUNIO", total: e.summaryCells[12][0].value, presupuesto: e.summaryCells[13][0].value},
      //   {mes: "JULIO", total: e.summaryCells[14][0].value, presupuesto: e.summaryCells[15][0].value},
      //   {mes: "AGOSTO", total: e.summaryCells[16][0].value, presupuesto: e.summaryCells[17][0].value},
      //   {mes: "SEPTIEMBRE", total: e.summaryCells[18][0].value, presupuesto: e.summaryCells[19][0].value},
      //   {mes: "OCTUBRE", total: e.summaryCells[20][0].value, presupuesto: e.summaryCells[21][0].value},
      //   {mes: "NOVIEMBRE", total: e.summaryCells[22][0].value, presupuesto: e.summaryCells[23][0].value},
      //   {mes: "DICIEMBRE", total: e.summaryCells[24][0].value, presupuesto: e.summaryCells[25][0].value},  
      // ]
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
  
  onCellPreparedOperador(e: any) {
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
    }
  }

  onRowPreparedRemolques(e: any) {

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
  
  onCellPreparedRemolques(e: any) {
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }
    if (e.rowType == 'groupFooter'){

        e.cellElement.style.fontSize = '15px';
        e.cellElement.style.background = "#DCDCDC";
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


  formatValue(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return "$ "+myFormat.join("");

  }

  dateBixInicio(value){
    console.log(value)
  }
}
