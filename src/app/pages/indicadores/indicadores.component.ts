import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { DxChartComponent, } from 'devextreme-angular';

import { 
  SumaTotalE,
  SumaTotalF,
  SumaTotalM,
  SumaTotalA,
  SumaTotalMY,
  SumaTotalJN,
  SumaTotalJL,
  SumaTotalAG,
  SumaTotalS,
  SumaTotalOC,
  SumaTotalNV,
  SumaTotalDC
 } from '../../shared/models/indicadores/sumaTotal.model';
 import { 
  SumaTotalEKV,
  SumaTotalFKV,
  SumaTotalMKV,
  SumaTotalAKV,
  SumaTotalMYKV,
  SumaTotalJNKV,
  SumaTotalJLKV,
  SumaTotalAGKV,
  SumaTotalSKV,
  SumaTotalOCKV,
  SumaTotalNVKV,
  SumaTotalDCKV
 } from '../../shared/models/indicadores/sumaTotalKV.model';
import { IndicadoresService } from '../../services/indicadores/indicadores.service';
import { ScoreCard } from '../../shared/models/indicadores/scoreCard.model';
import { 
  IngresosKE,
  TotalKE,
  IngresosKF,
  TotalKF,
  IngresosKM,
  TotalKM,
  IngresosKA,
  TotalKA,
  IngresosKMY,
  TotalKMY,
  IngresosKJN,
  TotalKJN,
  IngresosKJL,
  TotalKJL,
  IngresosKAG,
  TotalKAG,
  IngresosKS,
  TotalKS,
  IngresosKOC,
  TotalKOC,
  IngresosKNV,
  TotalKNV,
  IngresosKDC,
  TotalKDC,
 } from '../../shared/models/indicadores/ingresosKilometros.model';
 import { 
  IngresosKEKV,
  TotalKEKV,
  IngresosKFKV,
  TotalKFKV,
  IngresosKMKV,
  TotalKMKV,
  IngresosKAKV,
  TotalKAKV,
  IngresosKMYKV,
  TotalKMYKV,
  IngresosKJNKV,
  TotalKJNKV,
  IngresosKJLKV,
  TotalKJLKV,
  IngresosKAGKV,
  TotalKAGKV,
  IngresosKSKV,
  TotalKSKV,
  IngresosKOCKV,
  TotalKOCKV,
  IngresosKNVKV,
  TotalKNVKV,
  IngresosKDCKV,
  TotalKDCKV,
 } from '../../shared/models/indicadores/ingresosKilometrosKV.model';

 import { TotalesLength } from '../../shared/models/indicadores/totalesLength.model';

import { IngresoOperador } from '../../shared/models/indicadores/ingresoOperador.model';
import { GraficaIngresoO } from '../../shared/models/indicadores/graficaIngresosO.model';
import { SubtotalesKCV } from '../../shared/models/indicadores/subtotalesKCV.model';

import { 
  CustomTotalKE,
  CustomTotalKF,
  CustomTotalKM,
  CustomTotalKA,
  CustomTotalKMY,
  CustomTotalKJN,
  CustomTotalKJL,
  CustomTotalKAG,
  CustomTotalKS,
  CustomTotalKOC,
  CustomTotalKNV,
  CustomTotalKDC } from '../../shared/models/indicadores/cutomTotal.model';

  import { CustomTArrayL } from '../../shared/models/indicadores/customTArrayL.model';
  import { 
    TotalIngresos, 
    TotalKilometros, 
    TotalOperacionIK,
    AgrupamietoIngresoE,
    AgrupamietoIngresoF,
    AgrupamietoIngresoM,
    AgrupamietoIngresoA,
    AgrupamietoIngresoMY,
    AgrupamietoIngresoJN,
    AgrupamietoIngresoJL,
    AgrupamietoIngresoAG,
    AgrupamietoIngresoS,
    AgrupamietoIngresoOC,
    AgrupamietoIngresoNV,
    AgrupamietoIngresoDC,
    AgrupamietoKilometrosE,
    AgrupamietoKilometrosF,
    AgrupamietoKilometrosM,
    AgrupamietoKilometrosA,
    AgrupamietoKilometrosMY,
    AgrupamietoKilometrosJN,
    AgrupamietoKilometrosJL,
    AgrupamietoKilometrosAG,
    AgrupamietoKilometrosS,
    AgrupamietoKilometrosOC,
    AgrupamietoKilometrosNV,
    AgrupamietoKilometrosDC,
    TotalAgrupamientoIKE,
    TotalAgrupamientoIKF,
    TotalAgrupamientoIKM,
    TotalAgrupamientoIKA,
    TotalAgrupamientoIKMY,
    TotalAgrupamientoIKJN,
    TotalAgrupamientoIKJL,
    TotalAgrupamientoIKAG,
    TotalAgrupamientoIKS,
    TotalAgrupamientoIKOC,
    TotalAgrupamientoIKNV,
    TotalAgrupamientoIKDC,
   } from '../../shared/models/indicadores/totalIngresoskilometros.model';
   import { 
    ViajesCargadosE,
    ViajesCargadosF,
    ViajesCargadosM,
    ViajesCargadosA,
    ViajesCargadosMY,
    ViajesCargadosJN,
    ViajesCargadosJL,
    ViajesCargadosAG,
    ViajesCargadosS,
    ViajesCargadosOC,
    ViajesCargadosNV,
    ViajesCargadosDC,
    TotalViajesCargados,
    TotalIngresosVCE,
    TotalIngresosVCF,
    TotalIngresosVCM,
    TotalIngresosVCA,
    TotalIngresosVCMY,
    TotalIngresosVCJN,
    TotalIngresosVCJL,
    TotalIngresosVCAG,
    TotalIngresosVCS,
    TotalIngresosVCOC,
    TotalIngresosVCNV,
    TotalIngresosVCDC,
    TotalOperacionIVC,
    TotalKilomeotrsVCE,
    TotalKilomeotrsVCF,
    TotalKilomeotrsVCM,
    TotalKilomeotrsVCA,
    TotalKilomeotrsVCMY,
    TotalKilomeotrsVCJN,
    TotalKilomeotrsVCJL,
    TotalKilomeotrsVCAG,
    TotalKilomeotrsVCS,
    TotalKilomeotrsVCOC,
    TotalKilomeotrsVCNV,
    TotalKilomeotrsVCDC,
    TotalOperacionKVC
   } from '../../shared/models/indicadores/totalIngresosViajes.model';
   import { KMSMensuales } from '../../shared/models/indicadores/kmsMensuales.model'

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};

//=====================TOTALES INGRESOS/KILOMETROS============================================
const totalIngresos = new TotalIngresos;
const totalKilomentros = new TotalKilometros;
const totalOperacionIK = new TotalOperacionIK;
const agrupamientoIE = new AgrupamietoIngresoE;
const agrupamientoIF = new AgrupamietoIngresoF;
const agrupamientoIM = new AgrupamietoIngresoM;
const agrupamientoIA = new AgrupamietoIngresoA;
const agrupamientoIMY = new AgrupamietoIngresoMY;
const agrupamientoIJN = new AgrupamietoIngresoJN;
const agrupamientoIJL = new AgrupamietoIngresoJL;
const agrupamientoIAG = new AgrupamietoIngresoAG;
const agrupamientoIS = new AgrupamietoIngresoS;
const agrupamientoIOC = new AgrupamietoIngresoOC;
const agrupamientoINV = new AgrupamietoIngresoNV;
const agrupamientoIDC = new AgrupamietoIngresoDC;
const agrupamientoKE = new AgrupamietoKilometrosE;
const agrupamientoKF = new AgrupamietoKilometrosF;
const agrupamientoKM = new AgrupamietoKilometrosM;
const agrupamientoKA = new AgrupamietoKilometrosA;
const agrupamientoKMY = new AgrupamietoKilometrosMY;
const agrupamientoKJN = new AgrupamietoKilometrosJN;
const agrupamientoKJL = new AgrupamietoKilometrosJL;
const agrupamientoKAG = new AgrupamietoKilometrosAG;
const agrupamientoKS = new AgrupamietoKilometrosS;
const agrupamientoKOC = new AgrupamietoKilometrosOC;
const agrupamientoKNV = new AgrupamietoKilometrosNV;
const agrupamientoKDC = new AgrupamietoKilometrosDC;
const totalAgrupamientoIKE = new TotalAgrupamientoIKE;
const totalAgrupamientoIKF = new TotalAgrupamientoIKF;
const totalAgrupamientoIKM = new TotalAgrupamientoIKM;
const totalAgrupamientoIKA = new TotalAgrupamientoIKA;
const totalAgrupamientoIKMY = new TotalAgrupamientoIKMY;
const totalAgrupamientoIKJN = new TotalAgrupamientoIKJN;
const totalAgrupamientoIKJL = new TotalAgrupamientoIKJL;
const totalAgrupamientoIKAG = new TotalAgrupamientoIKAG;
const totalAgrupamientoIKS = new TotalAgrupamientoIKS;
const totalAgrupamientoIKOC = new TotalAgrupamientoIKOC;
const totalAgrupamientoIKNV = new TotalAgrupamientoIKNV;
const totalAgrupamientoIKDC = new TotalAgrupamientoIKDC;

//=====================TOTALES VIAJES/INGRESOS============================================
const viajesCargadosE = new ViajesCargadosE;
const viajesCargadosF = new ViajesCargadosF;
const viajesCargadosM = new ViajesCargadosM;
const viajesCargadosA = new ViajesCargadosA;
const viajesCargadosMY = new ViajesCargadosMY;
const viajesCargadosJN = new ViajesCargadosJN;
const viajesCargadosJL = new ViajesCargadosJL;
const viajesCargadosAG = new ViajesCargadosAG;
const viajesCargadosS = new ViajesCargadosS;
const viajesCargadosOC = new ViajesCargadosOC;
const viajesCargadosNV = new ViajesCargadosNV;
const viajesCargadosDC = new ViajesCargadosDC;
const totalVC = new TotalViajesCargados;
const totalOperacionIVC = new TotalOperacionIVC;
const totalOperacionKVC = new TotalOperacionKVC;
const totalIVCE = new TotalIngresosVCE;
const totalIVCF = new TotalIngresosVCF;
const totalIVCM = new TotalIngresosVCM;
const totalIVCA = new TotalIngresosVCA;
const totalIVCMY = new TotalIngresosVCMY;
const totalIVCJN = new TotalIngresosVCJN;
const totalIVCJL = new TotalIngresosVCJL;
const totalIVCAG = new TotalIngresosVCAG;
const totalIVCS = new TotalIngresosVCS;
const totalIVCOC = new TotalIngresosVCOC;
const totalIVCNV = new TotalIngresosVCNV;
const totalIVCDC = new TotalIngresosVCDC;
const totalKVCE = new TotalKilomeotrsVCE;
const totalKVCF = new TotalKilomeotrsVCF;
const totalKVCM = new TotalKilomeotrsVCM;
const totalKVCA = new TotalKilomeotrsVCA;
const totalKVCMY = new TotalKilomeotrsVCMY;
const totalKVCJN = new TotalKilomeotrsVCJN;
const totalKVCJL = new TotalKilomeotrsVCJL;
const totalKVCAG = new TotalKilomeotrsVCAG;
const totalKVCS = new TotalKilomeotrsVCS;
const totalKVCOC = new TotalKilomeotrsVCOC;
const totalKVCNV = new TotalKilomeotrsVCNV;
const totalKVCDC = new TotalKilomeotrsVCDC;

@Component({
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
})
export class IndicadoresComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart: any;

  ingresos: ScoreCard[] = [];
  kilomentros: ScoreCard[] = [];
  ingresosKilometros: ScoreCard[] = [];
  viajes: ScoreCard[] = [];
  kilometroViajes: ScoreCard[] = [];
  ingresoViajes: ScoreCard[] = [];
  precioMeta: ScoreCard[] = [];
  viajesCargados: ScoreCard[] = [];
  operadoresUDN: ScoreCard[] = [];
  ingresoOperador: ScoreCard[] = [];


  paginacion: number = 0;
  paginacionKV: number = 0;
  expandGroup: boolean = true;
  expandGroupKV: boolean = true;

  tipoOperacion: any[] = [
    { id: 1, nombre: 'CAJA SECA' },
    { id: 2, nombre: 'GONDOLA' },
    { id: 3, nombre: 'TOLVA GRANEL' },
    { id: 4, nombre: 'ENCORITNADO' },
    { id: 5, nombre: 'GRADO ALIMENT' },
  ];

  customOperations: Array<any>;
  popupPosition: any;

  kmsMensykaes: KMSMensuales[] = [];
  periodo: any[] = [
    { id: 1, periodo: 202301 },
    { id: 2, periodo: 202302 },
    { id: 3, periodo: 202303 },
    { id: 4, periodo: 202304 },
    { id: 5, periodo: 202305 },
    { id: 6, periodo: 202306 },
    { id: 7, periodo: 202307 },
    { id: 8, periodo: 202308 },
    { id: 9, periodo: 202309 },
    { id: 10, periodo: 202310 },
    { id: 11, periodo: 202311 },
    { id: 12, periodo: 202312 },
  ];

  selectedPeriodo: number = 0;
  loadingVisible = false;

  graficaModel: GraficaIngresoO[] = [];
  subtalesGrafica: SubtotalesKCV;

  collapseGroup: boolean;


//=============================Customize Export Excel===============================================
  customTotalKE= new CustomTotalKE;
  customTotalKF = new CustomTotalKF;
  customTotalKM = new CustomTotalKM;
  customTotalKA = new CustomTotalKA;
  customTotalKMY = new CustomTotalKMY;
  customTotalKJN = new CustomTotalKJN;
  customTotalKJL = new CustomTotalKJL;
  customTotalKAG = new CustomTotalKAG;
  customTotalKS = new CustomTotalKS;
  customTotalKOC = new CustomTotalKOC;
  customTotalKNV = new CustomTotalKNV;
  customTotalKDC = new CustomTotalKDC;

  customTArrayL = new CustomTArrayL;



  constructor(
    private indicadorService: IndicadoresService
  ) {
    this.popupPosition = {
      of: window, at: 'top', my: 'top', offset: { y: 10 },
    };
    
    this.customOperations = [{
      name: 'weekends',
      caption: 'Weekends',
      dataTypes: ['date'],
      icon: 'check',
      hasValue: false,
      calculateFilterExpression() {
        return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
      },
    }];

  }


  ngOnInit(): void {
    this.getScoreCard();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  cuautitlan: number;
  guadalajara: number;
  hermosillo: number;
  mexicali: number;
  orizaba: number;
  ramisArispe: number;
  total: number;
  tultitlan: number;

  cuautitlanKV: number;
  guadalajaraKV: number;
  hermosilloKV: number;
  mexicaliKV: number;
  orizabaKV: number;
  ramisArispeKV: number;
  totalKV: number;
  tultitlanKV: number;


  getScoreCard(){
    this.indicadorService.getScoreCard().subscribe(data => {
      
// ====================================INGRESOS======================================================================================================
      
      this.ingresos = data.data.scIng;
      this.ingresos.sort((a, b) => (a.orden < b.orden ? -1 : 1))
   
// ====================================KILOMETROS====================================================================================================
      this.kilomentros = data.data.scKms;      
      this.kilomentros.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================VIAJES========================================================================================================
      this.viajes = data.data.scViajes;
      this.viajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================VIAJES CARGADOS===============================================================================================
      this.viajesCargados = data.data.scViajesC;      
      this.viajesCargados.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================INGRESO / KILOMETROS==========================================================================================
      this.ingresosKilometros = data.data.scIngXKm;
      this.ingresosKilometros.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================KILOMETROS / VIAJES===========================================================================================
      this.kilometroViajes = data.data.scKmsViaje;      
      this.kilometroViajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================INGRESO / VIAJES==============================================================================================
      this.ingresoViajes = data.data.scIngrViaje      
      this.ingresoViajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================OPERADORES UDN ===============================================================================================  
      this.operadoresUDN = data.data.scOperadores;
// ====================================INGRESO POR OPERADOR =========================================================================================      
      this.ingresoOperador = data.data.scIngrXOperador;
     
 
      this.precioMeta = data.data.scPrecioMeta;

      var myPrecioM = data.data.scPrecioMeta;
      for (var i = 0; i<myPrecioM.length; i++){
        this.cuautitlan = myPrecioM[i].cuatitlan;
        this.tultitlan = myPrecioM[i].tultitlan;
        this.guadalajara = myPrecioM[i].guadalajara;
        this.hermosillo = myPrecioM[i].hermosillo;
        this.mexicali = myPrecioM[i].mexicali;
        this.orizaba = myPrecioM[i].orizaba;
        this.ramisArispe = myPrecioM[i].ramosArizpe;
        this.total = myPrecioM[i].total;


        this.cuautitlanKV = myPrecioM[i].cuatitlan;
        this.tultitlanKV = myPrecioM[i].tultitlan;
        this.guadalajaraKV = myPrecioM[i].guadalajara;
        this.hermosilloKV = myPrecioM[i].hermosillo;
        this.mexicaliKV = myPrecioM[i].mexicali;
        this.orizabaKV = myPrecioM[i].orizaba;
        this.ramisArispeKV = myPrecioM[i].ramosArizpe;
        this.totalKV = myPrecioM[i].total;
      }

      this.expandGroup = true;
      this.expandGroupKV = true;

      this.loadingVisible = false;

    })
  }

  getkmsMensuales(){
    const request = new Promise((resolve, reject) => {
    this.indicadorService.getkmsMensuales(this.selectedPeriodo).subscribe(data => {
      this.kmsMensykaes = data.data;
      this.kmsMensykaes.sort((a, b) => (a.udN < b.udN ? -1 : 1));
     
      this.loadingVisible = false;
    })

    })
    return request;
  }

  seleccionarTipoOpe(e: any) {}

  seleccionarPeriodo(e: any) {
    this.selectedPeriodo = e.value
    console.log(this.selectedPeriodo)
  }

  buscarClick = (e: any) => {

    if (this.selectedPeriodo) {
      this.loadingVisible = true;
      this.getkmsMensuales().then(() => {
        this.loadingVisible = false;
      });
    }

  };
//==============================INGRESOS=========================================
  onRowPreparedI(event){

    if (event.rowType == 'group'){
      
      if (event.data.key == '01 ENE') {
 
        if(event.summaryCells[4].length !== 0){
        agrupamientoIE.cuautitlan = event.summaryCells[4][0].value;
        }
        if(event.summaryCells[5].length !== 0){
        agrupamientoIE.tultitlan = event.summaryCells[5][0].value;
        }
        if(event.summaryCells[6].length !== 0){
        agrupamientoIE.guadalajara = event.summaryCells[6][0].value;
        }
        if(event.summaryCells[7].length !== 0){
        agrupamientoIE.hermosillo = event.summaryCells[7][0].value;
        }
        if(event.summaryCells[8].length !== 0){
        agrupamientoIE.mexicali = event.summaryCells[8][0].value;
        }
        if(event.summaryCells[9].length !== 0){
        agrupamientoIE.orizaba = event.summaryCells[9][0].value;
        }
        if(event.summaryCells[10].length !== 0){
        agrupamientoIE.ramosArispe = event.summaryCells[10][0].value;
        }
        if(event.summaryCells[11].length !== 0){
        agrupamientoIE.total = event.summaryCells[11][0].value;
        }
      }
      if (event.data.key == '02 FEB'){
        agrupamientoIF.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIF.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIF.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIF.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIF.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIF.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIF.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIF.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '03 MAR'){
        agrupamientoIM.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIM.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIM.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIM.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIM.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIM.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIM.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIM.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '04 ABR'){
        agrupamientoIA.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIA.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIA.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIA.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIA.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIA.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIA.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIA.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '05 MAY'){
        agrupamientoIMY.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIMY.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIMY.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIMY.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIMY.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIMY.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIMY.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIMY.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '06 JUN'){
        agrupamientoIJN.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIJN.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIJN.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIJN.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIJN.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIJN.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIJN.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIJN.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '07 JUL'){
        agrupamientoIJL.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIJL.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIJL.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIJL.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIJL.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIJL.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIJL.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIJL.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '08 AGO'){
        agrupamientoIAG.cuautitlan = event.summaryCells[4][0]?.value;
        agrupamientoIAG.tultitlan = event.summaryCells[5][0]?.value;
        agrupamientoIAG.guadalajara = event.summaryCells[6][0]?.value;
        agrupamientoIAG.hermosillo = event.summaryCells[7][0]?.value;
        agrupamientoIAG.mexicali = event.summaryCells[8][0]?.value;
        agrupamientoIAG.orizaba = event.summaryCells[9][0]?.value;
        agrupamientoIAG.ramosArispe = event.summaryCells[10][0]?.value;
        agrupamientoIAG.total = event.summaryCells[11][0]?.value;
      }
      if (event.data.key == '09 SEP'){
        agrupamientoIS.cuautitlan = event.summaryCells[4][0].value;
        agrupamientoIS.tultitlan = event.summaryCells[5][0].value;
        agrupamientoIS.guadalajara = event.summaryCells[6][0].value;
        agrupamientoIS.hermosillo = event.summaryCells[7][0].value;
        agrupamientoIS.mexicali = event.summaryCells[8][0].value;
        agrupamientoIS.orizaba = event.summaryCells[9][0].value;
        agrupamientoIS.ramosArispe = event.summaryCells[10][0].value;
        agrupamientoIS.total = event.summaryCells[11][0].value;
      }
      // if (event.data.key == '10 OCT'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;
      // }
      // if (event.data.key == '11 NOV'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;
      // }
      // if (event.data.key == '12 DIC'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;
      // }
    }

    if(event.rowType == "totalFooter"){
      totalIngresos.cuautitlan = event.summaryCells[4][0]?.value;
      totalIngresos.tultitlan = event.summaryCells[5][0]?.value;
      totalIngresos.guadalajara = event.summaryCells[6][0]?.value;
      totalIngresos.hermosillo = event.summaryCells[7][0]?.value;
      totalIngresos.mexicali = event.summaryCells[8][0]?.value;
      totalIngresos.orizaba = event.summaryCells[9][0]?.value;
      totalIngresos.ramosArispe = event.summaryCells[10][0].value;
      totalIngresos.total = event.summaryCells[11][0].value;
    }
  }
  onCellPreparedI(e: any) {
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
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
  customizeI(e) {  

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

//==============================KILOMETROS=======================================
  onRowPreparedK(e){

    if (e.rowType == 'group'){
      
      if (e.data.key == '01 ENE') {

        if(e.summaryCells[4].length !== 0){
        agrupamientoKE.cuautitlan = e.summaryCells[4][0].value;
        }
        if(e.summaryCells[5].length !== 0){
        agrupamientoKE.tultitlan = e.summaryCells[5][0].value;
        }
        if(e.summaryCells[6].length !== 0){
        agrupamientoKE.guadalajara = e.summaryCells[6][0].value;
        }
        if(e.summaryCells[7].length !== 0){
        agrupamientoKE.hermosillo = e.summaryCells[7][0].value;
        }
        if(e.summaryCells[8].length !== 0){
        agrupamientoKE.mexicali = e.summaryCells[8][0].value;
        }
        if(e.summaryCells[9].length !== 0){
        agrupamientoKE.orizaba = e.summaryCells[9][0].value;
        }
        if(e.summaryCells[10].length !== 0){
        agrupamientoKE.ramosArispe = e.summaryCells[10][0].value;
        }
        if(e.summaryCells[11].length !== 0){
        agrupamientoKE.total = e.summaryCells[11][0].value;
        }

        totalAgrupamientoIKE.cuautitlan = agrupamientoIE.cuautitlan / agrupamientoKE.cuautitlan;
        totalAgrupamientoIKE.tultitlan = agrupamientoIE.tultitlan / agrupamientoKE.tultitlan;
        totalAgrupamientoIKE.guadalajara = agrupamientoIE.guadalajara / agrupamientoKE.guadalajara;
        totalAgrupamientoIKE.hermosillo = agrupamientoIE.hermosillo / agrupamientoKE.hermosillo;
        totalAgrupamientoIKE.mexicali = agrupamientoIE.mexicali / agrupamientoKE.mexicali;
        totalAgrupamientoIKE.orizaba = agrupamientoIE.orizaba / agrupamientoKE.orizaba;
        totalAgrupamientoIKE.ramosArispe = agrupamientoIE.ramosArispe / agrupamientoKE.ramosArispe;
        totalAgrupamientoIKE.total = agrupamientoIE.total / agrupamientoKE.total
      }
      if (e.data.key == '02 FEB'){
        agrupamientoKF.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKF.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKF.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKF.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKF.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKF.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKF.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKF.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKF.cuautitlan = agrupamientoIF.cuautitlan / agrupamientoKF.cuautitlan;
        totalAgrupamientoIKF.tultitlan = agrupamientoIF.tultitlan / agrupamientoKF.tultitlan;
        totalAgrupamientoIKF.guadalajara = agrupamientoIF.guadalajara / agrupamientoKF.guadalajara;
        totalAgrupamientoIKF.hermosillo = agrupamientoIF.hermosillo / agrupamientoKF.hermosillo;
        totalAgrupamientoIKF.mexicali = agrupamientoIF.mexicali / agrupamientoKF.mexicali;
        totalAgrupamientoIKF.orizaba = agrupamientoIF.orizaba / agrupamientoKF.orizaba;
        totalAgrupamientoIKF.ramosArispe = agrupamientoIF.ramosArispe / agrupamientoKF.ramosArispe;
        totalAgrupamientoIKF.total = agrupamientoIF.total / agrupamientoKF.total;
      }
      if (e.data.key == '03 MAR'){
        agrupamientoKM.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKM.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKM.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKM.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKM.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKM.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKM.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKM.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKM.cuautitlan = agrupamientoIM.cuautitlan / agrupamientoKM.cuautitlan;
        totalAgrupamientoIKM.tultitlan = agrupamientoIM.tultitlan / agrupamientoKM.tultitlan;
        totalAgrupamientoIKM.guadalajara = agrupamientoIM.guadalajara / agrupamientoKM.guadalajara;
        totalAgrupamientoIKM.hermosillo = agrupamientoIM.hermosillo / agrupamientoKM.hermosillo;
        totalAgrupamientoIKM.mexicali = agrupamientoIM.mexicali / agrupamientoKM.mexicali;
        totalAgrupamientoIKM.orizaba = agrupamientoIM.orizaba / agrupamientoKM.orizaba;
        totalAgrupamientoIKM.ramosArispe = agrupamientoIM.ramosArispe / agrupamientoKM.ramosArispe;
        totalAgrupamientoIKM.total = agrupamientoIM.total / agrupamientoKM.total;
      }
      if (e.data.key == '04 ABR'){
        agrupamientoKA.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKA.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKA.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKA.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKA.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKA.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKA.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKA.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      }
      if (e.data.key == '05 MAY'){
        agrupamientoKMY.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKMY.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKMY.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKMY.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKMY.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKMY.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKMY.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKMY.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKMY.cuautitlan = agrupamientoIMY.cuautitlan / agrupamientoKMY.cuautitlan;
        totalAgrupamientoIKMY.tultitlan = agrupamientoIMY.tultitlan / agrupamientoKMY.tultitlan;
        totalAgrupamientoIKMY.guadalajara = agrupamientoIMY.guadalajara / agrupamientoKMY.guadalajara;
        totalAgrupamientoIKMY.hermosillo = agrupamientoIMY.hermosillo / agrupamientoKMY.hermosillo;
        totalAgrupamientoIKMY.mexicali = agrupamientoIMY.mexicali / agrupamientoKMY.mexicali;
        totalAgrupamientoIKMY.orizaba = agrupamientoIMY.orizaba / agrupamientoKMY.orizaba;
        totalAgrupamientoIKMY.ramosArispe = agrupamientoIMY.ramosArispe / agrupamientoKMY.ramosArispe;
        totalAgrupamientoIKMY.total = agrupamientoIMY.total / agrupamientoKMY.total;
      }
      if (e.data.key == '06 JUN'){
        agrupamientoKJN.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKJN.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKJN.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKJN.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKJN.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKJN.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKJN.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKJN.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKJN.cuautitlan = agrupamientoIJN.cuautitlan / agrupamientoKJN.cuautitlan;
        totalAgrupamientoIKJN.tultitlan = agrupamientoIJN.tultitlan / agrupamientoKJN.tultitlan;
        totalAgrupamientoIKJN.guadalajara = agrupamientoIJN.guadalajara / agrupamientoKJN.guadalajara;
        totalAgrupamientoIKJN.hermosillo = agrupamientoIJN.hermosillo / agrupamientoKJN.hermosillo;
        totalAgrupamientoIKJN.mexicali = agrupamientoIJN.mexicali / agrupamientoKJN.mexicali;
        totalAgrupamientoIKJN.orizaba = agrupamientoIJN.orizaba / agrupamientoKJN.orizaba;
        totalAgrupamientoIKJN.ramosArispe = agrupamientoIJN.ramosArispe / agrupamientoKJN.ramosArispe;
        totalAgrupamientoIKJN.total = agrupamientoIJN.total / agrupamientoKJN.total;
      }
      if (e.data.key == '07 JUL'){
        agrupamientoKJL.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKJL.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKJL.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKJL.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKJL.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKJL.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKJL.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKJL.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKJL.cuautitlan = agrupamientoIJL.cuautitlan / agrupamientoKJL.cuautitlan;
        totalAgrupamientoIKJL.tultitlan = agrupamientoIJL.tultitlan / agrupamientoKJL.tultitlan;
        totalAgrupamientoIKJL.guadalajara = agrupamientoIJL.guadalajara / agrupamientoKJL.guadalajara;
        totalAgrupamientoIKJL.hermosillo = agrupamientoIJL.hermosillo / agrupamientoKJL.hermosillo;
        totalAgrupamientoIKJL.mexicali = agrupamientoIJL.mexicali / agrupamientoKJL.mexicali;
        totalAgrupamientoIKJL.orizaba = agrupamientoIJL.orizaba / agrupamientoKJL.orizaba;
        totalAgrupamientoIKJL.ramosArispe = agrupamientoIJL.ramosArispe / agrupamientoKJL.ramosArispe;
        totalAgrupamientoIKJL.total = agrupamientoIJL.total / agrupamientoKJL.total;
      }
      if (e.data.key == '08 AGO'){
        agrupamientoKAG.cuautitlan = e.summaryCells[4][0]?.value;
        agrupamientoKAG.tultitlan = e.summaryCells[5][0]?.value;
        agrupamientoKAG.guadalajara = e.summaryCells[6][0]?.value;
        agrupamientoKAG.hermosillo = e.summaryCells[7][0]?.value;
        agrupamientoKAG.mexicali = e.summaryCells[8][0]?.value;
        agrupamientoKAG.orizaba = e.summaryCells[9][0]?.value;
        agrupamientoKAG.ramosArispe = e.summaryCells[10][0]?.value;
        agrupamientoKAG.total = e.summaryCells[11][0]?.value;

        totalAgrupamientoIKAG.cuautitlan = agrupamientoIAG.cuautitlan / agrupamientoKAG.cuautitlan;
        totalAgrupamientoIKAG.tultitlan = agrupamientoIAG.tultitlan / agrupamientoKAG.tultitlan;
        totalAgrupamientoIKAG.guadalajara = agrupamientoIAG.guadalajara / agrupamientoKAG.guadalajara;
        totalAgrupamientoIKAG.hermosillo = agrupamientoIAG.hermosillo / agrupamientoKAG.hermosillo;
        totalAgrupamientoIKAG.mexicali = agrupamientoIAG.mexicali / agrupamientoKAG.mexicali;
        totalAgrupamientoIKAG.orizaba = agrupamientoIAG.orizaba / agrupamientoKAG.orizaba;
        totalAgrupamientoIKAG.ramosArispe = agrupamientoIAG.ramosArispe / agrupamientoKAG.ramosArispe;
        totalAgrupamientoIKAG.total = agrupamientoIAG.total / agrupamientoKAG.total;
      }
      if (e.data.key == '09 SEP'){
        agrupamientoKS.cuautitlan = e.summaryCells[4][0].value;
        agrupamientoKS.tultitlan = e.summaryCells[5][0].value;
        agrupamientoKS.guadalajara = e.summaryCells[6][0].value;
        agrupamientoKS.hermosillo = e.summaryCells[7][0].value;
        agrupamientoKS.mexicali = e.summaryCells[8][0].value;
        agrupamientoKS.orizaba = e.summaryCells[9][0].value;
        agrupamientoKS.ramosArispe = e.summaryCells[10][0].value;
        agrupamientoKS.total = e.summaryCells[11][0].value;

        totalAgrupamientoIKS.cuautitlan = agrupamientoIS.cuautitlan / agrupamientoKS.cuautitlan;
        totalAgrupamientoIKS.tultitlan = agrupamientoIS.tultitlan / agrupamientoKS.tultitlan;
        totalAgrupamientoIKS.guadalajara = agrupamientoIS.guadalajara / agrupamientoKS.guadalajara;
        totalAgrupamientoIKS.hermosillo = agrupamientoIS.hermosillo / agrupamientoKS.hermosillo;
        totalAgrupamientoIKS.mexicali = agrupamientoIS.mexicali / agrupamientoKS.mexicali;
        totalAgrupamientoIKS.orizaba = agrupamientoIS.orizaba / agrupamientoKS.orizaba;
        totalAgrupamientoIKS.ramosArispe = agrupamientoIS.ramosArispe / agrupamientoKS.ramosArispe;
        totalAgrupamientoIKS.total = agrupamientoIS.total / agrupamientoKS.total;
      }
      // if (event.data.key == '10 OCT'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;

              // totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        // totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        // totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        // totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        // totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        // totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        // totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        // totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      // }
      // if (event.data.key == '11 NOV'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;

              // totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        // totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        // totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        // totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        // totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        // totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        // totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        // totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      // }
      // if (event.data.key == '12 DIC'){
      //   agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
      //   agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
      //   agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
      //   agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
      //   agrupamientoIF.mexicali = event.summaryCells[6][0].value;
      //   agrupamientoIF.orizaba = event.summaryCells[7][0].value;
      //   agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
      //   agrupamientoIF.total = event.summaryCells[9][0].value;

              // totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        // totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        // totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        // totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        // totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        // totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        // totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        // totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      // }
   

    }

    if(e.rowType == "totalFooter"){
      totalKilomentros.cuautitlan = e.summaryCells[4][0]?.value;
      totalKilomentros.tultitlan = e.summaryCells[5][0]?.value;
      totalKilomentros.guadalajara = e.summaryCells[6][0]?.value;
      totalKilomentros.hermosillo = e.summaryCells[7][0]?.value;
      totalKilomentros.mexicali = e.summaryCells[8][0]?.value;
      totalKilomentros.orizaba = e.summaryCells[9][0]?.value;
      totalKilomentros.ramosArispe = e.summaryCells[10][0].value;
      totalKilomentros.total = e.summaryCells[11][0].value;

      totalOperacionIK.cuautitlan = totalIngresos.cuautitlan / totalKilomentros.cuautitlan;
      totalOperacionIK.tultitlan = totalIngresos.tultitlan / totalKilomentros.tultitlan;
      totalOperacionIK.guadalajara = totalIngresos.guadalajara / totalKilomentros.guadalajara;
      totalOperacionIK.hermosillo = totalIngresos.hermosillo / totalKilomentros.hermosillo;
      totalOperacionIK.mexicali = totalIngresos.mexicali / totalKilomentros.mexicali;
      totalOperacionIK.orizaba = totalIngresos.orizaba / totalKilomentros.orizaba;
      totalOperacionIK.ramosArispe = totalIngresos.ramosArispe / totalKilomentros.ramosArispe;
      totalOperacionIK.total = totalIngresos.total / totalKilomentros.total;
    }
  }
  onCellPreparedK(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
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

//==============================INGRESOS KILOMETROS===============================
onCellPreparedPM(e){

  if (e.rowType == 'data'){

    e.cellElement.style.fontSize = '12px';
    e.cellElement.style.background = "#DCDCDC";
  }
}  

  onRowPreparedIK(e){
    if (e.rowType == 'group'){

      if(e.isExpanded == true){
        this.collapseGroup == true
      }


      if (e.data.key == '01 ENE') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value =  totalAgrupamientoIKE.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKE.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKE.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKE.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKE.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKE.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKE.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKE.total;
        }
      
      }

      if (e.data.key == '02 FEB') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKF.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKF.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKF.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKF.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKF.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKF.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKF.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKF.total;
        }
      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKM.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKM.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKM.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKM.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKM.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKM.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKM.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKM.total;
        }

      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKA.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKA.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKA.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKA.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKA.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKA.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKA.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKA.total;
        }


      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKMY.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKMY.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKMY.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKMY.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKMY.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKMY.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKMY.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKMY.total;
        }

      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJN.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJN.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJN.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJN.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJN.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJN.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJN.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKJN.total;
        }
      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJL.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJL.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJL.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJL.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJL.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJL.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJL.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKJL.total;
        }
      }

      if (e.data.key == '08 AGO') {
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalAgrupamientoIKAG.cuautitlan;
          }

          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalAgrupamientoIKAG.tultitlan;
          }
        
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalAgrupamientoIKAG.guadalajara;
          }
        
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalAgrupamientoIKAG.hermosillo;
          }
        
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalAgrupamientoIKAG.mexicali;
          }
        
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalAgrupamientoIKAG.orizaba;
          }
        
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalAgrupamientoIKAG.ramosArispe;
          }
        
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalAgrupamientoIKAG.total;
          }
      }

      if (e.data.key == '09 SEP') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.cuautitlan)){
            e.summaryCells[4][0].value = 0;  
          }else{
            e.summaryCells[4][0].value = totalAgrupamientoIKS.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.tultitlan)){
            e.summaryCells[5][0].value = 0;  
          }else{
            e.summaryCells[5][0].value = totalAgrupamientoIKS.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalAgrupamientoIKS.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalAgrupamientoIKS.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalAgrupamientoIKS.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalAgrupamientoIKS.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalAgrupamientoIKS.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKS.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalAgrupamientoIKS.total;
          }
        }
      }

      // if (e.data.key == '10 OCT') {
              //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalAgrupamientoIK.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalAgrupamientoIK.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalAgrupamientoIK.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalAgrupamientoIK.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalAgrupamientoIK.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalAgrupamientoIK.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalAgrupamientoIK.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalAgrupamientoIK.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '11 NOV') {

            //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalAgrupamientoIK.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalAgrupamientoIK.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalAgrupamientoIK.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalAgrupamientoIK.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalAgrupamientoIK.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalAgrupamientoIK.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalAgrupamientoIK.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalAgrupamientoIK.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '12 DIC') {
      //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalAgrupamientoIK.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalAgrupamientoIK.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalAgrupamientoIK.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalAgrupamientoIK.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalAgrupamientoIK.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalAgrupamientoIK.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalAgrupamientoIK.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalAgrupamientoIK.total;//this.totalKJL.totalTMY;



      // }


      // e.cells.forEach((c: any) => {

      //   if(c.columnIndex == 2){
      //     c.value = c.summaryItems[0].value
      //   console.log(c.value)
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }

      //   if(c.columnIndex == 3){
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }

      //   if(c.columnIndex == 4){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      //   if(c.columnIndex == 5){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      //   if(c.columnIndex == 6){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      //   if(c.columnIndex == 7){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      //   if(c.columnIndex == 8){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      //   if(c.columnIndex == 9){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
      //   }
      // });
     
    }

    this.paginacion = 60;
    if(this.paginacion = 60){
      this.expandGroup = false
    }
  }


  CuautitlanTS = 0;
  TultitlanTS = 0;
  GuadalajaraTS = 0;
  HermosilloTS = 0;
  MexicaliTS = 0;
  OrizabaTS = 0;
  RamosATS = 0;
  TotalTS = 0;

  totalCuautitlan = 0;
  totalTultitlan = 0;
  totalGuadalajara = 0;
  totalHermosillo = 0;
  totalMexicali = 0;
  totalOrizaba = 0;
  totalRamosA = 0;
  totalTotal = 0;
  onCellPreparedIK(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";

    }

    if (e.rowType == 'totalFooter') {
   
      e.totalItem.cells.forEach((c: any) => {
        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionIK.cuautitlan;
        }
        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionIK.tultitlan;
        }
        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionIK.guadalajara;
        }
        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionIK.hermosillo;          
        }
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionIK.mexicali;
        }
        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionIK.orizaba;
        }
        if(c.totalItem.summaryCells[10][0]?.value != undefined){
          c.totalItem.summaryCells[10][0].value = totalOperacionIK.ramosArispe;
        }
        if(c.totalItem.summaryCells[11][0]?.value != undefined){
          c.totalItem.summaryCells[11][0].value = totalOperacionIK.total;
        }

        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

  //=============PARA DAR FORMATO Y ESTILOS AL EXPORTAR============================
  customizeIK(e) {  

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
  //=============PARA EDITAR EL DATA ANTES DE EXPORTAR=============================
  customizeExportData(cols, rows){  

    rows.forEach((row: any) =>{  
      
      var rowValues =  row.values;  

      if(row.rowType == "group"){
        if(row.key[0] == '01 ENE'){
          console.log(rowValues)
          rowValues[3][0].value = totalAgrupamientoIKE.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKE.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKE.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKE.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKE.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKE.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKE.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKE.total;
        }

        if(row.key[0] == '02 FEB'){

          rowValues[3][0].value = totalAgrupamientoIKF.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKF.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKF.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKF.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKF.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKF.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKF.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKF.total;
        }

        if(row.key[0] == '03 MAR'){

          rowValues[3][0].value = totalAgrupamientoIKM.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKM.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKM.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKM.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKM.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKM.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKM.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKM.total;
        }

        if(row.key[0] == '04 ABR'){

          rowValues[3][0].value = totalAgrupamientoIKA.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKA.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKA.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKA.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKA.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKA.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKA.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKA.total;
        }

        if(row.key[0] == '05 MAY'){

          rowValues[3][0].value = totalAgrupamientoIKMY.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKMY.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKMY.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKMY.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKMY.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKMY.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKMY.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKMY.total;
        }

        if(row.key[0] == '06 JUN'){

          rowValues[3][0].value = totalAgrupamientoIKJN.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKJN.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKJN.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKJN.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKJN.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKJN.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKJN.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKJN.total;
        }

        if(row.key[0] == '07 JUL'){

          rowValues[3][0].value = totalAgrupamientoIKJL.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKJL.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKJL.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKJL.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKJL.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKJL.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKJL.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKJL.total;

        }

        if(row.key[0] == '08 AGO'){

          rowValues[3][0].value = totalAgrupamientoIKAG.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKAG.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKAG.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKAG.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKAG.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKAG.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKAG.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKAG.total;

        }

        if(row.key[0] == '09 SEP'){

          rowValues[3][0].value = totalAgrupamientoIKS.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKS.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKS.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKS.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKS.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKS.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKS.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKS.total;

        }
      }

      if(row.rowType == "totalFooter"){
        row.values[3].value = totalOperacionIK.cuautitlan;
        row.values[4].value = totalOperacionIK.tultitlan;
        row.values[5].value = totalOperacionIK.guadalajara;
        row.values[6].value = totalOperacionIK.hermosillo;
        row.values[7].value = totalOperacionIK.mexicali;
        row.values[8].value = totalOperacionIK.orizaba;
        row.values[9].value = totalOperacionIK.ramosArispe;
      }

    });
  }  

//==============================VIAJES============================================
  onRowPreparedV(e){
    
  }
  onCellPreparedV(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
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
  customizeV(e) {  

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

  //==============================VIAJES CARGADOS============================================
  onRowPreparedVC(event){
    
    if (event.rowType == 'group'){
      
      if (event.data.key == '01 ENE') {
         
        viajesCargadosE.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosE.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosE.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosE.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosE.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosE.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosE.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosE.total = event.summaryCells[11][0]?.value;

        totalIVCE.cuautitlan = agrupamientoIE.cuautitlan / viajesCargadosE.cuautitlan;
        totalIVCE.tultitlan = agrupamientoIE.tultitlan / viajesCargadosE.tultitlan;
        totalIVCE.guadalajara = agrupamientoIE.guadalajara / viajesCargadosE.guadalajara;
        totalIVCE.hermosillo = agrupamientoIE.hermosillo / viajesCargadosE.hermosillo;
        totalIVCE.mexicali = agrupamientoIE.mexicali / viajesCargadosE.mexicali;
        totalIVCE.orizaba = agrupamientoIE.orizaba / viajesCargadosE.orizaba;
        totalIVCE.ramosArispe = agrupamientoIE.ramosArispe / viajesCargadosE.ramosArispe;
        totalIVCE.total = agrupamientoIE.total / viajesCargadosE.total;

        totalKVCE.cuautitlan = agrupamientoKE.cuautitlan / viajesCargadosE.cuautitlan;
        totalKVCE.tultitlan = agrupamientoKE.tultitlan / viajesCargadosE.tultitlan;
        totalKVCE.guadalajara = agrupamientoKE.guadalajara / viajesCargadosE.guadalajara;
        totalKVCE.hermosillo = agrupamientoKE.hermosillo / viajesCargadosE.hermosillo;
        totalKVCE.mexicali = agrupamientoKE.mexicali / viajesCargadosE.mexicali;
        totalKVCE.orizaba = agrupamientoKE.orizaba / viajesCargadosE.orizaba;
        totalKVCE.ramosArispe = agrupamientoKE.ramosArispe / viajesCargadosE.ramosArispe;
        totalKVCE.total = agrupamientoKE.total / viajesCargadosE.total;


      }
      if (event.data.key == '02 FEB'){
        viajesCargadosF.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosF.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosF.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosF.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosF.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosF.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosF.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosF.total = event.summaryCells[11][0]?.value;

        totalIVCF.cuautitlan = agrupamientoIF.cuautitlan / viajesCargadosF.cuautitlan;
        totalIVCF.tultitlan = agrupamientoIF.tultitlan / viajesCargadosF.tultitlan;
        totalIVCF.guadalajara = agrupamientoIF.guadalajara / viajesCargadosF.guadalajara;
        totalIVCF.hermosillo = agrupamientoIF.hermosillo / viajesCargadosF.hermosillo;
        totalIVCF.mexicali = agrupamientoIF.mexicali / viajesCargadosF.mexicali;
        totalIVCF.orizaba = agrupamientoIF.orizaba / viajesCargadosF.orizaba;
        totalIVCF.ramosArispe = agrupamientoIF.ramosArispe / viajesCargadosF.ramosArispe;
        totalIVCF.total = agrupamientoIF.total / viajesCargadosF.total;

        totalKVCF.cuautitlan = agrupamientoKF.cuautitlan / viajesCargadosF.cuautitlan;
        totalKVCF.tultitlan = agrupamientoKF.tultitlan / viajesCargadosF.tultitlan;
        totalKVCF.guadalajara = agrupamientoKF.guadalajara / viajesCargadosF.guadalajara;
        totalKVCF.hermosillo = agrupamientoKF.hermosillo / viajesCargadosF.hermosillo;
        totalKVCF.mexicali = agrupamientoKF.mexicali / viajesCargadosF.mexicali;
        totalKVCF.orizaba = agrupamientoKF.orizaba / viajesCargadosF.orizaba;
        totalKVCF.ramosArispe = agrupamientoKF.ramosArispe / viajesCargadosF.ramosArispe;
        totalKVCF.total = agrupamientoKF.total / viajesCargadosF.total;
      }
      if (event.data.key == '03 MAR'){
        viajesCargadosM.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosM.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosM.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosM.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosM.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosM.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosM.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosM.total = event.summaryCells[11][0]?.value;

        totalIVCM.cuautitlan = agrupamientoIM.cuautitlan / viajesCargadosM.cuautitlan;
        totalIVCM.tultitlan = agrupamientoIM.tultitlan / viajesCargadosM.tultitlan;
        totalIVCM.guadalajara = agrupamientoIM.guadalajara / viajesCargadosM.guadalajara;
        totalIVCM.hermosillo = agrupamientoIM.hermosillo / viajesCargadosM.hermosillo;
        totalIVCM.mexicali = agrupamientoIM.mexicali / viajesCargadosM.mexicali;
        totalIVCM.orizaba = agrupamientoIM.orizaba / viajesCargadosM.orizaba;
        totalIVCM.ramosArispe = agrupamientoIM.ramosArispe / viajesCargadosM.ramosArispe;
        totalIVCM.total = agrupamientoIM.total / viajesCargadosM.total;

        totalKVCM.cuautitlan = agrupamientoKM.cuautitlan / viajesCargadosM.cuautitlan;
        totalKVCM.tultitlan = agrupamientoKM.tultitlan / viajesCargadosM.tultitlan;
        totalKVCM.guadalajara = agrupamientoKM.guadalajara / viajesCargadosM.guadalajara;
        totalKVCM.hermosillo = agrupamientoKM.hermosillo / viajesCargadosM.hermosillo;
        totalKVCM.mexicali = agrupamientoKM.mexicali / viajesCargadosM.mexicali;
        totalKVCM.orizaba = agrupamientoKM.orizaba / viajesCargadosM.orizaba;
        totalKVCM.ramosArispe = agrupamientoKM.ramosArispe / viajesCargadosM.ramosArispe;
        totalKVCM.total = agrupamientoKM.total / viajesCargadosM.total;
      }
      if (event.data.key == '04 ABR'){
        viajesCargadosA.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosA.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosA.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosA.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosA.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosA.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosA.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosA.total = event.summaryCells[11][0]?.value;

        totalIVCA.cuautitlan = agrupamientoIA.cuautitlan / viajesCargadosA.cuautitlan;
        totalIVCA.tultitlan = agrupamientoIA.tultitlan / viajesCargadosA.tultitlan;
        totalIVCA.guadalajara = agrupamientoIA.guadalajara / viajesCargadosA.guadalajara;
        totalIVCA.hermosillo = agrupamientoIA.hermosillo / viajesCargadosA.hermosillo;
        totalIVCA.mexicali = agrupamientoIA.mexicali / viajesCargadosA.mexicali;
        totalIVCA.orizaba = agrupamientoIA.orizaba / viajesCargadosA.orizaba;
        totalIVCA.ramosArispe = agrupamientoIA.ramosArispe / viajesCargadosA.ramosArispe;
        totalIVCA.total = agrupamientoIA.total / viajesCargadosA.total;

        totalKVCA.cuautitlan = agrupamientoKA.cuautitlan / viajesCargadosA.cuautitlan;
        totalKVCA.tultitlan = agrupamientoKA.tultitlan / viajesCargadosA.tultitlan;
        totalKVCA.guadalajara = agrupamientoKA.guadalajara / viajesCargadosA.guadalajara;
        totalKVCA.hermosillo = agrupamientoKA.hermosillo / viajesCargadosA.hermosillo;
        totalKVCA.mexicali = agrupamientoKA.mexicali / viajesCargadosA.mexicali;
        totalKVCA.orizaba = agrupamientoKA.orizaba / viajesCargadosA.orizaba;
        totalKVCA.ramosArispe = agrupamientoKA.ramosArispe / viajesCargadosA.ramosArispe;
        totalKVCA.total = agrupamientoKA.total / viajesCargadosA.total;
      }
      if (event.data.key == '05 MAY'){
        viajesCargadosMY.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosMY.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosMY.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosMY.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosMY.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosMY.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosMY.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosMY.total = event.summaryCells[11][0]?.value;

        totalIVCMY.cuautitlan = agrupamientoIMY.cuautitlan / viajesCargadosMY.cuautitlan;
        totalIVCMY.tultitlan = agrupamientoIMY.tultitlan / viajesCargadosMY.tultitlan;
        totalIVCMY.guadalajara = agrupamientoIMY.guadalajara / viajesCargadosMY.guadalajara;
        totalIVCMY.hermosillo = agrupamientoIMY.hermosillo / viajesCargadosMY.hermosillo;
        totalIVCMY.mexicali = agrupamientoIMY.mexicali / viajesCargadosMY.mexicali;
        totalIVCMY.orizaba = agrupamientoIMY.orizaba / viajesCargadosMY.orizaba;
        totalIVCMY.ramosArispe = agrupamientoIMY.ramosArispe / viajesCargadosMY.ramosArispe;
        totalIVCMY.total = agrupamientoIMY.total / viajesCargadosMY.total;

        totalKVCMY.cuautitlan = agrupamientoKMY.cuautitlan / viajesCargadosMY.cuautitlan;
        totalKVCMY.tultitlan = agrupamientoKMY.tultitlan / viajesCargadosMY.tultitlan;
        totalKVCMY.guadalajara = agrupamientoKMY.guadalajara / viajesCargadosMY.guadalajara;
        totalKVCMY.hermosillo = agrupamientoKMY.hermosillo / viajesCargadosMY.hermosillo;
        totalKVCMY.mexicali = agrupamientoKMY.mexicali / viajesCargadosMY.mexicali;
        totalKVCMY.orizaba = agrupamientoKMY.orizaba / viajesCargadosMY.orizaba;
        totalKVCMY.ramosArispe = agrupamientoKMY.ramosArispe / viajesCargadosMY.ramosArispe;
        totalKVCMY.total = agrupamientoKMY.total / viajesCargadosMY.total;
      }
      if (event.data.key == '06 JUN'){
        viajesCargadosJN.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosJN.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosJN.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosJN.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosJN.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosJN.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosJN.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosJN.total = event.summaryCells[11][0]?.value;

        totalIVCJN.cuautitlan = agrupamientoIJN.cuautitlan / viajesCargadosJN.cuautitlan;
        totalIVCJN.tultitlan = agrupamientoIJN.tultitlan / viajesCargadosJN.tultitlan;
        totalIVCJN.guadalajara = agrupamientoIJN.guadalajara / viajesCargadosJN.guadalajara;
        totalIVCJN.hermosillo = agrupamientoIJN.hermosillo / viajesCargadosJN.hermosillo;
        totalIVCJN.mexicali = agrupamientoIJN.mexicali / viajesCargadosJN.mexicali;
        totalIVCJN.orizaba = agrupamientoIJN.orizaba / viajesCargadosJN.orizaba;
        totalIVCJN.ramosArispe = agrupamientoIJN.ramosArispe / viajesCargadosJN.ramosArispe;
        totalIVCJN.total = agrupamientoIJN.total / viajesCargadosJN.total;

        totalKVCJN.cuautitlan = agrupamientoKJN.cuautitlan / viajesCargadosJN.cuautitlan;
        totalKVCJN.tultitlan = agrupamientoKJN.tultitlan / viajesCargadosJN.tultitlan;
        totalKVCJN.guadalajara = agrupamientoKJN.guadalajara / viajesCargadosJN.guadalajara;
        totalKVCJN.hermosillo = agrupamientoKJN.hermosillo / viajesCargadosJN.hermosillo;
        totalKVCJN.mexicali = agrupamientoKJN.mexicali / viajesCargadosJN.mexicali;
        totalKVCJN.orizaba = agrupamientoKJN.orizaba / viajesCargadosJN.orizaba;
        totalKVCJN.ramosArispe = agrupamientoKJN.ramosArispe / viajesCargadosJN.ramosArispe;
        totalKVCJN.total = agrupamientoKJN.total / viajesCargadosJN.total;
      }
      if (event.data.key == '07 JUL'){
        viajesCargadosJL.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosJL.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosJL.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosJL.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosJL.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosJL.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosJL.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosJL.total = event.summaryCells[11][0]?.value;

        totalIVCJL.cuautitlan = agrupamientoIJL.cuautitlan / viajesCargadosJL.cuautitlan;
        totalIVCJL.tultitlan = agrupamientoIJL.tultitlan / viajesCargadosJL.tultitlan;
        totalIVCJL.guadalajara = agrupamientoIJL.guadalajara / viajesCargadosJL.guadalajara;
        totalIVCJL.hermosillo = agrupamientoIJL.hermosillo / viajesCargadosJL.hermosillo;
        totalIVCJL.mexicali = agrupamientoIJL.mexicali / viajesCargadosJL.mexicali;
        totalIVCJL.orizaba = agrupamientoIJL.orizaba / viajesCargadosJL.orizaba;
        totalIVCJL.ramosArispe = agrupamientoIJL.ramosArispe / viajesCargadosJL.ramosArispe;
        totalIVCJL.total = agrupamientoIJL.total / viajesCargadosJL.total;

        totalKVCJL.cuautitlan = agrupamientoKJL.cuautitlan / viajesCargadosJL.cuautitlan;
        totalKVCJL.tultitlan = agrupamientoKJL.tultitlan / viajesCargadosJL.tultitlan;
        totalKVCJL.guadalajara = agrupamientoKJL.guadalajara / viajesCargadosJL.guadalajara;
        totalKVCJL.hermosillo = agrupamientoKJL.hermosillo / viajesCargadosJL.hermosillo;
        totalKVCJL.mexicali = agrupamientoKJL.mexicali / viajesCargadosJL.mexicali;
        totalKVCJL.orizaba = agrupamientoKJL.orizaba / viajesCargadosJL.orizaba;
        totalKVCJL.ramosArispe = agrupamientoKJL.ramosArispe / viajesCargadosJL.ramosArispe;
        totalKVCJL.total = agrupamientoKJL.total / viajesCargadosJL.total;
      }
      if (event.data.key == '08 AGO'){
        viajesCargadosAG.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosAG.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosAG.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosAG.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosAG.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosAG.orizaba = event.summaryCells[9][0]?.value;
        viajesCargadosAG.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosAG.total = event.summaryCells[11][0]?.value;

        totalIVCAG.cuautitlan = agrupamientoIAG.cuautitlan / viajesCargadosAG.cuautitlan;
        totalIVCAG.tultitlan = agrupamientoIAG.tultitlan / viajesCargadosAG.tultitlan;
        totalIVCAG.guadalajara = agrupamientoIAG.guadalajara / viajesCargadosAG.guadalajara;
        totalIVCAG.hermosillo = agrupamientoIAG.hermosillo / viajesCargadosAG.hermosillo;
        totalIVCAG.mexicali = agrupamientoIAG.mexicali / viajesCargadosAG.mexicali;
        totalIVCAG.orizaba = agrupamientoIAG.orizaba / viajesCargadosAG.orizaba;
        totalIVCAG.ramosArispe = agrupamientoIAG.ramosArispe / viajesCargadosAG.ramosArispe;
        totalIVCAG.total = agrupamientoIAG.total / viajesCargadosAG.total;

        totalKVCAG.cuautitlan = agrupamientoKAG.cuautitlan / viajesCargadosAG.cuautitlan;
        totalKVCAG.tultitlan = agrupamientoKAG.tultitlan / viajesCargadosAG.tultitlan;
        totalKVCAG.guadalajara = agrupamientoKAG.guadalajara / viajesCargadosAG.guadalajara;
        totalKVCAG.hermosillo = agrupamientoKAG.hermosillo / viajesCargadosAG.hermosillo;
        totalKVCAG.mexicali = agrupamientoKAG.mexicali / viajesCargadosAG.mexicali;
        totalKVCAG.orizaba = agrupamientoKAG.orizaba / viajesCargadosAG.orizaba;
        totalKVCAG.ramosArispe = agrupamientoKAG.ramosArispe / viajesCargadosAG.ramosArispe;
        totalKVCAG.total = agrupamientoKAG.total / viajesCargadosAG.total;
      }
      if (event.data.key == '09 SEP'){
        viajesCargadosS.cuautitlan = event.summaryCells[4][0].value;
        viajesCargadosS.tultitlan = event.summaryCells[5][0].value;
        viajesCargadosS.guadalajara = event.summaryCells[6][0].value;
        viajesCargadosS.hermosillo = event.summaryCells[7][0].value;
        viajesCargadosS.mexicali = event.summaryCells[8][0].value;
        viajesCargadosS.orizaba = event.summaryCells[9][0].value;
        viajesCargadosS.ramosArispe = event.summaryCells[10][0].value;
        viajesCargadosS.total = event.summaryCells[11][0].value;

        totalIVCS.cuautitlan = agrupamientoIS.cuautitlan / viajesCargadosS.cuautitlan;
        totalIVCS.tultitlan = agrupamientoIS.tultitlan / viajesCargadosS.tultitlan;
        totalIVCS.guadalajara = agrupamientoIS.guadalajara / viajesCargadosS.guadalajara;
        totalIVCS.hermosillo = agrupamientoIS.hermosillo / viajesCargadosS.hermosillo;
        totalIVCS.mexicali = agrupamientoIS.mexicali / viajesCargadosS.mexicali;
        totalIVCS.orizaba = agrupamientoIS.orizaba / viajesCargadosS.orizaba;
        totalIVCS.ramosArispe = agrupamientoIS.ramosArispe / viajesCargadosS.ramosArispe;
        totalIVCS.total = agrupamientoIS.total / viajesCargadosS.total;

        totalKVCS.cuautitlan = agrupamientoKS.cuautitlan / viajesCargadosS.cuautitlan;
        totalKVCS.tultitlan = agrupamientoKS.tultitlan / viajesCargadosS.tultitlan;
        totalKVCS.guadalajara = agrupamientoKS.guadalajara / viajesCargadosS.guadalajara;
        totalKVCS.hermosillo = agrupamientoKS.hermosillo / viajesCargadosS.hermosillo;
        totalKVCS.mexicali = agrupamientoKS.mexicali / viajesCargadosS.mexicali;
        totalKVCS.orizaba = agrupamientoKS.orizaba / viajesCargadosS.orizaba;
        totalKVCS.ramosArispe = agrupamientoKS.ramosArispe / viajesCargadosS.ramosArispe;
        totalKVCS.total = agrupamientoKS.total / viajesCargadosS.total;
      }
      // if (event.data.key == '10 OCT'){
      //   viajesCargados.cuautitlan = event.summaryCells[2][0].value;
      //   viajesCargados.tultitlan = event.summaryCells[3][0].value;
      //   viajesCargados.guadalajara = event.summaryCells[4][0].value;
      //   viajesCargados.hermosillo = event.summaryCells[5][0].value;
      //   viajesCargados.mexicali = event.summaryCells[6][0].value;
      //   viajesCargados.orizaba = event.summaryCells[7][0].value;
      //   viajesCargados.ramosArispe = event.summaryCells[8][0].value;
      //   viajesCargados.total = event.summaryCells[9][0].value;

              // totalIVC.cuautitlan = agrupamientoI.cuautitlan / viajesCargados.cuautitlan;
        // totalIVC.tultitlan = agrupamientoI.tultitlan / viajesCargados.tultitlan;
        // totalIVC.guadalajara = agrupamientoI.guadalajara / viajesCargados.guadalajara;
        // totalIVC.hermosillo = agrupamientoI.hermosillo / viajesCargados.hermosillo;
        // totalIVC.mexicali = agrupamientoI.mexicali / viajesCargados.mexicali;
        // totalIVC.orizaba = agrupamientoI.orizaba / viajesCargados.orizaba;
        // totalIVC.ramosArispe = agrupamientoI.ramosArispe / viajesCargados.ramosArispe;
        // totalIVC.total = agrupamientoI.total / viajesCargados.total;
      // }
      // if (event.data.key == '11 NOV'){
      //   viajesCargados.cuautitlan = event.summaryCells[2][0].value;
      //   viajesCargados.tultitlan = event.summaryCells[3][0].value;
      //   viajesCargados.guadalajara = event.summaryCells[4][0].value;
      //   viajesCargados.hermosillo = event.summaryCells[5][0].value;
      //   viajesCargados.mexicali = event.summaryCells[6][0].value;
      //   viajesCargados.orizaba = event.summaryCells[7][0].value;
      //   viajesCargados.ramosArispe = event.summaryCells[8][0].value;
      //   viajesCargados.total = event.summaryCells[9][0].value;

              // totalIVC.cuautitlan = agrupamientoI.cuautitlan / viajesCargados.cuautitlan;
        // totalIVC.tultitlan = agrupamientoI.tultitlan / viajesCargados.tultitlan;
        // totalIVC.guadalajara = agrupamientoI.guadalajara / viajesCargados.guadalajara;
        // totalIVC.hermosillo = agrupamientoI.hermosillo / viajesCargados.hermosillo;
        // totalIVC.mexicali = agrupamientoI.mexicali / viajesCargados.mexicali;
        // totalIVC.orizaba = agrupamientoI.orizaba / viajesCargados.orizaba;
        // totalIVC.ramosArispe = agrupamientoI.ramosArispe / viajesCargados.ramosArispe;
        // totalIVC.total = agrupamientoI.total / viajesCargados.total;
      // }
      // if (event.data.key == '12 DIC'){
      //   viajesCargados.cuautitlan = event.summaryCells[2][0].value;
      //   viajesCargados.tultitlan = event.summaryCells[3][0].value;
      //   viajesCargados.guadalajara = event.summaryCells[4][0].value;
      //   viajesCargados.hermosillo = event.summaryCells[5][0].value;
      //   viajesCargados.mexicali = event.summaryCells[6][0].value;
      //   viajesCargados.orizaba = event.summaryCells[7][0].value;
      //   viajesCargados.ramosArispe = event.summaryCells[8][0].value;
      //   viajesCargados.total = event.summaryCells[9][0].value;

              // totalIVC.cuautitlan = agrupamientoI.cuautitlan / viajesCargados.cuautitlan;
        // totalIVC.tultitlan = agrupamientoI.tultitlan / viajesCargados.tultitlan;
        // totalIVC.guadalajara = agrupamientoI.guadalajara / viajesCargados.guadalajara;
        // totalIVC.hermosillo = agrupamientoI.hermosillo / viajesCargados.hermosillo;
        // totalIVC.mexicali = agrupamientoI.mexicali / viajesCargados.mexicali;
        // totalIVC.orizaba = agrupamientoI.orizaba / viajesCargados.orizaba;
        // totalIVC.ramosArispe = agrupamientoI.ramosArispe / viajesCargados.ramosArispe;
        // totalIVC.total = agrupamientoI.total / viajesCargados.total;
      // }
    }

    if(event.rowType == "totalFooter"){
      totalVC.cuautitlan = event.summaryCells[4][0]?.value;
      totalVC.tultitlan = event.summaryCells[5][0]?.value;
      totalVC.guadalajara = event.summaryCells[6][0]?.value;
      totalVC.hermosillo = event.summaryCells[7][0]?.value;
      totalVC.mexicali = event.summaryCells[8][0]?.value;
      totalVC.orizaba = event.summaryCells[9][0]?.value;
      totalVC.ramosArispe = event.summaryCells[10][0]?.value;
      totalVC.total = event.summaryCells[11][0]?.value

      totalOperacionIVC.cuautitlan = totalIngresos.cuautitlan / totalVC.cuautitlan;
      totalOperacionIVC.tultitlan = totalIngresos.tultitlan / totalVC.tultitlan;
      totalOperacionIVC.guadalajara = totalIngresos.guadalajara / totalVC.guadalajara;
      totalOperacionIVC.hermosillo = totalIngresos.hermosillo / totalVC.hermosillo;
      totalOperacionIVC.mexicali = totalIngresos.mexicali / totalVC.mexicali;
      totalOperacionIVC.orizaba = totalIngresos.orizaba / totalVC.orizaba;
      totalOperacionIVC.ramosArispe = totalIngresos.ramosArispe / totalVC.ramosArispe;
      totalOperacionIVC.total = totalIngresos.total / totalVC.total;

      totalOperacionKVC.cuautitlan = totalKilomentros.cuautitlan / totalVC.cuautitlan;
      totalOperacionKVC.tultitlan = totalKilomentros.tultitlan / totalVC.tultitlan;
      totalOperacionKVC.guadalajara = totalKilomentros.guadalajara / totalVC.guadalajara;
      totalOperacionKVC.hermosillo = totalKilomentros.hermosillo / totalVC.hermosillo;
      totalOperacionKVC.mexicali = totalKilomentros.mexicali / totalVC.mexicali;
      totalOperacionKVC.orizaba = totalKilomentros.orizaba / totalVC.orizaba;
      totalOperacionKVC.ramosArispe = totalKilomentros.ramosArispe / totalVC.ramosArispe;
      totalOperacionKVC.total = totalKilomentros.total / totalVC.total;


    }

  }
  onCellPreparedVC(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
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
  customizeVC(e) {  

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

//==============================VIAJES KILOMETROS=================================
  onRowPreparedKV(e){

    if (e.rowType == 'group'){

      if(e.isExpanded == true){
        this.collapseGroup == true
      }


      if (e.data.key == '01 ENE') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCE.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCE.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCE.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCE.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCE.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCE.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCE.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCE.total;
        }
        
      }

      if (e.data.key == '02 FEB') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCF.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCF.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCF.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCF.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCF.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCF.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCF.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCF.total;
        }
      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCM.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCM.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCM.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCM.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCM.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCM.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCM.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCM.total;
        }
      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCA.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCA.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCA.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCA.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCA.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCA.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCA.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCA.total;
        }
      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCMY.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCMY.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCMY.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCMY.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCMY.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCMY.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCMY.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCMY.total;
        }
      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCJN.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCJN.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCJN.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCJN.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCJN.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCJN.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCJN.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCJN.total;
        }
      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCJL.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCJL.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCJL.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCJL.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCJL.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCJL.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCJL.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCJL.total;
        }


      }

      if (e.data.key == '08 AGO') {
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalKVCAG.cuautitlan;
          }
          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalKVCAG.tultitlan; 
          }         
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalKVCAG.guadalajara;    
          }      
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalKVCAG.hermosillo;
          }
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalKVCAG.mexicali;
          }
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalKVCAG.orizaba;   
          }       
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalKVCAG.ramosArispe; 
          }         
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalKVCAG.total;   
          }       
      }

      if (e.data.key == '09 SEP') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCS.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCS.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalIVCS.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalIVCS.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalIVCS.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalIVCS.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalIVCS.hermosillo)){
            e.summaryCells[7][0].value = 0;  
          }else{
            e.summaryCells[7][0].value = totalIVCS.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalIVCS.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalIVCS.mexicali;
          }
        }
        if(e.summaryCells[9][0].value.length !== 0){
          if(Number.isNaN(totalIVCS.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalIVCS.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalIVCS.ramosArispe)){
            e.summaryCells[10][0].value = 0;  
          }else{
            e.summaryCells[10][0].value = totalIVCS.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalIVCS.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalIVCS.total;
          }
        }
      }

      // if (e.data.key == '10 OCT') {
              //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '11 NOV') {

            //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '12 DIC') {
      //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }


      // e.cells.forEach((c: any) => {
      //   if(c.columnIndex == 2){
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupC.push(c.value)
 
      //     }
      //   }
      //   if(c.columnIndex == 3){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupT.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 4){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupG.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 5){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupH.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 6){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupM.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 7){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupO.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 8){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupRA.push(c.value)
      //     }

      //   }
      //   // if(c.columnIndex == 9){
        
      //   //   c.value = c.summaryItems[0].value
        
      //   //   if(Number.isNaN(c.value)){
      //   //     c.value = 0.0;
      //   //   }
  
      //   //   if(c.value != 0){
      //   //     this.sumaTotalGT.push(c.value)
      //   //   }

      //   // }
      // })

    
     
    }

    this.paginacionKV = 60;
    if(this.paginacionKV = 60){
      this.expandGroupKV = false
    }
  }

  CuautitlanTSKV = 0;
  TultitlanTSKV = 0;
  GuadalajaraTSKV = 0;
  HermosilloTSKV = 0;
  MexicaliTSKV = 0;
  OrizabaTSKV = 0;
  RamosATSKV = 0;
  TotalTSKV = 0;

  totalCuautitlanKV = 0;
  totalTultitlanKV = 0;
  totalGuadalajaraKV = 0;
  totalHermosilloKV = 0;
  totalMexicaliKV = 0;
  totalOrizabaKV = 0;
  totalRamosAKV = 0;
  totalTotalKV = 0;
  onCellPreparedKV(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";

    }

    if (e.rowType == 'totalFooter') {
   
      e.totalItem.cells.forEach((c: any) => {

        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionKVC.cuautitlan;
        }

        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionKVC.tultitlan;
        }

        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionKVC.guadalajara;
        }

        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionKVC.hermosillo;          
        }

        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionKVC.mexicali;
        }

        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionKVC.orizaba;
        }
        if(c.totalItem.summaryCells[10][0]?.value != undefined){
          c.totalItem.summaryCells[10][0].value = totalOperacionKVC.ramosArispe;
        }

        if(c.totalItem.summaryCells[11][0]?.value != undefined){
          c.totalItem.summaryCells[11][0].value = totalOperacionKVC.total;
        }


        // this.TotalTS = this.totalKE.totalTE + this.totalKF.totalTF +this.totalKM.totalTM + this.totalKA.totalTA + this.totalKMY.totalTMY;
        // this.totalTotal = this.TotalTS / 5;//this.sumaTotalGT.length;
        // c.totalItem.summaryCells[9][0].value = this.totalTotal;

        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }
  customizeKV(e) {  

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

  customizeExportDataKV(cols, rows){

    rows.forEach((row: any) =>{  
      
      var rowValues =  row.values;  
      

      if(row.rowType == "group"){
        if(row.key[0] == '01 ENE'){
  
          rowValues[3][0].value = totalKVCE.cuautitlan;
          rowValues[4][0].value = totalKVCE.tultitlan;
          rowValues[5][0].value = totalKVCE.guadalajara;
          rowValues[6][0].value = totalKVCE.hermosillo;
          rowValues[7][0].value = totalKVCE.mexicali;
          rowValues[8][0].value = totalKVCE.orizaba;
          rowValues[9][0].value = totalKVCE.ramosArispe;
          rowValues[10][0].value = totalKVCE.total;
        }
  
        if(row.key[0] == '02 FEB'){
  
          rowValues[3][0].value = totalKVCF.cuautitlan;
          rowValues[4][0].value = totalKVCF.tultitlan;
          rowValues[5][0].value = totalKVCF.guadalajara;
          rowValues[6][0].value = totalKVCF.hermosillo;
          rowValues[7][0].value = totalKVCF.mexicali;
          rowValues[8][0].value = totalKVCF.orizaba;
          rowValues[9][0].value = totalKVCF.ramosArispe;
          rowValues[10][0].value = totalKVCF.total;
        }
  
        if(row.key[0] == '03 MAR'){
  
          rowValues[3][0].value = totalKVCM.cuautitlan;
          rowValues[4][0].value = totalKVCM.tultitlan;
          rowValues[5][0].value = totalKVCM.guadalajara;
          rowValues[6][0].value = totalKVCM.hermosillo;
          rowValues[7][0].value = totalKVCM.mexicali;
          rowValues[8][0].value = totalKVCM.orizaba;
          rowValues[9][0].value = totalKVCM.ramosArispe;
          rowValues[10][0].value = totalKVCM.total;
        }
  
        if(row.key[0] == '04 ABR'){
  
          rowValues[3][0].value = totalKVCA.cuautitlan;
          rowValues[4][0].value = totalKVCA.tultitlan;
          rowValues[5][0].value = totalKVCA.guadalajara;
          rowValues[6][0].value = totalKVCA.hermosillo;
          rowValues[7][0].value = totalKVCA.mexicali;
          rowValues[8][0].value = totalKVCA.orizaba;
          rowValues[9][0].value = totalKVCA.ramosArispe;
          rowValues[10][0].value = totalKVCA.total;
        }
  
        if(row.key[0] == '05 MAY'){
  
          rowValues[3][0].value = totalKVCMY.cuautitlan;
          rowValues[4][0].value = totalKVCMY.tultitlan;
          rowValues[5][0].value = totalKVCMY.guadalajara;
          rowValues[6][0].value = totalKVCMY.hermosillo;
          rowValues[7][0].value = totalKVCMY.mexicali;
          rowValues[8][0].value = totalKVCMY.orizaba;
          rowValues[9][0].value = totalKVCMY.ramosArispe;
          rowValues[10][0].value = totalKVCMY.total;
        }
  
        if(row.key[0] == '06 JUN'){
  
          rowValues[3][0].value = totalKVCJN.cuautitlan;
          rowValues[4][0].value = totalKVCJN.tultitlan;
          rowValues[5][0].value = totalKVCJN.guadalajara;
          rowValues[6][0].value = totalKVCJN.hermosillo;
          rowValues[7][0].value = totalKVCJN.mexicali;
          rowValues[8][0].value = totalKVCJN.orizaba;
          rowValues[9][0].value = totalKVCJN.ramosArispe;
          rowValues[10][0].value = totalKVCJN.total;
        }
  
        if(row.key[0] == '07 JUL'){
  
          rowValues[3][0].value = totalKVCJL.cuautitlan;
          rowValues[4][0].value = totalKVCJL.tultitlan;
          rowValues[5][0].value = totalKVCJL.guadalajara;
          rowValues[6][0].value = totalKVCJL.hermosillo;
          rowValues[7][0].value = totalKVCJL.mexicali;
          rowValues[8][0].value = totalKVCJL.orizaba;
          rowValues[9][0].value = totalKVCJL.ramosArispe;
          rowValues[10][0].value = totalKVCJL.total;
  
        }

        if(row.key[0] == '08 AGO'){
  
          rowValues[3][0].value = totalKVCAG.cuautitlan;
          rowValues[4][0].value = totalKVCAG.tultitlan;
          rowValues[5][0].value = totalKVCAG.guadalajara;
          rowValues[6][0].value = totalKVCAG.hermosillo;
          rowValues[7][0].value = totalKVCAG.mexicali;
          rowValues[8][0].value = totalKVCAG.orizaba;
          rowValues[9][0].value = totalKVCAG.ramosArispe;
          rowValues[10][0].value = totalKVCAG.total;
  
        }

        if(row.key[0] == '09 SEP'){
  
          rowValues[3][0].value = totalKVCS.cuautitlan;
          rowValues[4][0].value = totalKVCS.tultitlan;
          rowValues[5][0].value = totalKVCS.guadalajara;
          rowValues[6][0].value = totalKVCS.hermosillo;
          rowValues[7][0].value = totalKVCS.mexicali;
          rowValues[8][0].value = totalKVCS.orizaba;
          rowValues[9][0].value = totalKVCS.ramosArispe;
          rowValues[10][0].value = totalKVCS.total;
  
        }
      }
  
      if(row.rowType == "totalFooter"){
        
  
        row.values[3].value = totalOperacionKVC.cuautitlan;
        row.values[4].value = totalOperacionKVC.tultitlan;
        row.values[5].value = totalOperacionKVC.guadalajara;
        row.values[6].value = totalOperacionKVC.hermosillo;
        row.values[7].value = totalOperacionKVC.mexicali;
        row.values[8].value = totalOperacionKVC.orizaba;
        row.values[9].value = totalOperacionKVC.ramosArispe;
        row.values[10].value = totalOperacionKVC.total;
  
  
      }

    });

  }

//==============================INGRESO VIAJES=================================
  onRowPreparedIV(e){
    if (e.rowType == 'group'){

      if(e.isExpanded == true){
        this.collapseGroup == true
      }


      if (e.data.key == '01 ENE') {
        if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCE.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCE.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCE.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCE.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCE.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCE.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCE.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCE.total;
        }

      }

      if (e.data.key == '02 FEB') {
        if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCF.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCF.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCF.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCF.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCF.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCF.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCF.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCF.total;
        }
      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCM.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCM.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCM.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCM.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCM.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCM.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCM.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCM.total;
        }
      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCA.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCA.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCA.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCA.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCA.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCA.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCA.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCA.total;
        }
      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCMY.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCMY.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCMY.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCMY.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCMY.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCMY.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCMY.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCMY.total;
        }
      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCJN.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCJN.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCJN.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCJN.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCJN.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCJN.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCJN.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCJN.total;
        }
      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCJL.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCJL.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCJL.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCJL.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCJL.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCJL.orizaba;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCJL.ramosArispe;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCJL.total;
        }


      }

      if (e.data.key == '08 AGO') {
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCAG.cuautitlan;
          }
          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCAG.tultitlan;
          }          
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCAG.guadalajara;  
          }        
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCAG.hermosillo;
          }
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCAG.mexicali;
          }
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCAG.orizaba;
          }          
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCAG.ramosArispe;     
          }     
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCAG.total;   
          }       
        
      }

      if (e.data.key == '09 SEP') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCS.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCS.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalIVCS.tultitlan)){
            e.summaryCells[5][0].value = 0;  
          }else{
            e.summaryCells[5][0].value = totalIVCS.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalIVCS.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalIVCS.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalIVCS.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalIVCS.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalIVCS.mexicali)){
            e.summaryCells[8][0].value = 0;  
          }else{
            e.summaryCells[8][0].value = totalIVCS.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalIVCS.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalIVCS.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalIVCS.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalIVCS.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalIVCS.total)){
            e.summaryCells[11][0].value = 0;  
          }else{
            e.summaryCells[11][0].value = totalIVCS.total;
          }
        }
      }

      // if (e.data.key == '10 OCT') {
              //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '11 NOV') {

            //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }

      // if (e.data.key == '12 DIC') {
      //   if(e.isExpanded == true){

      //   }
      // e.summaryCells[2][0].value = totalIVC.cuautitlan;// this.totalKJL.cuautitlanTJL;
      // e.summaryCells[3][0].value = totalIVC.tultitlan;//this.totalKJL.tultitlanTJL;
      // e.summaryCells[4][0].value = totalIVC.guadalajara;//this.totalKJL.guadalajaraTJL;
      // e.summaryCells[5][0].value = totalIVC.hermosillo;//this.totalKJL.hermosilloTJL;
      // e.summaryCells[6][0].value = totalIVC.mexicali;//this.totalKJL.mexicaliTJL;
      // e.summaryCells[7][0].value = totalIVC.orizaba;//this.totalKJL.orizabaTJL;
      // e.summaryCells[8][0].value = totalIVC.ramosArispe;//this.totalKJL.ramisArispeTJL;
      // e.summaryCells[9][0].value = totalIVC.total;//this.totalKJL.totalTMY;



      // }


      // e.cells.forEach((c: any) => {
      //   if(c.columnIndex == 2){
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupC.push(c.value)
 
      //     }
      //   }
      //   if(c.columnIndex == 3){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupT.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 4){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupG.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 5){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupH.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 6){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupM.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 7){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupO.push(c.value)
      //     }

      //   }
      //   if(c.columnIndex == 8){
        
      //     c.value = c.summaryItems[0].value
        
      //     if(Number.isNaN(c.value)){
      //       c.value = 0.0;
      //     }
  
      //     if(c.value != 0){
      //       this.sumaTotalGroupRA.push(c.value)
      //     }

      //   }
      //   // if(c.columnIndex == 9){
        
      //   //   c.value = c.summaryItems[0].value
        
      //   //   if(Number.isNaN(c.value)){
      //   //     c.value = 0.0;
      //   //   }
  
      //   //   if(c.value != 0){
      //   //     this.sumaTotalGT.push(c.value)
      //   //   }

      //   // }
      // })

    
     
    }

    this.paginacion = 60;
    if(this.paginacion = 60){
      this.expandGroup = false
    }
  }

  onCellPreparedIV(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";

    }

    if (e.rowType == 'totalFooter') {
   
      e.totalItem.cells.forEach((c: any) => {
        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionIVC.cuautitlan;
        }

        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionIVC.tultitlan;
        }

        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionIVC.guadalajara;
        }

        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionIVC.hermosillo;          
        }

        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionIVC.mexicali;
        }

        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionIVC.orizaba;
        }
        if(c.totalItem.summaryCells[10][0]?.value != undefined){
          c.totalItem.summaryCells[10][0].value = totalOperacionIVC.ramosArispe;
        }

        if(c.totalItem.summaryCells[11][0]?.value != undefined){
          c.totalItem.summaryCells[11][0].value = totalOperacionIVC.total;
        }

        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }

  }

  customizeIV(e){
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

  customizeExportDataIV(cols, rows){

    rows.forEach((row: any) =>{  
    var rowValues =  row.values;  

    if(row.rowType == "group"){
      if(row.key[0] == '01 ENE'){

        rowValues[3][0].value = totalIVCE.cuautitlan;
        rowValues[4][0].value = totalIVCE.tultitlan;
        rowValues[5][0].value = totalIVCE.guadalajara;
        rowValues[6][0].value = totalIVCE.hermosillo;
        rowValues[7][0].value = totalIVCE.mexicali;
        rowValues[8][0].value = totalIVCE.orizaba;
        rowValues[9][0].value = totalIVCE.ramosArispe;
        rowValues[10][0].value = totalIVCE.total;
      }

      if(row.key[0] == '02 FEB'){

        rowValues[3][0].value = totalIVCF.cuautitlan;
        rowValues[4][0].value = totalIVCF.tultitlan;
        rowValues[5][0].value = totalIVCF.guadalajara;
        rowValues[6][0].value = totalIVCF.hermosillo;
        rowValues[7][0].value = totalIVCF.mexicali;
        rowValues[8][0].value = totalIVCF.orizaba;
        rowValues[9][0].value = totalIVCF.ramosArispe;
        rowValues[10][0].value = totalIVCF.total;
      }

      if(row.key[0] == '03 MAR'){

        rowValues[3][0].value = totalIVCM.cuautitlan;
        rowValues[4][0].value = totalIVCM.tultitlan;
        rowValues[5][0].value = totalIVCM.guadalajara;
        rowValues[6][0].value = totalIVCM.hermosillo;
        rowValues[7][0].value = totalIVCM.mexicali;
        rowValues[8][0].value = totalIVCM.orizaba;
        rowValues[9][0].value = totalIVCM.ramosArispe;
        rowValues[10][0].value = totalIVCM.total;
      }

      if(row.key[0] == '04 ABR'){

        rowValues[3][0].value = totalIVCA.cuautitlan;
        rowValues[4][0].value = totalIVCA.tultitlan;
        rowValues[5][0].value = totalIVCA.guadalajara;
        rowValues[6][0].value = totalIVCA.hermosillo;
        rowValues[7][0].value = totalIVCA.mexicali;
        rowValues[8][0].value = totalIVCA.orizaba;
        rowValues[9][0].value = totalIVCA.ramosArispe;
        rowValues[10][0].value = totalIVCA.total;
      }

      if(row.key[0] == '05 MAY'){

        rowValues[3][0].value = totalIVCMY.cuautitlan;
        rowValues[4][0].value = totalIVCMY.tultitlan;
        rowValues[5][0].value = totalIVCMY.guadalajara;
        rowValues[6][0].value = totalIVCMY.hermosillo;
        rowValues[7][0].value = totalIVCMY.mexicali;
        rowValues[8][0].value = totalIVCMY.orizaba;
        rowValues[9][0].value = totalIVCMY.ramosArispe;
        rowValues[10][0].value = totalIVCMY.total;
      }

      if(row.key[0] == '06 JUN'){

        rowValues[3][0].value = totalIVCJN.cuautitlan;
        rowValues[4][0].value = totalIVCJN.tultitlan;
        rowValues[5][0].value = totalIVCJN.guadalajara;
        rowValues[6][0].value = totalIVCJN.hermosillo;
        rowValues[7][0].value = totalIVCJN.mexicali;
        rowValues[8][0].value = totalIVCJN.orizaba;
        rowValues[9][0].value = totalIVCJN.ramosArispe;
        rowValues[10][0].value = totalIVCJN.total;
      }

      if(row.key[0] == '07 JUL'){

        rowValues[3][0].value = totalIVCJL.cuautitlan;
        rowValues[4][0].value = totalIVCJL.tultitlan;
        rowValues[5][0].value = totalIVCJL.guadalajara;
        rowValues[6][0].value = totalIVCJL.hermosillo;
        rowValues[7][0].value = totalIVCJL.mexicali;
        rowValues[8][0].value = totalIVCJL.orizaba;
        rowValues[9][0].value = totalIVCJL.ramosArispe;
        rowValues[10][0].value = totalIVCJL.total;

      }

      if(row.key[0] == '08 AGO'){

        rowValues[3][0].value = totalIVCAG.cuautitlan;
        rowValues[4][0].value = totalIVCAG.tultitlan;
        rowValues[5][0].value = totalIVCAG.guadalajara;
        rowValues[6][0].value = totalIVCAG.hermosillo;
        rowValues[7][0].value = totalIVCAG.mexicali;
        rowValues[8][0].value = totalIVCAG.orizaba;
        rowValues[9][0].value = totalIVCAG.ramosArispe;
        rowValues[10][0].value = totalIVCAG.total;
      }

      if(row.key[0] == '09 SEP'){

        rowValues[3][0].value = totalIVCS.cuautitlan;
        rowValues[4][0].value = totalIVCS.tultitlan;
        rowValues[5][0].value = totalIVCS.guadalajara;
        rowValues[6][0].value = totalIVCS.hermosillo;
        rowValues[7][0].value = totalIVCS.mexicali;
        rowValues[8][0].value = totalIVCS.orizaba;
        rowValues[9][0].value = totalIVCS.ramosArispe;
        rowValues[10][0].value = totalIVCS.total;
      }
    }

    if(row.rowType == "totalFooter"){
      row.values[3].value = totalOperacionIVC.cuautitlan;
      row.values[4].value = totalOperacionIVC.tultitlan;
      row.values[5].value = totalOperacionIVC.guadalajara;
      row.values[6].value = totalOperacionIVC.hermosillo;
      row.values[7].value = totalOperacionIVC.mexicali;
      row.values[8].value = totalOperacionIVC.orizaba;
      row.values[9].value = totalOperacionIVC.ramosArispe;
      row.values[10].value = totalOperacionIVC.total;
    }

  });

  }

//=============================OPERADORE UDN====================================
  onRowPreparedOUDN(e){
    
  }

  onCellPreparedOUDN(e){
    if (e.rowType == 'data'){
      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }
  }

//==============================INGRESO OPERADOR===================================
  onRowPreparedIO(e){
  
  }
  
  onCellPreparedIO(e){
    if (e.rowType == 'data'){
      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }
  }
   
// ======================================KMS MENSUALEs==============================
  onRowPreparedKMS(e){

  }

  onCellPreparedIKMS(e){

  }

//===================================FORMATOS PARA LA DATA DE GRIDS=================
  newText: string = "";
  test(e){
    this.newText = e;
    console.log(this.newText)
  }

  separator(value) {
    var str = value.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  redondearIK(value){
    const total = value.toFixed(1);

    return "$ "+total;
  }

  separatorKV(value) {

    // var str = value.toString().split(".");
    // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // let t=value.toString();
    // let regex=/(\d*.\d{0,2})/;
    // t.match(regex)[0];

    // return str.join("."), t.match(regex)[0];;

    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return myFormat.join("");
  }

  separatorIV(value){
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return "$ "+myFormat.join("");
  }

  separatorOUDN(value){
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return myFormat.join("");
  }

   //==================Formato a la data de la grafica==================================
   formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
}

    clickClientesRutas = (e: any) => {
      this.loadingVisible = true;
      this.getScoreCard();
     };


  redondearD(value){
    const total = value.toFixed(2);

    return total;
  }


}


