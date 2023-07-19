import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { ProyeccionCostosService } from '../../services/proyeccionCostos/proyeccionCostos.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import liquidaciones from '/src/assets/rc02.json';
import dxSelectBox from 'devextreme/ui/select_box';
import { DxSelectBoxComponent } from 'devextreme-angular';

// import { CountryInfo, EnergyDescription, Service  } from './costos-anuales.service';
import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';
import { DetalleCuenta } from '../../shared/models/costos-anuales/detalleCuenta.model'
import { TotalesOperacion } from '../../shared/models/costos-anuales/totalesOperacion.model';
import {  OtrosGastosIngresosOrdonarios } from '../../shared/models/costos-anuales/totalesOtrosGIOr.model'
import { OtrosGastosOperacion } from '../../shared/models/costos-anuales/totalesOtrosGO.model'
import { Otros } from '../../shared/models/costos-anuales/totalesOtros.model';
import { OtrosGastosIngresosEstraordinarios } from '../../shared/models/costos-anuales/totalesOtrosGIE.model';
import { GastosIngresosFinancieros } from '../..//shared/models/costos-anuales/totalesGIFinancieros.model';
import { Totales0 } from '../../shared/models/costos-anuales/totales0.model';
import { Provisiones } from '../../shared/models/costos-anuales/totalesProvisiones.model';
import { Clasificacion } from '../../shared/models/costos-anuales/clasificaion.model';
import { CostosTPS } from '../../shared/models/costos-anuales/CostosTPS.model';
import { CostosTPSOccidente } from '../../shared/models/costos-anuales/costosTPSOccidente.model';
import { CostosTPSGolfo } from '../../shared/models/costos-anuales/costosTPSGolfo.mode';
import { CostosTPSGrafica } from '../../shared/models/costos-anuales/costosTPSGrafica.mode';
import { Compania } from '../../shared/models/costos-anuales/compania.model'; 
import { ProyeccionCostosModel } from '../../shared/models/proyeccionCostos/proyeccionCostos.model';

import notify from 'devextreme/ui/notify';
@Component({

  templateUrl: './proyeccionCostos.component.html',
  styleUrls: ['./proyeccionCostos.component.scss']
})
export class ProyeccionCostosComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  liquidaciones: any = liquidaciones;
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();

  costosAnuales: CostosAnuales[] = [];

  DestalleCuenta: DetalleCuenta[] = [];
  costosFTP: CostosTPS[] = [];
  costosTPSOccidente: CostosTPSOccidente[] = [];
  costosTPSGolfo: CostosTPSGolfo[] = [];
  costosTPSGrafica: CostosTPSGrafica[] = [];


  col: string = '50';


  arrUnidadesNegocio = []
  arrTractos: string[] = [];

  arrMeses: MesesModel[] = [
    { idMes: 1, nombre: 'ENERO' },
    { idMes: 2, nombre: 'FEBRERO' },
    { idMes: 3, nombre: 'MARZO' },
    { idMes: 4, nombre: 'ABRIL' },
    { idMes: 5, nombre: 'MAYO' },
    { idMes: 6, nombre: 'JUNIO' },
    { idMes: 7, nombre: 'JULIO' },
    { idMes: 8, nombre: 'AGOSTO' },
    { idMes: 9, nombre: 'SEPTIEMBRE' },
    { idMes: 10, nombre: 'OCTUBRE' },
    { idMes: 11, nombre: 'NOVIEMBRE' },
    { idMes: 12, nombre: 'DICIEMBRE' }
  ];

  arrAnos: AniosModel[] = [
    { idAnio: 0, anio: "TODOS" },    
    { idAnio: 202301, anio: "202301" },
    { idAnio: 202302, anio: "202302" },
    { idAnio: 202303, anio: "202303" },
    { idAnio: 202304, anio: "202304" },
    { idAnio: 202305, anio: "202305" },
    { idAnio: 202306, anio: "202306" },
    { idAnio: 202307, anio: "202307" },
    { idAnio: 202308, anio: "202308" },
    { idAnio: 202309, anio: "202309" },
    { idAnio: 202310, anio: "202310" },
    { idAnio: 202311, anio: "202311" },
    { idAnio: 202312, anio: "202312" }
  ];

  anio: AniosModel[] = [
    { idAnio: 202301, anio: "202301" },
    { idAnio: 202302, anio: "202302" },
    { idAnio: 202303, anio: "202303" },
    { idAnio: 202304, anio: "202304" },
    { idAnio: 202305, anio: "202305" },
    { idAnio: 202306, anio: "202306" },
    { idAnio: 202307, anio: "202307" },
    { idAnio: 202308, anio: "202308" },
    { idAnio: 202309, anio: "202309" },
    { idAnio: 202310, anio: "202310" },
    { idAnio: 202311, anio: "202311" },
    { idAnio: 202312, anio: "202312" }
  ]

  companias: Compania[] =[]

  nweCompanias = [
    {idCompania: 'TODOS', compania: 'TODOS'},
    {idCompania: 'ATMMAC', compania: 'AUTOTRANSPORTE MACUSPANA S.A. DE C.V.'},
    {idCompania: 'CORPOR', compania: 'CORPORATIVO'},
    {idCompania: 'GSTFYS', compania: 'GST FLETES Y SERVICIOS S.A. DE C.V.'},
    {idCompania: 'TEICUA', compania: 'TRANSPORTADORA ESPECIALIZADA INDUSTRIAL S.A. DE C.V.'},
    {idCompania: 'TBKHER', compania: 'TRANSPORTES BONAMPAK S.A. DE C.V.'},
    {idCompania: 'TCGTUL', compania: 'TRANSPORTES DE CARGA GEMINIS S.A. DE C.V.'},
  ]


  clasificaciones: Clasificacion[] = [
    {idClas:0, clasificacion: 'TODOS'},
    {idClas:1, clasificacion: '00.- Indicadores'},
    {idClas:2, clasificacion: '01.- Operación'},
    {idClas:3, clasificacion: '02.- Otros Gastos de Operación'},
    {idClas:4, clasificacion: '03.- Total Otros Gastos y Prod. Extraordinarios'},
    {idClas:5, clasificacion: '04.- Total Otros Gastos y Productos Financieros'},
    {idClas:6, clasificacion: '05.- Total de Provisiones'}
  ]

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  proyeccCosService!: ProyeccionCostosService;

  mesSeleccionado: number = 0;
  anioSeleccionado: number = 0;
  udnSeleccionado: any;
  tractoSeleccionado: string = '';
  selectedCompania: any;
  selectedCompaniaNew: string = ''
  selectedAnioTPS: number = 0;
  selectedMesTPS: number = 0;
  selectedClasficacion: number = 0;

  objTracto: any;
  objRentabilidad: any;

  //===========chart===================
  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  openModReal: boolean = false;
  closeButtonOptions: any;
  printButtonOptions: any;
  positionOf: string = '#myDiv';
  arrRentGer: any[] = [];
  arrLiquidacionesDetalle: any[] = [];
  promedioPonderado: number = 0;
  //============test========
  positions: string[];
  states: string[];

  paginacion: number = 0;
  expandGroup: boolean = true;

  modeSearch: 'true' | 'false' = 'false';

  isVisible = false;

  type = 'info';

  message = '';

  
  modDetalleA: boolean;

  rtlEnabled = false;

  pryeccionCTS: ProyeccionCostosModel[] = []
  constructor(
    private proyeccionCostosService: ProyeccionCostosService,
  
    ) {
    this.verDetallesClick = this.verDetallesClick.bind(this)
    this.proyeccCosService = proyeccionCostosService;

  }


  ngOnInit(): void {
    this.getCompanias();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getCompanias(){
    this.proyeccCosService.getCompanias().subscribe(data => {
      this.companias = data.data;
     // console.log(this.companias)
    })
  }

  getUnidadesNegocio(value) {
    const request = new Promise((resolve, reject) => {
      // this.costosAnuService.postUnidadesNegocio(id).subscribe(data =>{
      //   this.arrUnidadesNegocio = data.data;
      // })
      if(value == 'TODOS'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
        ]
      }
      if(value == 'AUTOTRANSPORTE MACUSPANA S.A. DE C.V.'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'ATMMAC', udn: 'ATMMAC'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }else if(value == 'CORPORATIVO'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }else if(value == 'GST FLETES Y SERVICIOS S.A. DE C.V.'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'GSTFYS', udn: 'GSTFYS'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }else if(value == 'TRANSPORTADORA ESPECIALIZADA INDUSTRIAL S.A. DE C.V.'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'TEICUA', udn: 'TEICUA'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }else if(value == 'TRANSPORTES BONAMPAK S.A. DE C.V.'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'TBKHER', udn: 'TBKHER'},
          {idUdn: 'TBKRAM', udn: 'TBKRAM'},
          {idUdn: 'TBKORI', udn: 'TBKORI'},
          {idUdn: 'TBKGDL', udn: 'TBKGDL'},
          {idUdn: 'TBKMEX', udn: 'TBKMEX'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }else if(value == 'TRANSPORTES DE CARGA GEMINIS S.A. DE C.V.'){
        this.arrUnidadesNegocio = [
          {idUdn: '', udn: 'TODOS'},
          {idUdn: 'TCGTUL', udn: 'TCGTUL'},
          {idUdn: 'CORPOR', udn: 'CORPOR'}
        ]
      }

    });
    return request;

  }

  getProyeccionCostos(){
    const request = new Promise((resolve, reject) => {
      this.proyeccCosService.postProyeccionCostos(this.anioSeleccionado, this.udnSeleccionado).subscribe(data => {
        
        console.log(data.data)
        this.pryeccionCTS = data.data;

        this.loadingVisible = false;
      })
    });
    return request;
  }

 

  //=================SELECTS========================
  //Manejadores de Eventos
  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;
  }
  
  selectCompania(e: any) {
    this.selectedCompania = e.value;
    var myValue = []
    myValue.push(e.value)
    this.getUnidadesNegocio(myValue);
  }
  
  myCompania: string = "";
  selectCompaniaNew(e: any) {
    this.selectedCompaniaNew = e.value;
    this.myCompania = e.value;
    var myValue = []

    this.getUnidadesNegocio(e.value);
  }
  myUdN: string = "";
  seleccionarUDN(e: any) {
    this.udnSeleccionado = e.value;
    this.myUdN = e.value;
    //console.log(e)
  }

  selectClasficacion(e: any) {
    this.selectedClasficacion = e.value;
  }




 

  verDetallesClick(data) {
    var mydata = data.data;
  }

  borrarClick = (e: any) =>{
    this.selectTracto.value = '';
  }

  
  buscarClick = (e: any) => {
    if (this.selectedClasficacion !==  undefined) {
      this.loadingVisible = true;
      this.modeSearch = 'true'
        // console.log('entre : '+this.totales.totalER)

        this.getProyeccionCostos();

    }

  };

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onContentReady(e: any) {

    this.loadingVisible = false;

  }

  onHidden() {
  }

  onRowPreparedCAER(e: any){
    if (e.rowType == 'data') {
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          if (c.value && c.value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
            c.cellElement.style.fontWeight = "bolder";
          }
        }



      });
    }

    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }
  }

  onCellPreparedCAER(e: any){
    if (e.rowType == 'data') {
        if(e.data.renglon == 21 ||
          e.data.renglon == 24){
            e.cellElement.style.fontWeight = "bolder";
            e.cellElement.style.fontSize = "14px";
            e.cellElement.style.color = "black";
          } 

        if (e.data.renglon == 27 || 
          e.data.renglon == 32 ||
          e.data.renglon == 39 ||
          e.data.renglon == 43)
        {
          e.cellElement.style.fontWeight = "bolder";
          e.cellElement.style.fontSize = "14px";
        
          e.cellElement.style.background = "#ff9460";
          e.cellElement.style.color = "black";
        }

        if (e.data.renglon == 2 || 
          e.data.renglon == 8 ||
          e.data.renglon == 14 ||
          e.data.renglon == 20 ||
          e.data.renglon == 28 ||
          e.data.renglon == 37 ||
          e.data.renglon == 38 ||
          e.data.renglon == 40 ||
          e.data.renglon == 44 ||
          e.data.renglon == 45)
        {
          e.cellElement.style.fontWeight = "bolder";
          e.cellElement.style.fontSize = "14px";
          
        
          e.cellElement.style.background = "#DCDCDC";
          e.cellElement.style.color = "black";
        }
    }
  }

//====================personalize style excel========================================
  customizeCAER(e) {  
    var gridCell = e.gridCell;
    if (gridCell.rowType === 'data') {
      console.log(gridCell.data)
      if (gridCell.data.concepto === '1. Volumen transportado' ||
          gridCell.data.concepto === '2. Viajes Realizados' ||
          gridCell.data.concepto === '3. PRODUCTO NETO' ||
          gridCell.data.concepto === '4. COSTO DE OPERACION' || gridCell.data.concepto === 'Administación') {

          e.backgroundColor = "#DCDCDC";
          e.fontWeight = "bolder"
          e.font = {bold: true}
      }

      if(gridCell.data.concepto == 'UTILIDAD BRUTA' ||
        gridCell.data.concepto == 'UTILIDAD DE OPERACION' ||
        gridCell.data.concepto == 'UTILIDAD ANTES DE IMPTO. Y PTU' ||
        gridCell.data.concepto == 'UTILIDAD NETA'){

          e.backgroundColor = "#FD9460";
          e.font = {bold: true}
      }

      if(gridCell.data.concepto == 'Mantenimiento' ||
        gridCell.data.concepto == 'Transportacion'){

          e.font = {bold: true}
        }


    }
  }

//==================Formato a la data de la grafica==================================
  formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
  }

//==================Formato solo comas===============================================  
  separator(value) {
      // var str = value.toString().split(".");
      // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // return str.join(".");

      var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return myFormat.join("");
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }



}


