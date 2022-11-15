import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import liquidaciones from 'src/assets/rc02.json';
import dxSelectBox from 'devextreme/ui/select_box';
import { DxSelectBoxComponent } from 'devextreme-angular';

import { CountryInfo, EnergyDescription, Service  } from './costos-anuales.service';
import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';
import { DetalleCuenta } from '../../shared/models/costos-anuales/detalleCuenta.model'
import { TotalesOperacion } from '../../shared/models/costos-anuales/totalesOperacion.model';
import {  OtrosGastosIngresosOrdonarios } from '../../shared/models/costos-anuales/totalesOtrosGIOr.model'
import { OtrosGastosOperacion } from '../../shared/models/costos-anuales/totalesOtrosGO.model'
import { Otros } from '../../shared/models/costos-anuales/totalesOtros.model';
import { OtrosGastosIngresosEstraordinarios } from '../../shared/models/costos-anuales/totalesOtrosGIE.model';
import { Clasificacion } from '../../shared/models/costos-anuales/clasificaion.model';

@Component({

  templateUrl: './costos-anuales.component.html',
  styleUrls: ['./costos-anuales.component.scss'],
  providers: [Service],
})
export class CostosAnualesComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  liquidaciones: any = liquidaciones;
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();

  costosAnuales: CostosAnuales[] = [];
  DestalleCuenta: DetalleCuenta[] = []


  col: string = '50';


  arrUnidadesNegocio: UnidadesNegocioModel[] = [];

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
    { idAnio: 2022, anio: "2022" }
    // { idAnio: 2021, anio: "2021" },
  ];

  companias: CompaniaModel[] =[
    {idComp:1, compania: 'TRANSPORTES BONAMPAK'},
    {idComp:2, compania: 'TRANSPORTADORA ESPECIALIZADA INDUSTRIAL'},
    {idComp:3, compania: 'TRANSPORTE DE CARGA GEMINIS'}
  ]


  clasificaciones: Clasificacion[] = [
    {idClas:1, clasificacion: 'INGRESOS POR FLETE'},
    {idClas:2, clasificacion: 'COSTOS'},
    {idClas:3, clasificacion: 'GASTOS ADMINISTRATIVOS'},
    {idClas:4, clasificacion: 'DEPRECIACION DE ACTIVOS'},
    {idClas:5, clasificacion: 'OTROS GASTOS/INGRESOS ORDINARIOS'},
    {idClas:6, clasificacion: 'GASTOS INGRESO DE COLABORACIÓN'},
    {idClas:7, clasificacion: 'ESTÍMULOS FISCALES'},
    {idClas:8, clasificacion: 'VENTA DE ACTIVO FIJO'},
    {idClas:9, clasificacion: 'OTROS'},
    {idClas:10, clasificacion: 'PRODUCTOS FINANCIEROS'},
    {idClas:11, clasificacion: 'GASTOS FINANCIEROS'},
    {idClas:12, clasificacion: 'PROVISIONES DE IMPUESTOS'},
  ]

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  costosAnuService!: CostosAnualesService;

  mesSeleccionado: number = 0;
  anioSeleccionado: number = 0;
  udnSeleccionado: number[] = [];
  tractoSeleccionado: string = '';
  selectedCompania: number = 0;

  objTracto: any;
  objRentabilidad: any;

  //===========chart===================
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
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

  totalesOperacion = new TotalesOperacion;
  totalesOGIO = new OtrosGastosIngresosOrdonarios;
  totalesOtrosGO = new OtrosGastosOperacion;
  totalesOtros = new Otros;
  totalesOtrosGIE = new OtrosGastosIngresosEstraordinarios;

  totalesGIF: number;
  totalPodructF: number;
  totalGastosF: number;

  totales0: number;
  totales01: number;
  totales02: number;
  totales03: number;
  totales04: number; 
  constructor(
    private costosAnualesService: CostosAnualesService,
    private service: Service
    ) {

    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.verDetallesClick = this.verDetallesClick.bind(this)
    this.costosAnuService = costosAnualesService;

  //===========chart===================
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }


  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getUnidadesNegocio() {
    this.costosAnuService.getUnidadesNegocio().subscribe(res => {
      console.log(res)
      if(this.selectedCompania == 1){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[0],orderdata[1],orderdata[2],orderdata[3],
            orderdata[4]);//FALTA LA PAZ
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)      
      }else if(this.selectedCompania == 2){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[5]);
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)
      }else if(this.selectedCompania == 3){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[6]);
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)
      }

    });

  }

  //=================SELECTS========================
  //Manejadores de Eventos
  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;
  }
  seleccionarMes(e: any) {
    this.mesSeleccionado = e.value;
  }
  selectCompania(e: any) {
    this.selectedCompania = e.value;
    this.getUnidadesNegocio();
  }  
  seleccionarUDN(e: any) {
    this.udnSeleccionado = [];
    this.udnSeleccionado = e.value;
  }

  selectClasficacion(e: any) {

  }

  callCostosAnuales() {
    const request = new Promise((resolve, reject) => {

      var clasificacion = 0
      this.costosAnuService.postEdoResult(this.anioSeleccionado, this.selectedCompania, this.udnSeleccionado, this.mesSeleccionado, clasificacion).subscribe(data =>{
        this.costosAnuales = data.data;
        // console.log(this.costosAnuales)
       
      })
    });
    return request;
  }

  verDetallesClick(data) {
      var periodo = 0
      var idcuenta = 0
      this.costosAnuService.postDetalleCuenta(periodo, idcuenta).subscribe(data =>{
        console.log(data)
        this.DestalleCuenta = data.data
        this.openModReal = true;
      })
  }

  borrarClick = (e: any) =>{
    this.selectTracto.value = '';
  }

  buscarClick = (e: any) => {
    // if (this.udnSeleccionado && this.mesSeleccionado && this.anioSeleccionado) {
      this.loadingVisible = true;
      this.callCostosAnuales().then(() => {
        this.loadingVisible = false;
      });
    // }

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

  onRowPrepared(e: any) {
    if (e.rowType == 'data') {
      e.cells.forEach((c: any) => {
        if (c.cellElement) {
          //poner en rojo negativos
          if (c.value && c.value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
          }
          //porcentaje de combistuble > .25 en rojo
          if (c.columnIndex == 16 && c.value >= .25) {
            c.cellElement.style.color = "red";
          }
        }
      });
    }

    if (e.rowType == 'group') {
      //====Agregando estilos a la agrupacion=========================================
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#ff9460';
        e.rowElement.style.color = "white";
      }
      else {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }

      if(e.groupIndex == 1){
        if(e.data.key == '0.- INDICADORES'){
          e.cells[0].totalItem.summaryCells = [] 
        }
      }


      if(e.groupIndex == 2){
//================================Resta de la agrupacion de 01.- OPERACION==============================================
        //===== Omitir totales en la agrupacion no afecta a la sumatoria================================================
        if(e.data.key == 'INDICADORES'){
          e.cells[0].totalItem.summaryCells = [] 
        }

//========================Sacando los valores para  01.- OPERACION======================================================
        if(e.data.key == 'a.- INGRESOS POR FLETE'){          
          // console.log(e)
          this.totalesOperacion.totalFleteER = e.summaryCells[6][0].value;
          this.totalesOperacion.totalFleteEP = e.summaryCells[7][0].value;
          this.totalesOperacion.totalFleteED = e.summaryCells[8][0].value;
          this.totalesOperacion.totalFleteFR = e.summaryCells[11][0].value;
          this.totalesOperacion.totalFleteFP = e.summaryCells[12][0].value;
          this.totalesOperacion.totalFleteFD = e.summaryCells[13][0].value;
          this.totalesOperacion.totalFleteMR = e.summaryCells[16][0].value;
          this.totalesOperacion.totalFleteMP = e.summaryCells[17][0].value;
          this.totalesOperacion.totalFleteMD = e.summaryCells[18][0].value;
          this.totalesOperacion.totalFleteAR = e.summaryCells[21][0].value;
          this.totalesOperacion.totalFleteAP = e.summaryCells[22][0].value;
          this.totalesOperacion.totalFleteAD = e.summaryCells[23][0].value;
          this.totalesOperacion.totalFleteMYR = e.summaryCells[26][0].value;
          this.totalesOperacion.totalFleteMYP = e.summaryCells[27][0].value;
          this.totalesOperacion.totalFleteMYD = e.summaryCells[28][0].value;
          this.totalesOperacion.totalFleteJR = e.summaryCells[31][0].value;
          this.totalesOperacion.totalFleteJP = e.summaryCells[32][0].value;
          this.totalesOperacion.totalFleteJD = e.summaryCells[33][0].value;
          this.totalesOperacion.totalFleteJLR = e.summaryCells[36][0].value;
          this.totalesOperacion.totalFleteJLP = e.summaryCells[37][0].value;
          this.totalesOperacion.totalFleteJLD = e.summaryCells[38][0].value;
          this.totalesOperacion.totalFleteAGR = e.summaryCells[41][0].value;
          this.totalesOperacion.totalFleteAGP = e.summaryCells[42][0].value;
          this.totalesOperacion.totalFleteAGD = e.summaryCells[43][0].value;
          this.totalesOperacion.totalFleteSR = e.summaryCells[46][0].value;
          this.totalesOperacion.totalFleteSP = e.summaryCells[47][0].value;
          this.totalesOperacion.totalFleteSD = e.summaryCells[48][0].value;
          this.totalesOperacion.totalFleteOR = e.summaryCells[51][0].value;
          this.totalesOperacion.totalFleteOP = e.summaryCells[52][0].value;
          this.totalesOperacion.totalFleteOD = e.summaryCells[53][0].value;
          this.totalesOperacion.totalFleteNR = e.summaryCells[56][0].value;
          this.totalesOperacion.totalFleteNP = e.summaryCells[57][0].value;
          this.totalesOperacion.totalFleteND = e.summaryCells[58][0].value;
          this.totalesOperacion.totalFleteDR = e.summaryCells[61][0].value;
          this.totalesOperacion.totalFleteDP = e.summaryCells[62][0].value;
          this.totalesOperacion.totalFleteDD = e.summaryCells[63][0].value;
          this.totalesOperacion.totalFleteACR = e.summaryCells[66][0].value;
          this.totalesOperacion.totalFleteACP = e.summaryCells[67][0].value;
          this.totalesOperacion.totalFleteACD = e.summaryCells[68][0].value;
        }

        if(e.data.key == 'b.- COSTOS '){   
          console.log(e)   
          this.totalesOperacion.totalCostosER = e.summaryCells[6][0].value;
          this.totalesOperacion.totalCostosEP = e.summaryCells[7][0].value;
          this.totalesOperacion.totalCostosED = e.summaryCells[8][0].value;
          this.totalesOperacion.totalCostosFR = e.summaryCells[11][0].value;
          this.totalesOperacion.totalCostosFP = e.summaryCells[12][0].value;
          this.totalesOperacion.totalCostosFD = e.summaryCells[13][0].value;
          this.totalesOperacion.totalCostosMR = e.summaryCells[16][0].value;
          this.totalesOperacion.totalCostosMP = e.summaryCells[17][0].value;
          this.totalesOperacion.totalCostosMD = e.summaryCells[18][0].value;
          this.totalesOperacion.totalCostosAR = e.summaryCells[21][0].value;
          this.totalesOperacion.totalCostosAP = e.summaryCells[22][0].value;
          this.totalesOperacion.totalCostosAD = e.summaryCells[23][0].value;
          this.totalesOperacion.totalCostosMYR = e.summaryCells[26][0].value;
          this.totalesOperacion.totalCostosMYP = e.summaryCells[27][0].value;
          this.totalesOperacion.totalCostosMYD = e.summaryCells[28][0].value;
          this.totalesOperacion.totalCostosJR = e.summaryCells[31][0].value;
          this.totalesOperacion.totalCostosJP = e.summaryCells[32][0].value;
          this.totalesOperacion.totalCostosJD = e.summaryCells[33][0].value;
          this.totalesOperacion.totalCostosJLR = e.summaryCells[36][0].value;
          this.totalesOperacion.totalCostosJLP = e.summaryCells[37][0].value;
          this.totalesOperacion.totalCostosJLD = e.summaryCells[38][0].value;
          this.totalesOperacion.totalCostosAGR = e.summaryCells[41][0].value;
          this.totalesOperacion.totalCostosAGP = e.summaryCells[42][0].value;
          this.totalesOperacion.totalCostosAGD = e.summaryCells[43][0].value;
          this.totalesOperacion.totalCostosSR = e.summaryCells[46][0].value;
          this.totalesOperacion.totalCostosSP = e.summaryCells[47][0].value;
          this.totalesOperacion.totalCostosSD = e.summaryCells[48][0].value;
          this.totalesOperacion.totalCostosOR = e.summaryCells[51][0].value;
          this.totalesOperacion.totalCostosOP = e.summaryCells[52][0].value;
          this.totalesOperacion.totalCostosOD = e.summaryCells[53][0].value;
          this.totalesOperacion.totalCostosNR = e.summaryCells[56][0].value;
          this.totalesOperacion.totalCostosNP = e.summaryCells[57][0].value;
          this.totalesOperacion.totalCostosND = e.summaryCells[58][0].value;
          this.totalesOperacion.totalCostosDR = e.summaryCells[61][0].value;
          this.totalesOperacion.totalCostosDP = e.summaryCells[62][0].value;
          this.totalesOperacion.totalCostosDD = e.summaryCells[63][0].value;
          this.totalesOperacion.totalCostosACR = e.summaryCells[66][0].value;
          this.totalesOperacion.totalCostosACP = e.summaryCells[67][0].value;
          this.totalesOperacion.totalCostosACD = e.summaryCells[68][0].value;


          this.totalesOperacion.totalOperacionER = this.totalesOperacion.totalFleteER - this.totalesOperacion.totalCostosER;
          this.totalesOperacion.totalOperacionEP = this.totalesOperacion.totalFleteEP - this.totalesOperacion.totalCostosEP;
          this.totalesOperacion.totalOperacionED = this.totalesOperacion.totalFleteED - this.totalesOperacion.totalCostosED;
          this.totalesOperacion.totalOperacionFR = this.totalesOperacion.totalFleteFR - this.totalesOperacion.totalCostosFR;
          this.totalesOperacion.totalOperacionFP = this.totalesOperacion.totalFleteFP - this.totalesOperacion.totalCostosFP;
          this.totalesOperacion.totalOperacionFD = this.totalesOperacion.totalFleteFD - this.totalesOperacion.totalCostosFD;
          this.totalesOperacion.totalOperacionMR = this.totalesOperacion.totalFleteMR - this.totalesOperacion.totalCostosMR;
          this.totalesOperacion.totalOperacionMP = this.totalesOperacion.totalFleteMP - this.totalesOperacion.totalCostosMP;
          this.totalesOperacion.totalOperacionMD = this.totalesOperacion.totalFleteMD - this.totalesOperacion.totalCostosMD;
          this.totalesOperacion.totalOperacionAR = this.totalesOperacion.totalFleteAR - this.totalesOperacion.totalCostosAR;
          this.totalesOperacion.totalOperacionAP = this.totalesOperacion.totalFleteAP - this.totalesOperacion.totalCostosAP;
          this.totalesOperacion.totalOperacionAD = this.totalesOperacion.totalFleteAD - this.totalesOperacion.totalCostosAD;
          this.totalesOperacion.totalOperacionMYR = this.totalesOperacion.totalFleteMYR - this.totalesOperacion.totalCostosMYR;
          this.totalesOperacion.totalOperacionMYP = this.totalesOperacion.totalFleteMYP - this.totalesOperacion.totalCostosMYP;
          this.totalesOperacion.totalOperacionMYD = this.totalesOperacion.totalFleteMYD - this.totalesOperacion.totalCostosMYD; 
          this.totalesOperacion.totalOperacionJR = this.totalesOperacion.totalFleteJR - this.totalesOperacion.totalCostosJR;
          this.totalesOperacion.totalOperacionJP = this.totalesOperacion.totalFleteJP - this.totalesOperacion.totalCostosJP;
          this.totalesOperacion.totalOperacionJD = this.totalesOperacion.totalFleteJD - this.totalesOperacion.totalCostosJD;
          this.totalesOperacion.totalOperacionJLR = this.totalesOperacion.totalFleteJLR - this.totalesOperacion.totalCostosJLR;
          this.totalesOperacion.totalOperacionJLP = this.totalesOperacion.totalFleteJLP - this.totalesOperacion.totalCostosJLP;
          this.totalesOperacion.totalOperacionJLD = this.totalesOperacion.totalFleteJLD - this.totalesOperacion.totalCostosJD;
          this.totalesOperacion.totalOperacionAGR = this.totalesOperacion.totalFleteAGR - this.totalesOperacion.totalCostosAGR;
          this.totalesOperacion.totalOperacionAGP = this.totalesOperacion.totalFleteAGP - this.totalesOperacion.totalCostosAGP;
          this.totalesOperacion.totalOperacionAGD = this.totalesOperacion.totalFleteAGD - this.totalesOperacion.totalCostosAGD;
          this.totalesOperacion.totalOperacionSR = this.totalesOperacion.totalFleteSR - this.totalesOperacion.totalCostosSR;
          this.totalesOperacion.totalOperacionSP = this.totalesOperacion.totalFleteSP - this.totalesOperacion.totalCostosSP;
          this.totalesOperacion.totalOperacionSD = this.totalesOperacion.totalFleteSD - this.totalesOperacion.totalCostosSD;
          this.totalesOperacion.totalOperacionOR = this.totalesOperacion.totalFleteOR - this.totalesOperacion.totalCostosOR;
          this.totalesOperacion.totalOperacionOP = this.totalesOperacion.totalFleteOP - this.totalesOperacion.totalCostosOP;
          this.totalesOperacion.totalOperacionOD = this.totalesOperacion.totalFleteOD - this.totalesOperacion.totalCostosOD;
          this.totalesOperacion.totalOperacionNR = this.totalesOperacion.totalFleteNR - this.totalesOperacion.totalCostosNR;
          this.totalesOperacion.totalOperacionNP = this.totalesOperacion.totalFleteNP - this.totalesOperacion.totalCostosNP;
          this.totalesOperacion.totalOperacionND = this.totalesOperacion.totalFleteND - this.totalesOperacion.totalCostosND;
          this.totalesOperacion.totalOperacionDR = this.totalesOperacion.totalFleteDR - this.totalesOperacion.totalCostosDR;
          this.totalesOperacion.totalOperacionDP = this.totalesOperacion.totalFleteDP - this.totalesOperacion.totalCostosDR;
          this.totalesOperacion.totalOperacionDD = this.totalesOperacion.totalFleteDD - this.totalesOperacion.totalCostosDD;
          this.totalesOperacion.totalOperacionACR = this.totalesOperacion.totalFleteACR - this.totalesOperacion.totalCostosACR;
          this.totalesOperacion.totalOperacionACP = this.totalesOperacion.totalFleteACP - this.totalesOperacion.totalCostosACP;
          this.totalesOperacion.totalOperacionACD = this.totalesOperacion.totalFleteACD - this.totalesOperacion.totalCostosACD;

          //alert('Total Resta : '+ totalesOperacion.totalOperacionER)
        }

//===============================Resta de la agrupacion de 02.- OTROS GASTOS DE OPERACIÓN===============================
        if(e.data.key == 'a.- GASTOS ADMINISTRATIVOS'){
            this.totalesOtrosGO.totalGAER = e.summaryCells[6][0].value;
            this.totalesOtrosGO.totalGAEP = e.summaryCells[7][0].value;
            this.totalesOtrosGO.totalGAED = e.summaryCells[8][0].value;
            this.totalesOtrosGO.totalGAFR = e.summaryCells[11][0].value;
            this.totalesOtrosGO.totalGAFP = e.summaryCells[12][0].value;
            this.totalesOtrosGO.totalGAFD = e.summaryCells[13][0].value;
            this.totalesOtrosGO.totalGAMR = e.summaryCells[16][0].value;
            this.totalesOtrosGO.totalGAMP = e.summaryCells[17][0].value;
            this.totalesOtrosGO.totalGAMD = e.summaryCells[18][0].value;
            this.totalesOtrosGO.totalGAAR = e.summaryCells[21][0].value;
            this.totalesOtrosGO.totalGAAP = e.summaryCells[22][0].value;
            this.totalesOtrosGO.totalGAAD = e.summaryCells[23][0].value;
            this.totalesOtrosGO.totalGAMYR = e.summaryCells[26][0].value;
            this.totalesOtrosGO.totalGAMYP = e.summaryCells[27][0].value;
            this.totalesOtrosGO.totalGAMYD = e.summaryCells[28][0].value;
            this.totalesOtrosGO.totalGAJR = e.summaryCells[31][0].value;
            this.totalesOtrosGO.totalGAJP = e.summaryCells[32][0].value;
            this.totalesOtrosGO.totalGAJD = e.summaryCells[33][0].value;
            this.totalesOtrosGO.totalGAJLR = e.summaryCells[36][0].value;
            this.totalesOtrosGO.totalGAJLP = e.summaryCells[37][0].value;
            this.totalesOtrosGO.totalGAJLD = e.summaryCells[38][0].value;
            this.totalesOtrosGO.totalGAAGR = e.summaryCells[41][0].value;
            this.totalesOtrosGO.totalGAAGP = e.summaryCells[42][0].value;
            this.totalesOtrosGO.totalGAAGD = e.summaryCells[43][0].value;
            this.totalesOtrosGO.totalGASR = e.summaryCells[46][0].value;
            this.totalesOtrosGO.totalGASP = e.summaryCells[47][0].value;
            this.totalesOtrosGO.totalGASD = e.summaryCells[48][0].value;
            this.totalesOtrosGO.totalGAOR = e.summaryCells[51][0].value;
            this.totalesOtrosGO.totalGAOP = e.summaryCells[52][0].value;
            this.totalesOtrosGO.totalGAOD = e.summaryCells[53][0].value;
            this.totalesOtrosGO.totalGANR = e.summaryCells[56][0].value;
            this.totalesOtrosGO.totalGANP = e.summaryCells[57][0].value;
            this.totalesOtrosGO.totalGAND = e.summaryCells[58][0].value;
            this.totalesOtrosGO.totalGADR = e.summaryCells[61][0].value;
            this.totalesOtrosGO.totalGADP = e.summaryCells[62][0].value;
            this.totalesOtrosGO.totalGADD = e.summaryCells[63][0].value;
            this.totalesOtrosGO.totalGAACR = e.summaryCells[66][0].value;
            this.totalesOtrosGO.totalGAACP = e.summaryCells[67][0].value;
            this.totalesOtrosGO.totalGAACD = e.summaryCells[68][0].value;
        }

        if(e.data.key == 'b.- DEPRECIACION DE ACTIVOS'){
          this.totalesOtrosGO.totalDAER = e.summaryCells[6][0].value;
          this.totalesOtrosGO.totalDAEP = e.summaryCells[7][0].value;
          this.totalesOtrosGO.totalDAED = e.summaryCells[8][0].value;
          this.totalesOtrosGO.totalDAFR = e.summaryCells[11][0].value;
          this.totalesOtrosGO.totalDAFP = e.summaryCells[12][0].value;
          this.totalesOtrosGO.totalDAFD = e.summaryCells[13][0].value;
          this.totalesOtrosGO.totalDAMR = e.summaryCells[16][0].value;
          this.totalesOtrosGO.totalDAMP = e.summaryCells[17][0].value;
          this.totalesOtrosGO.totalDAMD = e.summaryCells[18][0].value;
          this.totalesOtrosGO.totalDAAR = e.summaryCells[21][0].value;
          this.totalesOtrosGO.totalDAAP = e.summaryCells[22][0].value;
          this.totalesOtrosGO.totalDAAD = e.summaryCells[23][0].value;
          this.totalesOtrosGO.totalDAMYR = e.summaryCells[26][0].value;
          this.totalesOtrosGO.totalDAMYP = e.summaryCells[27][0].value;
          this.totalesOtrosGO.totalDAMYD = e.summaryCells[28][0].value;
          this.totalesOtrosGO.totalDAJR = e.summaryCells[31][0].value;
          this.totalesOtrosGO.totalDAJP = e.summaryCells[32][0].value;
          this.totalesOtrosGO.totalDAJD = e.summaryCells[33][0].value;
          this.totalesOtrosGO.totalDAJLR = e.summaryCells[36][0].value;
          this.totalesOtrosGO.totalDAJLP = e.summaryCells[37][0].value;
          this.totalesOtrosGO.totalDAJLD = e.summaryCells[38][0].value;
          this.totalesOtrosGO.totalDAAGR = e.summaryCells[41][0].value;
          this.totalesOtrosGO.totalDAAGP = e.summaryCells[42][0].value;
          this.totalesOtrosGO.totalDAAGD = e.summaryCells[43][0].value;
          this.totalesOtrosGO.totalDASR = e.summaryCells[46][0].value;
          this.totalesOtrosGO.totalDASP = e.summaryCells[47][0].value;
          this.totalesOtrosGO.totalDASD = e.summaryCells[48][0].value;
          this.totalesOtrosGO.totalDAOR = e.summaryCells[51][0].value;
          this.totalesOtrosGO.totalDAOP = e.summaryCells[52][0].value;
          this.totalesOtrosGO.totalDAOD = e.summaryCells[53][0].value;
          this.totalesOtrosGO.totalDANR = e.summaryCells[56][0].value;
          this.totalesOtrosGO.totalDANP = e.summaryCells[57][0].value;
          this.totalesOtrosGO.totalDAND = e.summaryCells[58][0].value;
          this.totalesOtrosGO.totalDADR = e.summaryCells[61][0].value;
          this.totalesOtrosGO.totalDADP = e.summaryCells[62][0].value;
          this.totalesOtrosGO.totalDADD = e.summaryCells[63][0].value;
          this.totalesOtrosGO.totalDAACR = e.summaryCells[66][0].value;
          this.totalesOtrosGO.totalDAACP = e.summaryCells[67][0].value;
          this.totalesOtrosGO.totalDAACD = e.summaryCells[68][0].value;

        }

//================================Resta de la agrupacion de 03.- OTROS GASTOS/INGRESOS EXTRAORDINARIOS        
        if(e.data.key == 'a.- GASTOS INGRESO DE COLABORACIÓN'){
          this.totalesOtrosGIE.totalGICER = e.summaryCells[6][0].value;
          this.totalesOtrosGIE.totalGICEP = e.summaryCells[7][0].value;
          this.totalesOtrosGIE.totalGICED = e.summaryCells[8][0].value;
          this.totalesOtrosGIE.totalGICFR = e.summaryCells[11][0].value;
          this.totalesOtrosGIE.totalGICFP = e.summaryCells[12][0].value;
          this.totalesOtrosGIE.totalGICFD = e.summaryCells[13][0].value;
          this.totalesOtrosGIE.totalGICMR = e.summaryCells[16][0].value;
          this.totalesOtrosGIE.totalGICMP = e.summaryCells[17][0].value;
          this.totalesOtrosGIE.totalGICMD = e.summaryCells[18][0].value;
          this.totalesOtrosGIE.totalGICAR = e.summaryCells[21][0].value;
          this.totalesOtrosGIE.totalGICAP = e.summaryCells[22][0].value;
          this.totalesOtrosGIE.totalGICAD = e.summaryCells[23][0].value;
          this.totalesOtrosGIE.totalGICMYR = e.summaryCells[26][0].value;
          this.totalesOtrosGIE.totalGICMYP = e.summaryCells[27][0].value;
          this.totalesOtrosGIE.totalGICMYD = e.summaryCells[28][0].value;
          this.totalesOtrosGIE.totalGICJR = e.summaryCells[31][0].value;
          this.totalesOtrosGIE.totalGICJP = e.summaryCells[32][0].value;
          this.totalesOtrosGIE.totalGICJD = e.summaryCells[33][0].value;
          this.totalesOtrosGIE.totalGICJLR = e.summaryCells[36][0].value;
          this.totalesOtrosGIE.totalGICJLP = e.summaryCells[37][0].value;
          this.totalesOtrosGIE.totalGICJLD = e.summaryCells[38][0].value;
          this.totalesOtrosGIE.totalGICAGR = e.summaryCells[41][0].value;
          this.totalesOtrosGIE.totalGICAGP = e.summaryCells[42][0].value;
          this.totalesOtrosGIE.totalGICAGD = e.summaryCells[43][0].value;
          this.totalesOtrosGIE.totalGICSR = e.summaryCells[46][0].value;
          this.totalesOtrosGIE.totalGICSP = e.summaryCells[47][0].value;
          this.totalesOtrosGIE.totalGICSD = e.summaryCells[48][0].value;
          this.totalesOtrosGIE.totalGICOR = e.summaryCells[51][0].value;
          this.totalesOtrosGIE.totalGICOP = e.summaryCells[52][0].value;
          this.totalesOtrosGIE.totalGICOD = e.summaryCells[53][0].value;
          this.totalesOtrosGIE.totalGICNR = e.summaryCells[56][0].value;
          this.totalesOtrosGIE.totalGICNP = e.summaryCells[57][0].value;
          this.totalesOtrosGIE.totalGICND = e.summaryCells[58][0].value;
          this.totalesOtrosGIE.totalGICDR = e.summaryCells[61][0].value;
          this.totalesOtrosGIE.totalGICDP = e.summaryCells[62][0].value;
          this.totalesOtrosGIE.totalGICDD = e.summaryCells[63][0].value;
          this.totalesOtrosGIE.totalGICACR = e.summaryCells[66][0].value;
          this.totalesOtrosGIE.totalGICACP = e.summaryCells[67][0].value;
          this.totalesOtrosGIE.totalGICACD = e.summaryCells[68][0].value;
        }

        if(e.data.key == 'b.- ESTÍMULOS FISCALES'){
          this.totalesOtrosGIE.totalEFER = e.summaryCells[6][0].value;
          this.totalesOtrosGIE.totalEFEP = e.summaryCells[7][0].value;
          this.totalesOtrosGIE.totalEFED = e.summaryCells[8][0].value;
          this.totalesOtrosGIE.totalEFFR = e.summaryCells[11][0].value;
          this.totalesOtrosGIE.totalEFFP = e.summaryCells[12][0].value;
          this.totalesOtrosGIE.totalEFFD = e.summaryCells[13][0].value;
          this.totalesOtrosGIE.totalEFMR = e.summaryCells[16][0].value;
          this.totalesOtrosGIE.totalEFMP = e.summaryCells[17][0].value;
          this.totalesOtrosGIE.totalEFMD = e.summaryCells[18][0].value;
          this.totalesOtrosGIE.totalEFAR = e.summaryCells[21][0].value;
          this.totalesOtrosGIE.totalEFAP = e.summaryCells[22][0].value;
          this.totalesOtrosGIE.totalEFAD = e.summaryCells[23][0].value;
          this.totalesOtrosGIE.totalEFMYR = e.summaryCells[26][0].value;
          this.totalesOtrosGIE.totalEFMYP = e.summaryCells[27][0].value;
          this.totalesOtrosGIE.totalEFMYD = e.summaryCells[28][0].value;
          this.totalesOtrosGIE.totalEFJR = e.summaryCells[31][0].value;
          this.totalesOtrosGIE.totalEFJP = e.summaryCells[32][0].value;
          this.totalesOtrosGIE.totalEFJD = e.summaryCells[33][0].value;
          this.totalesOtrosGIE.totalEFJLR = e.summaryCells[36][0].value;
          this.totalesOtrosGIE.totalEFJLP = e.summaryCells[37][0].value;
          this.totalesOtrosGIE.totalEFJLD = e.summaryCells[38][0].value;
          this.totalesOtrosGIE.totalEFAGR = e.summaryCells[41][0].value;
          this.totalesOtrosGIE.totalEFAGP = e.summaryCells[42][0].value;
          this.totalesOtrosGIE.totalEFAGD = e.summaryCells[43][0].value;
          this.totalesOtrosGIE.totalEFSR = e.summaryCells[46][0].value;
          this.totalesOtrosGIE.totalEFSP = e.summaryCells[47][0].value;
          this.totalesOtrosGIE.totalEFSD = e.summaryCells[48][0].value;
          this.totalesOtrosGIE.totalEFOR = e.summaryCells[51][0].value;
          this.totalesOtrosGIE.totalEFOP = e.summaryCells[52][0].value;
          this.totalesOtrosGIE.totalEFOD = e.summaryCells[53][0].value;
          this.totalesOtrosGIE.totalEFNR = e.summaryCells[56][0].value;
          this.totalesOtrosGIE.totalEFNP = e.summaryCells[57][0].value;
          this.totalesOtrosGIE.totalEFND = e.summaryCells[58][0].value;
          this.totalesOtrosGIE.totalEFDR = e.summaryCells[61][0].value;
          this.totalesOtrosGIE.totalEFDP = e.summaryCells[62][0].value;
          this.totalesOtrosGIE.totalEFDD = e.summaryCells[63][0].value;
          this.totalesOtrosGIE.totalEFACR = e.summaryCells[66][0].value;
          this.totalesOtrosGIE.totalEFACP = e.summaryCells[67][0].value;
          this.totalesOtrosGIE.totalEFACD = e.summaryCells[68][0].value;
        }

        if(e.data.key == 'c.- VENTA DE ACTIVO FIJO'){
          this.totalesOtrosGIE.totalVAFER = e.summaryCells[6][0].value;
          this.totalesOtrosGIE.totalVAFEP = e.summaryCells[7][0].value;
          this.totalesOtrosGIE.totalVAFED = e.summaryCells[8][0].value;
          this.totalesOtrosGIE.totalVAFFR = e.summaryCells[11][0].value;
          this.totalesOtrosGIE.totalVAFFP = e.summaryCells[12][0].value;
          this.totalesOtrosGIE.totalVAFFD = e.summaryCells[13][0].value;
          this.totalesOtrosGIE.totalVAFMR = e.summaryCells[16][0].value;
          this.totalesOtrosGIE.totalVAFMP = e.summaryCells[17][0].value;
          this.totalesOtrosGIE.totalVAFMD = e.summaryCells[18][0].value;
          this.totalesOtrosGIE.totalVAFAR = e.summaryCells[21][0].value;
          this.totalesOtrosGIE.totalVAFAP = e.summaryCells[22][0].value;
          this.totalesOtrosGIE.totalVAFAD = e.summaryCells[23][0].value;
          this.totalesOtrosGIE.totalVAFMYR = e.summaryCells[26][0].value;
          this.totalesOtrosGIE.totalVAFMYP = e.summaryCells[27][0].value;
          this.totalesOtrosGIE.totalVAFMYD = e.summaryCells[28][0].value;
          this.totalesOtrosGIE.totalVAFJR = e.summaryCells[31][0].value;
          this.totalesOtrosGIE.totalVAFJP = e.summaryCells[32][0].value;
          this.totalesOtrosGIE.totalVAFJD = e.summaryCells[33][0].value;
          this.totalesOtrosGIE.totalVAFJLR = e.summaryCells[36][0].value;
          this.totalesOtrosGIE.totalVAFJLP = e.summaryCells[37][0].value;
          this.totalesOtrosGIE.totalVAFJLD = e.summaryCells[38][0].value;
          this.totalesOtrosGIE.totalVAFAGR = e.summaryCells[41][0].value;
          this.totalesOtrosGIE.totalVAFAGP = e.summaryCells[42][0].value;
          this.totalesOtrosGIE.totalVAFAGD = e.summaryCells[43][0].value;
          this.totalesOtrosGIE.totalVAFSR = e.summaryCells[46][0].value;
          this.totalesOtrosGIE.totalVAFSP = e.summaryCells[47][0].value;
          this.totalesOtrosGIE.totalVAFSD = e.summaryCells[48][0].value;
          this.totalesOtrosGIE.totalVAFOR = e.summaryCells[51][0].value;
          this.totalesOtrosGIE.totalVAFOP = e.summaryCells[52][0].value;
          this.totalesOtrosGIE.totalVAFOD = e.summaryCells[53][0].value;
          this.totalesOtrosGIE.totalVAFNR = e.summaryCells[56][0].value;
          this.totalesOtrosGIE.totalVAFNP = e.summaryCells[57][0].value;
          this.totalesOtrosGIE.totalVAFND = e.summaryCells[58][0].value;
          this.totalesOtrosGIE.totalVAFDR = e.summaryCells[61][0].value;
          this.totalesOtrosGIE.totalVAFDP = e.summaryCells[62][0].value;
          this.totalesOtrosGIE.totalVAFDD = e.summaryCells[63][0].value;
          this.totalesOtrosGIE.totalVAFACR = e.summaryCells[66][0].value;
          this.totalesOtrosGIE.totalVAFACP = e.summaryCells[67][0].value;
          this.totalesOtrosGIE.totalVAFACD = e.summaryCells[68][0].value;
        }

//================================Resta de la agrupacion 04.- GASTOS/INGRESOS FINANCIEROS================================
        if(e.data.key == 'a.- PRODUCTOS FINANCIEROS'){
          this.totalPodructF = e.data.aggregates[0];
        }

        if(e.data.key == 'b.- GASTOS FINANCIEROS'){
          this.totalGastosF = e.data.aggregates[0];

          this.totalesGIF = this.totalGastosF - this.totalPodructF;
        }
      }


      if(e.groupIndex == 3){
//=================================Resta de la agrupacion Otros gastos/ingresos ordinarios=========================
        //========================Sacando los valores para la operacion============================================
        if(e.data.key == '401-01-000 INGRESOS ORDINARIOS'){
          this.totalesOGIO.totalIOER = e.summaryCells[6][0].value;
          this.totalesOGIO.totalIOEP = e.summaryCells[7][0].value;
          this.totalesOGIO.totalIOED = e.summaryCells[8][0].value;
          this.totalesOGIO.totalIOFR = e.summaryCells[11][0].value;
          this.totalesOGIO.totalIOFP = e.summaryCells[12][0].value;
          this.totalesOGIO.totalIOFD = e.summaryCells[13][0].value;
          this.totalesOGIO.totalIOMR = e.summaryCells[16][0].value;
          this.totalesOGIO.totalIOMP = e.summaryCells[17][0].value;
          this.totalesOGIO.totalIOMD = e.summaryCells[18][0].value;
          this.totalesOGIO.totalIOAR = e.summaryCells[21][0].value;
          this.totalesOGIO.totalIOAP = e.summaryCells[22][0].value;
          this.totalesOGIO.totalIOAD = e.summaryCells[23][0].value;
          this.totalesOGIO.totalIOMYR = e.summaryCells[26][0].value;
          this.totalesOGIO.totalIOMYP = e.summaryCells[27][0].value;
          this.totalesOGIO.totalIOMYD = e.summaryCells[28][0].value;
          this.totalesOGIO.totalIOJR = e.summaryCells[31][0].value;
          this.totalesOGIO.totalIOJP = e.summaryCells[32][0].value;
          this.totalesOGIO.totalIOJD = e.summaryCells[33][0].value;
          this.totalesOGIO.totalIOJLR = e.summaryCells[36][0].value;
          this.totalesOGIO.totalIOJLP = e.summaryCells[37][0].value;
          this.totalesOGIO.totalIOJLD = e.summaryCells[38][0].value;
          this.totalesOGIO.totalIOAGR = e.summaryCells[41][0].value;
          this.totalesOGIO.totalIOAGP = e.summaryCells[42][0].value;
          this.totalesOGIO.totalIOAGD = e.summaryCells[43][0].value;
          this.totalesOGIO.totalIOSR = e.summaryCells[46][0].value;
          this.totalesOGIO.totalIOSP = e.summaryCells[47][0].value;
          this.totalesOGIO.totalIOSD = e.summaryCells[48][0].value;
          this.totalesOGIO.totalIOOR = e.summaryCells[51][0].value;
          this.totalesOGIO.totalIOOP = e.summaryCells[52][0].value;
          this.totalesOGIO.totalIOOD = e.summaryCells[53][0].value;
          this.totalesOGIO.totalIONR = e.summaryCells[56][0].value;
          this.totalesOGIO.totalIONP = e.summaryCells[57][0].value;
          this.totalesOGIO.totalIOND = e.summaryCells[58][0].value;
          this.totalesOGIO.totalIODR = e.summaryCells[61][0].value;
          this.totalesOGIO.totalIODP = e.summaryCells[62][0].value;
          this.totalesOGIO.totalIODD = e.summaryCells[63][0].value;
          this.totalesOGIO.totalIOACR = e.summaryCells[66][0].value;
          this.totalesOGIO.totalIOACP = e.summaryCells[67][0].value;
          this.totalesOGIO.totalIOACD = e.summaryCells[68][0].value;


        }

        if(e.data.key == '505-01-000 OTROS GASTOS  ORDINARIOS      '){
          this.totalesOGIO.totalOGOER = e.summaryCells[6][0].value;
          this.totalesOGIO.totalOGOEP = e.summaryCells[7][0].value;
          this.totalesOGIO.totalOGOED = e.summaryCells[8][0].value;
          this.totalesOGIO.totalOGOFR = e.summaryCells[11][0].value;
          this.totalesOGIO.totalOGOFP = e.summaryCells[12][0].value;
          this.totalesOGIO.totalOGOFD = e.summaryCells[13][0].value;
          this.totalesOGIO.totalOGOMR = e.summaryCells[16][0].value;
          this.totalesOGIO.totalOGOMP = e.summaryCells[17][0].value;
          this.totalesOGIO.totalOGOMD = e.summaryCells[18][0].value;
          this.totalesOGIO.totalOGOAR = e.summaryCells[21][0].value;
          this.totalesOGIO.totalOGOAP = e.summaryCells[22][0].value;
          this.totalesOGIO.totalOGOAD = e.summaryCells[23][0].value;
          this.totalesOGIO.totalOGOMYR = e.summaryCells[26][0].value;
          this.totalesOGIO.totalOGOMYP = e.summaryCells[27][0].value;
          this.totalesOGIO.totalOGOMYD = e.summaryCells[28][0].value;
          this.totalesOGIO.totalOGOJR = e.summaryCells[31][0].value;
          this.totalesOGIO.totalOGOJP = e.summaryCells[32][0].value;
          this.totalesOGIO.totalOGOJD = e.summaryCells[33][0].value;
          this.totalesOGIO.totalOGOJLR = e.summaryCells[36][0].value;
          this.totalesOGIO.totalOGOJLP = e.summaryCells[37][0].value;
          this.totalesOGIO.totalOGOJLD = e.summaryCells[38][0].value;
          this.totalesOGIO.totalOGOAGR = e.summaryCells[41][0].value;
          this.totalesOGIO.totalOGOAGP = e.summaryCells[42][0].value;
          this.totalesOGIO.totalOGOAGD = e.summaryCells[43][0].value;
          this.totalesOGIO.totalOGOSR = e.summaryCells[46][0].value;
          this.totalesOGIO.totalOGOSP = e.summaryCells[47][0].value;
          this.totalesOGIO.totalOGOSD = e.summaryCells[48][0].value;
          this.totalesOGIO.totalOGOOR = e.summaryCells[51][0].value;
          this.totalesOGIO.totalOGOOP = e.summaryCells[52][0].value;
          this.totalesOGIO.totalOGOOD = e.summaryCells[53][0].value;
          this.totalesOGIO.totalOGONR = e.summaryCells[56][0].value;
          this.totalesOGIO.totalOGONP = e.summaryCells[57][0].value;
          this.totalesOGIO.totalOGOND = e.summaryCells[58][0].value;
          this.totalesOGIO.totalOGODR = e.summaryCells[61][0].value;
          this.totalesOGIO.totalOGODP = e.summaryCells[62][0].value;
          this.totalesOGIO.totalOGODD = e.summaryCells[63][0].value;
          this.totalesOGIO.totalOGOACR = e.summaryCells[66][0].value;
          this.totalesOGIO.totalOGOACP = e.summaryCells[67][0].value;
          this.totalesOGIO.totalOGOACD = e.summaryCells[68][0].value;

          this.totalesOGIO.totalOtrosGIOER = this.totalesOGIO.totalOGOER - this.totalesOGIO.totalIOER;
          this.totalesOGIO.totalOtrosGIOEP = this.totalesOGIO.totalOGOEP - this.totalesOGIO.totalIOEP;
          this.totalesOGIO.totalOtrosGIOED = this.totalesOGIO.totalOGOED - this.totalesOGIO.totalIOED;
          this.totalesOGIO.totalOtrosGIOFR = this.totalesOGIO.totalOGOFR - this.totalesOGIO.totalIOFR;
          this.totalesOGIO.totalOtrosGIOFP = this.totalesOGIO.totalOGOFP - this.totalesOGIO.totalIOFP;
          this.totalesOGIO.totalOtrosGIOFD = this.totalesOGIO.totalOGOFD - this.totalesOGIO.totalIOFD;
          this.totalesOGIO.totalOtrosGIOMR = this.totalesOGIO.totalOGOMR - this.totalesOGIO.totalIOMR;
          this.totalesOGIO.totalOtrosGIOMP = this.totalesOGIO.totalOGOMP - this.totalesOGIO.totalIOMP;
          this.totalesOGIO.totalOtrosGIOMD = this.totalesOGIO.totalOGOMD - this.totalesOGIO.totalIOMD;
          this.totalesOGIO.totalOtrosGIOAR = this.totalesOGIO.totalOGOAR - this.totalesOGIO.totalIOAR;
          this.totalesOGIO.totalOtrosGIOAP = this.totalesOGIO.totalOGOAP - this.totalesOGIO.totalIOAP;
          this.totalesOGIO.totalOtrosGIOAD = this.totalesOGIO.totalOGOAD - this.totalesOGIO.totalIOAD;
          this.totalesOGIO.totalOtrosGIOMYR = this.totalesOGIO.totalOGOMYR - this.totalesOGIO.totalIOMYR;
          this.totalesOGIO.totalOtrosGIOMYP = this.totalesOGIO.totalOGOMYP - this.totalesOGIO.totalIOMYP;
          this.totalesOGIO.totalOtrosGIOMYD = this.totalesOGIO.totalOGOMYD - this.totalesOGIO.totalIOMYD;
          this.totalesOGIO.totalOtrosGIOJR = this.totalesOGIO.totalOGOJR - this.totalesOGIO.totalIOJR;
          this.totalesOGIO.totalOtrosGIOJP = this.totalesOGIO.totalOGOJP - this.totalesOGIO.totalIOJP;
          this.totalesOGIO.totalOtrosGIOJD = this.totalesOGIO.totalOGOJD - this.totalesOGIO.totalIOJD;
          this.totalesOGIO.totalOtrosGIOJLR = this.totalesOGIO.totalOGOJLR - this.totalesOGIO.totalIOJLR;
          this.totalesOGIO.totalOtrosGIOJLP = this.totalesOGIO.totalOGOJLP - this.totalesOGIO.totalIOJLP;
          this.totalesOGIO.totalOtrosGIOJLD = this.totalesOGIO.totalOGOJLD - this.totalesOGIO.totalIOJLD;
          this.totalesOGIO.totalOtrosGIOAGR = this.totalesOGIO.totalOGOAGR - this.totalesOGIO.totalIOAGR;
          this.totalesOGIO.totalOtrosGIOAGP = this.totalesOGIO.totalOGOAGP - this.totalesOGIO.totalIOAGP;
          this.totalesOGIO.totalOtrosGIOAGD = this.totalesOGIO.totalOGOAGD - this.totalesOGIO.totalIOAGD;
          this.totalesOGIO.totalOtrosGIOSR = this.totalesOGIO.totalOGOSR - this.totalesOGIO.totalIOSR;
          this.totalesOGIO.totalOtrosGIOSP = this.totalesOGIO.totalOGOSP - this.totalesOGIO.totalIOSP;
          this.totalesOGIO.totalOtrosGIOSD = this.totalesOGIO.totalOGOSD - this.totalesOGIO.totalIOSD;
          this.totalesOGIO.totalOtrosGIOOR = this.totalesOGIO.totalOGOOR - this.totalesOGIO.totalIOOR;
          this.totalesOGIO.totalOtrosGIOOP = this.totalesOGIO.totalOGOOP - this.totalesOGIO.totalIOOP;
          this.totalesOGIO.totalOtrosGIOOD = this.totalesOGIO.totalOGOOD - this.totalesOGIO.totalIOOD;
          this.totalesOGIO.totalOtrosGIONR = this.totalesOGIO.totalOGONR - this.totalesOGIO.totalIONR;
          this.totalesOGIO.totalOtrosGIONP = this.totalesOGIO.totalOGONP - this.totalesOGIO.totalIONP;
          this.totalesOGIO.totalOtrosGIOND = this.totalesOGIO.totalOGOND - this.totalesOGIO.totalIOND;
          this.totalesOGIO.totalOtrosGIODR = this.totalesOGIO.totalOGODR - this.totalesOGIO.totalIODR;
          this.totalesOGIO.totalOtrosGIODP = this.totalesOGIO.totalOGODP - this.totalesOGIO.totalIODP;
          this.totalesOGIO.totalOtrosGIODD = this.totalesOGIO.totalOGODD - this.totalesOGIO.totalIODD;
          this.totalesOGIO.totalOtrosGIOACR = this.totalesOGIO.totalOGOAR - this.totalesOGIO.totalIOACR;
          this.totalesOGIO.totalOtrosGIOACP = this.totalesOGIO.totalOGOAP - this.totalesOGIO.totalIOACP;
          this.totalesOGIO.totalOtrosGIOACD = this.totalesOGIO.totalOGOAD - this.totalesOGIO.totalIOACD;
        }
//=================================Resta de la agrupacion Otros Gastos/Ingresos Extraordinario=========================
        //=========================Sacando los valores para la operaion 
        if(e.data.key == '405-01-000 OTROS ING OPER EXTRAORDINARIO'){
          this.totalesOtros.totalOIOEER = e.summaryCells[6][0].value;
          this.totalesOtros.totalOIOEEP = e.summaryCells[7][0].value;
          this.totalesOtros.totalOIOEED = e.summaryCells[8][0].value;
          this.totalesOtros.totalOIOEFR = e.summaryCells[11][0].value;
          this.totalesOtros.totalOIOEFP = e.summaryCells[12][0].value;
          this.totalesOtros.totalOIOEFD = e.summaryCells[13][0].value;
          this.totalesOtros.totalOIOEMR = e.summaryCells[16][0].value;
          this.totalesOtros.totalOIOEMP = e.summaryCells[17][0].value;
          this.totalesOtros.totalOIOEMD = e.summaryCells[18][0].value;
          this.totalesOtros.totalOIOEAR = e.summaryCells[21][0].value;
          this.totalesOtros.totalOIOEAP = e.summaryCells[22][0].value;
          this.totalesOtros.totalOIOEAD = e.summaryCells[23][0].value;
          this.totalesOtros.totalOIOEMYR = e.summaryCells[26][0].value;
          this.totalesOtros.totalOIOEMYP = e.summaryCells[27][0].value;
          this.totalesOtros.totalOIOEMYD = e.summaryCells[28][0].value;
          this.totalesOtros.totalOIOEJR = e.summaryCells[31][0].value;
          this.totalesOtros.totalOIOEJP = e.summaryCells[32][0].value;
          this.totalesOtros.totalOIOEJD = e.summaryCells[33][0].value;
          this.totalesOtros.totalOIOEJLR = e.summaryCells[36][0].value;
          this.totalesOtros.totalOIOEJLP = e.summaryCells[37][0].value;
          this.totalesOtros.totalOIOEJLD = e.summaryCells[38][0].value;
          this.totalesOtros.totalOIOEAGR = e.summaryCells[41][0].value;
          this.totalesOtros.totalOIOEAGP = e.summaryCells[42][0].value;
          this.totalesOtros.totalOIOEAGD = e.summaryCells[43][0].value;
          this.totalesOtros.totalOIOESR = e.summaryCells[46][0].value;
          this.totalesOtros.totalOIOESP = e.summaryCells[47][0].value;
          this.totalesOtros.totalOIOESD = e.summaryCells[48][0].value;
          this.totalesOtros.totalOIOEOR = e.summaryCells[51][0].value;
          this.totalesOtros.totalOIOEOP = e.summaryCells[52][0].value;
          this.totalesOtros.totalOIOEOD = e.summaryCells[53][0].value;
          this.totalesOtros.totalOIOENR = e.summaryCells[56][0].value;
          this.totalesOtros.totalOIOENP = e.summaryCells[57][0].value;
          this.totalesOtros.totalOIOEND = e.summaryCells[58][0].value;
          this.totalesOtros.totalOIOEDR = e.summaryCells[61][0].value;
          this.totalesOtros.totalOIOEDP = e.summaryCells[62][0].value;
          this.totalesOtros.totalOIOEDD = e.summaryCells[63][0].value;
          this.totalesOtros.totalOIOEACR = e.summaryCells[66][0].value;
          this.totalesOtros.totalOIOEACP = e.summaryCells[67][0].value;
          this.totalesOtros.totalOIOEACD = e.summaryCells[68][0].value;
        }
        if(e.data.key == '507-01-000 OTROS GASTOS OPER EXTRAORDINARIOS  '){
          this.totalesOtros.totalOGOEER = e.summaryCells[6][0].value;
          this.totalesOtros.totalOGOEEP = e.summaryCells[7][0].value;
          this.totalesOtros.totalOGOEED = e.summaryCells[8][0].value;
          this.totalesOtros.totalOGOEFR = e.summaryCells[11][0].value;
          this.totalesOtros.totalOGOEFP = e.summaryCells[12][0].value;
          this.totalesOtros.totalOGOEFD = e.summaryCells[13][0].value;
          this.totalesOtros.totalOGOEMR = e.summaryCells[16][0].value;
          this.totalesOtros.totalOGOEMP = e.summaryCells[17][0].value;
          this.totalesOtros.totalOGOEMD = e.summaryCells[18][0].value;
          this.totalesOtros.totalOGOEAR = e.summaryCells[21][0].value;
          this.totalesOtros.totalOGOEAP = e.summaryCells[22][0].value;
          this.totalesOtros.totalOGOEAD = e.summaryCells[23][0].value;
          this.totalesOtros.totalOGOEMYR = e.summaryCells[26][0].value;
          this.totalesOtros.totalOGOEMYP = e.summaryCells[27][0].value;
          this.totalesOtros.totalOGOEMYD = e.summaryCells[28][0].value;
          this.totalesOtros.totalOGOEJR = e.summaryCells[31][0].value;
          this.totalesOtros.totalOGOEJP = e.summaryCells[32][0].value;
          this.totalesOtros.totalOGOEJD = e.summaryCells[33][0].value;
          this.totalesOtros.totalOGOEJLR = e.summaryCells[36][0].value;
          this.totalesOtros.totalOGOEJLP = e.summaryCells[37][0].value;
          this.totalesOtros.totalOGOEJLD = e.summaryCells[38][0].value;
          this.totalesOtros.totalOGOEAGR = e.summaryCells[41][0].value;
          this.totalesOtros.totalOGOEAGP = e.summaryCells[42][0].value;
          this.totalesOtros.totalOGOEAGD = e.summaryCells[43][0].value;
          this.totalesOtros.totalOGOESR = e.summaryCells[46][0].value;
          this.totalesOtros.totalOGOESP = e.summaryCells[47][0].value;
          this.totalesOtros.totalOGOESD = e.summaryCells[48][0].value;
          this.totalesOtros.totalOGOEOR = e.summaryCells[51][0].value;
          this.totalesOtros.totalOGOEOP = e.summaryCells[52][0].value;
          this.totalesOtros.totalOGOEOD = e.summaryCells[53][0].value;
          this.totalesOtros.totalOGOENR = e.summaryCells[56][0].value;
          this.totalesOtros.totalOGOENP = e.summaryCells[57][0].value;
          this.totalesOtros.totalOGOEND = e.summaryCells[58][0].value;
          this.totalesOtros.totalOGOEDR = e.summaryCells[61][0].value;
          this.totalesOtros.totalOGOEDP = e.summaryCells[62][0].value;
          this.totalesOtros.totalOGOEDD = e.summaryCells[63][0].value;
          this.totalesOtros.totalOGOEACR = e.summaryCells[66][0].value;
          this.totalesOtros.totalOGOEACP = e.summaryCells[67][0].value;
          this.totalesOtros.totalOGOEACD = e.summaryCells[68][0].value;

          this.totalesOtros.totalesOtrosER = this.totalesOtros.totalOGOEER - this.totalesOtros.totalOIOEER;
          this.totalesOtros.totalesOtrosEP = this.totalesOtros.totalOGOEEP - this.totalesOtros.totalOIOEEP;
          this.totalesOtros.totalesOtrosED = this.totalesOtros.totalOGOEED - this.totalesOtros.totalOIOEED;
          this.totalesOtros.totalesOtrosFR = this.totalesOtros.totalOGOEFR - this.totalesOtros.totalOIOEFR;
          this.totalesOtros.totalesOtrosFP = this.totalesOtros.totalOGOEFP - this.totalesOtros.totalOIOEFP;
          this.totalesOtros.totalesOtrosFD = this.totalesOtros.totalOGOEFD - this.totalesOtros.totalOIOEFD;
          this.totalesOtros.totalesOtrosMR = this.totalesOtros.totalOGOEMR - this.totalesOtros.totalOIOEMR;
          this.totalesOtros.totalesOtrosMP = this.totalesOtros.totalOGOEMP - this.totalesOtros.totalOIOEMP;
          this.totalesOtros.totalesOtrosMD = this.totalesOtros.totalOGOEMD - this.totalesOtros.totalOIOEMD;
          this.totalesOtros.totalesOtrosAR = this.totalesOtros.totalOGOEAR - this.totalesOtros.totalOIOEAR;
          this.totalesOtros.totalesOtrosAP = this.totalesOtros.totalOGOEAP - this.totalesOtros.totalOIOEAP;
          this.totalesOtros.totalesOtrosAD = this.totalesOtros.totalOGOEAD - this.totalesOtros.totalOIOEAD;
          this.totalesOtros.totalesOtrosMYR = this.totalesOtros.totalOGOEMYR - this.totalesOtros.totalOIOEMYR;
          this.totalesOtros.totalesOtrosMYP = this.totalesOtros.totalOGOEMYP - this.totalesOtros.totalOIOEMYP;
          this.totalesOtros.totalesOtrosMYD = this.totalesOtros.totalOGOEMYD - this.totalesOtros.totalOIOEMYD;
          this.totalesOtros.totalesOtrosJR = this.totalesOtros.totalOGOEJR - this.totalesOtros.totalOIOEJR;
          this.totalesOtros.totalesOtrosJP = this.totalesOtros.totalOGOEJP - this.totalesOtros.totalOIOEJP;
          this.totalesOtros.totalesOtrosJD = this.totalesOtros.totalOGOEJD - this.totalesOtros.totalOIOEJD;
          this.totalesOtros.totalesOtrosJLR = this.totalesOtros.totalOGOEJLR - this.totalesOtros.totalOIOEJLR;
          this.totalesOtros.totalesOtrosJLP = this.totalesOtros.totalOGOEJLP - this.totalesOtros.totalOIOEJLP;
          this.totalesOtros.totalesOtrosJLD = this.totalesOtros.totalOGOEJLD - this.totalesOtros.totalOIOEJLD;
          this.totalesOtros.totalesOtrosAGR = this.totalesOtros.totalOGOEAGR - this.totalesOtros.totalOIOEAGR;
          this.totalesOtros.totalesOtrosAGP = this.totalesOtros.totalOGOEAGP - this.totalesOtros.totalOIOEAGP;
          this.totalesOtros.totalesOtrosAGD = this.totalesOtros.totalOGOEAGD - this.totalesOtros.totalOIOEAGD;
          this.totalesOtros.totalesOtrosSR = this.totalesOtros.totalOGOESR - this.totalesOtros.totalOIOESR;
          this.totalesOtros.totalesOtrosSP = this.totalesOtros.totalOGOESP - this.totalesOtros.totalOIOESP;
          this.totalesOtros.totalesOtrosSD = this.totalesOtros.totalOGOESD - this.totalesOtros.totalOIOESD;
          this.totalesOtros.totalesOtrosOR = this.totalesOtros.totalOGOEOR - this.totalesOtros.totalOIOEOR;
          this.totalesOtros.totalesOtrosOP = this.totalesOtros.totalOGOEOP - this.totalesOtros.totalOIOEOP;
          this.totalesOtros.totalesOtrosOD = this.totalesOtros.totalOGOEOD - this.totalesOtros.totalOIOEOD;
          this.totalesOtros.totalesOtrosNR = this.totalesOtros.totalOGOENR - this.totalesOtros.totalOIOENR;
          this.totalesOtros.totalesOtrosNP = this.totalesOtros.totalOGOENP - this.totalesOtros.totalOIOENP;
          this.totalesOtros.totalesOtrosND = this.totalesOtros.totalOGOEND - this.totalesOtros.totalOIOEND;
          this.totalesOtros.totalesOtrosDR = this.totalesOtros.totalOGOEDR - this.totalesOtros.totalOIOEDR;
          this.totalesOtros.totalesOtrosDP = this.totalesOtros.totalOGOEDP - this.totalesOtros.totalOIOEDP;
          this.totalesOtros.totalesOtrosDD = this.totalesOtros.totalOGOEDD - this.totalesOtros.totalOIOEDD;
          this.totalesOtros.totalesOtrosACR = this.totalesOtros.totalOGOEACR - this.totalesOtros.totalOIOEACR;
          this.totalesOtros.totalesOtrosACP = this.totalesOtros.totalOGOEACP - this.totalesOtros.totalOIOEACP;
          this.totalesOtros.totalesOtrosACD = this.totalesOtros.totalOGOEACD - this.totalesOtros.totalOIOEACD;
        }
      }

      //=====Resta Entre Fletes y Costos============================================
      if(e.groupIndex == 0 && e.key[0]){
        e.summaryCells[6][0].value = this.totales0
      }

      if(e.groupIndex == 1 && e.data.key == '01.- OPERACION'){
        console.log(e)
        e.summaryCells[6][0].value = this.totalesOperacion.totalOperacionER;
        e.summaryCells[7][0].value = this.totalesOperacion.totalOperacionEP;
        e.summaryCells[8][0].value = this.totalesOperacion.totalOperacionED;
        e.summaryCells[11][0].value = this.totalesOperacion.totalOperacionFR;
        e.summaryCells[12][0].value = this.totalesOperacion.totalOperacionFP;
        e.summaryCells[13][0].value = this.totalesOperacion.totalOperacionFD;
        e.summaryCells[16][0].value = this.totalesOperacion.totalOperacionMR;
        e.summaryCells[17][0].value = this.totalesOperacion.totalOperacionMP;
        e.summaryCells[18][0].value = this.totalesOperacion.totalOperacionMD;
        e.summaryCells[21][0].value = this.totalesOperacion.totalOperacionAR;
        e.summaryCells[22][0].value = this.totalesOperacion.totalOperacionAP;
        e.summaryCells[23][0].value = this.totalesOperacion.totalOperacionAD;
        e.summaryCells[26][0].value = this.totalesOperacion.totalOperacionMYR;
        e.summaryCells[27][0].value = this.totalesOperacion.totalOperacionMYP;
        e.summaryCells[28][0].value = this.totalesOperacion.totalOperacionMYD;
        e.summaryCells[31][0].value = this.totalesOperacion.totalOperacionJR;
        e.summaryCells[31][0].value = this.totalesOperacion.totalOperacionJP;
        e.summaryCells[33][0].value = this.totalesOperacion.totalOperacionJD;
        e.summaryCells[36][0].value = this.totalesOperacion.totalOperacionJLR;
        e.summaryCells[37][0].value = this.totalesOperacion.totalOperacionJLP;
        e.summaryCells[38][0].value = this.totalesOperacion.totalOperacionJLD;
        e.summaryCells[41][0].value = this.totalesOperacion.totalOperacionAGR;
        e.summaryCells[42][0].value = this.totalesOperacion.totalOperacionAGP;
        e.summaryCells[43][0].value = this.totalesOperacion.totalOperacionAGD;
        e.summaryCells[46][0].value = this.totalesOperacion.totalOperacionSR;
        e.summaryCells[47][0].value = this.totalesOperacion.totalOperacionSP;
        e.summaryCells[48][0].value = this.totalesOperacion.totalOperacionSD;
        e.summaryCells[51][0].value = this.totalesOperacion.totalOperacionOR;
        e.summaryCells[52][0].value = this.totalesOperacion.totalOperacionOP;
        e.summaryCells[53][0].value = this.totalesOperacion.totalOperacionOD;
        e.summaryCells[56][0].value = this.totalesOperacion.totalOperacionNR;
        e.summaryCells[57][0].value = this.totalesOperacion.totalOperacionNP;
        e.summaryCells[58][0].value = this.totalesOperacion.totalOperacionND;
        e.summaryCells[61][0].value = this.totalesOperacion.totalOperacionDR;
        e.summaryCells[62][0].value = this.totalesOperacion.totalOperacionDP;
        e.summaryCells[63][0].value = this.totalesOperacion.totalOperacionDD;
        e.summaryCells[66][0].value = this.totalesOperacion.totalOperacionACR;
        e.summaryCells[67][0].value = this.totalesOperacion.totalOperacionACP;
        e.summaryCells[68][0].value = this.totalesOperacion.totalOperacionACD;
      }

      if(e.groupIndex == 1 && e.data.key == '02.- OTROS GASTOS DE OPERACIÓN'){
        e.summaryCells[6][0].value = this.totalesOtrosGO.totalOGOperacionER;
        e.summaryCells[7][0].value = this.totalesOtrosGO.totalOGOperacionEP;
        e.summaryCells[8][0].value = this.totalesOtrosGO.totalOGOperacionED;
        e.summaryCells[11][0].value = this.totalesOtrosGO.totalOGOperacionFR;
        e.summaryCells[12][0].value = this.totalesOtrosGO.totalOGOperacionFP;
        e.summaryCells[13][0].value = this.totalesOtrosGO.totalOGOperacionFD;
        e.summaryCells[16][0].value = this.totalesOtrosGO.totalOGOperacionMR;
        e.summaryCells[17][0].value = this.totalesOtrosGO.totalOGOperacionMP;
        e.summaryCells[18][0].value = this.totalesOtrosGO.totalOGOperacionMD;
        e.summaryCells[21][0].value = this.totalesOtrosGO.totalOGOperacionAR;
        e.summaryCells[22][0].value = this.totalesOtrosGO.totalOGOperacionAP;
        e.summaryCells[23][0].value = this.totalesOtrosGO.totalOGOperacionAD;
        e.summaryCells[26][0].value = this.totalesOtrosGO.totalOGOperacionMYR;
        e.summaryCells[27][0].value = this.totalesOtrosGO.totalOGOperacionMYP;
        e.summaryCells[28][0].value = this.totalesOtrosGO.totalOGOperacionMYD;
        e.summaryCells[31][0].value = this.totalesOtrosGO.totalOGOperacionJR;
        e.summaryCells[32][0].value = this.totalesOtrosGO.totalOGOperacionJP;
        e.summaryCells[33][0].value = this.totalesOtrosGO.totalOGOperacionJD;
        e.summaryCells[36][0].value = this.totalesOtrosGO.totalOGOperacionJLR;
        e.summaryCells[37][0].value = this.totalesOtrosGO.totalOGOperacionJLP;
        e.summaryCells[38][0].value = this.totalesOtrosGO.totalOGOperacionJLD;
        e.summaryCells[41][0].value = this.totalesOtrosGO.totalOGOperacionAGR;
        e.summaryCells[42][0].value = this.totalesOtrosGO.totalOGOperacionAGP;
        e.summaryCells[43][0].value = this.totalesOtrosGO.totalOGOperacionAGD;
        e.summaryCells[46][0].value = this.totalesOtrosGO.totalOGOperacionSR;
        e.summaryCells[47][0].value = this.totalesOtrosGO.totalOGOperacionSP;
        e.summaryCells[48][0].value = this.totalesOtrosGO.totalOGOperacionSD;
        e.summaryCells[51][0].value = this.totalesOtrosGO.totalOGOperacionOR;
        e.summaryCells[52][0].value = this.totalesOtrosGO.totalOGOperacionOP;
        e.summaryCells[53][0].value = this.totalesOtrosGO.totalOGOperacionOD;
        e.summaryCells[56][0].value = this.totalesOtrosGO.totalOGOperacionNR;
        e.summaryCells[57][0].value = this.totalesOtrosGO.totalOGOperacionNP;
        e.summaryCells[58][0].value = this.totalesOtrosGO.totalOGOperacionND;
        e.summaryCells[61][0].value = this.totalesOtrosGO.totalOGOperacionDR;
        e.summaryCells[62][0].value = this.totalesOtrosGO.totalOGOperacionDP;
        e.summaryCells[63][0].value = this.totalesOtrosGO.totalOGOperacionDD;
        e.summaryCells[66][0].value = this.totalesOtrosGO.totalOGOperacionACR;
        e.summaryCells[67][0].value = this.totalesOtrosGO.totalOGOperacionACP;
        e.summaryCells[68][0].value = this.totalesOtrosGO.totalOGOperacionACD;

      }

      if(e.groupIndex == 2 && e.data.key == 'c.- OTROS GASTOS/INGRESOS ORDINARIOS'){
        e.summaryCells[6][0].value = this.totalesOGIO.totalOtrosGIOER;
        e.summaryCells[7][0].value = this.totalesOGIO.totalOtrosGIOEP;
        e.summaryCells[8][0].value = this.totalesOGIO.totalOtrosGIOED;
        e.summaryCells[11][0].value = this.totalesOGIO.totalOtrosGIOFR;
        e.summaryCells[12][0].value = this.totalesOGIO.totalOtrosGIOFP;
        e.summaryCells[13][0].value = this.totalesOGIO.totalOtrosGIOFD;
        e.summaryCells[16][0].value = this.totalesOGIO.totalOtrosGIOMR;
        e.summaryCells[17][0].value = this.totalesOGIO.totalOtrosGIOMP;
        e.summaryCells[18][0].value = this.totalesOGIO.totalOtrosGIOMD;
        e.summaryCells[21][0].value = this.totalesOGIO.totalOtrosGIOAR;
        e.summaryCells[22][0].value = this.totalesOGIO.totalOtrosGIOAP;
        e.summaryCells[23][0].value = this.totalesOGIO.totalOtrosGIOAD;
        e.summaryCells[26][0].value = this.totalesOGIO.totalOtrosGIOMYR;
        e.summaryCells[27][0].value = this.totalesOGIO.totalOtrosGIOMYP;
        e.summaryCells[28][0].value = this.totalesOGIO.totalOtrosGIOMYD;
        e.summaryCells[31][0].value = this.totalesOGIO.totalOtrosGIOJR;
        e.summaryCells[32][0].value = this.totalesOGIO.totalOtrosGIOJP;
        e.summaryCells[33][0].value = this.totalesOGIO.totalOtrosGIOJD;
        e.summaryCells[36][0].value = this.totalesOGIO.totalOtrosGIOJLR;
        e.summaryCells[37][0].value = this.totalesOGIO.totalOtrosGIOJLP;
        e.summaryCells[38][0].value = this.totalesOGIO.totalOtrosGIOJLD;
        e.summaryCells[41][0].value = this.totalesOGIO.totalOtrosGIOAGR;
        e.summaryCells[42][0].value = this.totalesOGIO.totalOtrosGIOAGP;
        e.summaryCells[43][0].value = this.totalesOGIO.totalOtrosGIOAGD;
        e.summaryCells[46][0].value = this.totalesOGIO.totalOtrosGIOSR;
        e.summaryCells[47][0].value = this.totalesOGIO.totalOtrosGIOSP;
        e.summaryCells[48][0].value = this.totalesOGIO.totalOtrosGIOSD;
        e.summaryCells[51][0].value = this.totalesOGIO.totalOtrosGIOOR;
        e.summaryCells[52][0].value = this.totalesOGIO.totalOtrosGIOOP;
        e.summaryCells[53][0].value = this.totalesOGIO.totalOtrosGIOOD;
        e.summaryCells[56][0].value = this.totalesOGIO.totalOtrosGIONR;
        e.summaryCells[57][0].value = this.totalesOGIO.totalOtrosGIONP;
        e.summaryCells[58][0].value = this.totalesOGIO.totalOtrosGIOND;
        e.summaryCells[61][0].value = this.totalesOGIO.totalOtrosGIODR;
        e.summaryCells[62][0].value = this.totalesOGIO.totalOtrosGIODP;
        e.summaryCells[63][0].value = this.totalesOGIO.totalOtrosGIODD;
        e.summaryCells[66][0].value = this.totalesOGIO.totalOtrosGIOACR;
        e.summaryCells[67][0].value = this.totalesOGIO.totalOtrosGIOACP;
        e.summaryCells[68][0].value = this.totalesOGIO.totalOtrosGIOACD;

        let sumaOGOER
        let sumaOGOEP
        let sumaOGOED
        let sumaOGOFR
        let sumaOGOFP
        let sumaOGOFD
        let sumaOGOMR
        let sumaOGOMP
        let sumaOGOMD
        let sumaOGOAR
        let sumaOGOAP
        let sumaOGOAD
        let sumaOGOMYR
        let sumaOGOMYP
        let sumaOGOMYD
        let sumaOGOJR
        let sumaOGOJP
        let sumaOGOJD
        let sumaOGOJLR
        let sumaOGOJLP
        let sumaOGOJLD
        let sumaOGOAGR
        let sumaOGOAGP
        let sumaOGOAGD
        let sumaOGOSR
        let sumaOGOSP
        let sumaOGOSD
        let sumaOGOOR
        let sumaOGOOP
        let sumaOGOOD
        let sumaOGONR
        let sumaOGONP
        let sumaOGOND
        let sumaOGODR
        let sumaOGODP
        let sumaOGODD
        let sumaOGOACR
        let sumaOGOACP
        let sumaOGOACD


        sumaOGOER = this.totalesOtrosGO.totalGAER + this.totalesOtrosGO.totalDAER;
        this.totalesOtrosGO.totalOGOperacionER = sumaOGOER - this.totalesOGIO.totalOtrosGIOER
        sumaOGOEP = this.totalesOtrosGO.totalGAEP + this.totalesOtrosGO.totalDAEP;
        this.totalesOtrosGO.totalOGOperacionEP = sumaOGOEP - this.totalesOGIO.totalOtrosGIOEP
        sumaOGOED = this.totalesOtrosGO.totalGAED + this.totalesOtrosGO.totalDAED;
        this.totalesOtrosGO.totalOGOperacionED = sumaOGOED - this.totalesOGIO.totalOtrosGIOED
        sumaOGOFR = this.totalesOtrosGO.totalGAFR + this.totalesOtrosGO.totalDAFR;
        this.totalesOtrosGO.totalOGOperacionFR = sumaOGOFR - this.totalesOGIO.totalOtrosGIOFR
        sumaOGOFP = this.totalesOtrosGO.totalGAFP + this.totalesOtrosGO.totalDAFP;
        this.totalesOtrosGO.totalOGOperacionFP = sumaOGOFP - this.totalesOGIO.totalOtrosGIOFP
        sumaOGOFD = this.totalesOtrosGO.totalGAFD + this.totalesOtrosGO.totalDAFD;
        this.totalesOtrosGO.totalOGOperacionFD = sumaOGOFD - this.totalesOGIO.totalOtrosGIOFD
        sumaOGOMR = this.totalesOtrosGO.totalGAMR + this.totalesOtrosGO.totalDAMR;
        this.totalesOtrosGO.totalOGOperacionMR = sumaOGOMR - this.totalesOGIO.totalOtrosGIOMR
        sumaOGOMP = this.totalesOtrosGO.totalGAMP + this.totalesOtrosGO.totalDAMP;
        this.totalesOtrosGO.totalOGOperacionMP = sumaOGOMP - this.totalesOGIO.totalOtrosGIOMP
        sumaOGOMD = this.totalesOtrosGO.totalGAMD + this.totalesOtrosGO.totalDAMD;
        this.totalesOtrosGO.totalOGOperacionMD = sumaOGOMD - this.totalesOGIO.totalOtrosGIOMD
        sumaOGOAR = this.totalesOtrosGO.totalGAAR + this.totalesOtrosGO.totalDAAR;
        this.totalesOtrosGO.totalOGOperacionAR = sumaOGOAR - this.totalesOGIO.totalOtrosGIOAR
        sumaOGOAP = this.totalesOtrosGO.totalGAAP + this.totalesOtrosGO.totalDAAP;
        this.totalesOtrosGO.totalOGOperacionAP = sumaOGOAP - this.totalesOGIO.totalOtrosGIOAP
        sumaOGOAD = this.totalesOtrosGO.totalGAAD + this.totalesOtrosGO.totalDAAD;
        this.totalesOtrosGO.totalOGOperacionAD = sumaOGOAD - this.totalesOGIO.totalOtrosGIOAD
        sumaOGOMYR = this.totalesOtrosGO.totalGAMYR + this.totalesOtrosGO.totalDAMYR;
        this.totalesOtrosGO.totalOGOperacionMYR = sumaOGOMYR - this.totalesOGIO.totalOtrosGIOMYR
        sumaOGOMYP = this.totalesOtrosGO.totalGAMYP + this.totalesOtrosGO.totalDAMYP;
        this.totalesOtrosGO.totalOGOperacionMYP = sumaOGOMYP - this.totalesOGIO.totalOtrosGIOMYP
        sumaOGOMYD = this.totalesOtrosGO.totalGAMYD + this.totalesOtrosGO.totalDAMYD;
        this.totalesOtrosGO.totalOGOperacionMYD = sumaOGOMYD - this.totalesOGIO.totalOtrosGIOMYD
        sumaOGOJR = this.totalesOtrosGO.totalGAJR + this.totalesOtrosGO.totalDAJR;
        this.totalesOtrosGO.totalOGOperacionJR = sumaOGOJR - this.totalesOGIO.totalOtrosGIOJR
        sumaOGOJP = this.totalesOtrosGO.totalGAJP + this.totalesOtrosGO.totalDAJP;
        this.totalesOtrosGO.totalOGOperacionJP = sumaOGOJP - this.totalesOGIO.totalOtrosGIOJP
        sumaOGOJD = this.totalesOtrosGO.totalGAJD + this.totalesOtrosGO.totalDAJD;
        this.totalesOtrosGO.totalOGOperacionJD = sumaOGOJD - this.totalesOGIO.totalOtrosGIOJD
        sumaOGOJLR = this.totalesOtrosGO.totalGAJLR + this.totalesOtrosGO.totalDAJLR;
        this.totalesOtrosGO.totalOGOperacionJLR = sumaOGOJLR - this.totalesOGIO.totalOtrosGIOJLR
        sumaOGOJLP = this.totalesOtrosGO.totalGAJLP + this.totalesOtrosGO.totalDAJLP;
        this.totalesOtrosGO.totalOGOperacionJLP = sumaOGOJLP - this.totalesOGIO.totalOtrosGIOJLP
        sumaOGOJLD = this.totalesOtrosGO.totalGAJLD + this.totalesOtrosGO.totalDAJLD;
        this.totalesOtrosGO.totalOGOperacionJLD = sumaOGOJLD - this.totalesOGIO.totalOtrosGIOJLD
        sumaOGOAGR = this.totalesOtrosGO.totalGAAGR + this.totalesOtrosGO.totalDAAGR;
        this.totalesOtrosGO.totalOGOperacionAGR = sumaOGOAGR - this.totalesOGIO.totalOtrosGIOAGR
        sumaOGOAGP = this.totalesOtrosGO.totalGAAGP + this.totalesOtrosGO.totalDAAGP;
        this.totalesOtrosGO.totalOGOperacionAGP = sumaOGOAGP - this.totalesOGIO.totalOtrosGIOAGP
        sumaOGOAGD = this.totalesOtrosGO.totalGAAGD + this.totalesOtrosGO.totalDAAGD;
        this.totalesOtrosGO.totalOGOperacionAGD = sumaOGOAGD - this.totalesOGIO.totalOtrosGIOAGD
        sumaOGOSR = this.totalesOtrosGO.totalGASR + this.totalesOtrosGO.totalDASR;
        this.totalesOtrosGO.totalOGOperacionSR = sumaOGOSR - this.totalesOGIO.totalOtrosGIOSR
        sumaOGOSP = this.totalesOtrosGO.totalGASP + this.totalesOtrosGO.totalDASP;
        this.totalesOtrosGO.totalOGOperacionSP = sumaOGOSP - this.totalesOGIO.totalOtrosGIOSP
        sumaOGOSD = this.totalesOtrosGO.totalGASD + this.totalesOtrosGO.totalDASD;
        this.totalesOtrosGO.totalOGOperacionSD = sumaOGOSD - this.totalesOGIO.totalOtrosGIOSD
        sumaOGOOR = this.totalesOtrosGO.totalGAOR + this.totalesOtrosGO.totalDAOR;
        this.totalesOtrosGO.totalOGOperacionOR = sumaOGOOR - this.totalesOGIO.totalOtrosGIOOR
        sumaOGOOP = this.totalesOtrosGO.totalGAOP + this.totalesOtrosGO.totalDAOP;
        this.totalesOtrosGO.totalOGOperacionOP = sumaOGOOP - this.totalesOGIO.totalOtrosGIOOP
        sumaOGOOD = this.totalesOtrosGO.totalGAOD + this.totalesOtrosGO.totalDAOD;
        this.totalesOtrosGO.totalOGOperacionOD = sumaOGOOD - this.totalesOGIO.totalOtrosGIOOD
        sumaOGONR = this.totalesOtrosGO.totalGANR + this.totalesOtrosGO.totalDANR;
        this.totalesOtrosGO.totalOGOperacionNR = sumaOGONR - this.totalesOGIO.totalOtrosGIONR
        sumaOGONP = this.totalesOtrosGO.totalGANP + this.totalesOtrosGO.totalDANP;
        this.totalesOtrosGO.totalOGOperacionNP = sumaOGONP - this.totalesOGIO.totalOtrosGIONP
        sumaOGOND = this.totalesOtrosGO.totalGAND + this.totalesOtrosGO.totalDAND;
        this.totalesOtrosGO.totalOGOperacionND = sumaOGOND - this.totalesOGIO.totalOtrosGIOND
        sumaOGODR = this.totalesOtrosGO.totalGADR + this.totalesOtrosGO.totalDADR;
        this.totalesOtrosGO.totalOGOperacionDR = sumaOGODR - this.totalesOGIO.totalOtrosGIODR
        sumaOGODP = this.totalesOtrosGO.totalGADP + this.totalesOtrosGO.totalDADP;
        this.totalesOtrosGO.totalOGOperacionDP = sumaOGODP - this.totalesOGIO.totalOtrosGIODP
        sumaOGODD = this.totalesOtrosGO.totalGADD + this.totalesOtrosGO.totalDADD;
        this.totalesOtrosGO.totalOGOperacionDD = sumaOGODD - this.totalesOGIO.totalOtrosGIODD
        sumaOGOACR = this.totalesOtrosGO.totalGAACR + this.totalesOtrosGO.totalDAACR;
        this.totalesOtrosGO.totalOGOperacionACR = sumaOGOACR - this.totalesOGIO.totalOtrosGIOACR
        sumaOGOACP = this.totalesOtrosGO.totalGAACP + this.totalesOtrosGO.totalDAACP;
        this.totalesOtrosGO.totalOGOperacionACP = sumaOGOACP - this.totalesOGIO.totalOtrosGIOACP
        sumaOGOACD = this.totalesOtrosGO.totalGAACD + this.totalesOtrosGO.totalDAACD;
        this.totalesOtrosGO.totalOGOperacionACD = sumaOGOACD - this.totalesOGIO.totalOtrosGIOACD
        
      }

      if(e.groupIndex == 1 && e.data.key == '03.- OTROS GASTOS/INGRESOS EXTRAORDINARIOS'){
        e.summaryCells[6][0].value = this.totalesOtrosGIE.totalesOGIEER;
        e.summaryCells[7][0].value = this.totalesOtrosGIE.totalesOGIEEP;
        e.summaryCells[8][0].value = this.totalesOtrosGIE.totalesOGIEED;
        e.summaryCells[11][0].value = this.totalesOtrosGIE.totalesOGIEFR;
        e.summaryCells[12][0].value = this.totalesOtrosGIE.totalesOGIEFP;
        e.summaryCells[13][0].value = this.totalesOtrosGIE.totalesOGIEFD;
        e.summaryCells[16][0].value = this.totalesOtrosGIE.totalesOGIEMR;
        e.summaryCells[17][0].value = this.totalesOtrosGIE.totalesOGIEMP;
        e.summaryCells[18][0].value = this.totalesOtrosGIE.totalesOGIEMD;
        e.summaryCells[21][0].value = this.totalesOtrosGIE.totalesOGIEAR;
        e.summaryCells[22][0].value = this.totalesOtrosGIE.totalesOGIEAP;
        e.summaryCells[23][0].value = this.totalesOtrosGIE.totalesOGIEAD;
        e.summaryCells[26][0].value = this.totalesOtrosGIE.totalesOGIEMYR;
        e.summaryCells[27][0].value = this.totalesOtrosGIE.totalesOGIEMYP;
        e.summaryCells[28][0].value = this.totalesOtrosGIE.totalesOGIEMYD;
        e.summaryCells[31][0].value = this.totalesOtrosGIE.totalesOGIEJR;
        e.summaryCells[32][0].value = this.totalesOtrosGIE.totalesOGIEJP;
        e.summaryCells[33][0].value = this.totalesOtrosGIE.totalesOGIEJD;
        e.summaryCells[36][0].value = this.totalesOtrosGIE.totalesOGIEJLR;
        e.summaryCells[37][0].value = this.totalesOtrosGIE.totalesOGIEJLP;
        e.summaryCells[38][0].value = this.totalesOtrosGIE.totalesOGIEJLD;
        e.summaryCells[41][0].value = this.totalesOtrosGIE.totalesOGIEAGR;
        e.summaryCells[42][0].value = this.totalesOtrosGIE.totalesOGIEAGP;
        e.summaryCells[43][0].value = this.totalesOtrosGIE.totalesOGIEAGD;
        e.summaryCells[46][0].value = this.totalesOtrosGIE.totalesOGIESR;
        e.summaryCells[47][0].value = this.totalesOtrosGIE.totalesOGIESP;
        e.summaryCells[48][0].value = this.totalesOtrosGIE.totalesOGIESD;
        e.summaryCells[51][0].value = this.totalesOtrosGIE.totalesOGIEOR;
        e.summaryCells[52][0].value = this.totalesOtrosGIE.totalesOGIEOP;
        e.summaryCells[53][0].value = this.totalesOtrosGIE.totalesOGIEOD;
        e.summaryCells[56][0].value = this.totalesOtrosGIE.totalesOGIENR;
        e.summaryCells[57][0].value = this.totalesOtrosGIE.totalesOGIENP;
        e.summaryCells[58][0].value = this.totalesOtrosGIE.totalesOGIEND;
        e.summaryCells[61][0].value = this.totalesOtrosGIE.totalesOGIEDR;
        e.summaryCells[62][0].value = this.totalesOtrosGIE.totalesOGIEDP;
        e.summaryCells[63][0].value = this.totalesOtrosGIE.totalesOGIEDD;
        e.summaryCells[66][0].value = this.totalesOtrosGIE.totalesOGIEACR;
        e.summaryCells[67][0].value = this.totalesOtrosGIE.totalesOGIEACP;
        e.summaryCells[68][0].value = this.totalesOtrosGIE.totalesOGIEACD;
      }

      if(e.groupIndex == 2 && e.data.key == 'd.- OTROS'){
        e.summaryCells[6][0].value = this.totalesOtros.totalesOtrosER;
        e.summaryCells[7][0].value = this.totalesOtros.totalesOtrosEP;
        e.summaryCells[8][0].value = this.totalesOtros.totalesOtrosED;
        e.summaryCells[11][0].value = this.totalesOtros.totalesOtrosFR;
        e.summaryCells[12][0].value = this.totalesOtros.totalesOtrosFP;
        e.summaryCells[13][0].value = this.totalesOtros.totalesOtrosFD;
        e.summaryCells[16][0].value = this.totalesOtros.totalesOtrosMR;
        e.summaryCells[17][0].value = this.totalesOtros.totalesOtrosMP;
        e.summaryCells[18][0].value = this.totalesOtros.totalesOtrosMD;
        e.summaryCells[21][0].value = this.totalesOtros.totalesOtrosAR;
        e.summaryCells[22][0].value = this.totalesOtros.totalesOtrosAP;
        e.summaryCells[23][0].value = this.totalesOtros.totalesOtrosAD;
        e.summaryCells[26][0].value = this.totalesOtros.totalesOtrosMYR;
        e.summaryCells[27][0].value = this.totalesOtros.totalesOtrosMYP;
        e.summaryCells[28][0].value = this.totalesOtros.totalesOtrosMYD;
        e.summaryCells[31][0].value = this.totalesOtros.totalesOtrosJR;
        e.summaryCells[32][0].value = this.totalesOtros.totalesOtrosJP;
        e.summaryCells[33][0].value = this.totalesOtros.totalesOtrosJD;
        e.summaryCells[36][0].value = this.totalesOtros.totalesOtrosJLR;
        e.summaryCells[37][0].value = this.totalesOtros.totalesOtrosJLP;
        e.summaryCells[38][0].value = this.totalesOtros.totalesOtrosJLD;
        e.summaryCells[41][0].value = this.totalesOtros.totalesOtrosAGR;
        e.summaryCells[42][0].value = this.totalesOtros.totalesOtrosAGP;
        e.summaryCells[43][0].value = this.totalesOtros.totalesOtrosAGD;
        e.summaryCells[46][0].value = this.totalesOtros.totalesOtrosSR;
        e.summaryCells[47][0].value = this.totalesOtros.totalesOtrosSP;
        e.summaryCells[48][0].value = this.totalesOtros.totalesOtrosSD;
        e.summaryCells[51][0].value = this.totalesOtros.totalesOtrosOR;
        e.summaryCells[52][0].value = this.totalesOtros.totalesOtrosOP;
        e.summaryCells[53][0].value = this.totalesOtros.totalesOtrosOD;
        e.summaryCells[56][0].value = this.totalesOtros.totalesOtrosNR;
        e.summaryCells[57][0].value = this.totalesOtros.totalesOtrosNP;
        e.summaryCells[58][0].value = this.totalesOtros.totalesOtrosND;
        e.summaryCells[61][0].value = this.totalesOtros.totalesOtrosDR;
        e.summaryCells[62][0].value = this.totalesOtros.totalesOtrosDP;
        e.summaryCells[63][0].value = this.totalesOtros.totalesOtrosDD;
        e.summaryCells[66][0].value = this.totalesOtros.totalesOtrosACR;
        e.summaryCells[67][0].value = this.totalesOtros.totalesOtrosACP;
        e.summaryCells[68][0].value = this.totalesOtros.totalesOtrosACD;
        
        let sumaOGIEER;
        let sumaOGIEEP
        let sumaOGIEED
        let sumaOGIEFR
        let sumaOGIEFP
        let sumaOGIEFD
        let sumaOGIEMR
        let sumaOGIEMP
        let sumaOGIEMD
        let sumaOGIEAR
        let sumaOGIEAP
        let sumaOGIEAD
        let sumaOGIEMYR
        let sumaOGIEMYP
        let sumaOGIEMYD
        let sumaOGIEJR
        let sumaOGIEJP
        let sumaOGIEJD
        let sumaOGIEJLR
        let sumaOGIEJLP
        let sumaOGIEJLD
        let sumaOGIEAGR
        let sumaOGIEAGP
        let sumaOGIEAGD
        let sumaOGIESR
        let sumaOGIESP
        let sumaOGIESD
        let sumaOGIEOR
        let sumaOGIEOP
        let sumaOGIEOD
        let sumaOGIENR
        let sumaOGIENP
        let sumaOGIEND
        let sumaOGIEDR
        let sumaOGIEDP
        let sumaOGIEDD
        let sumaOGIEACR
        let sumaOGIEACP
        let sumaOGIEACD

        sumaOGIEER = this.totalesOtrosGIE.totalGICER + this.totalesOtrosGIE.totalEFER + this.totalesOtrosGIE.totalVAFER;
        this.totalesOtrosGIE.totalesOGIEER = sumaOGIEER - this.totalesOtros.totalesOtrosER;
        sumaOGIEEP = this.totalesOtrosGIE.totalGICEP + this.totalesOtrosGIE.totalEFEP + this.totalesOtrosGIE.totalVAFEP;
        this.totalesOtrosGIE.totalesOGIEEP = sumaOGIEEP -this.totalesOtros.totalesOtrosEP
        sumaOGIEED = this.totalesOtrosGIE.totalGICED + this.totalesOtrosGIE.totalEFED + this.totalesOtrosGIE.totalVAFED;
        this.totalesOtrosGIE.totalesOGIEED = sumaOGIEED -this.totalesOtros.totalesOtrosED
        sumaOGIEFR = this.totalesOtrosGIE.totalGICFR + this.totalesOtrosGIE.totalEFFR + this.totalesOtrosGIE.totalVAFFR;
        this.totalesOtrosGIE.totalesOGIEFR = sumaOGIEFR -this.totalesOtros.totalesOtrosFR
        sumaOGIEFP = this.totalesOtrosGIE.totalGICFP + this.totalesOtrosGIE.totalEFFP + this.totalesOtrosGIE.totalVAFFP;
        this.totalesOtrosGIE.totalesOGIEFP = sumaOGIEFP -this.totalesOtros.totalesOtrosFP
        sumaOGIEFD = this.totalesOtrosGIE.totalGICFD + this.totalesOtrosGIE.totalEFFD + this.totalesOtrosGIE.totalVAFFD;
        this.totalesOtrosGIE.totalesOGIEFD = sumaOGIEFD -this.totalesOtros.totalesOtrosFD
        sumaOGIEMR = this.totalesOtrosGIE.totalGICMR + this.totalesOtrosGIE.totalEFMR + this.totalesOtrosGIE.totalVAFMR;
        this.totalesOtrosGIE.totalesOGIEMR = sumaOGIEMR -this.totalesOtros.totalesOtrosMR
        sumaOGIEMP = this.totalesOtrosGIE.totalGICMP + this.totalesOtrosGIE.totalEFMP + this.totalesOtrosGIE.totalVAFMP;
        this.totalesOtrosGIE.totalesOGIEMP = sumaOGIEMP -this.totalesOtros.totalesOtrosMP
        sumaOGIEMD = this.totalesOtrosGIE.totalGICMD + this.totalesOtrosGIE.totalEFMD + this.totalesOtrosGIE.totalVAFMD;
        this.totalesOtrosGIE.totalesOGIEMD = sumaOGIEMD -this.totalesOtros.totalesOtrosMD
        sumaOGIEAR = this.totalesOtrosGIE.totalGICAR + this.totalesOtrosGIE.totalEFAR + this.totalesOtrosGIE.totalVAFAR;
        this.totalesOtrosGIE.totalesOGIEAR = sumaOGIEAR -this.totalesOtros.totalesOtrosAR
        sumaOGIEAP = this.totalesOtrosGIE.totalGICAP + this.totalesOtrosGIE.totalEFAP + this.totalesOtrosGIE.totalVAFAP;
        this.totalesOtrosGIE.totalesOGIEAP = sumaOGIEAP -this.totalesOtros.totalesOtrosAP
        sumaOGIEAD = this.totalesOtrosGIE.totalGICAD + this.totalesOtrosGIE.totalEFAD + this.totalesOtrosGIE.totalVAFAD;
        this.totalesOtrosGIE.totalesOGIEAD = sumaOGIEAD -this.totalesOtros.totalesOtrosAD
        sumaOGIEMYR = this.totalesOtrosGIE.totalGICMYR + this.totalesOtrosGIE.totalEFMYR + this.totalesOtrosGIE.totalVAFMYR;
        this.totalesOtrosGIE.totalesOGIEMYR = sumaOGIEMYR -this.totalesOtros.totalesOtrosMYR
        sumaOGIEMYP = this.totalesOtrosGIE.totalGICMYP + this.totalesOtrosGIE.totalEFMYP + this.totalesOtrosGIE.totalVAFMYP;
        this.totalesOtrosGIE.totalesOGIEMYP = sumaOGIEMYP -this.totalesOtros.totalesOtrosMYP
        sumaOGIEMYD = this.totalesOtrosGIE.totalGICMYD + this.totalesOtrosGIE.totalEFMYD + this.totalesOtrosGIE.totalVAFMYD;
        this.totalesOtrosGIE.totalesOGIEMYD = sumaOGIEMYD -this.totalesOtros.totalesOtrosMYD
        sumaOGIEJR = this.totalesOtrosGIE.totalGICJR + this.totalesOtrosGIE.totalEFJR + this.totalesOtrosGIE.totalVAFJR;
        this.totalesOtrosGIE.totalesOGIEJR = sumaOGIEJR -this.totalesOtros.totalesOtrosJR
        sumaOGIEJP = this.totalesOtrosGIE.totalGICJP + this.totalesOtrosGIE.totalEFJP + this.totalesOtrosGIE.totalVAFJP;
        this.totalesOtrosGIE.totalesOGIEJP = sumaOGIEJP -this.totalesOtros.totalesOtrosJP
        sumaOGIEJD = this.totalesOtrosGIE.totalGICJD + this.totalesOtrosGIE.totalEFJD + this.totalesOtrosGIE.totalVAFJD;
        this.totalesOtrosGIE.totalesOGIEJD = sumaOGIEJD -this.totalesOtros.totalesOtrosJD
        sumaOGIEJLR = this.totalesOtrosGIE.totalGICJLR + this.totalesOtrosGIE.totalEFJLR + this.totalesOtrosGIE.totalVAFJLR;
        this.totalesOtrosGIE.totalesOGIEJLR = sumaOGIEJLR -this.totalesOtros.totalesOtrosJLR
        sumaOGIEJLP = this.totalesOtrosGIE.totalGICJLP + this.totalesOtrosGIE.totalEFJLP + this.totalesOtrosGIE.totalVAFJLP;
        this.totalesOtrosGIE.totalesOGIEJLP = sumaOGIEJLP -this.totalesOtros.totalesOtrosJLP
        sumaOGIEJLD = this.totalesOtrosGIE.totalGICJLD + this.totalesOtrosGIE.totalEFJLD + this.totalesOtrosGIE.totalVAFJLD;
        this.totalesOtrosGIE.totalesOGIEJLD = sumaOGIEJLD -this.totalesOtros.totalesOtrosJLD
        sumaOGIEAGR = this.totalesOtrosGIE.totalGICAGR + this.totalesOtrosGIE.totalEFAGR + this.totalesOtrosGIE.totalVAFAGR;
        this.totalesOtrosGIE.totalesOGIEAGR = sumaOGIEAGR -this.totalesOtros.totalesOtrosAGR
        sumaOGIEAGP = this.totalesOtrosGIE.totalGICAGP + this.totalesOtrosGIE.totalEFAGP + this.totalesOtrosGIE.totalVAFAGP;
        this.totalesOtrosGIE.totalesOGIEAGP = sumaOGIEAGP -this.totalesOtros.totalesOtrosAGP
        sumaOGIEAGD = this.totalesOtrosGIE.totalGICAGD + this.totalesOtrosGIE.totalEFAGD + this.totalesOtrosGIE.totalVAFAGD;
        this.totalesOtrosGIE.totalesOGIEAGD = sumaOGIEAGD -this.totalesOtros.totalesOtrosAGD
        sumaOGIESR = this.totalesOtrosGIE.totalGICSR + this.totalesOtrosGIE.totalEFSR + this.totalesOtrosGIE.totalVAFSR;
        this.totalesOtrosGIE.totalesOGIESR = sumaOGIESR -this.totalesOtros.totalesOtrosSR
        sumaOGIESP = this.totalesOtrosGIE.totalGICSP + this.totalesOtrosGIE.totalEFSP + this.totalesOtrosGIE.totalVAFSP;
        this.totalesOtrosGIE.totalesOGIESP = sumaOGIESP -this.totalesOtros.totalesOtrosSP
        sumaOGIESD = this.totalesOtrosGIE.totalGICSD + this.totalesOtrosGIE.totalEFSD + this.totalesOtrosGIE.totalVAFSD;
        this.totalesOtrosGIE.totalesOGIESD = sumaOGIESD -this.totalesOtros.totalesOtrosSD
        sumaOGIEOR = this.totalesOtrosGIE.totalGICOR + this.totalesOtrosGIE.totalEFOR + this.totalesOtrosGIE.totalVAFOR;
        this.totalesOtrosGIE.totalesOGIEOR = sumaOGIEOR -this.totalesOtros.totalesOtrosOR
        sumaOGIEOP = this.totalesOtrosGIE.totalGICOP + this.totalesOtrosGIE.totalEFOP + this.totalesOtrosGIE.totalVAFOP;
        this.totalesOtrosGIE.totalesOGIEOP = sumaOGIEOP -this.totalesOtros.totalesOtrosOP
        sumaOGIEOD = this.totalesOtrosGIE.totalGICOD + this.totalesOtrosGIE.totalEFOD + this.totalesOtrosGIE.totalVAFOD;
        this.totalesOtrosGIE.totalesOGIEOD = sumaOGIEOD -this.totalesOtros.totalesOtrosOD
        sumaOGIENR = this.totalesOtrosGIE.totalGICNR + this.totalesOtrosGIE.totalEFNR + this.totalesOtrosGIE.totalVAFNR;
        this.totalesOtrosGIE.totalesOGIENR = sumaOGIENR -this.totalesOtros.totalesOtrosNR
        sumaOGIENP = this.totalesOtrosGIE.totalGICNP + this.totalesOtrosGIE.totalEFNP + this.totalesOtrosGIE.totalVAFNP;
        this.totalesOtrosGIE.totalesOGIENP = sumaOGIENP -this.totalesOtros.totalesOtrosNP
        sumaOGIEND = this.totalesOtrosGIE.totalGICND + this.totalesOtrosGIE.totalEFND + this.totalesOtrosGIE.totalVAFND;
        this.totalesOtrosGIE.totalesOGIEND = sumaOGIEND -this.totalesOtros.totalesOtrosND
        sumaOGIEDR = this.totalesOtrosGIE.totalGICDR + this.totalesOtrosGIE.totalEFDR + this.totalesOtrosGIE.totalVAFDR;
        this.totalesOtrosGIE.totalesOGIEDR = sumaOGIEDR -this.totalesOtros.totalesOtrosDR
        sumaOGIEDP = this.totalesOtrosGIE.totalGICDP + this.totalesOtrosGIE.totalEFDP + this.totalesOtrosGIE.totalVAFDP;
        this.totalesOtrosGIE.totalesOGIEDP = sumaOGIEDP -this.totalesOtros.totalesOtrosDP
        sumaOGIEDD = this.totalesOtrosGIE.totalGICDD + this.totalesOtrosGIE.totalEFDD + this.totalesOtrosGIE.totalVAFDD;
        this.totalesOtrosGIE.totalesOGIEDD = sumaOGIEDD -this.totalesOtros.totalesOtrosDD
        sumaOGIEACR = this.totalesOtrosGIE.totalGICACR + this.totalesOtrosGIE.totalEFACR + this.totalesOtrosGIE.totalVAFACR;
        this.totalesOtrosGIE.totalesOGIEACR = sumaOGIEACR -this.totalesOtros.totalesOtrosACR
        sumaOGIEACP = this.totalesOtrosGIE.totalGICACP + this.totalesOtrosGIE.totalEFACP + this.totalesOtrosGIE.totalVAFACP;
        this.totalesOtrosGIE.totalesOGIEACP = sumaOGIEACP -this.totalesOtros.totalesOtrosACP
        sumaOGIEACD = this.totalesOtrosGIE.totalGICACD + this.totalesOtrosGIE.totalEFACD + this.totalesOtrosGIE.totalVAFACD;
        this.totalesOtrosGIE.totalesOGIEACD = sumaOGIEACD -this.totalesOtros.totalesOtrosACD
      }

      if(e.groupIndex == 1 && e.data.key == '04.- GASTOS/INGRESOS FINANCIEROS'){
        e.summaryCells[6][0].value = this.totalesGIF
      }


//=========================Totales 0====================================================================

        this.totales01 = this.totalesOperacion.totalOperacionER;
        this.totales02 = this.totalesOtrosGO.totalOGOperacionER;
        this.totales03 = this.totalesOtrosGIE.totalesOGIEER;
        this.totales04 = this.totalesGIF;

        this.totales0 = this.totales01 - this.totales02 - this.totales03 - this.totales04;
        // alert(this.totales0)


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

  onRowPreparedDetalle(e: any){

  }

}


