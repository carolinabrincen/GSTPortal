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


  //=========INGRESO POR KILOMETRO=========================
  sumaTotalE = new SumaTotalE;
  sumaTotalF = new SumaTotalF;
  sumaTotalM = new SumaTotalM;
  sumaTotalA = new SumaTotalA;
  sumaTotalMY = new SumaTotalMY;
  sumaTotalJN = new SumaTotalJN;
  sumaTotalJL = new SumaTotalJL;
  sumaTotalAG = new SumaTotalAG;
  sumaTotalS = new SumaTotalS;
  sumaTotalOC = new SumaTotalOC;
  sumaTotalNV = new SumaTotalNV;
  sumaTotalDC = new SumaTotalDC;

  ingresosKE = new IngresosKE;
  totalKE = new TotalKE;
  ingresosKF = new IngresosKF;
  totalKF = new TotalKF;
  ingresosKM = new IngresosKM;
  totalKM = new TotalKM;
  ingresosKA = new IngresosKA;
  totalKA = new TotalKA;
  ingresosKMY = new IngresosKMY;
  totalKMY = new TotalKMY;
  ingresosKJN = new IngresosKJN;
  totalKJN = new TotalKJN;
  ingresosKJL = new IngresosKJL;
  totalKJL = new TotalKJL;
  ingresosKAG = new IngresosKAG;
  totalKAG = new TotalKAG;
  ingresosKS = new IngresosKS;
  totalKS = new TotalKS;
  ingresosKOC = new IngresosKOC;
  totalKOC = new TotalKOC;
  ingresosKNV = new IngresosKNV;
  totalKNV = new TotalKNV;
  ingresosKDC = new IngresosKDC;
  totalKDC = new TotalKDC;

  totalesArray = new TotalesLength;
  
  sumaTotalGroupC: any[] = [];
  sumaTotalGroupT = []
  sumaTotalGroupG = []
  sumaTotalGroupH = []
  sumaTotalGroupM = []
  sumaTotalGroupO = []
  sumaTotalGroupRA = []
  // sumaTotalGT = []

//=========KILOMETROS POR VIAJE=========================
  sumaTotalEKV = new SumaTotalEKV;
  sumaTotalFKV = new SumaTotalFKV;
  sumaTotalMKV = new SumaTotalMKV;
  sumaTotalAKV = new SumaTotalAKV;
  sumaTotalMYKV = new SumaTotalMYKV;
  sumaTotalJNKV = new SumaTotalJNKV;
  sumaTotalJLKV = new SumaTotalJLKV;
  sumaTotalAGKV = new SumaTotalAGKV;
  sumaTotalSKV = new SumaTotalSKV;
  sumaTotalOCKV = new SumaTotalOCKV;
  sumaTotalNVKV = new SumaTotalNVKV;
  sumaTotalDCKV = new SumaTotalDCKV;
  
  ingresosKEKV = new IngresosKEKV;
  totalKEKV = new TotalKEKV;
  ingresosKFKV = new IngresosKFKV;
  totalKFKV = new TotalKFKV;
  ingresosKMKV = new IngresosKMKV;
  totalKMKV = new TotalKMKV;
  ingresosKAKV = new IngresosKAKV;
  totalKAKV = new TotalKAKV;
  ingresosKMYKV = new IngresosKMYKV;
  totalKMYKV = new TotalKMYKV;
  ingresosKJNKV = new IngresosKJNKV;
  totalKJNKV = new TotalKJNKV;
  ingresosKJLKV = new IngresosKJLKV;
  totalKJLKV = new TotalKJLKV;
  ingresosKAGKV = new IngresosKAGKV;
  totalKAGKV = new TotalKAGKV;
  ingresosKSKV = new IngresosKSKV;
  totalKSKV = new TotalKSKV;
  ingresosKOCKV = new IngresosKOCKV;
  totalKOCKV = new TotalKOCKV;
  ingresosKNVKV = new IngresosKNVKV;
  totalKNVKV = new TotalKNVKV;
  ingresosKDCKV = new IngresosKDCKV;
  totalKDCKV = new TotalKDCKV;
  
  totalesArrayKV = new TotalesLength;

  sumaTotalGroupCKV: any[] = [];
  sumaTotalGroupTKV = []
  sumaTotalGroupGKV = []
  sumaTotalGroupHKV = []
  sumaTotalGroupMKV = []
  sumaTotalGroupOKV = []
  sumaTotalGroupRAKV = []

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

  ingresoOperador: IngresoOperador[] = [];
  periodo: any[] = [
    { id: 1, periodo: 202301 },
    { id: 2, periodo: 202302 },
    { id: 3, periodo: 202303 },
    { id: 4, periodo: 202304 },
    //{ id: 5, periodo: 202305 },
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

      this.ingresos = data.data.scIng;
      this.kilomentros = data.data.scKms;
      this.ingresosKilometros = data.data.scIngXKm;
      this.viajes = data.data.scViajes;
      this.viajesCargados = data.data.scViajesC;
      this.kilometroViajes = data.data.scKmsViaje;
      this.ingresoViajes = data.data.scIngrViaje;
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

  getIngresoOperador(){
    const request = new Promise((resolve, reject) => {
    this.indicadorService.getIgresoOperador(this.selectedPeriodo).subscribe(data => {
      this.ingresoOperador = data.data;
    

      this.loadingVisible = false;
    })

    })
    return request;
  }

  seleccionarTipoOpe(e: any) {
  }

  seleccionarPeriodo(e: any) {
    this.selectedPeriodo = e.value
    console.log(this.selectedPeriodo)
  }


  buscarClick = (e: any) => {

   this.kmsTotalCC = 0;
   this.kmsTotalVC = 0;
   this.kmsTotalCG = 0;
   this.kmsTotalVG = 0;
   this.kmsTotalCH = 0;
   this.kmsTotalVH = 0;
   this.kmsTotalCLP = 0;
   this.kmsTotalVLP = 0;
   this.kmsTotalCM = 0;
   this.kmsTotalVM = 0;
   this.kmsTotalCMH = 0;
   this.kmsTotalVMH = 0;
   this.kmsTotalCMCA = 0;
   this.kmsTotalVMCA = 0;
   this.kmsTotalCO = 0;
   this.kmsTotalVO = 0;
   this.kmsTotalCRA = 0;
   this.kmsTotalVRA = 0;
   this.kmsTotalCT = 0;
   this.kmsTotalVT = 0;

    if (this.selectedPeriodo) {
      this.loadingVisible = true;
      this.getIngresoOperador().then(() => {
        this.loadingVisible = false;
      });
    }

  };
//==============================INGRESOS=========================================
  onRowPreparedI(event){

    if (event.rowType == 'group'){
      
      if (event.data.key == '01 ENE') {
        // console.log(event)
        agrupamientoIE.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIE.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIE.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIE.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIE.mexicali = event.summaryCells[6][0].value;
        agrupamientoIE.orizaba = event.summaryCells[7][0].value;
        agrupamientoIE.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIE.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '02 FEB'){
        agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIF.mexicali = event.summaryCells[6][0].value;
        agrupamientoIF.orizaba = event.summaryCells[7][0].value;
        agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIF.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '03 MAR'){
        agrupamientoIM.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIM.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIM.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIM.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIM.mexicali = event.summaryCells[6][0].value;
        agrupamientoIM.orizaba = event.summaryCells[7][0].value;
        agrupamientoIM.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIM.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '04 ABR'){
        agrupamientoIA.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIA.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIA.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIA.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIA.mexicali = event.summaryCells[6][0].value;
        agrupamientoIA.orizaba = event.summaryCells[7][0].value;
        agrupamientoIA.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIA.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '05 MAY'){
        agrupamientoIMY.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIMY.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIMY.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIMY.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIMY.mexicali = event.summaryCells[6][0].value;
        agrupamientoIMY.orizaba = event.summaryCells[7][0].value;
        agrupamientoIMY.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIMY.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '06 JUN'){
        agrupamientoIJN.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIJN.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIJN.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIJN.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIJN.mexicali = event.summaryCells[6][0].value;
        agrupamientoIJN.orizaba = event.summaryCells[7][0].value;
        agrupamientoIJN.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIJN.total = event.summaryCells[9][0].value;
      }
      if (event.data.key == '07 JUL'){
        agrupamientoIJL.cuautitlan = event.summaryCells[2][0].value;
        agrupamientoIJL.tultitlan = event.summaryCells[3][0].value;
        agrupamientoIJL.guadalajara = event.summaryCells[4][0].value;
        agrupamientoIJL.hermosillo = event.summaryCells[5][0].value;
        agrupamientoIJL.mexicali = event.summaryCells[6][0].value;
        agrupamientoIJL.orizaba = event.summaryCells[7][0].value;
        agrupamientoIJL.ramosArispe = event.summaryCells[8][0].value;
        agrupamientoIJL.total = event.summaryCells[9][0].value;
      }
      // if (event.data.key == '08 AGO'){
        // agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
        // agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
        // agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
        // agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
        // agrupamientoIF.mexicali = event.summaryCells[6][0].value;
        // agrupamientoIF.orizaba = event.summaryCells[7][0].value;
        // agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
        // agrupamientoIF.total = event.summaryCells[9][0].value;
      //}
      // if (event.data.key == '09 SEP'){
        // agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
        // agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
        // agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
        // agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
        // agrupamientoIF.mexicali = event.summaryCells[6][0].value;
        // agrupamientoIF.orizaba = event.summaryCells[7][0].value;
        // agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
        // agrupamientoIF.total = event.summaryCells[9][0].value;
      //}
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
      totalIngresos.cuautitlan = event.summaryCells[2][0].value;
      totalIngresos.tultitlan = event.summaryCells[3][0].value;
      totalIngresos.guadalajara = event.summaryCells[4][0].value;
      totalIngresos.hermosillo = event.summaryCells[5][0].value;
      totalIngresos.mexicali = event.summaryCells[6][0].value;
      totalIngresos.orizaba = event.summaryCells[7][0].value;
      totalIngresos.ramosArispe = event.summaryCells[8][0].value;
      totalIngresos.total = event.summaryCells[9][0].value
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
        // console.log(event)
        agrupamientoKE.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKE.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKE.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKE.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKE.mexicali = e.summaryCells[6][0].value;
        agrupamientoKE.orizaba = e.summaryCells[7][0].value;
        agrupamientoKE.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKE.total = e.summaryCells[9][0].value;

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
        agrupamientoKF.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKF.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKF.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKF.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKF.mexicali = e.summaryCells[6][0].value;
        agrupamientoKF.orizaba = e.summaryCells[7][0].value;
        agrupamientoKF.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKF.total = e.summaryCells[9][0].value;

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
        agrupamientoKM.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKM.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKM.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKM.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKM.mexicali = e.summaryCells[6][0].value;
        agrupamientoKM.orizaba = e.summaryCells[7][0].value;
        agrupamientoKM.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKM.total = e.summaryCells[9][0].value;

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
        agrupamientoKA.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKA.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKA.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKA.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKA.mexicali = e.summaryCells[6][0].value;
        agrupamientoKA.orizaba = e.summaryCells[7][0].value;
        agrupamientoKA.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKA.total = e.summaryCells[9][0].value;

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
        agrupamientoKMY.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKMY.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKMY.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKMY.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKMY.mexicali = e.summaryCells[6][0].value;
        agrupamientoKMY.orizaba = e.summaryCells[7][0].value;
        agrupamientoKMY.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKMY.total = e.summaryCells[9][0].value;

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
        agrupamientoKJN.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKJN.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKJN.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKJN.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKJN.mexicali = e.summaryCells[6][0].value;
        agrupamientoKJN.orizaba = e.summaryCells[7][0].value;
        agrupamientoKJN.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKJN.total = e.summaryCells[9][0].value;

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
        agrupamientoKJL.cuautitlan = e.summaryCells[2][0].value;
        agrupamientoKJL.tultitlan = e.summaryCells[3][0].value;
        agrupamientoKJL.guadalajara = e.summaryCells[4][0].value;
        agrupamientoKJL.hermosillo = e.summaryCells[5][0].value;
        agrupamientoKJL.mexicali = e.summaryCells[6][0].value;
        agrupamientoKJL.orizaba = e.summaryCells[7][0].value;
        agrupamientoKJL.ramosArispe = e.summaryCells[8][0].value;
        agrupamientoKJL.total = e.summaryCells[9][0].value;

        totalAgrupamientoIKJL.cuautitlan = agrupamientoIJL.cuautitlan / agrupamientoKJL.cuautitlan;
        totalAgrupamientoIKJL.tultitlan = agrupamientoIJL.tultitlan / agrupamientoKJL.tultitlan;
        totalAgrupamientoIKJL.guadalajara = agrupamientoIJL.guadalajara / agrupamientoKJL.guadalajara;
        totalAgrupamientoIKJL.hermosillo = agrupamientoIJL.hermosillo / agrupamientoKJL.hermosillo;
        totalAgrupamientoIKJL.mexicali = agrupamientoIJL.mexicali / agrupamientoKJL.mexicali;
        totalAgrupamientoIKJL.orizaba = agrupamientoIJL.orizaba / agrupamientoKJL.orizaba;
        totalAgrupamientoIKJL.ramosArispe = agrupamientoIJL.ramosArispe / agrupamientoKJL.ramosArispe;
        totalAgrupamientoIKJL.total = agrupamientoIJL.total / agrupamientoKJL.total;
      }
      // if (event.data.key == '08 AGO'){
        // agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
        // agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
        // agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
        // agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
        // agrupamientoIF.mexicali = event.summaryCells[6][0].value;
        // agrupamientoIF.orizaba = event.summaryCells[7][0].value;
        // agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
        // agrupamientoIF.total = event.summaryCells[9][0].value;

        // totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        // totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        // totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        // totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        // totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        // totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        // totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        // totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      //}
      // if (event.data.key == '09 SEP'){
        // agrupamientoIF.cuautitlan = event.summaryCells[2][0].value;
        // agrupamientoIF.tultitlan = event.summaryCells[3][0].value;
        // agrupamientoIF.guadalajara = event.summaryCells[4][0].value;
        // agrupamientoIF.hermosillo = event.summaryCells[5][0].value;
        // agrupamientoIF.mexicali = event.summaryCells[6][0].value;
        // agrupamientoIF.orizaba = event.summaryCells[7][0].value;
        // agrupamientoIF.ramosArispe = event.summaryCells[8][0].value;
        // agrupamientoIF.total = event.summaryCells[9][0].value;

                // totalAgrupamientoIKA.cuautitlan = agrupamientoIA.cuautitlan / agrupamientoKA.cuautitlan;
        // totalAgrupamientoIKA.tultitlan = agrupamientoIA.tultitlan / agrupamientoKA.tultitlan;
        // totalAgrupamientoIKA.guadalajara = agrupamientoIA.guadalajara / agrupamientoKA.guadalajara;
        // totalAgrupamientoIKA.hermosillo = agrupamientoIA.hermosillo / agrupamientoKA.hermosillo;
        // totalAgrupamientoIKA.mexicali = agrupamientoIA.mexicali / agrupamientoKA.mexicali;
        // totalAgrupamientoIKA.orizaba = agrupamientoIA.orizaba / agrupamientoKA.orizaba;
        // totalAgrupamientoIKA.ramosArispe = agrupamientoIA.ramosArispe / agrupamientoKA.ramosArispe;
        // totalAgrupamientoIKA.total = agrupamientoIA.total / agrupamientoKA.total;
      //}
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
      totalKilomentros.cuautitlan = e.summaryCells[2][0].value;
      totalKilomentros.tultitlan = e.summaryCells[3][0].value;
      totalKilomentros.guadalajara = e.summaryCells[4][0].value;
      totalKilomentros.hermosillo = e.summaryCells[5][0].value;
      totalKilomentros.mexicali = e.summaryCells[6][0].value;
      totalKilomentros.orizaba = e.summaryCells[7][0].value;
      totalKilomentros.ramosArispe = e.summaryCells[8][0].value;
      totalKilomentros.total = e.summaryCells[9][0].value;

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
    
    if (e.rowType == 'data') {
      
      e.cells.forEach((c: any) => {

        if(c.key.mes == "01 ENE"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanEL.push(c.value)

              let total = this.totalesArray.cuatitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalCE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanEL.push(c.value)

              let total = this.totalesArray.tultitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalTE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraEL.push(c.value)

              let total = this.totalesArray.guadalajaraEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalGE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloEL.push(c.value)

              let total = this.totalesArray.hermosilloEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalHE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliEL.push(c.value)

              let total = this.totalesArray.mexicaliEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalME = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaEL.push(c.value)

              let total = this.totalesArray.orizabaEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalOE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAEL.push(c.value)

              let total = this.totalesArray.ramosAEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalRAE = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalEL.push(c.value)

          //     let total = this.totalEL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalE.sumaTotalTlE = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "02 FEB"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanFL.push(c.value)

              let total = this.totalesArray.cuatitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalCF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanFL.push(c.value)

              let total = this.totalesArray.tultitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalTF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraFL.push(c.value)

              let total = this.totalesArray.guadalajaraFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalGF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloFL.push(c.value)

              let total = this.totalesArray.hermosilloFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalHF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliFL.push(c.value)

              let total = this.totalesArray.mexicaliFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalMF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaFL.push(c.value)

              let total = this.totalesArray.orizabaFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalOF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAFL.push(c.value)

              let total = this.totalesArray.ramosAFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalRAF = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalFL.push(c.value)

          //     let total = this.totalFL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalF.sumaTotalTlF = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "03 MAR"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanML.push(c.value)

              let total = this.totalesArray.cuatitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalCM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanML.push(c.value)

              let total = this.totalesArray.tultitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalTM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraML.push(c.value)

              let total = this.totalesArray.guadalajaraML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalGM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloML.push(c.value)

              let total = this.totalesArray.hermosilloML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalHM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliML.push(c.value)

              let total = this.totalesArray.mexicaliML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalMM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaML.push(c.value)

              let total = this.totalesArray.orizabaML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalOM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAML.push(c.value)

              let total = this.totalesArray.ramosAML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalRAM = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalML.push(c.value)

          //     let total = this.totalML.reduce((a, b) => a + b, 0);
          //     this.sumaTotalM.sumaTotalTlM = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "04 ABR"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanAL.push(c.value)

              let total = this.totalesArray.cuatitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalCA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanAL.push(c.value)

              let total = this.totalesArray.tultitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalTA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraAL.push(c.value)

              let total = this.totalesArray.guadalajaraAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalGA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloAL.push(c.value)

              let total = this.totalesArray.hermosilloAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalHA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliAL.push(c.value)

              let total = this.totalesArray.mexicaliAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalMA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaAL.push(c.value)

              let total = this.totalesArray.orizabaAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalOA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAAL.push(c.value)

              let total = this.totalesArray.ramosAAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalRAA = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalAL.push(c.value)

          //     let total = this.totalAL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalA.sumaTotalTlA = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "05 MAY"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanMYL.push(c.value)

              let total = this.totalesArray.cuatitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalCMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanMYL.push(c.value)

              let total = this.totalesArray.tultitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalTMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraMYL.push(c.value)

              let total = this.totalesArray.guadalajaraMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalGMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloMYL.push(c.value)

              let total = this.totalesArray.hermosilloMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalHMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliMYL.push(c.value)

              let total = this.totalesArray.mexicaliMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalMMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaMYL.push(c.value)

              let total = this.totalesArray.orizabaMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalOMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAMYL.push(c.value)

              let total = this.totalesArray.ramosAMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalRAMY = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalMYL.push(c.value)

          //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalMY.sumaTotalTlMY = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "06 JUN"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanJNL.push(c.value)

              let total = this.totalesArray.cuatitlanJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalCJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanJNL.push(c.value)

              let total = this.totalesArray.tultitlanJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalTJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraJNL.push(c.value)

              let total = this.totalesArray.guadalajaraJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalGJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloJNL.push(c.value)

              let total = this.totalesArray.hermosilloJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalHJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliJNL.push(c.value)

              let total = this.totalesArray.mexicaliJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalMJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaJNL.push(c.value)

              let total = this.totalesArray.orizabaJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalOJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAJNL.push(c.value)

              let total = this.totalesArray.ramosAJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJN.sumaTotalRAJN = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalMYL.push(c.value)

          //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalMY.sumaTotalTlMY = total
          //     //console.log(total);
          //   }
          // }
        }

        if(c.key.mes == "07 JUL"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.cuatitlanJLL.push(c.value)

              let total = this.totalesArray.cuatitlanJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalCJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.tultitlanJLL.push(c.value)

              let total = this.totalesArray.tultitlanJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalTJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.guadalajaraJLL.push(c.value)

              let total = this.totalesArray.guadalajaraJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalGJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.hermosilloJLL.push(c.value)

              let total = this.totalesArray.hermosilloJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalHJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.mexicaliJLL.push(c.value)

              let total = this.totalesArray.mexicaliJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalMJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.orizabaJLL.push(c.value)

              let total = this.totalesArray.orizabaJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalOJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArray.ramosAJLL.push(c.value)

              let total = this.totalesArray.ramosAJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJL.sumaTotalRAJL = total
              //console.log(total);
            }
          }
          // if (c.cellElement && c.columnIndex == 9) {
          //   if (this.total >= c.value) {
          //     c.cellElement.style.color = "red";
          //   }

          //   if(c.value != 0){
          //     this.totalMYL.push(c.value)

          //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
          //     this.sumaTotalMY.sumaTotalTlMY = total
          //     //console.log(total);
          //   }
          // }
        }

        // if(c.key.mes == "08 AGO"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanAGL.push(c.value)

        //       let total = this.totalesArray.cuatitlanAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalCAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanAGL.push(c.value)

        //       let total = this.totalesArray.tultitlanAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalTAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraAGL.push(c.value)

        //       let total = this.totalesArray.guadalajaraAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalGAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloAGL.push(c.value)

        //       let total = this.totalesArray.hermosilloAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalHAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliAGL.push(c.value)

        //       let total = this.totalesArray.mexicaliAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalMAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaAGL.push(c.value)

        //       let total = this.totalesArray.orizabaAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalOAG = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosAAGL.push(c.value)

        //       let total = this.totalesArray.ramosAAGL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalAG.sumaTotalRAAG = total
        //       //console.log(total);
        //     }
        //   }
        //   // if (c.cellElement && c.columnIndex == 9) {
        //   //   if (this.total >= c.value) {
        //   //     c.cellElement.style.color = "red";
        //   //   }

        //   //   if(c.value != 0){
        //   //     this.totalMYL.push(c.value)

        //   //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
        //   //     this.sumaTotalMY.sumaTotalTlMY = total
        //   //     //console.log(total);
        //   //   }
        //   // }
        // }

        // if(c.key.mes == "09 SEP"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanSL.push(c.value)

        //       let total = this.totalesArray.cuatitlanSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalCS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanSL.push(c.value)

        //       let total = this.totalesArray.tultitlanSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalTS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraSL.push(c.value)

        //       let total = this.totalesArray.guadalajaraSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalGS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloSL.push(c.value)

        //       let total = this.totalesArray.hermosilloSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalHS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliSL.push(c.value)

        //       let total = this.totalesArray.mexicaliSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalMS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaSL.push(c.value)

        //       let total = this.totalesArray.orizabaSL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalOS = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosASL.push(c.value)

        //       let total = this.totalesArray.ramosASL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalS.sumaTotalRAS = total
        //       //console.log(total);
        //     }
        //   }
        //   // if (c.cellElement && c.columnIndex == 9) {
        //   //   if (this.total >= c.value) {
        //   //     c.cellElement.style.color = "red";
        //   //   }

        //   //   if(c.value != 0){
        //   //     this.totalMYL.push(c.value)

        //   //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
        //   //     this.sumaTotalMY.sumaTotalTlMY = total
        //   //     //console.log(total);
        //   //   }
        //   // }
        // }

        // if(c.key.mes == "10 OCT"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanOCL.push(c.value)

        //       let total = this.totalesArray.cuatitlanOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalCOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanOCL.push(c.value)

        //       let total = this.totalesArray.tultitlanOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalTOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraOCL.push(c.value)

        //       let total = this.totalesArray.guadalajaraOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalGOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloOCL.push(c.value)

        //       let total = this.totalesArray.hermosilloOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalHOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliOCL.push(c.value)

        //       let total = this.totalesArray.mexicaliOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalMOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaOCL.push(c.value)

        //       let total = this.totalesArray.orizabaOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalOOC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosAOCL.push(c.value)

        //       let total = this.totalesArray.ramosAOCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalOC.sumaTotalRAOC = total
        //       //console.log(total);
        //     }
        //   }
        //   // if (c.cellElement && c.columnIndex == 9) {
        //   //   if (this.total >= c.value) {
        //   //     c.cellElement.style.color = "red";
        //   //   }

        //   //   if(c.value != 0){
        //   //     this.totalMYL.push(c.value)

        //   //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
        //   //     this.sumaTotalMY.sumaTotalTlMY = total
        //   //     //console.log(total);
        //   //   }
        //   // }
        // }

        // if(c.key.mes == "11 NOV"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanNVL.push(c.value)

        //       let total = this.totalesArray.cuatitlanNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalCNV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanNVL.push(c.value)

        //       let total = this.totalesArray.tultitlanNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalTNV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraNVL.push(c.value)

        //       let total = this.totalesArray.guadalajaraNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalGNV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloNVL.push(c.value)

        //       let total = this.totalesArray.hermosilloNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalHNV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliNVL.push(c.value)

        //       let total = this.totalesArray.mexicaliNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalMNV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaNVL.push(c.value)

        //       let total = this.totalesArray.orizabaNVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalONV = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosANVL.push(c.value)

        //       let total = this.totalesArray.ramosANVL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalNV.sumaTotalRANV = total
        //       //console.log(total);
        //     }
        //   }
        //   // if (c.cellElement && c.columnIndex == 9) {
        //   //   if (this.total >= c.value) {
        //   //     c.cellElement.style.color = "red";
        //   //   }

        //   //   if(c.value != 0){
        //   //     this.totalMYL.push(c.value)

        //   //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
        //   //     this.sumaTotalMY.sumaTotalTlMY = total
        //   //     //console.log(total);
        //   //   }
        //   // }
        // }

        // if(c.key.mes == "12 DIC"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanDCL.push(c.value)

        //       let total = this.totalesArray.cuatitlanDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalCDC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanDCL.push(c.value)

        //       let total = this.totalesArray.tultitlanDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalTDC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraDCL.push(c.value)

        //       let total = this.totalesArray.guadalajaraDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalGDC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloDCL.push(c.value)

        //       let total = this.totalesArray.hermosilloDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalHDC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliDCL.push(c.value)

        //       let total = this.totalesArray.mexicaliDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalMDC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaDCL.push(c.value)

        //       let total = this.totalesArray.orizabaDCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalODC = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosADCL.push(c.value)

        //       let total = this.totalesArray.ramosADCL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalDC.sumaTotalRADC = total
        //       //console.log(total);
        //     }
        //   }
        //   // if (c.cellElement && c.columnIndex == 9) {
        //   //   if (this.total >= c.value) {
        //   //     c.cellElement.style.color = "red";
        //   //   }

        //   //   if(c.value != 0){
        //   //     this.totalMYL.push(c.value)

        //   //     let total = this.totalMYL.reduce((a, b) => a + b, 0);
        //   //     this.sumaTotalMY.sumaTotalTlMY = total
        //   //     //console.log(total);
        //   //   }
        //   // }
        // }
      });
    }

    if (e.rowType == 'group'){

      if(e.isExpanded == true){
        this.collapseGroup == true
      }


      if (e.data.key == '01 ENE') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value =  totalAgrupamientoIKE.cuautitlan;
        e.summaryCells[3][0].value = totalAgrupamientoIKE.tultitlan;
        e.summaryCells[4][0].value = totalAgrupamientoIKE.guadalajara;
        e.summaryCells[5][0].value = totalAgrupamientoIKE.hermosillo;
        e.summaryCells[6][0].value = totalAgrupamientoIKE.mexicali;
        e.summaryCells[7][0].value = totalAgrupamientoIKE.orizaba;
        e.summaryCells[8][0].value = totalAgrupamientoIKE.ramosArispe;
        e.summaryCells[9][0].value = totalAgrupamientoIKE.total;
      }

      if (e.data.key == '02 FEB') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalAgrupamientoIKF.cuautitlan;//this.totalKF.cuautitlanTF;
        e.summaryCells[3][0].value = totalAgrupamientoIKF.tultitlan;//this.totalKF.tultitlanTF;
        e.summaryCells[4][0].value = totalAgrupamientoIKF.guadalajara;//this.totalKF.guadalajaraTF;
        e.summaryCells[5][0].value = totalAgrupamientoIKF.hermosillo;//this.totalKF.hermosilloTF;
        e.summaryCells[6][0].value = totalAgrupamientoIKF.mexicali;//this.totalKF.mexicaliTF;
        e.summaryCells[7][0].value = totalAgrupamientoIKF.orizaba;//this.totalKF.orizabaTF;
        e.summaryCells[8][0].value = totalAgrupamientoIKF.ramosArispe;//this.totalKF.ramisArispeTF;
        e.summaryCells[9][0].value = totalAgrupamientoIKF.total;//this.totalKF.totalTF;


      }

      if (e.data.key == '03 MAR') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalAgrupamientoIKM.cuautitlan;// this.totalKM.cuautitlanTM;
        e.summaryCells[3][0].value = totalAgrupamientoIKM.tultitlan;//this.totalKM.tultitlanTM;
        e.summaryCells[4][0].value = totalAgrupamientoIKM.guadalajara;//this.totalKM.guadalajaraTM;
        e.summaryCells[5][0].value = totalAgrupamientoIKM.hermosillo;//this.totalKM.hermosilloTM;
        e.summaryCells[6][0].value = totalAgrupamientoIKM.mexicali;//this.totalKM.mexicaliTM;
        e.summaryCells[7][0].value = totalAgrupamientoIKM.orizaba;//this.totalKM.orizabaTM;
        e.summaryCells[8][0].value = totalAgrupamientoIKM.ramosArispe;//this.totalKM.ramisArispeTM;
        e.summaryCells[9][0].value = totalAgrupamientoIKM.total;//this.totalKM.totalTM;


      }

      if (e.data.key == '04 ABR') {
        if(e.isExpanded == true){
        }

        e.summaryCells[2][0].value = totalAgrupamientoIKA.cuautitlan;// this.totalKA.cuautitlanTA;
        e.summaryCells[3][0].value = totalAgrupamientoIKA.tultitlan;//this.totalKA.tultitlanTA;
        e.summaryCells[4][0].value = totalAgrupamientoIKA.guadalajara;//this.totalKA.guadalajaraTA;
        e.summaryCells[5][0].value = totalAgrupamientoIKA.hermosillo;//this.totalKA.hermosilloTA;
        e.summaryCells[6][0].value = totalAgrupamientoIKA.mexicali;//this.totalKA.mexicaliTA;
        e.summaryCells[7][0].value = totalAgrupamientoIKA.orizaba;//this.totalKA.orizabaTA;
        e.summaryCells[8][0].value = totalAgrupamientoIKA.ramosArispe;//this.totalKA.ramisArispeTA;
        e.summaryCells[9][0].value = totalAgrupamientoIKA.total;//this.totalKA.totalTA;


      }

      if (e.data.key == '05 MAY') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalAgrupamientoIKMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        e.summaryCells[3][0].value = totalAgrupamientoIKMY.tultitlan;//this.totalKMY.tultitlanTMY;
        e.summaryCells[4][0].value = totalAgrupamientoIKMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        e.summaryCells[5][0].value = totalAgrupamientoIKMY.hermosillo;//this.totalKMY.hermosilloTMY;
        e.summaryCells[6][0].value = totalAgrupamientoIKMY.mexicali;//this.totalKMY.mexicaliTMY;
        e.summaryCells[7][0].value = totalAgrupamientoIKMY.orizaba;//this.totalKMY.orizabaTMY;
        e.summaryCells[8][0].value = totalAgrupamientoIKMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        e.summaryCells[9][0].value = totalAgrupamientoIKMY.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '06 JUN') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalAgrupamientoIKJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        e.summaryCells[3][0].value = totalAgrupamientoIKJN.tultitlan;//this.totalKJN.tultitlanTJN;
        e.summaryCells[4][0].value = totalAgrupamientoIKJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        e.summaryCells[5][0].value = totalAgrupamientoIKJN.hermosillo;//this.totalKJN.hermosilloTJN;
        e.summaryCells[6][0].value = totalAgrupamientoIKJN.mexicali;//this.totalKJN.mexicaliTJN;
        e.summaryCells[7][0].value = totalAgrupamientoIKJN.orizaba;//this.totalKJN.orizabaTJN;
        e.summaryCells[8][0].value = totalAgrupamientoIKJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        e.summaryCells[9][0].value = totalAgrupamientoIKJN.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '07 JUL') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalAgrupamientoIKJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        e.summaryCells[3][0].value = totalAgrupamientoIKJL.tultitlan;//this.totalKJL.tultitlanTJL;
        e.summaryCells[4][0].value = totalAgrupamientoIKJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        e.summaryCells[5][0].value = totalAgrupamientoIKJL.hermosillo;//this.totalKJL.hermosilloTJL;
        e.summaryCells[6][0].value = totalAgrupamientoIKJL.mexicali;//this.totalKJL.mexicaliTJL;
        e.summaryCells[7][0].value = totalAgrupamientoIKJL.orizaba;//this.totalKJL.orizabaTJL;
        e.summaryCells[8][0].value = totalAgrupamientoIKJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        e.summaryCells[9][0].value = totalAgrupamientoIKJL.total;//this.totalKJL.totalTMY;


      }

      // if (e.data.key == '08 AGO') {
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

      // if (e.data.key == '09 SEP') {
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


      e.cells.forEach((c: any) => {
        if(c.columnIndex == 2){
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupC.push(c.value)
 
          }
        }
        if(c.columnIndex == 3){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupT.push(c.value)
          }

        }
        if(c.columnIndex == 4){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupG.push(c.value)
          }

        }
        if(c.columnIndex == 5){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupH.push(c.value)
          }

        }
        if(c.columnIndex == 6){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupM.push(c.value)
          }

        }
        if(c.columnIndex == 7){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupO.push(c.value)
          }

        }
        if(c.columnIndex == 8){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupRA.push(c.value)
          }

        }
        // if(c.columnIndex == 9){
        
        //   c.value = c.summaryItems[0].value
        
        //   if(Number.isNaN(c.value)){
        //     c.value = 0.0;
        //   }
  
        //   if(c.value != 0){
        //     this.sumaTotalGT.push(c.value)
        //   }

        // }
      })

    
     
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
        if(c.totalItem.summaryCells[2][0]?.value != undefined){
          c.totalItem.summaryCells[2][0].value = totalOperacionIK.cuautitlan;
        }

        if(c.totalItem.summaryCells[3][0]?.value != undefined){
          c.totalItem.summaryCells[3][0].value = totalOperacionIK.tultitlan;
        }

        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionIK.guadalajara;
        }

        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionIK.hermosillo;          
        }

        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionIK.mexicali;
        }

        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionIK.orizaba;
        }
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionIK.ramosArispe;
        }

        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = this.totalTotal;
        }

        // this.CuautitlanTS = this.totalKE.cuautitlanTE + this.totalKF.cuautitlanTF +this.totalKM.cuautitlanTM + this.totalKA.cuautitlanTA + this.totalKMY.cuautitlanTMY + this.totalKJN.cuautitlanTJN + this.totalKJL.cuautitlanTJL;
        // this.totalCuautitlan = this.CuautitlanTS / 7;//this.sumaTotalGroupC.length;
        // if(c.totalItem.summaryCells[2][0]?.value != undefined){
        // c.totalItem.summaryCells[2][0].value = this.totalCuautitlan;
        // }

        // this.TultitlanTS = this.totalKE.tultitlanTE + this.totalKF.tultitlanTF +this.totalKM.tultitlanTM + this.totalKA.tultitlanTA + this.totalKMY.tultitlanTMY + this.totalKJN.tultitlanTJN + this.totalKJL.tultitlanTJL;
        // this.totalTultitlan = this.TultitlanTS / 7;//this.sumaTotalGroupT.length;
        // if(c.totalItem.summaryCells[3][0]?.value != undefined){
        // c.totalItem.summaryCells[3][0].value = this.totalTultitlan;
        // }

        // this.GuadalajaraTS = this.totalKE.guadalajaraTE + this.totalKF.guadalajaraTF +this.totalKM.guadalajaraTM + this.totalKA.guadalajaraTA + this.totalKMY.guadalajaraTMY + this.totalKJN.guadalajaraTJN + this.totalKJL.guadalajaraTJL;
        // this.totalGuadalajara = this.GuadalajaraTS / 7;//this.sumaTotalGroupG.length;
        // if(c.totalItem.summaryCells[4][0]?.value != undefined){
        // c.totalItem.summaryCells[4][0].value = this.totalGuadalajara;
        // }

        // this.HermosilloTS = this.totalKE.hermosilloTE + this.totalKF.hermosilloTF +this.totalKM.hermosilloTM + this.totalKA.hermosilloTA + this.totalKMY.hermosilloTMY + this.totalKJN.hermosilloTJN + this.totalKJL.hermosilloTJL;
        // this.totalHermosillo = this.HermosilloTS / 7;//this.sumaTotalGroupH.length;
        // if(c.totalItem.summaryCells[5][0]?.value != undefined){
        // c.totalItem.summaryCells[5][0].value = this.totalHermosillo;          
        // }

        // this.MexicaliTS = this.totalKE.mexicaliTE + this.totalKF.mexicaliTF +this.totalKM.mexicaliTM + this.totalKA.mexicaliTA + this.totalKMY.mexicaliTMY + this.totalKJN.mexicaliTJN + this.totalKJL.mexicaliTJL;
        // this.totalMexicali = this.MexicaliTS / 7;//this.sumaTotalGroupM.length;
        // if(c.totalItem.summaryCells[6][0]?.value != undefined){
        // c.totalItem.summaryCells[6][0].value = this.totalMexicali;
        // }

        // this.OrizabaTS = this.totalKE.orizabaTE + this.totalKF.orizabaTF +this.totalKM.orizabaTM + this.totalKA.orizabaTA + this.totalKMY.orizabaTMY + this.totalKJN.orizabaTJN + this.totalKJL.orizabaTJL;
        // this.totalOrizaba = this.OrizabaTS / 7;//this.sumaTotalGroupO.length;
        // if(c.totalItem.summaryCells[7][0]?.value != undefined){
        // c.totalItem.summaryCells[7][0].value = this.totalOrizaba;
        // }


        // this.RamosATS = this.totalKE.ramisArispeTE + this.totalKF.ramisArispeTF +this.totalKM.ramisArispeTM + this.totalKA.ramisArispeTA + this.totalKMY.ramisArispeTMY + this.totalKJN.ramisArispeTJN + this.totalKJL.ramisArispeTJL;
        // this.totalRamosA = this.RamosATS / 7;//this.sumaTotalGroupRA.length;
        // if(c.totalItem.summaryCells[8][0]?.value != undefined){
        // c.totalItem.summaryCells[8][0].value = this.totalRamosA;
        // }

        // this.TotalTS = this.totalKE.totalTE + this.totalKF.totalTF +this.totalKM.totalTM + this.totalKA.totalTA + this.totalKMY.totalTMY;
        // this.totalTotal = this.TotalTS / 5;//this.sumaTotalGT.length;


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
      
      var values = e.gridCell?.groupSummaryItems

      if(values != undefined){
        
        if(values[0].name == "Cuautitlan"){
           //console.log(e)
        }
      }



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

          rowValues[1][0].value = totalAgrupamientoIKE.cuautitlan;//sumaCuautitlaE;
          rowValues[2][0].value = totalAgrupamientoIKE.tultitlan;//sumaTultitlanE;
          rowValues[3][0].value = totalAgrupamientoIKE.guadalajara;//sumaGuadalajaraE;
          rowValues[4][0].value = totalAgrupamientoIKE.hermosillo;//sumaHermosilloE;
          rowValues[5][0].value = totalAgrupamientoIKE.mexicali;//sumaMexicaliE;
          rowValues[6][0].value = totalAgrupamientoIKE.orizaba;//sumaOrizabaE;
          rowValues[7][0].value = totalAgrupamientoIKE.ramosArispe;//sumaRamozAE;
          rowValues[8][0].value = totalAgrupamientoIKE.total;
        }

        if(row.key[0] == '02 FEB'){

          rowValues[1][0].value = totalAgrupamientoIKF.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKF.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKF.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKF.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKF.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKF.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKF.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKF.total;
        }

        if(row.key[0] == '03 MAR'){

          rowValues[1][0].value = totalAgrupamientoIKM.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKM.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKM.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKM.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKM.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKM.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKM.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKM.total;
        }

        if(row.key[0] == '04 ABR'){

          rowValues[1][0].value = totalAgrupamientoIKA.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKA.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKA.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKA.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKA.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKA.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKA.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKA.total;
        }

        if(row.key[0] == '05 MAY'){

          rowValues[1][0].value = totalAgrupamientoIKMY.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKMY.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKMY.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKMY.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKMY.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKMY.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKMY.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKMY.total;
        }

        if(row.key[0] == '06 JUN'){

          rowValues[1][0].value = totalAgrupamientoIKJN.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKJN.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKJN.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKJN.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKJN.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKJN.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKJN.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKJN.total;
        }

        if(row.key[0] == '07 JUL'){

          rowValues[1][0].value = totalAgrupamientoIKJL.cuautitlan;
          rowValues[2][0].value = totalAgrupamientoIKJL.tultitlan;
          rowValues[3][0].value = totalAgrupamientoIKJL.guadalajara;
          rowValues[4][0].value = totalAgrupamientoIKJL.hermosillo;
          rowValues[5][0].value = totalAgrupamientoIKJL.mexicali;
          rowValues[6][0].value = totalAgrupamientoIKJL.orizaba;
          rowValues[7][0].value = totalAgrupamientoIKJL.ramosArispe;
          rowValues[8][0].value = totalAgrupamientoIKJL.total;

        }
      }

      if(row.rowType == "totalFooter"){
        

        row.values[1].value = totalOperacionIK.cuautitlan;//TotalSCuautitlan;
        console.log(totalOperacionIK.cuautitlan)
        row.values[2].value = totalOperacionIK.tultitlan;//TotalSTultitlan;
        row.values[3].value = totalOperacionIK.guadalajara;//TotalSGuadalajara;
        row.values[4].value = totalOperacionIK.hermosillo;//TotalSHermosillo;
        row.values[5].value = totalOperacionIK.mexicali;//TotalSMexicali;
        row.values[6].value = totalOperacionIK.orizaba;//TotalSOrizaba;
        row.values[7].value = totalOperacionIK.ramosArispe;//TotalSRamozA;


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
         
        viajesCargadosE.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosE.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosE.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosE.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosE.mexicali = event.summaryCells[6][0].value;
        viajesCargadosE.orizaba = event.summaryCells[7][0].value;
        viajesCargadosE.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosE.total = event.summaryCells[9][0].value;

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
        viajesCargadosF.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosF.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosF.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosF.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosF.mexicali = event.summaryCells[6][0].value;
        viajesCargadosF.orizaba = event.summaryCells[7][0].value;
        viajesCargadosF.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosF.total = event.summaryCells[9][0].value;

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
        viajesCargadosM.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosM.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosM.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosM.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosM.mexicali = event.summaryCells[6][0].value;
        viajesCargadosM.orizaba = event.summaryCells[7][0].value;
        viajesCargadosM.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosM.total = event.summaryCells[9][0].value;

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
        viajesCargadosA.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosA.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosA.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosA.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosA.mexicali = event.summaryCells[6][0].value;
        viajesCargadosA.orizaba = event.summaryCells[7][0].value;
        viajesCargadosA.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosA.total = event.summaryCells[9][0].value;

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
        viajesCargadosMY.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosMY.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosMY.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosMY.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosMY.mexicali = event.summaryCells[6][0].value;
        viajesCargadosMY.orizaba = event.summaryCells[7][0].value;
        viajesCargadosMY.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosMY.total = event.summaryCells[9][0].value;

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
        viajesCargadosJN.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosJN.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosJN.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosJN.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosJN.mexicali = event.summaryCells[6][0].value;
        viajesCargadosJN.orizaba = event.summaryCells[7][0].value;
        viajesCargadosJN.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosJN.total = event.summaryCells[9][0].value;

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
        viajesCargadosJL.cuautitlan = event.summaryCells[2][0].value;
        viajesCargadosJL.tultitlan = event.summaryCells[3][0].value;
        viajesCargadosJL.guadalajara = event.summaryCells[4][0].value;
        viajesCargadosJL.hermosillo = event.summaryCells[5][0].value;
        viajesCargadosJL.mexicali = event.summaryCells[6][0].value;
        viajesCargadosJL.orizaba = event.summaryCells[7][0].value;
        viajesCargadosJL.ramosArispe = event.summaryCells[8][0].value;
        viajesCargadosJL.total = event.summaryCells[9][0].value;

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
      // if (event.data.key == '08 AGO'){
        // viajesCargados.cuautitlan = event.summaryCells[2][0].value;
        // viajesCargados.tultitlan = event.summaryCells[3][0].value;
        // viajesCargados.guadalajara = event.summaryCells[4][0].value;
        // viajesCargados.hermosillo = event.summaryCells[5][0].value;
        // viajesCargados.mexicali = event.summaryCells[6][0].value;
        // viajesCargados.orizaba = event.summaryCells[7][0].value;
        // viajesCargados.ramosArispe = event.summaryCells[8][0].value;
        // viajesCargados.total = event.summaryCells[9][0].value;

        // totalIVC.cuautitlan = agrupamientoI.cuautitlan / viajesCargados.cuautitlan;
        // totalIVC.tultitlan = agrupamientoI.tultitlan / viajesCargados.tultitlan;
        // totalIVC.guadalajara = agrupamientoI.guadalajara / viajesCargados.guadalajara;
        // totalIVC.hermosillo = agrupamientoI.hermosillo / viajesCargados.hermosillo;
        // totalIVC.mexicali = agrupamientoI.mexicali / viajesCargados.mexicali;
        // totalIVC.orizaba = agrupamientoI.orizaba / viajesCargados.orizaba;
        // totalIVC.ramosArispe = agrupamientoI.ramosArispe / viajesCargados.ramosArispe;
        // totalIVC.total = agrupamientoI.total / viajesCargados.total;
      //}
      // if (event.data.key == '09 SEP'){
        // viajesCargados.cuautitlan = event.summaryCells[2][0].value;
        // viajesCargados.tultitlan = event.summaryCells[3][0].value;
        // viajesCargados.guadalajara = event.summaryCells[4][0].value;
        // viajesCargados.hermosillo = event.summaryCells[5][0].value;
        // viajesCargados.mexicali = event.summaryCells[6][0].value;
        // viajesCargados.orizaba = event.summaryCells[7][0].value;
        // viajesCargados.ramosArispe = event.summaryCells[8][0].value;
        // viajesCargados.total = event.summaryCells[9][0].value;

                // totalIVC.cuautitlan = agrupamientoI.cuautitlan / viajesCargados.cuautitlan;
        // totalIVC.tultitlan = agrupamientoI.tultitlan / viajesCargados.tultitlan;
        // totalIVC.guadalajara = agrupamientoI.guadalajara / viajesCargados.guadalajara;
        // totalIVC.hermosillo = agrupamientoI.hermosillo / viajesCargados.hermosillo;
        // totalIVC.mexicali = agrupamientoI.mexicali / viajesCargados.mexicali;
        // totalIVC.orizaba = agrupamientoI.orizaba / viajesCargados.orizaba;
        // totalIVC.ramosArispe = agrupamientoI.ramosArispe / viajesCargados.ramosArispe;
        // totalIVC.total = agrupamientoI.total / viajesCargados.total;
      //}
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
      totalVC.cuautitlan = event.summaryCells[2][0].value;
      totalVC.tultitlan = event.summaryCells[3][0].value;
      totalVC.guadalajara = event.summaryCells[4][0].value;
      totalVC.hermosillo = event.summaryCells[5][0].value;
      totalVC.mexicali = event.summaryCells[6][0].value;
      totalVC.orizaba = event.summaryCells[7][0].value;
      totalVC.ramosArispe = event.summaryCells[8][0].value;
      totalVC.total = event.summaryCells[9][0].value

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
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCE.cuautitlan;
        e.summaryCells[3][0].value = totalKVCE.tultitlan;
        e.summaryCells[4][0].value = totalKVCE.guadalajara;
        e.summaryCells[5][0].value = totalKVCE.hermosillo;
        e.summaryCells[6][0].value = totalKVCE.mexicali;
        e.summaryCells[7][0].value = totalKVCE.orizaba;
        e.summaryCells[8][0].value = totalKVCE.ramosArispe;
        e.summaryCells[9][0].value = totalKVCE.total;
      }

      if (e.data.key == '02 FEB') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCF.cuautitlan;//this.totalKF.cuautitlanTF;
        e.summaryCells[3][0].value = totalKVCF.tultitlan;//this.totalKF.tultitlanTF;
        e.summaryCells[4][0].value = totalKVCF.guadalajara;//this.totalKF.guadalajaraTF;
        e.summaryCells[5][0].value = totalKVCF.hermosillo;//this.totalKF.hermosilloTF;
        e.summaryCells[6][0].value = totalKVCF.mexicali;//this.totalKF.mexicaliTF;
        e.summaryCells[7][0].value = totalKVCF.orizaba;//this.totalKF.orizabaTF;
        e.summaryCells[8][0].value = totalKVCF.ramosArispe;//this.totalKF.ramisArispeTF;
        e.summaryCells[9][0].value = totalKVCF.total;//this.totalKF.totalTF;


      }

      if (e.data.key == '03 MAR') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCM.cuautitlan;// this.totalKM.cuautitlanTM;
        e.summaryCells[3][0].value = totalKVCM.tultitlan;//this.totalKM.tultitlanTM;
        e.summaryCells[4][0].value = totalKVCM.guadalajara;//this.totalKM.guadalajaraTM;
        e.summaryCells[5][0].value = totalKVCM.hermosillo;//this.totalKM.hermosilloTM;
        e.summaryCells[6][0].value = totalKVCM.mexicali;//this.totalKM.mexicaliTM;
        e.summaryCells[7][0].value = totalKVCM.orizaba;//this.totalKM.orizabaTM;
        e.summaryCells[8][0].value = totalKVCM.ramosArispe;//this.totalKM.ramisArispeTM;
        e.summaryCells[9][0].value = totalKVCM.total;//this.totalKM.totalTM;


      }

      if (e.data.key == '04 ABR') {
        if(e.isExpanded == true){
        }

        e.summaryCells[2][0].value = totalKVCA.cuautitlan;// this.totalKA.cuautitlanTA;
        e.summaryCells[3][0].value = totalKVCA.tultitlan;//this.totalKA.tultitlanTA;
        e.summaryCells[4][0].value = totalKVCA.guadalajara;//this.totalKA.guadalajaraTA;
        e.summaryCells[5][0].value = totalKVCA.hermosillo;//this.totalKA.hermosilloTA;
        e.summaryCells[6][0].value = totalKVCA.mexicali;//this.totalKA.mexicaliTA;
        e.summaryCells[7][0].value = totalKVCA.orizaba;//this.totalKA.orizabaTA;
        e.summaryCells[8][0].value = totalKVCA.ramosArispe;//this.totalKA.ramisArispeTA;
        e.summaryCells[9][0].value = totalKVCA.total;//this.totalKA.totalTA;


      }

      if (e.data.key == '05 MAY') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        e.summaryCells[3][0].value = totalKVCMY.tultitlan;//this.totalKMY.tultitlanTMY;
        e.summaryCells[4][0].value = totalKVCMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        e.summaryCells[5][0].value = totalKVCMY.hermosillo;//this.totalKMY.hermosilloTMY;
        e.summaryCells[6][0].value = totalKVCMY.mexicali;//this.totalKMY.mexicaliTMY;
        e.summaryCells[7][0].value = totalKVCMY.orizaba;//this.totalKMY.orizabaTMY;
        e.summaryCells[8][0].value = totalKVCMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        e.summaryCells[9][0].value = totalKVCMY.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '06 JUN') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        e.summaryCells[3][0].value = totalKVCJN.tultitlan;//this.totalKJN.tultitlanTJN;
        e.summaryCells[4][0].value = totalKVCJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        e.summaryCells[5][0].value = totalKVCJN.hermosillo;//this.totalKJN.hermosilloTJN;
        e.summaryCells[6][0].value = totalKVCJN.mexicali;//this.totalKJN.mexicaliTJN;
        e.summaryCells[7][0].value = totalKVCJN.orizaba;//this.totalKJN.orizabaTJN;
        e.summaryCells[8][0].value = totalKVCJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        e.summaryCells[9][0].value = totalKVCJN.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '07 JUL') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalKVCJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        e.summaryCells[3][0].value = totalKVCJL.tultitlan;//this.totalKJL.tultitlanTJL;
        e.summaryCells[4][0].value = totalKVCJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        e.summaryCells[5][0].value = totalKVCJL.hermosillo;//this.totalKJL.hermosilloTJL;
        e.summaryCells[6][0].value = totalKVCJL.mexicali;//this.totalKJL.mexicaliTJL;
        e.summaryCells[7][0].value = totalKVCJL.orizaba;//this.totalKJL.orizabaTJL;
        e.summaryCells[8][0].value = totalKVCJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        e.summaryCells[9][0].value = totalKVCJL.total;//this.totalKJL.totalTMY;


      }

      // if (e.data.key == '08 AGO') {
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

      // if (e.data.key == '09 SEP') {
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


      e.cells.forEach((c: any) => {
        if(c.columnIndex == 2){
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupC.push(c.value)
 
          }
        }
        if(c.columnIndex == 3){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupT.push(c.value)
          }

        }
        if(c.columnIndex == 4){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupG.push(c.value)
          }

        }
        if(c.columnIndex == 5){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupH.push(c.value)
          }

        }
        if(c.columnIndex == 6){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupM.push(c.value)
          }

        }
        if(c.columnIndex == 7){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupO.push(c.value)
          }

        }
        if(c.columnIndex == 8){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupRA.push(c.value)
          }

        }
        // if(c.columnIndex == 9){
        
        //   c.value = c.summaryItems[0].value
        
        //   if(Number.isNaN(c.value)){
        //     c.value = 0.0;
        //   }
  
        //   if(c.value != 0){
        //     this.sumaTotalGT.push(c.value)
        //   }

        // }
      })

    
     
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

        if(c.totalItem.summaryCells[2][0]?.value != undefined){
          c.totalItem.summaryCells[2][0].value = totalOperacionKVC.cuautitlan;
        }

        if(c.totalItem.summaryCells[3][0]?.value != undefined){
          c.totalItem.summaryCells[3][0].value = totalOperacionKVC.tultitlan;
        }

        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionKVC.guadalajara;
        }

        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionKVC.hermosillo;          
        }

        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionKVC.mexicali;
        }

        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionKVC.orizaba;
        }
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionKVC.ramosArispe;
        }

        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionKVC.total;
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
  
          rowValues[1][0].value = totalKVCE.cuautitlan;//sumaCuautitlaE;
          rowValues[2][0].value = totalKVCE.tultitlan;//sumaTultitlanE;
          rowValues[3][0].value = totalKVCE.guadalajara;//sumaGuadalajaraE;
          rowValues[4][0].value = totalKVCE.hermosillo;//sumaHermosilloE;
          rowValues[5][0].value = totalKVCE.mexicali;//sumaMexicaliE;
          rowValues[6][0].value = totalKVCE.orizaba;//sumaOrizabaE;
          rowValues[7][0].value = totalKVCE.ramosArispe;//sumaRamozAE;
          rowValues[8][0].value = totalKVCE.total;
        }
  
        if(row.key[0] == '02 FEB'){
  
          rowValues[1][0].value = totalKVCF.cuautitlan;
          rowValues[2][0].value = totalKVCF.tultitlan;
          rowValues[3][0].value = totalKVCF.guadalajara;
          rowValues[4][0].value = totalKVCF.hermosillo;
          rowValues[5][0].value = totalKVCF.mexicali;
          rowValues[6][0].value = totalKVCF.orizaba;
          rowValues[7][0].value = totalKVCF.ramosArispe;
          rowValues[8][0].value = totalKVCF.total;
        }
  
        if(row.key[0] == '03 MAR'){
  
          rowValues[1][0].value = totalKVCM.cuautitlan;
          rowValues[2][0].value = totalKVCM.tultitlan;
          rowValues[3][0].value = totalKVCM.guadalajara;
          rowValues[4][0].value = totalKVCM.hermosillo;
          rowValues[5][0].value = totalKVCM.mexicali;
          rowValues[6][0].value = totalKVCM.orizaba;
          rowValues[7][0].value = totalKVCM.ramosArispe;
          rowValues[8][0].value = totalKVCM.total;
        }
  
        if(row.key[0] == '04 ABR'){
  
          rowValues[1][0].value = totalKVCA.cuautitlan;
          rowValues[2][0].value = totalKVCA.tultitlan;
          rowValues[3][0].value = totalKVCA.guadalajara;
          rowValues[4][0].value = totalKVCA.hermosillo;
          rowValues[5][0].value = totalKVCA.mexicali;
          rowValues[6][0].value = totalKVCA.orizaba;
          rowValues[7][0].value = totalKVCA.ramosArispe;
          rowValues[8][0].value = totalKVCA.total;
        }
  
        if(row.key[0] == '05 MAY'){
  
          rowValues[1][0].value = totalKVCMY.cuautitlan;
          rowValues[2][0].value = totalKVCMY.tultitlan;
          rowValues[3][0].value = totalKVCMY.guadalajara;
          rowValues[4][0].value = totalKVCMY.hermosillo;
          rowValues[5][0].value = totalKVCMY.mexicali;
          rowValues[6][0].value = totalKVCMY.orizaba;
          rowValues[7][0].value = totalKVCMY.ramosArispe;
          rowValues[8][0].value = totalKVCMY.total;
        }
  
        if(row.key[0] == '06 JUN'){
  
          rowValues[1][0].value = totalKVCJN.cuautitlan;
          rowValues[2][0].value = totalKVCJN.tultitlan;
          rowValues[3][0].value = totalKVCJN.guadalajara;
          rowValues[4][0].value = totalKVCJN.hermosillo;
          rowValues[5][0].value = totalKVCJN.mexicali;
          rowValues[6][0].value = totalKVCJN.orizaba;
          rowValues[7][0].value = totalKVCJN.ramosArispe;
          rowValues[8][0].value = totalKVCJN.total;
        }
  
        if(row.key[0] == '07 JUL'){
  
          rowValues[1][0].value = totalKVCJL.cuautitlan;
          rowValues[2][0].value = totalKVCJL.tultitlan;
          rowValues[3][0].value = totalKVCJL.guadalajara;
          rowValues[4][0].value = totalKVCJL.hermosillo;
          rowValues[5][0].value = totalKVCJL.mexicali;
          rowValues[6][0].value = totalKVCJL.orizaba;
          rowValues[7][0].value = totalKVCJL.ramosArispe;
          rowValues[8][0].value = totalKVCJL.total;
  
        }
      }
  
      if(row.rowType == "totalFooter"){
        
  
        row.values[1].value = totalOperacionKVC.cuautitlan;//TotalSCuautitlan;
        row.values[2].value = totalOperacionKVC.tultitlan;//TotalSTultitlan;
        row.values[3].value = totalOperacionKVC.guadalajara;//TotalSGuadalajara;
        row.values[4].value = totalOperacionKVC.hermosillo;//TotalSHermosillo;
        row.values[5].value = totalOperacionKVC.mexicali;//TotalSMexicali;
        row.values[6].value = totalOperacionKVC.orizaba;//TotalSOrizaba;
        row.values[7].value = totalOperacionKVC.ramosArispe;//TotalSRamozA;
        row.values[8].value = totalOperacionKVC.total;//TotalSRamozA;
  
  
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
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCE.cuautitlan;
        e.summaryCells[3][0].value = totalIVCE.tultitlan;
        e.summaryCells[4][0].value = totalIVCE.guadalajara;
        e.summaryCells[5][0].value = totalIVCE.hermosillo;
        e.summaryCells[6][0].value = totalIVCE.mexicali;
        e.summaryCells[7][0].value = totalIVCE.orizaba;
        e.summaryCells[8][0].value = totalIVCE.ramosArispe;
        e.summaryCells[9][0].value = totalIVCE.total;
      }

      if (e.data.key == '02 FEB') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCF.cuautitlan;//this.totalKF.cuautitlanTF;
        e.summaryCells[3][0].value = totalIVCF.tultitlan;//this.totalKF.tultitlanTF;
        e.summaryCells[4][0].value = totalIVCF.guadalajara;//this.totalKF.guadalajaraTF;
        e.summaryCells[5][0].value = totalIVCF.hermosillo;//this.totalKF.hermosilloTF;
        e.summaryCells[6][0].value = totalIVCF.mexicali;//this.totalKF.mexicaliTF;
        e.summaryCells[7][0].value = totalIVCF.orizaba;//this.totalKF.orizabaTF;
        e.summaryCells[8][0].value = totalIVCF.ramosArispe;//this.totalKF.ramisArispeTF;
        e.summaryCells[9][0].value = totalIVCF.total;//this.totalKF.totalTF;


      }

      if (e.data.key == '03 MAR') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCM.cuautitlan;// this.totalKM.cuautitlanTM;
        e.summaryCells[3][0].value = totalIVCM.tultitlan;//this.totalKM.tultitlanTM;
        e.summaryCells[4][0].value = totalIVCM.guadalajara;//this.totalKM.guadalajaraTM;
        e.summaryCells[5][0].value = totalIVCM.hermosillo;//this.totalKM.hermosilloTM;
        e.summaryCells[6][0].value = totalIVCM.mexicali;//this.totalKM.mexicaliTM;
        e.summaryCells[7][0].value = totalIVCM.orizaba;//this.totalKM.orizabaTM;
        e.summaryCells[8][0].value = totalIVCM.ramosArispe;//this.totalKM.ramisArispeTM;
        e.summaryCells[9][0].value = totalIVCM.total;//this.totalKM.totalTM;


      }

      if (e.data.key == '04 ABR') {
        if(e.isExpanded == true){
        }

        e.summaryCells[2][0].value = totalIVCA.cuautitlan;// this.totalKA.cuautitlanTA;
        e.summaryCells[3][0].value = totalIVCA.tultitlan;//this.totalKA.tultitlanTA;
        e.summaryCells[4][0].value = totalIVCA.guadalajara;//this.totalKA.guadalajaraTA;
        e.summaryCells[5][0].value = totalIVCA.hermosillo;//this.totalKA.hermosilloTA;
        e.summaryCells[6][0].value = totalIVCA.mexicali;//this.totalKA.mexicaliTA;
        e.summaryCells[7][0].value = totalIVCA.orizaba;//this.totalKA.orizabaTA;
        e.summaryCells[8][0].value = totalIVCA.ramosArispe;//this.totalKA.ramisArispeTA;
        e.summaryCells[9][0].value = totalIVCA.total;//this.totalKA.totalTA;


      }

      if (e.data.key == '05 MAY') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        e.summaryCells[3][0].value = totalIVCMY.tultitlan;//this.totalKMY.tultitlanTMY;
        e.summaryCells[4][0].value = totalIVCMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        e.summaryCells[5][0].value = totalIVCMY.hermosillo;//this.totalKMY.hermosilloTMY;
        e.summaryCells[6][0].value = totalIVCMY.mexicali;//this.totalKMY.mexicaliTMY;
        e.summaryCells[7][0].value = totalIVCMY.orizaba;//this.totalKMY.orizabaTMY;
        e.summaryCells[8][0].value = totalIVCMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        e.summaryCells[9][0].value = totalIVCMY.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '06 JUN') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        e.summaryCells[3][0].value = totalIVCJN.tultitlan;//this.totalKJN.tultitlanTJN;
        e.summaryCells[4][0].value = totalIVCJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        e.summaryCells[5][0].value = totalIVCJN.hermosillo;//this.totalKJN.hermosilloTJN;
        e.summaryCells[6][0].value = totalIVCJN.mexicali;//this.totalKJN.mexicaliTJN;
        e.summaryCells[7][0].value = totalIVCJN.orizaba;//this.totalKJN.orizabaTJN;
        e.summaryCells[8][0].value = totalIVCJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        e.summaryCells[9][0].value = totalIVCJN.total;//this.totalKMY.totalTMY;


      }

      if (e.data.key == '07 JUL') {
        if(e.isExpanded == true){

        }

        e.summaryCells[2][0].value = totalIVCJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        e.summaryCells[3][0].value = totalIVCJL.tultitlan;//this.totalKJL.tultitlanTJL;
        e.summaryCells[4][0].value = totalIVCJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        e.summaryCells[5][0].value = totalIVCJL.hermosillo;//this.totalKJL.hermosilloTJL;
        e.summaryCells[6][0].value = totalIVCJL.mexicali;//this.totalKJL.mexicaliTJL;
        e.summaryCells[7][0].value = totalIVCJL.orizaba;//this.totalKJL.orizabaTJL;
        e.summaryCells[8][0].value = totalIVCJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        e.summaryCells[9][0].value = totalIVCJL.total;//this.totalKJL.totalTMY;


      }

      // if (e.data.key == '08 AGO') {
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

      // if (e.data.key == '09 SEP') {
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


      e.cells.forEach((c: any) => {
        if(c.columnIndex == 2){
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupC.push(c.value)
 
          }
        }
        if(c.columnIndex == 3){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupT.push(c.value)
          }

        }
        if(c.columnIndex == 4){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupG.push(c.value)
          }

        }
        if(c.columnIndex == 5){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupH.push(c.value)
          }

        }
        if(c.columnIndex == 6){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupM.push(c.value)
          }

        }
        if(c.columnIndex == 7){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupO.push(c.value)
          }

        }
        if(c.columnIndex == 8){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupRA.push(c.value)
          }

        }
        // if(c.columnIndex == 9){
        
        //   c.value = c.summaryItems[0].value
        
        //   if(Number.isNaN(c.value)){
        //     c.value = 0.0;
        //   }
  
        //   if(c.value != 0){
        //     this.sumaTotalGT.push(c.value)
        //   }

        // }
      })

    
     
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
        if(c.totalItem.summaryCells[2][0]?.value != undefined){
          c.totalItem.summaryCells[2][0].value = totalOperacionIVC.cuautitlan;
        }

        if(c.totalItem.summaryCells[3][0]?.value != undefined){
          c.totalItem.summaryCells[3][0].value = totalOperacionIVC.tultitlan;
        }

        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionIVC.guadalajara;
        }

        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionIVC.hermosillo;          
        }

        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionIVC.mexicali;
        }

        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionIVC.orizaba;
        }
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionIVC.ramosArispe;
        }

        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionIVC.total;
        }

        // this.CuautitlanTS = this.totalKE.cuautitlanTE + this.totalKF.cuautitlanTF +this.totalKM.cuautitlanTM + this.totalKA.cuautitlanTA + this.totalKMY.cuautitlanTMY + this.totalKJN.cuautitlanTJN + this.totalKJL.cuautitlanTJL;
        // this.totalCuautitlan = this.CuautitlanTS / 7;//this.sumaTotalGroupC.length;
        // if(c.totalItem.summaryCells[2][0]?.value != undefined){
        // c.totalItem.summaryCells[2][0].value = this.totalCuautitlan;
        // }

        // this.TultitlanTS = this.totalKE.tultitlanTE + this.totalKF.tultitlanTF +this.totalKM.tultitlanTM + this.totalKA.tultitlanTA + this.totalKMY.tultitlanTMY + this.totalKJN.tultitlanTJN + this.totalKJL.tultitlanTJL;
        // this.totalTultitlan = this.TultitlanTS / 7;//this.sumaTotalGroupT.length;
        // if(c.totalItem.summaryCells[3][0]?.value != undefined){
        // c.totalItem.summaryCells[3][0].value = this.totalTultitlan;
        // }

        // this.GuadalajaraTS = this.totalKE.guadalajaraTE + this.totalKF.guadalajaraTF +this.totalKM.guadalajaraTM + this.totalKA.guadalajaraTA + this.totalKMY.guadalajaraTMY + this.totalKJN.guadalajaraTJN + this.totalKJL.guadalajaraTJL;
        // this.totalGuadalajara = this.GuadalajaraTS / 7;//this.sumaTotalGroupG.length;
        // if(c.totalItem.summaryCells[4][0]?.value != undefined){
        // c.totalItem.summaryCells[4][0].value = this.totalGuadalajara;
        // }

        // this.HermosilloTS = this.totalKE.hermosilloTE + this.totalKF.hermosilloTF +this.totalKM.hermosilloTM + this.totalKA.hermosilloTA + this.totalKMY.hermosilloTMY + this.totalKJN.hermosilloTJN + this.totalKJL.hermosilloTJL;
        // this.totalHermosillo = this.HermosilloTS / 7;//this.sumaTotalGroupH.length;
        // if(c.totalItem.summaryCells[5][0]?.value != undefined){
        // c.totalItem.summaryCells[5][0].value = this.totalHermosillo;          
        // }

        // this.MexicaliTS = this.totalKE.mexicaliTE + this.totalKF.mexicaliTF +this.totalKM.mexicaliTM + this.totalKA.mexicaliTA + this.totalKMY.mexicaliTMY + this.totalKJN.mexicaliTJN + this.totalKJL.mexicaliTJL;
        // this.totalMexicali = this.MexicaliTS / 7;//this.sumaTotalGroupM.length;
        // if(c.totalItem.summaryCells[6][0]?.value != undefined){
        // c.totalItem.summaryCells[6][0].value = this.totalMexicali;
        // }

        // this.OrizabaTS = this.totalKE.orizabaTE + this.totalKF.orizabaTF +this.totalKM.orizabaTM + this.totalKA.orizabaTA + this.totalKMY.orizabaTMY + this.totalKJN.orizabaTJN + this.totalKJL.orizabaTJL;
        // this.totalOrizaba = this.OrizabaTS / 7;//this.sumaTotalGroupO.length;
        // if(c.totalItem.summaryCells[7][0]?.value != undefined){
        // c.totalItem.summaryCells[7][0].value = this.totalOrizaba;
        // }


        // this.RamosATS = this.totalKE.ramisArispeTE + this.totalKF.ramisArispeTF +this.totalKM.ramisArispeTM + this.totalKA.ramisArispeTA + this.totalKMY.ramisArispeTMY + this.totalKJN.ramisArispeTJN + this.totalKJL.ramisArispeTJL;
        // this.totalRamosA = this.RamosATS / 7;//this.sumaTotalGroupRA.length;
        // if(c.totalItem.summaryCells[8][0]?.value != undefined){
        // c.totalItem.summaryCells[8][0].value = this.totalRamosA;
        // }

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

        rowValues[1][0].value = totalIVCE.cuautitlan;//sumaCuautitlaE;
        rowValues[2][0].value = totalIVCE.tultitlan;//sumaTultitlanE;
        rowValues[3][0].value = totalIVCE.guadalajara;//sumaGuadalajaraE;
        rowValues[4][0].value = totalIVCE.hermosillo;//sumaHermosilloE;
        rowValues[5][0].value = totalIVCE.mexicali;//sumaMexicaliE;
        rowValues[6][0].value = totalIVCE.orizaba;//sumaOrizabaE;
        rowValues[7][0].value = totalIVCE.ramosArispe;//sumaRamozAE;
        rowValues[8][0].value = totalIVCE.total;
      }

      if(row.key[0] == '02 FEB'){

        rowValues[1][0].value = totalIVCF.cuautitlan;
        rowValues[2][0].value = totalIVCF.tultitlan;
        rowValues[3][0].value = totalIVCF.guadalajara;
        rowValues[4][0].value = totalIVCF.hermosillo;
        rowValues[5][0].value = totalIVCF.mexicali;
        rowValues[6][0].value = totalIVCF.orizaba;
        rowValues[7][0].value = totalIVCF.ramosArispe;
        rowValues[8][0].value = totalIVCF.total;
      }

      if(row.key[0] == '03 MAR'){

        rowValues[1][0].value = totalIVCM.cuautitlan;
        rowValues[2][0].value = totalIVCM.tultitlan;
        rowValues[3][0].value = totalIVCM.guadalajara;
        rowValues[4][0].value = totalIVCM.hermosillo;
        rowValues[5][0].value = totalIVCM.mexicali;
        rowValues[6][0].value = totalIVCM.orizaba;
        rowValues[7][0].value = totalIVCM.ramosArispe;
        rowValues[8][0].value = totalIVCM.total;
      }

      if(row.key[0] == '04 ABR'){

        rowValues[1][0].value = totalIVCA.cuautitlan;
        rowValues[2][0].value = totalIVCA.tultitlan;
        rowValues[3][0].value = totalIVCA.guadalajara;
        rowValues[4][0].value = totalIVCA.hermosillo;
        rowValues[5][0].value = totalIVCA.mexicali;
        rowValues[6][0].value = totalIVCA.orizaba;
        rowValues[7][0].value = totalIVCA.ramosArispe;
        rowValues[8][0].value = totalIVCA.total;
      }

      if(row.key[0] == '05 MAY'){

        rowValues[1][0].value = totalIVCMY.cuautitlan;
        rowValues[2][0].value = totalIVCMY.tultitlan;
        rowValues[3][0].value = totalIVCMY.guadalajara;
        rowValues[4][0].value = totalIVCMY.hermosillo;
        rowValues[5][0].value = totalIVCMY.mexicali;
        rowValues[6][0].value = totalIVCMY.orizaba;
        rowValues[7][0].value = totalIVCMY.ramosArispe;
        rowValues[8][0].value = totalIVCMY.total;
      }

      if(row.key[0] == '06 JUN'){

        rowValues[1][0].value = totalIVCJN.cuautitlan;
        rowValues[2][0].value = totalIVCJN.tultitlan;
        rowValues[3][0].value = totalIVCJN.guadalajara;
        rowValues[4][0].value = totalIVCJN.hermosillo;
        rowValues[5][0].value = totalIVCJN.mexicali;
        rowValues[6][0].value = totalIVCJN.orizaba;
        rowValues[7][0].value = totalIVCJN.ramosArispe;
        rowValues[8][0].value = totalIVCJN.total;
      }

      if(row.key[0] == '07 JUL'){

        rowValues[1][0].value = totalIVCJL.cuautitlan;
        rowValues[2][0].value = totalIVCJL.tultitlan;
        rowValues[3][0].value = totalIVCJL.guadalajara;
        rowValues[4][0].value = totalIVCJL.hermosillo;
        rowValues[5][0].value = totalIVCJL.mexicali;
        rowValues[6][0].value = totalIVCJL.orizaba;
        rowValues[7][0].value = totalIVCJL.ramosArispe;
        rowValues[8][0].value = totalIVCJL.total;

      }
    }

    if(row.rowType == "totalFooter"){
      

      row.values[1].value = totalOperacionIVC.cuautitlan;//TotalSCuautitlan;
      row.values[2].value = totalOperacionIVC.tultitlan;//TotalSTultitlan;
      row.values[3].value = totalOperacionIVC.guadalajara;//TotalSGuadalajara;
      row.values[4].value = totalOperacionIVC.hermosillo;//TotalSHermosillo;
      row.values[5].value = totalOperacionIVC.mexicali;//TotalSMexicali;
      row.values[6].value = totalOperacionIVC.orizaba;//TotalSOrizaba;
      row.values[7].value = totalOperacionIVC.ramosArispe;//TotalSRamozA;
      row.values[8].value = totalOperacionIVC.total;//TotalSRamozA;


    }

  });

  }
//==============================INGRESO OPERADOR===================================
    kmsTotalCC: number = 0;
    kmsTotalVC: number = 0;
    kmsTotalCG: number = 0;
    kmsTotalVG: number = 0;
    kmsTotalCH: number = 0;
    kmsTotalVH: number = 0;
    kmsTotalCLP: number = 0;
    kmsTotalVLP: number = 0;
    kmsTotalCM: number = 0;
    kmsTotalVM: number = 0;
    kmsTotalCMH: number = 0;
    kmsTotalVMH: number = 0;
    kmsTotalCMCA: number = 0;
    kmsTotalVMCA: number = 0;
    kmsTotalCO: number = 0;
    kmsTotalVO: number = 0;
    kmsTotalCRA: number = 0;
    kmsTotalVRA: number = 0;
    kmsTotalCT: number = 0;
    kmsTotalVT: number = 0;

    myDataKey = [];
    myDataKeyG = [];
    myDataKeyH = [];
    myDataKeyM = [];
    myDataKeyO = [];
    myDataKeyRA = [];
    myDataKeyT = [];
  onRowPreparedIO(e){
    if(e.rowType == 'group'){

//==================================CUAUTITLAN====================================================
      if(e.data.key == "CUAUTITLAN"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCC = e.summaryCells[3][0].value;
        this.kmsTotalVC = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "CUAUTITLAN"){
            this.myDataKey.push(c.data.key);
          }

        })
        var myKey = this.myDataKey.includes("CUAUTITLAN")
        if(myKey == true && e.data.key == "CUAUTITLAN"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCC = e.summaryCells[3][0].value;
            this.kmsTotalVC = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCC = 0;
          this.kmsTotalVC = 0;
        }
      }else if(this.newText == ""){
        this.myDataKey = []
      }

//==================================GUADALAJARA====================================================
      if(e.data.key == "GUADALAJARA"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCG = e.summaryCells[3][0].value;
        this.kmsTotalVG = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "GUADALAJARA"){
            this.myDataKeyG.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyG.includes("GUADALAJARA")
        if(myKey == true && e.data.key == "GUADALAJARA"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCG = e.summaryCells[3][0].value;
            this.kmsTotalVG = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCG = 0;
          this.kmsTotalVG = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyG = []
      }
//==================================HERMOSILLO====================================================     
      if(e.data.key == "HERMOSILLO"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCH = e.summaryCells[3][0].value;
        this.kmsTotalVH = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "HERMOSILLO"){
            this.myDataKeyH.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyH.includes("HERMOSILLO")
        if(myKey == true && e.data.key == "HERMOSILLO"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCH = e.summaryCells[3][0].value;
            this.kmsTotalVH = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCH = 0;
          this.kmsTotalVH = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyH = []
      }
//==================================MEXICALI====================================================
      if(e.data.key == "MEXICALI"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCM = e.summaryCells[3][0].value;
        this.kmsTotalVM = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "MEXICALI"){
            this.myDataKeyM.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyM.includes("MEXICALI")
        if(myKey == true && e.data.key == "MEXICALI"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCM = e.summaryCells[3][0].value;
            this.kmsTotalVM = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCM = 0;
          this.kmsTotalVM = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyM = []
      }
//==================================ORIZABA====================================================     
      if(e.data.key == "ORIZABA"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCO = e.summaryCells[3][0].value;
        this.kmsTotalVO = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "ORIZABA"){
            this.myDataKeyO.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyO.includes("ORIZABA")
        if(myKey == true && e.data.key == "ORIZABA"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCO = e.summaryCells[3][0].value;
            this.kmsTotalVO = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCO = 0;
          this.kmsTotalVO = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyO = []
      }
//==================================RAMOS ARIZPE====================================================
      if(e.data.key == "RAMOS ARIZPE"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCRA = e.summaryCells[3][0].value;
        this.kmsTotalVRA = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "RAMOS ARIZPE"){
            this.myDataKeyRA.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyRA.includes("RAMOS ARIZPE")
        if(myKey == true && e.data.key == "RAMOS ARIZPE"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCRA = e.summaryCells[3][0].value;
            this.kmsTotalVRA = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCRA = 0;
          this.kmsTotalVRA = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyRA = []
      }
//==================================TULTITLAN====================================================
      if(e.data.key == "TULTITLAN"){
        if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
        this.kmsTotalCT = e.summaryCells[3][0].value;
        this.kmsTotalVT = e.summaryCells[4][0].value;
        }
      }
      if(this.newText != ""){
        e.cells.forEach((c: any) => {
          if(c.data.key == "TULTITLAN"){
            this.myDataKeyT.push(c.data.key);
          }

        })
        var myKey = this.myDataKeyT.includes("TULTITLAN")
        if(myKey == true && e.data.key == "TULTITLAN"){
          if(e.summaryCells[3][0].value != undefined || e.summaryCells[4][0].value != undefined){
            this.kmsTotalCT = e.summaryCells[3][0].value;
            this.kmsTotalVT = e.summaryCells[4][0].value;
            }
        }
        if(myKey == false){
          this.kmsTotalCT = 0;
          this.kmsTotalVT = 0;
        }
      }else if(this.newText == ""){
        this.myDataKeyT = []
      }
  
      
      this.graficaModel = [
        {udN: "CUAUTITLAN", kmstotalC: this.kmsTotalCC ,  kmstotalV: this.kmsTotalVC},
        {udN: "GUADALAJARA", kmstotalC: this.kmsTotalCG, kmstotalV: this.kmsTotalVG},
        {udN: "HERMOSILLO", kmstotalC: this.kmsTotalCH, kmstotalV: this.kmsTotalVH},
        //{udN: "MACUSPANA", kmstotalC: this.kmsTotalCMCA, kmstotalV: this.kmsTotalVMCA},
        //{udN: "LA PAZ", kmstotalC: this.kmsTotalCLP, kmstotalV: this.kmsTotalVLP},
        {udN: "MEXICALI", kmstotalC: this.kmsTotalCM, kmstotalV: this.kmsTotalVM},
        //{udN: "MIGUEL HIDALGO", kmstotalC: this.kmsTotalCMH, kmstotalV: this.kmsTotalVMH},
        {udN: "ORIZABA", kmstotalC: this.kmsTotalCO, kmstotalV: this.kmsTotalVO},
        {udN: "RAMOS ARIZPE", kmstotalC: this.kmsTotalCRA, kmstotalV: this.kmsTotalVRA},
        {udN: "TULTITLAN", kmstotalC: this.kmsTotalCT, kmstotalV: this.kmsTotalVT},
        
      ]

    }

    
    if (e.rowType == 'totalFooter') {

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
  onCellPreparedIO(e: any) {
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
  customizeIO(e) {  

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

   //==================Formato a la data de la grafica==================================
   formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
}

    clickClientesRutas = (e: any) => {
      this.loadingVisible = true;
      this.getScoreCard();
     };
}


