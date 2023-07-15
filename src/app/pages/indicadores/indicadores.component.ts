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

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};

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
      this.kilometroViajes = data.data.scKmsViaje;
      this.ingresoViajes = data.data.scIngrViaje;
      this.precioMeta = data.data.scPrecioMeta;


      console.log(data.data)

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

      totalOperacionIK.cuautitlan = totalIngresos.cuautitlan / totalKilomentros.cuautitlan;
      totalOperacionIK.tultitlan = totalIngresos.tultitlan / totalKilomentros.tultitlan;
      totalOperacionIK.guadalajara = totalIngresos.guadalajara / totalKilomentros.guadalajara;
      totalOperacionIK.hermosillo = totalIngresos.hermosillo / totalKilomentros.hermosillo;
      totalOperacionIK.mexicali = totalIngresos.mexicali / totalKilomentros.mexicali;
      totalOperacionIK.orizaba = totalIngresos.orizaba / totalKilomentros.orizaba;
      totalOperacionIK.ramosArispe = totalIngresos.ramosArispe / totalKilomentros.ramosArispe;
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
    console.log(totalOperacionIK.cuautitlan)

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

//==============================VIAJES KILOMETROS=================================
  onRowPreparedKV(e){
    if (e.rowType == 'data') {
      
      e.cells.forEach((c: any) => {

        if(c.key.mes == "01 ENE"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanEL.push(c.value)
              let total = this.totalesArrayKV.cuatitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalCE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanEL.push(c.value)

              let total = this.totalesArrayKV.tultitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalTE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraEL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalGE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloEL.push(c.value)

              let total = this.totalesArrayKV.hermosilloEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalHE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliEL.push(c.value)

              let total = this.totalesArrayKV.mexicaliEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalME = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaEL.push(c.value)

              let total = this.totalesArrayKV.orizabaEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalOE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAEL.push(c.value)

              let total = this.totalesArrayKV.ramosAEL.reduce((a, b) => a + b, 0);
              this.sumaTotalEKV.sumaTotalRAE = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanFL.push(c.value)

              let total = this.totalesArrayKV.cuatitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalCF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanFL.push(c.value)

              let total = this.totalesArrayKV.tultitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalTF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraFL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalGF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloFL.push(c.value)

              let total = this.totalesArrayKV.hermosilloFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalHF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliFL.push(c.value)

              let total = this.totalesArrayKV.mexicaliFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalMF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaFL.push(c.value)

              let total = this.totalesArrayKV.orizabaFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalOF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAFL.push(c.value)

              let total = this.totalesArrayKV.ramosAFL.reduce((a, b) => a + b, 0);
              this.sumaTotalFKV.sumaTotalRAF = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanML.push(c.value)

              let total = this.totalesArrayKV.cuatitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalCM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanML.push(c.value)

              let total = this.totalesArrayKV.tultitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalTM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraML.push(c.value)

              let total = this.totalesArrayKV.guadalajaraML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalGM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloML.push(c.value)

              let total = this.totalesArrayKV.hermosilloML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalHM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliML.push(c.value)

              let total = this.totalesArrayKV.mexicaliML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalMM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaML.push(c.value)

              let total = this.totalesArrayKV.orizabaML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalOM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAML.push(c.value)

              let total = this.totalesArrayKV.ramosAML.reduce((a, b) => a + b, 0);
              this.sumaTotalMKV.sumaTotalRAM = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanAL.push(c.value)

              let total = this.totalesArrayKV.cuatitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalCA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanAL.push(c.value)

              let total = this.totalesArrayKV.tultitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalTA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraAL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalGA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloAL.push(c.value)

              let total = this.totalesArrayKV.hermosilloAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalHA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliAL.push(c.value)

              let total = this.totalesArrayKV.mexicaliAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalMA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaAL.push(c.value)

              let total = this.totalesArrayKV.orizabaAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalOA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAAL.push(c.value)

              let total = this.totalesArrayKV.ramosAAL.reduce((a, b) => a + b, 0);
              this.sumaTotalAKV.sumaTotalRAA = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanMYL.push(c.value)

              let total = this.totalesArrayKV.cuatitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalCMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanMYL.push(c.value)

              let total = this.totalesArrayKV.tultitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalTMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraMYL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalGMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloMYL.push(c.value)

              let total = this.totalesArrayKV.hermosilloMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalHMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliMYL.push(c.value)

              let total = this.totalesArrayKV.mexicaliMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalMMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaMYL.push(c.value)

              let total = this.totalesArrayKV.orizabaMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalOMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAMYL.push(c.value)

              let total = this.totalesArrayKV.ramosAMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMYKV.sumaTotalRAMY = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanJNL.push(c.value)

              let total = this.totalesArrayKV.cuatitlanJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalCJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanJNL.push(c.value)

              let total = this.totalesArrayKV.tultitlanJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalTJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraJNL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalGJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloJNL.push(c.value)

              let total = this.totalesArrayKV.hermosilloJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalHJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliJNL.push(c.value)

              let total = this.totalesArrayKV.mexicaliJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalMJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaJNL.push(c.value)

              let total = this.totalesArrayKV.orizabaJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalOJN = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAJNL.push(c.value)

              let total = this.totalesArrayKV.ramosAJNL.reduce((a, b) => a + b, 0);
              this.sumaTotalJNKV.sumaTotalRAJN = total
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
            if (this.cuautitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.cuatitlanJLL.push(c.value)

              let total = this.totalesArrayKV.cuatitlanJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalCJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlanKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.tultitlanJLL.push(c.value)

              let total = this.totalesArrayKV.tultitlanJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalTJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajaraKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.guadalajaraJLL.push(c.value)

              let total = this.totalesArrayKV.guadalajaraJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalGJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosilloKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.hermosilloJLL.push(c.value)

              let total = this.totalesArrayKV.hermosilloJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalHJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicaliKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.mexicaliJLL.push(c.value)

              let total = this.totalesArrayKV.mexicaliJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalMJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizabaKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.orizabaJLL.push(c.value)

              let total = this.totalesArrayKV.orizabaJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalOJL = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispeKV >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalesArrayKV.ramosAJLL.push(c.value)

              let total = this.totalesArrayKV.ramosAJLL.reduce((a, b) => a + b, 0);
              this.sumaTotalJLKV.sumaTotalRAJL = total
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
          this.ingresosKEKV = new IngresosKEKV;
          this.totalKEKV = new TotalKEKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKEKV.cuautitlanE = this.sumaTotalEKV.sumaTotalCE;
        this.totalKEKV.cuautitlanTE =  this.ingresosKEKV.cuautitlanE / this.totalesArrayKV.cuatitlanEL.length;
        e.summaryCells[2][0].value =  this.totalKEKV.cuautitlanTE;
              
        this.ingresosKEKV.tultitlanE = this.sumaTotalEKV.sumaTotalTE;
        this.totalKEKV.tultitlanTE = this.ingresosKEKV.tultitlanE / this.totalesArrayKV.tultitlanEL.length;
        e.summaryCells[3][0].value = this.totalKEKV.tultitlanTE;
        
        this.ingresosKEKV.guadalajaraE = this.sumaTotalEKV.sumaTotalGE;
        this.totalKEKV.guadalajaraTE = this.ingresosKEKV.guadalajaraE / this.totalesArrayKV.guadalajaraEL.length;
        e.summaryCells[4][0].value = this.totalKEKV.guadalajaraTE;

        this.ingresosKEKV.hermosilloE = this.sumaTotalEKV.sumaTotalHE;
        this.totalKEKV.hermosilloTE = this.ingresosKEKV.hermosilloE / this.totalesArrayKV.hermosilloEL.length;
        e.summaryCells[5][0].value = this.totalKEKV.hermosilloTE;

        this.ingresosKEKV.mexicaliE = this.sumaTotalEKV.sumaTotalME;
        this.totalKEKV.mexicaliTE = this.ingresosKEKV.mexicaliE / this.totalesArrayKV.mexicaliEL.length;
        e.summaryCells[6][0].value = this.totalKEKV.mexicaliTE;

        this.ingresosKEKV.orizabaE = this.sumaTotalEKV.sumaTotalOE;
        this.totalKEKV.orizabaTE = this.ingresosKEKV.orizabaE / this.totalesArrayKV.orizabaEL.length;
        e.summaryCells[7][0].value = this.totalKEKV.orizabaTE;

        this.ingresosKEKV.ramisArispeE = this.sumaTotalEKV.sumaTotalRAE;
        this.totalKEKV.ramisArispeTE = this.ingresosKEKV.ramisArispeE / this.totalesArrayKV.ramosAEL.length;
        e.summaryCells[8][0].value = this.totalKEKV.ramisArispeTE;

        // this.ingresosKE.totalE = this.sumaTotalE.sumaTotalTlE;
        // this.totalKE.totalTE = this.ingresosKE.totalE / this.totalEL.length;
        // e.summaryCells[9][0].value = this.totalKE.totalTE;
      }

      if (e.data.key == '02 FEB') {
        if(e.isExpanded == true){
          this.ingresosKFKV = new IngresosKFKV;
          this.totalKFKV = new TotalKFKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKFKV.cuautitlanF = this.sumaTotalFKV.sumaTotalCF;
        this.totalKFKV.cuautitlanTF =  this.ingresosKFKV.cuautitlanF / this.totalesArrayKV.cuatitlanFL.length;
        e.summaryCells[2][0].value =  this.totalKFKV.cuautitlanTF;
        
        this.ingresosKFKV.tultitlanF = this.sumaTotalFKV.sumaTotalTF;
        this.totalKFKV.tultitlanTF = this.ingresosKFKV.tultitlanF / this.totalesArrayKV.tultitlanFL.length;
        e.summaryCells[3][0].value = this.totalKFKV.tultitlanTF;
        
        this.ingresosKFKV.guadalajaraF = this.sumaTotalFKV.sumaTotalGF;
        this.totalKFKV.guadalajaraTF = this.ingresosKFKV.guadalajaraF / this.totalesArrayKV.guadalajaraFL.length;
        e.summaryCells[4][0].value = this.totalKFKV.guadalajaraTF;

        this.ingresosKFKV.hermosilloF = this.sumaTotalFKV.sumaTotalHF;
        this.totalKFKV.hermosilloTF = this.ingresosKFKV.hermosilloF / this.totalesArrayKV.hermosilloFL.length;
        e.summaryCells[5][0].value = this.totalKFKV.hermosilloTF;

        this.ingresosKFKV.mexicaliF = this.sumaTotalFKV.sumaTotalMF;
        this.totalKFKV.mexicaliTF = this.ingresosKFKV.mexicaliF / this.totalesArrayKV.mexicaliFL.length;
        e.summaryCells[6][0].value = this.totalKFKV.mexicaliTF;

        this.ingresosKFKV.orizabaF = this.sumaTotalFKV.sumaTotalOF;
        this.totalKFKV.orizabaTF = this.ingresosKFKV.orizabaF / this.totalesArrayKV.orizabaFL.length;
        e.summaryCells[7][0].value = this.totalKFKV.orizabaTF;

        this.ingresosKFKV.ramisArispeF = this.sumaTotalFKV.sumaTotalRAF;
        this.totalKFKV.ramisArispeTF = this.ingresosKFKV.ramisArispeF / this.totalesArrayKV.ramosAFL.length;
        e.summaryCells[8][0].value = this.totalKFKV.ramisArispeTF;

        // this.ingresosKF.totalF = this.sumaTotalF.sumaTotalTlF;
        // this.totalKF.totalTF = this.ingresosKF.totalF / this.totalFL.length;
        // e.summaryCells[9][0].value = this.totalKF.totalTF;


      }

      if (e.data.key == '03 MAR') {
        if(e.isExpanded == true){
          this.ingresosKMKV = new IngresosKMKV;
          this.totalKMKV = new TotalKMKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKMKV.cuautitlanM = this.sumaTotalMKV.sumaTotalCM;
        this.totalKMKV.cuautitlanTM =  this.ingresosKMKV.cuautitlanM / this.totalesArrayKV.cuatitlanML.length;
        e.summaryCells[2][0].value =  this.totalKMKV.cuautitlanTM;
        
        this.ingresosKMKV.tultitlanM = this.sumaTotalMKV.sumaTotalTM;
        this.totalKMKV.tultitlanTM = this.ingresosKMKV.tultitlanM / this.totalesArrayKV.tultitlanML.length;
        e.summaryCells[3][0].value = this.totalKMKV.tultitlanTM;
        
        this.ingresosKMKV.guadalajaraM = this.sumaTotalMKV.sumaTotalGM;
        this.totalKMKV.guadalajaraTM = this.ingresosKMKV.guadalajaraM / this.totalesArrayKV.guadalajaraML.length;
        e.summaryCells[4][0].value = this.totalKMKV.guadalajaraTM;

        this.ingresosKMKV.hermosilloM = this.sumaTotalMKV.sumaTotalHM;
        this.totalKMKV.hermosilloTM = this.ingresosKMKV.hermosilloM / this.totalesArrayKV.hermosilloML.length;
        e.summaryCells[5][0].value = this.totalKMKV.hermosilloTM;

        this.ingresosKMKV.mexicaliM = this.sumaTotalMKV.sumaTotalMM;
        this.totalKMKV.mexicaliTM = this.ingresosKMKV.mexicaliM / this.totalesArrayKV.mexicaliML.length;
        e.summaryCells[6][0].value = this.totalKMKV.mexicaliTM;

        this.ingresosKMKV.orizabaM = this.sumaTotalMKV.sumaTotalOM;
        this.totalKMKV.orizabaTM = this.ingresosKMKV.orizabaM / this.totalesArrayKV.orizabaML.length;
        e.summaryCells[7][0].value = this.totalKMKV.orizabaTM;

        this.ingresosKMKV.ramisArispeM = this.sumaTotalMKV.sumaTotalRAM;
        this.totalKMKV.ramisArispeTM = this.ingresosKMKV.ramisArispeM / this.totalesArrayKV.ramosAML.length;
        e.summaryCells[8][0].value = this.totalKMKV.ramisArispeTM;

        // this.ingresosKM.totalM = this.sumaTotalM.sumaTotalTlM;
        // this.totalKM.totalTM = this.ingresosKM.totalM / this.totalML.length;
        // e.summaryCells[9][0].value = this.totalKM.totalTM;


      }

      if (e.data.key == '04 ABR') {
        if(e.isExpanded == true){
          this.ingresosKAKV = new IngresosKAKV;
          this.totalKAKV = new TotalKAKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKAKV.cuautitlanA = this.sumaTotalAKV.sumaTotalCA;
        this.totalKAKV.cuautitlanTA =  this.ingresosKAKV.cuautitlanA / this.totalesArrayKV.cuatitlanAL.length;
        if(Number.isNaN(this.totalKAKV.cuautitlanTA)){
          this.totalKAKV.cuautitlanTA = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKAKV.cuautitlanTA;
        
        
        this.ingresosKAKV.tultitlanA = this.sumaTotalAKV.sumaTotalTA;
        this.totalKAKV.tultitlanTA = this.ingresosKAKV.tultitlanA / this.totalesArrayKV.tultitlanAL.length;
        if(Number.isNaN(this.totalKAKV.tultitlanTA)){
          this.totalKAKV.tultitlanTA = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKAKV.tultitlanTA;
        
        this.ingresosKAKV.guadalajaraA = this.sumaTotalAKV.sumaTotalGA;
        this.totalKAKV.guadalajaraTA = this.ingresosKAKV.guadalajaraA / this.totalesArrayKV.guadalajaraAL.length;
        if(Number.isNaN(this.totalKAKV.guadalajaraTA)){
          this.totalKAKV.guadalajaraTA = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKAKV.guadalajaraTA;

        this.ingresosKAKV.hermosilloA = this.sumaTotalAKV.sumaTotalHA;
        this.totalKAKV.hermosilloTA = this.ingresosKAKV.hermosilloA / this.totalesArrayKV.hermosilloAL.length;
        if(Number.isNaN(this.totalKAKV.hermosilloTA)){
          this.totalKAKV.hermosilloTA = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKAKV.hermosilloTA;

        this.ingresosKAKV.mexicaliA = this.sumaTotalAKV.sumaTotalMA;
        this.totalKAKV.mexicaliTA = this.ingresosKAKV.mexicaliA / this.totalesArrayKV.mexicaliAL.length;
        if(Number.isNaN(this.totalKAKV.mexicaliTA)){
          this.totalKAKV.mexicaliTA = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKAKV.mexicaliTA;

        this.ingresosKAKV.orizabaA = this.sumaTotalAKV.sumaTotalOA;
        this.totalKAKV.orizabaTA = this.ingresosKAKV.orizabaA / this.totalesArrayKV.orizabaAL.length;
        if(Number.isNaN(this.totalKAKV.orizabaTA)){
          this.totalKAKV.orizabaTA = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKAKV.orizabaTA;
        

        this.ingresosKAKV.ramisArispeA = this.sumaTotalAKV.sumaTotalRAA;
        this.totalKAKV.ramisArispeTA = this.ingresosKAKV.ramisArispeA / this.totalesArrayKV.ramosAAL.length;
        if(Number.isNaN(this.totalKAKV.ramisArispeTA)){
          this.totalKAKV.ramisArispeTA = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKAKV.ramisArispeTA;

        // this.ingresosKA.totalA = this.sumaTotalA.sumaTotalTlA;
        // this.totalKA.totalTA = this.ingresosKA.totalA / this.totalAL.length;
        // if(Number.isNaN(this.totalKA.totalTA)){
        //   this.totalKA.totalTA = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKA.totalTA;


      }

      if (e.data.key == '05 MAY') {
        if(e.isExpanded == true){
          this.ingresosKMYKV = new IngresosKMYKV;
          this.totalKMYKV = new TotalKMYKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKMYKV.cuautitlanMY = this.sumaTotalMYKV.sumaTotalCMY;
        this.totalKMYKV.cuautitlanTMY =  this.ingresosKMYKV.cuautitlanMY / this.totalesArrayKV.cuatitlanMYL.length;
        if(Number.isNaN(this.totalKMYKV.cuautitlanTMY)){
          this.totalKMYKV.cuautitlanTMY = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKMYKV.cuautitlanTMY;
        
        
        this.ingresosKMYKV.tultitlanMY = this.sumaTotalMYKV.sumaTotalTMY;
        this.totalKMYKV.tultitlanTMY = this.ingresosKMYKV.tultitlanMY / this.totalesArrayKV.tultitlanMYL.length;
        if(Number.isNaN(this.totalKMYKV.tultitlanTMY)){
          this.totalKMYKV.tultitlanTMY = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKMYKV.tultitlanTMY;
        
        this.ingresosKMYKV.guadalajaraMY = this.sumaTotalMYKV.sumaTotalGMY;
        this.totalKMYKV.guadalajaraTMY = this.ingresosKMYKV.guadalajaraMY / this.totalesArrayKV.guadalajaraMYL.length;
        if(Number.isNaN(this.totalKMYKV.guadalajaraTMY)){
          this.totalKMYKV.guadalajaraTMY = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKMYKV.guadalajaraTMY;

        this.ingresosKMYKV.hermosilloMY = this.sumaTotalMYKV.sumaTotalHMY;
        this.totalKMYKV.hermosilloTMY = this.ingresosKMYKV.hermosilloMY / this.totalesArrayKV.hermosilloMYL.length;
        if(Number.isNaN(this.totalKMYKV.hermosilloTMY)){
          this.totalKMYKV.hermosilloTMY = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKMYKV.hermosilloTMY;

        this.ingresosKMYKV.mexicaliMY = this.sumaTotalMYKV.sumaTotalMMY;
        this.totalKMYKV.mexicaliTMY = this.ingresosKMYKV.mexicaliMY / this.totalesArrayKV.mexicaliMYL.length;
        if(Number.isNaN(this.totalKMYKV.mexicaliTMY)){
          this.totalKMYKV.mexicaliTMY = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKMYKV.mexicaliTMY;

        this.ingresosKMYKV.orizabaMY = this.sumaTotalMYKV.sumaTotalOMY;
        this.totalKMYKV.orizabaTMY = this.ingresosKMYKV.orizabaMY / this.totalesArrayKV.orizabaMYL.length;
        if(Number.isNaN(this.totalKMYKV.orizabaTMY)){
          this.totalKMYKV.orizabaTMY = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKMYKV.orizabaTMY;
        

        this.ingresosKMYKV.ramisArispeMY = this.sumaTotalMYKV.sumaTotalRAMY;
        this.totalKMYKV.ramisArispeTMY = this.ingresosKMYKV.ramisArispeMY / this.totalesArrayKV.ramosAMYL.length;
        if(Number.isNaN(this.totalKMYKV.ramisArispeTMY)){
          this.totalKMYKV.ramisArispeTMY = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKMYKV.ramisArispeTMY;

        // this.ingresosKMY.totalMY = this.sumaTotalMY.sumaTotalTlMY;
        // this.totalKMY.totalTMY = this.ingresosKMY.totalMY / this.totalMYL.length;
        // if(Number.isNaN(this.totalKMY.totalTMY)){
        //   this.totalKMY.totalTMY = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      }

      if (e.data.key == '06 JUN') {
        if(e.isExpanded == true){
          this.ingresosKJNKV = new IngresosKJNKV;
          this.totalKJNKV = new TotalKJNKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKJNKV.cuautitlanJN = this.sumaTotalJNKV.sumaTotalCJN;
        this.totalKJNKV.cuautitlanTJN =  this.ingresosKJNKV.cuautitlanJN / this.totalesArrayKV.cuatitlanJNL.length;
        if(Number.isNaN(this.totalKJNKV.cuautitlanTJN)){
          this.totalKJNKV.cuautitlanTJN = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKJNKV.cuautitlanTJN;
        
        this.ingresosKJNKV.tultitlanJN = this.sumaTotalJNKV.sumaTotalTJN;
        this.totalKJNKV.tultitlanTJN = this.ingresosKJNKV.tultitlanJN / this.totalesArrayKV.tultitlanJNL.length;
        if(Number.isNaN(this.totalKJNKV.tultitlanTJN)){
          this.totalKJNKV.tultitlanTJN = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKJNKV.tultitlanTJN;
        
        this.ingresosKJNKV.guadalajaraJN = this.sumaTotalJNKV.sumaTotalGJN;
        this.totalKJNKV.guadalajaraTJN = this.ingresosKJNKV.guadalajaraJN / this.totalesArrayKV.guadalajaraJNL.length;
        if(Number.isNaN(this.totalKJNKV.guadalajaraTJN)){
          this.totalKJNKV.guadalajaraTJN = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKJNKV.guadalajaraTJN;

        this.ingresosKJNKV.hermosilloJN = this.sumaTotalJNKV.sumaTotalHJN;
        this.totalKJNKV.hermosilloTJN = this.ingresosKJNKV.hermosilloJN / this.totalesArrayKV.hermosilloJNL.length;
        if(Number.isNaN(this.totalKJNKV.hermosilloTJN)){
          this.totalKJNKV.hermosilloTJN = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKJNKV.hermosilloTJN;

        this.ingresosKJNKV.mexicaliJN = this.sumaTotalJNKV.sumaTotalMJN;
        this.totalKJNKV.mexicaliTJN = this.ingresosKJNKV.mexicaliJN / this.totalesArrayKV.mexicaliJNL.length;
        if(Number.isNaN(this.totalKJNKV.mexicaliTJN)){
          this.totalKJNKV.mexicaliTJN = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKJNKV.mexicaliTJN;

        this.ingresosKJNKV.orizabaJN = this.sumaTotalJNKV.sumaTotalOJN;
        this.totalKJNKV.orizabaTJN = this.ingresosKJNKV.orizabaJN / this.totalesArrayKV.orizabaJNL.length;
        if(Number.isNaN(this.totalKJNKV.orizabaTJN)){
          this.totalKJNKV.orizabaTJN = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKJNKV.orizabaTJN;
        

        this.ingresosKJNKV.ramisArispeJN = this.sumaTotalJNKV.sumaTotalRAJN;
        this.totalKJNKV.ramisArispeTJN = this.ingresosKJNKV.ramisArispeJN / this.totalesArrayKV.ramosAJNL.length;
        if(Number.isNaN(this.totalKJNKV.ramisArispeTJN)){
          this.totalKJNKV.ramisArispeTJN = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKJNKV.ramisArispeTJN;

        // this.ingresosKJN.totalMY = this.sumaTotalJN.sumaTotalTlMY;
        // this.totalKMY.totalTMY = this.ingresosKJN.totalMY / this.totalMYL.length;
        // if(Number.isNaN(this.totalKMY.totalTMY)){
        //   this.totalKMY.totalTMY = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      }

      if (e.data.key == '07 JUL') {
        if(e.isExpanded == true){
          this.ingresosKJLKV = new IngresosKJLKV;
          this.totalKJL = new TotalKJLKV;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKJLKV.cuautitlanJL = this.sumaTotalJLKV.sumaTotalCJL;
        this.totalKJLKV.cuautitlanTJL =  this.ingresosKJLKV.cuautitlanJL / this.totalesArrayKV.cuatitlanJLL.length;
        if(Number.isNaN(this.totalKJLKV.cuautitlanTJL)){
          this.totalKJLKV.cuautitlanTJL = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKJLKV.cuautitlanTJL;
        
        
        this.ingresosKJLKV.tultitlanJL = this.sumaTotalJLKV.sumaTotalTJL;
        this.totalKJLKV.tultitlanTJL = this.ingresosKJLKV.tultitlanJL / this.totalesArrayKV.tultitlanJLL.length;
        if(Number.isNaN(this.totalKJLKV.tultitlanTJL)){
          this.totalKJLKV.tultitlanTJL = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKJLKV.tultitlanTJL;
        
        this.ingresosKJLKV.guadalajaraJL = this.sumaTotalJLKV.sumaTotalGJL;
        this.totalKJLKV.guadalajaraTJL = this.ingresosKJLKV.guadalajaraJL / this.totalesArrayKV.guadalajaraJLL.length;
        if(Number.isNaN(this.totalKJLKV.guadalajaraTJL)){
          this.totalKJLKV.guadalajaraTJL = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKJLKV.guadalajaraTJL;

        this.ingresosKJLKV.hermosilloJL = this.sumaTotalJLKV.sumaTotalHJL;
        this.totalKJLKV.hermosilloTJL = this.ingresosKJLKV.hermosilloJL / this.totalesArrayKV.hermosilloJLL.length;
        if(Number.isNaN(this.totalKJLKV.hermosilloTJL)){
          this.totalKJLKV.hermosilloTJL = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKJLKV.hermosilloTJL;

        this.ingresosKJLKV.mexicaliJL = this.sumaTotalJLKV.sumaTotalMJL;
        this.totalKJLKV.mexicaliTJL = this.ingresosKJLKV.mexicaliJL / this.totalesArrayKV.mexicaliJLL.length;
        if(Number.isNaN(this.totalKJLKV.mexicaliTJL)){
          this.totalKJLKV.mexicaliTJL = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKJLKV.mexicaliTJL;

        this.ingresosKJLKV.orizabaJL = this.sumaTotalJLKV.sumaTotalOJL;
        this.totalKJLKV.orizabaTJL = this.ingresosKJLKV.orizabaJL / this.totalesArrayKV.orizabaJLL.length;
        if(Number.isNaN(this.totalKJLKV.orizabaTJL)){
          this.totalKJLKV.orizabaTJL = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKJLKV.orizabaTJL;
        

        this.ingresosKJLKV.ramisArispeJL = this.sumaTotalJLKV.sumaTotalRAJL;
        this.totalKJLKV.ramisArispeTJL = this.ingresosKJLKV.ramisArispeJL / this.totalesArrayKV.ramosAJLL.length;
        if(Number.isNaN(this.totalKJLKV.ramisArispeTJL)){
          this.totalKJLKV.ramisArispeTJL = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKJLKV.ramisArispeTJL;

        // this.ingresosKJL.totalMY = this.sumaTotalJL.sumaTotalTlMY;
        // this.totalKJL.totalTMY = this.ingresosKJL.totalMY / this.totalMYL.length;
        // if(Number.isNaN(this.totalKJL.totalTMY)){
        //   this.totalKJL.totalTMY = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKJL.totalTMY;


      }

      // if (e.data.key == '08 AGO') {
      //   if(e.isExpanded == true){
      //     this.ingresosKAG = new IngresosKAG;
      //     this.totalKAG = new TotalKAG;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKAG.cuautitlanAG = this.sumaTotalAG.sumaTotalCAG;
      //   this.totalKAG.cuautitlanTAG =  this.ingresosKAG.cuautitlanAG / this.totalesArray.cuatitlanAGL.length;
      //   if(Number.isNaN(this.totalKAG.cuautitlanTAG)){
      //     this.totalKAG.cuautitlanTAG = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKAG.cuautitlanTAG;
        
        
      //   this.ingresosKAG.tultitlanAG = this.sumaTotalAG.sumaTotalTAG;
      //   this.totalKAG.tultitlanTAG = this.ingresosKAG.tultitlanAG / this.totalesArray.tultitlanAGL.length;
      //   if(Number.isNaN(this.totalKAG.tultitlanTAG)){
      //     this.totalKAG.tultitlanTAG = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKAG.tultitlanTAG;
        
      //   this.ingresosKAG.guadalajaraAG = this.sumaTotalAG.sumaTotalGAG;
      //   this.totalKAG.guadalajaraTAG = this.ingresosKAG.guadalajaraAG / this.totalesArray.guadalajaraAGL.length;
      //   if(Number.isNaN(this.totalKAG.guadalajaraTAG)){
      //     this.totalKAG.guadalajaraTAG = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKAG.guadalajaraTAG;

      //   this.ingresosKAG.hermosilloAG = this.sumaTotalAG.sumaTotalHAG;
      //   this.totalKAG.hermosilloTAG = this.ingresosKAG.hermosilloAG / this.totalesArray.hermosilloAGL.length;
      //   if(Number.isNaN(this.totalKAG.hermosilloTAG)){
      //     this.totalKAG.hermosilloTAG = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKAG.hermosilloTAG;

      //   this.ingresosKAG.mexicaliAG = this.sumaTotalAG.sumaTotalMAG;
      //   this.totalKAG.mexicaliTAG = this.ingresosKAG.mexicaliAG / this.totalesArray.mexicaliAGL.length;
      //   if(Number.isNaN(this.totalKAG.mexicaliTAG)){
      //     this.totalKAG.mexicaliTAG = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKAG.mexicaliTAG;

      //   this.ingresosKAG.orizabaAG = this.sumaTotalAG.sumaTotalOAG;
      //   this.totalKAG.orizabaTAG = this.ingresosKAG.orizabaAG / this.totalesArray.orizabaAGL.length;
      //   if(Number.isNaN(this.totalKAG.orizabaTAG)){
      //     this.totalKAG.orizabaTAG = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKAG.orizabaTAG;
        

      //   this.ingresosKAG.ramisArispeAG = this.sumaTotalAG.sumaTotalRAAG;
      //   this.totalKAG.ramisArispeTAG = this.ingresosKAG.ramisArispeAG / this.totalesArray.ramosAAGL.length;
      //   if(Number.isNaN(this.totalKAG.ramisArispeTAG)){
      //     this.totalKAG.ramisArispeTAG = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKAG.ramisArispeTAG;

      //   // this.ingresosKAG.totalMY = this.sumaTotalAG.sumaTotalTlMY;
      //   // this.totalKMY.totalTMY = this.ingresosKAG.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKMY.totalTMY)){
      //   //   this.totalKMY.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      // }

      // if (e.data.key == '09 SEP') {
      //   if(e.isExpanded == true){
      //     this.ingresosKS = new IngresosKS;
      //     this.totalKS = new TotalKS;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKS.cuautitlanS = this.sumaTotalS.sumaTotalCS;
      //   this.totalKS.cuautitlanTS =  this.ingresosKS.cuautitlanS / this.totalesArray.cuatitlanSL.length;
      //   if(Number.isNaN(this.totalKS.cuautitlanTS)){
      //     this.totalKS.cuautitlanTS = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKS.cuautitlanTS;
        
        
      //   this.ingresosKS.tultitlanS = this.sumaTotalS.sumaTotalTS;
      //   this.totalKS.tultitlanTS = this.ingresosKS.tultitlanS / this.totalesArray.tultitlanSL.length;
      //   if(Number.isNaN(this.totalKS.tultitlanTS)){
      //     this.totalKS.tultitlanTS = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKS.tultitlanTS;
        
      //   this.ingresosKS.guadalajaraS = this.sumaTotalS.sumaTotalGS;
      //   this.totalKS.guadalajaraTS = this.ingresosKS.guadalajaraS / this.totalesArray.guadalajaraSL.length;
      //   if(Number.isNaN(this.totalKS.guadalajaraTS)){
      //     this.totalKS.guadalajaraTS = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKS.guadalajaraTS;

      //   this.ingresosKS.hermosilloS = this.sumaTotalS.sumaTotalHS;
      //   this.totalKS.hermosilloTS = this.ingresosKS.hermosilloS / this.totalesArray.hermosilloSL.length;
      //   if(Number.isNaN(this.totalKS.hermosilloTS)){
      //     this.totalKS.hermosilloTS = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKS.hermosilloTS;

      //   this.ingresosKS.mexicaliS = this.sumaTotalS.sumaTotalMS;
      //   this.totalKS.mexicaliTS = this.ingresosKS.mexicaliS / this.totalesArray.mexicaliSL.length;
      //   if(Number.isNaN(this.totalKS.mexicaliTS)){
      //     this.totalKS.mexicaliTS = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKS.mexicaliTS;

      //   this.ingresosKS.orizabaS = this.sumaTotalS.sumaTotalOS;
      //   this.totalKS.orizabaTS = this.ingresosKS.orizabaS / this.totalesArray.orizabaSL.length;
      //   if(Number.isNaN(this.totalKS.orizabaTS)){
      //     this.totalKS.orizabaTS = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKS.orizabaTS;
        

      //   this.ingresosKS.ramisArispeS = this.sumaTotalS.sumaTotalRAS;
      //   this.totalKS.ramisArispeTS = this.ingresosKS.ramisArispeS / this.totalesArray.ramosASL.length;
      //   if(Number.isNaN(this.totalKS.ramisArispeTS)){
      //     this.totalKS.ramisArispeTS = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKS.ramisArispeTS;

      //   // this.ingresosKS.totalMY = this.sumaTotalS.sumaTotalTlMY;
      //   // this.totalKMY.totalTMY = this.ingresosKS.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKMY.totalTMY)){
      //   //   this.totalKMY.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      // }

      // if (e.data.key == '10 OCT') {
      //   if(e.isExpanded == true){
      //     this.ingresosKOC = new IngresosKOC;
      //     this.totalKOC = new TotalKOC;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKOC.cuautitlanOC = this.sumaTotalOC.sumaTotalCOC;
      //   this.totalKOC.cuautitlanTOC =  this.ingresosKOC.cuautitlanOC / this.totalesArray.cuatitlanOCL.length;
      //   if(Number.isNaN(this.totalKOC.cuautitlanTOC)){
      //     this.totalKOC.cuautitlanTOC = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKOC.cuautitlanTOC;
        
        
      //   this.ingresosKOC.tultitlanOC = this.sumaTotalOC.sumaTotalTOC;
      //   this.totalKOC.tultitlanTOC = this.ingresosKOC.tultitlanOC / this.totalesArray.tultitlanOCL.length;
      //   if(Number.isNaN(this.totalKOC.tultitlanTOC)){
      //     this.totalKOC.tultitlanTOC = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKOC.tultitlanTOC;
        
      //   this.ingresosKOC.guadalajaraOC = this.sumaTotalOC.sumaTotalGOC;
      //   this.totalKOC.guadalajaraTOC = this.ingresosKOC.guadalajaraOC / this.totalesArray.guadalajaraOCL.length;
      //   if(Number.isNaN(this.totalKOC.guadalajaraTOC)){
      //     this.totalKOC.guadalajaraTOC = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKOC.guadalajaraTOC;

      //   this.ingresosKOC.hermosilloOC = this.sumaTotalOC.sumaTotalHOC;
      //   this.totalKOC.hermosilloTOC = this.ingresosKOC.hermosilloOC / this.totalesArray.hermosilloOCL.length;
      //   if(Number.isNaN(this.totalKOC.hermosilloTOC)){
      //     this.totalKOC.hermosilloTOC = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKOC.hermosilloTOC;

      //   this.ingresosKOC.mexicaliOC = this.sumaTotalOC.sumaTotalMOC;
      //   this.totalKOC.mexicaliTOC = this.ingresosKOC.mexicaliOC / this.totalesArray.mexicaliOCL.length;
      //   if(Number.isNaN(this.totalKOC.mexicaliTOC)){
      //     this.totalKOC.mexicaliTOC = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKOC.mexicaliTOC;

      //   this.ingresosKOC.orizabaOC = this.sumaTotalOC.sumaTotalOOC;
      //   this.totalKOC.orizabaTOC = this.ingresosKOC.orizabaOC / this.totalesArray.orizabaOCL.length;
      //   if(Number.isNaN(this.totalKOC.orizabaTOC)){
      //     this.totalKOC.orizabaTOC = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKOC.orizabaTOC;
        

      //   this.ingresosKOC.ramisArispeOC = this.sumaTotalOC.sumaTotalRAOC;
      //   this.totalKOC.ramisArispeTOC = this.ingresosKOC.ramisArispeOC / this.totalesArray.ramosAOCL.length;
      //   if(Number.isNaN(this.totalKOC.ramisArispeTOC)){
      //     this.totalKOC.ramisArispeTOC = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKOC.ramisArispeTOC;

      //   // this.ingresosKOC.totalMY = this.sumaTotalOC.sumaTotalTlMY;
      //   // this.totalKMY.totalTMY = this.ingresosKOC.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKMY.totalTMY)){
      //   //   this.totalKMY.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      // }

      // if (e.data.key == '11 NOV') {
      //   if(e.isExpanded == true){
      //     this.ingresosKNV = new IngresosKNV;
      //     this.totalKNV = new TotalKNV;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKNV.cuautitlanNV = this.sumaTotalNV.sumaTotalCNV;
      //   this.totalKNV.cuautitlanTNV =  this.ingresosKNV.cuautitlanNV / this.totalesArray.cuatitlanNVL.length;
      //   if(Number.isNaN(this.totalKNV.cuautitlanTNV)){
      //     this.totalKNV.cuautitlanTNV = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKNV.cuautitlanTNV;
        
        
      //   this.ingresosKNV.tultitlanNv = this.sumaTotalNV.sumaTotalTNV;
      //   this.totalKNV.tultitlanTNV = this.ingresosKNV.tultitlanNv / this.totalesArray.tultitlanNVL.length;
      //   if(Number.isNaN(this.totalKNV.tultitlanTNV)){
      //     this.totalKNV.tultitlanTNV = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKNV.tultitlanTNV;
        
      //   this.ingresosKNV.guadalajaraNV = this.sumaTotalNV.sumaTotalGNV;
      //   this.totalKNV.guadalajaraTNV = this.ingresosKNV.guadalajaraNV / this.totalesArray.guadalajaraNVL.length;
      //   if(Number.isNaN(this.totalKNV.guadalajaraTNV)){
      //     this.totalKNV.guadalajaraTNV = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKNV.guadalajaraTNV;

      //   this.ingresosKNV.hermosilloNV = this.sumaTotalNV.sumaTotalHNV;
      //   this.totalKNV.hermosilloTNV = this.ingresosKNV.hermosilloNV / this.totalesArray.hermosilloNVL.length;
      //   if(Number.isNaN(this.totalKNV.hermosilloTNV)){
      //     this.totalKNV.hermosilloTNV = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKNV.hermosilloTNV;

      //   this.ingresosKNV.mexicaliNV = this.sumaTotalNV.sumaTotalMNV;
      //   this.totalKNV.mexicaliTNV = this.ingresosKNV.mexicaliNV / this.totalesArray.mexicaliNVL.length;
      //   if(Number.isNaN(this.totalKNV.mexicaliTNV)){
      //     this.totalKNV.mexicaliTNV = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKNV.mexicaliTNV;

      //   this.ingresosKNV.orizabaNV = this.sumaTotalNV.sumaTotalONV;
      //   this.totalKNV.orizabaTNV = this.ingresosKNV.orizabaNV / this.totalesArray.orizabaNVL.length;
      //   if(Number.isNaN(this.totalKNV.orizabaTNV)){
      //     this.totalKNV.orizabaTNV = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKNV.orizabaTNV;
        

      //   this.ingresosKNV.ramisArispeNV = this.sumaTotalNV.sumaTotalRANV;
      //   this.totalKNV.ramisArispeTNV = this.ingresosKNV.ramisArispeNV / this.totalesArray.ramosANVL.length;
      //   if(Number.isNaN(this.totalKNV.ramisArispeTNV)){
      //     this.totalKNV.ramisArispeTNV = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKNV.ramisArispeTNV;

      //   // this.ingresosKNV.totalMY = this.sumaTotalNV.sumaTotalTlMY;
      //   // this.totalKMY.totalTMY = this.ingresosKNV.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKMY.totalTMY)){
      //   //   this.totalKMY.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      // }

      // if (e.data.key == '12 DIC') {
      //   if(e.isExpanded == true){
      //     this.ingresosKDC = new IngresosKDC;
      //     this.totalKDC = new TotalKDC;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKDC.cuautitlanDc = this.sumaTotalDC.sumaTotalCDC;
      //   this.totalKDC.cuautitlanTDC =  this.ingresosKDC.cuautitlanDc / this.totalesArray.cuatitlanDCL.length;
      //   if(Number.isNaN(this.totalKDC.cuautitlanTDC)){
      //     this.totalKDC.cuautitlanTDC = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKDC.cuautitlanTDC;
        
        
      //   this.ingresosKDC.tultitlanDC = this.sumaTotalDC.sumaTotalTDC;
      //   this.totalKDC.tultitlanTDC = this.ingresosKDC.tultitlanDC / this.totalesArray.tultitlanDCL.length;
      //   if(Number.isNaN(this.totalKDC.tultitlanTDC)){
      //     this.totalKDC.tultitlanTDC = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKDC.tultitlanTDC;
        
      //   this.ingresosKDC.guadalajaraDC = this.sumaTotalDC.sumaTotalGDC;
      //   this.totalKDC.guadalajaraTDC = this.ingresosKDC.guadalajaraDC / this.totalesArray.guadalajaraDCL.length;
      //   if(Number.isNaN(this.totalKDC.guadalajaraTDC)){
      //     this.totalKDC.guadalajaraTDC = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKDC.guadalajaraTDC;

      //   this.ingresosKDC.hermosilloDC = this.sumaTotalDC.sumaTotalHDC;
      //   this.totalKDC.hermosilloTDC = this.ingresosKDC.hermosilloDC / this.totalesArray.hermosilloDCL.length;
      //   if(Number.isNaN(this.totalKDC.hermosilloTDC)){
      //     this.totalKDC.hermosilloTDC = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKDC.hermosilloTDC;

      //   this.ingresosKDC.mexicaliDC = this.sumaTotalDC.sumaTotalMDC;
      //   this.totalKDC.mexicaliTDC = this.ingresosKDC.mexicaliDC / this.totalesArray.mexicaliDCL.length;
      //   if(Number.isNaN(this.totalKDC.mexicaliTDC)){
      //     this.totalKDC.mexicaliTDC = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKDC.mexicaliTDC;

      //   this.ingresosKDC.orizabaDc = this.sumaTotalDC.sumaTotalODC;
      //   this.totalKDC.orizabaTDC = this.ingresosKDC.orizabaDc / this.totalesArray.orizabaDCL.length;
      //   if(Number.isNaN(this.totalKDC.orizabaTDC)){
      //     this.totalKDC.orizabaTDC = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKDC.orizabaTDC;
        

      //   this.ingresosKDC.ramisArispeDC = this.sumaTotalDC.sumaTotalRADC;
      //   this.totalKDC.ramisArispeTDC = this.ingresosKDC.ramisArispeDC / this.totalesArray.ramosADCL.length;
      //   if(Number.isNaN(this.totalKDC.ramisArispeTDC)){
      //     this.totalKDC.ramisArispeTDC = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKDC.ramisArispeTDC;

      //   // this.ingresosKMY.totalMY = this.sumaTotalDC.sumaTotalTlMY;
      //   // this.totalKMY.totalTMY = this.ingresosKMY.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKMY.totalTMY)){
      //   //   this.totalKMY.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      // }


      e.cells.forEach((c: any) => {
        if(c.columnIndex == 2){
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupCKV.push(c.value)
 
          }
        }
        if(c.columnIndex == 3){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupTKV.push(c.value)
          }

        }
        if(c.columnIndex == 4){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupGKV.push(c.value)
          }

        }
        if(c.columnIndex == 5){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupHKV.push(c.value)
          }

        }
        if(c.columnIndex == 6){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupMKV.push(c.value)
          }

        }
        if(c.columnIndex == 7){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupOKV.push(c.value)
          }

        }
        if(c.columnIndex == 8){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGroupRAKV.push(c.value)
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

        this.CuautitlanTSKV = this.totalKEKV.cuautitlanTE + this.totalKFKV.cuautitlanTF +this.totalKMKV.cuautitlanTM + this.totalKAKV.cuautitlanTA + this.totalKMYKV.cuautitlanTMY + this.totalKJNKV.cuautitlanTJN + this.totalKJLKV.cuautitlanTJL;
        this.totalCuautitlanKV = this.CuautitlanTSKV / 7;//this.sumaTotalGroupC.length;
        if(c.totalItem.summaryCells[2][0]?.value != undefined){
        c.totalItem.summaryCells[2][0].value = this.totalCuautitlanKV;
        }

        this.TultitlanTSKV = this.totalKEKV.tultitlanTE + this.totalKFKV.tultitlanTF +this.totalKMKV.tultitlanTM + this.totalKAKV.tultitlanTA + this.totalKMYKV.tultitlanTMY + this.totalKJNKV.tultitlanTJN + this.totalKJLKV.tultitlanTJL;
        this.totalTultitlanKV = this.TultitlanTSKV / 7;//this.sumaTotalGroupT.length;
        if(c.totalItem.summaryCells[3][0]?.value != undefined){
        c.totalItem.summaryCells[3][0].value = this.totalTultitlanKV;
        }

        this.GuadalajaraTSKV = this.totalKEKV.guadalajaraTE + this.totalKFKV.guadalajaraTF +this.totalKMKV.guadalajaraTM + this.totalKAKV.guadalajaraTA + this.totalKMYKV.guadalajaraTMY + this.totalKJNKV.guadalajaraTJN + this.totalKJLKV.guadalajaraTJL;
        this.totalGuadalajaraKV = this.GuadalajaraTSKV / 7;//this.sumaTotalGroupG.length;
        if(c.totalItem.summaryCells[4][0]?.value != undefined){
       c.totalItem.summaryCells[4][0].value = this.totalGuadalajaraKV;
        }

        this.HermosilloTSKV = this.totalKEKV.hermosilloTE + this.totalKFKV.hermosilloTF +this.totalKMKV.hermosilloTM + this.totalKAKV.hermosilloTA + this.totalKMYKV.hermosilloTMY + this.totalKJNKV.hermosilloTJN + this.totalKJLKV.hermosilloTJL;
        this.totalHermosilloKV = this.HermosilloTSKV / 7;//this.sumaTotalGroupH.length;
        if(c.totalItem.summaryCells[5][0]?.value != undefined){
       c.totalItem.summaryCells[5][0].value = this.totalHermosilloKV;
        }

        this.MexicaliTSKV = this.totalKEKV.mexicaliTE + this.totalKFKV.mexicaliTF +this.totalKMKV.mexicaliTM + this.totalKAKV.mexicaliTA + this.totalKMYKV.mexicaliTMY + this.totalKJNKV.mexicaliTJN + this.totalKJLKV.mexicaliTJL;
        this.totalMexicaliKV = this.MexicaliTSKV / 7;//this.sumaTotalGroupM.length;
        if(c.totalItem.summaryCells[6][0]?.value != undefined){
        c.totalItem.summaryCells[6][0].value = this.totalMexicaliKV;
        }

        this.OrizabaTSKV = this.totalKEKV.orizabaTE + this.totalKFKV.orizabaTF +this.totalKMKV.orizabaTM + this.totalKAKV.orizabaTA + this.totalKMYKV.orizabaTMY + this.totalKJNKV.orizabaTJN + this.totalKJLKV.orizabaTJL;
        this.totalOrizabaKV = this.OrizabaTSKV / 7;//this.sumaTotalGroupO.length;
        if(c.totalItem.summaryCells[7][0]?.value != undefined){
        c.totalItem.summaryCells[7][0].value = this.totalOrizabaKV;
        }

        this.RamosATSKV = this.totalKEKV.ramisArispeTE + this.totalKFKV.ramisArispeTF +this.totalKMKV.ramisArispeTM + this.totalKAKV.ramisArispeTA + this.totalKMYKV.ramisArispeTMY + this.totalKJNKV.ramisArispeTJN + this.totalKJLKV.ramisArispeTJL;
        this.totalRamosAKV = this.RamosATSKV / 7;//this.sumaTotalGroupRA.length;
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
        c.totalItem.summaryCells[8][0].value = this.totalRamosAKV;
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

    let sumaCuautitlaE = 0
    let sumaTultitlanE = 0
    let sumaGuadalajaraE = 0
    let sumaHermosilloE = 0
    let sumaMexicaliE = 0
    let sumaOrizabaE = 0
    let sumaRamozAE = 0

    let sumaCuautitlaF = 0
    let sumaTultitlanF = 0
    let sumaGuadalajaraF = 0
    let sumaHermosilloF = 0
    let sumaMexicaliF = 0
    let sumaOrizabaF = 0
    let sumaRamozAF = 0

    let sumaCuautitlaM = 0
    let sumaTultitlanM = 0
    let sumaGuadalajaraM = 0
    let sumaHermosilloM = 0
    let sumaMexicaliM = 0
    let sumaOrizabaM = 0
    let sumaRamozAM = 0

    let sumaCuautitlaA = 0
    let sumaTultitlanA = 0
    let sumaGuadalajaraA = 0
    let sumaHermosilloA = 0
    let sumaMexicaliA = 0
    let sumaOrizabaA = 0
    let sumaRamozAA = 0

    let sumaCuautitlaMY = 0
    let sumaTultitlanMY = 0
    let sumaGuadalajaraMY = 0
    let sumaHermosilloMY = 0
    let sumaMexicaliMY = 0
    let sumaOrizabaMY = 0
    let sumaRamozAMY = 0

    let sumaCuautitlaJN = 0
    let sumaTultitlanJN = 0
    let sumaGuadalajaraJN = 0
    let sumaHermosilloJN = 0
    let sumaMexicaliJN = 0
    let sumaOrizabaJN = 0
    let sumaRamozAJN = 0

    let sumaCuautitlaJL = 0
    let sumaTultitlanJL = 0
    let sumaGuadalajaraJL = 0
    let sumaHermosilloJL = 0
    let sumaMexicaliJL = 0
    let sumaOrizabaJL = 0
    let sumaRamozAJL = 0


    let TotalSCuautitlan = 0
    let TotalSTultitlan = 0
    let TotalSGuadalajara = 0
    let TotalSHermosillo = 0
    let TotalSMexicali = 0
    let TotalSOrizaba = 0
    let TotalSRamozA = 0

    rows.forEach((row: any) =>{  
      
      var rowValues =  row.values;  
      var myData = row.data
      
      // if(myData?.mes == "01 ENE"){

      //     //this.customTArrayL.cuatitlanEL
      //     arrayCuatitlanEL.push(myData.cuatitlan)
      //     console.log(arrayCuatitlanEL.length)
          
      //   if(row.data.tultitlan != 0){
      //     arrayTultitlanEL.push(row.data.tultitlan)
      //   }
      //   if(row.data.guadalajara != 0){
      //     arrayGuadalajaraEL.push(row.data.guadalajara)
      //   }
      //   if(row.data.hermosillo != 0){
      //     arrayHermosilloEL.push(row.data.hermosillo)
      //   }
      //   if(row.data.mexicali != 0){
      //     arrayMexicaliEL.push(row.data.mexicali)
      //   }
      //   if(row.data.orizaba != 0){
      //     arrayOrizabaL.push(row.data.orizaba)
      //   }
      //   if(row.data.ramosArizpe != 0){
      //     arrayRamosAEL.push(row.data.ramosArizpe)
      //   }
        

      // }

      if(row.rowType == "group"){
        if(row.key[0] == '01 ENE'){

          sumaCuautitlaE = row.summaryCells[1][0].value / 3;
          sumaTultitlanE = row.summaryCells[2][0].value / 3;
          sumaGuadalajaraE = row.summaryCells[3][0].value / 2;
          sumaHermosilloE = row.summaryCells[4][0].value / 2;
          sumaMexicaliE = row.summaryCells[5][0].value / 2;
          sumaOrizabaE = row.summaryCells[6][0].value / 5;
          sumaRamozAE = row.summaryCells[7][0].value / 3;

          rowValues[1][0].value = sumaCuautitlaE;
          rowValues[2][0].value = sumaTultitlanE;
          rowValues[3][0].value = sumaGuadalajaraE;
          rowValues[4][0].value = sumaHermosilloE;
          rowValues[5][0].value = sumaMexicaliE;
          rowValues[6][0].value = sumaOrizabaE;
          rowValues[7][0].value = sumaRamozAE;
        }

        if(row.key[0] == '02 FEB'){
          sumaCuautitlaF = row.summaryCells[1][0].value / 4;
          sumaTultitlanF = row.summaryCells[2][0].value / 3;
          sumaGuadalajaraF = row.summaryCells[3][0].value / 2;
          sumaHermosilloF = row.summaryCells[4][0].value / 2;
          sumaMexicaliF = row.summaryCells[5][0].value / 2;
          sumaOrizabaF = row.summaryCells[6][0].value / 5;
          sumaRamozAF = row.summaryCells[7][0].value / 3;

          rowValues[1][0].value = sumaCuautitlaF;
          rowValues[2][0].value = sumaTultitlanF;
          rowValues[3][0].value = sumaGuadalajaraF;
          rowValues[4][0].value = sumaHermosilloF;
          rowValues[5][0].value = sumaMexicaliF;
          rowValues[6][0].value = sumaOrizabaF;
          rowValues[7][0].value = sumaRamozAF;
        }

        if(row.key[0] == '03 MAR'){
          sumaCuautitlaM = row.summaryCells[1][0].value / 4;
          sumaTultitlanM = row.summaryCells[2][0].value / 4;
          sumaGuadalajaraM = row.summaryCells[3][0].value / 2;
          sumaHermosilloM = row.summaryCells[4][0].value / 2;
          sumaMexicaliM = row.summaryCells[5][0].value / 2;
          sumaOrizabaM = row.summaryCells[6][0].value / 6;
          sumaRamozAM = row.summaryCells[7][0].value / 2;

          rowValues[1][0].value = sumaCuautitlaM;
          rowValues[2][0].value = sumaTultitlanM;
          rowValues[3][0].value = sumaGuadalajaraM;
          rowValues[4][0].value = sumaHermosilloM;
          rowValues[5][0].value = sumaMexicaliM;
          rowValues[6][0].value = sumaOrizabaM;
          rowValues[7][0].value = sumaRamozAM;
        }

        if(row.key[0] == '04 ABR'){
          sumaCuautitlaA = row.summaryCells[1][0].value / 4;
          sumaTultitlanA = row.summaryCells[2][0].value / 3;
          sumaGuadalajaraA = row.summaryCells[3][0].value / 3;
          sumaHermosilloA = row.summaryCells[4][0].value / 3;
          sumaMexicaliA = row.summaryCells[5][0].value / 3;
          sumaOrizabaA = row.summaryCells[6][0].value / 6;
          sumaRamozAA = row.summaryCells[7][0].value / 4;

          rowValues[1][0].value = sumaCuautitlaA;
          rowValues[2][0].value = sumaTultitlanA;
          rowValues[3][0].value = sumaGuadalajaraA;
          rowValues[4][0].value = sumaHermosilloA;
          rowValues[5][0].value = sumaMexicaliA;
          rowValues[6][0].value = sumaOrizabaA;
          rowValues[7][0].value = sumaRamozAA;
        }

        if(row.key[0] == '05 MAY'){
          sumaCuautitlaMY = row.summaryCells[1][0].value / 3;
          sumaTultitlanMY = row.summaryCells[2][0].value / 2;
          sumaGuadalajaraMY = row.summaryCells[3][0].value / 2;
          sumaHermosilloMY = row.summaryCells[4][0].value / 2;
          sumaMexicaliMY = row.summaryCells[5][0].value / 2;
          sumaOrizabaMY = row.summaryCells[6][0].value / 4;
          sumaRamozAMY = row.summaryCells[7][0].value / 3;

          rowValues[1][0].value = sumaCuautitlaMY;
          rowValues[2][0].value = sumaTultitlanMY;
          rowValues[3][0].value = sumaGuadalajaraMY;
          rowValues[4][0].value = sumaHermosilloMY;
          rowValues[5][0].value = sumaMexicaliMY;
          rowValues[6][0].value = sumaOrizabaMY;
          rowValues[7][0].value = sumaRamozAMY;
        }

        if(row.key[0] == '06 JUN'){
          sumaCuautitlaJN = row.summaryCells[1][0].value / 3;
          sumaTultitlanJN = row.summaryCells[2][0].value / 2;
          sumaGuadalajaraJN = row.summaryCells[3][0].value / 3;
          sumaHermosilloJN = row.summaryCells[4][0].value / 1;
          sumaMexicaliJN = row.summaryCells[5][0].value / 1;
          sumaOrizabaJN = row.summaryCells[6][0].value / 4;
          sumaRamozAJN = row.summaryCells[7][0].value / 2;

          rowValues[1][0].value = sumaCuautitlaJN;
          rowValues[2][0].value = sumaTultitlanJN;
          rowValues[3][0].value = sumaGuadalajaraJN;
          rowValues[4][0].value = sumaHermosilloJN;
          rowValues[5][0].value = sumaMexicaliJN;
          rowValues[6][0].value = sumaOrizabaJN;
          rowValues[7][0].value = sumaRamozAJN;
        }

        if(row.key[0] == '07 JUL'){
          sumaCuautitlaJL = row.summaryCells[1][0].value / 2;
          sumaTultitlanJL = row.summaryCells[2][0].value / 2;
          sumaGuadalajaraJL = row.summaryCells[3][0].value / 2;
          sumaHermosilloJL = row.summaryCells[4][0].value / 1;
          sumaMexicaliJL = row.summaryCells[5][0].value / 1;
          sumaOrizabaJL = row.summaryCells[6][0].value / 5;
          sumaRamozAJL = row.summaryCells[7][0].value / 1;

          rowValues[1][0].value = sumaCuautitlaJL;
          rowValues[2][0].value = sumaTultitlanJL;
          rowValues[3][0].value = sumaGuadalajaraJL;
          rowValues[4][0].value = sumaHermosilloJL;
          rowValues[5][0].value = sumaMexicaliJL;
          rowValues[6][0].value = sumaOrizabaJL;
          rowValues[7][0].value = sumaRamozAJL;

        }
      }



      if(row.rowType == "totalFooter"){

        let sumaC = sumaCuautitlaE + sumaCuautitlaF + sumaCuautitlaM + sumaCuautitlaA + sumaCuautitlaMY + sumaCuautitlaJN + sumaCuautitlaJL;
        TotalSCuautitlan = sumaC / 7;

        let sumaT = sumaTultitlanE + sumaTultitlanF + sumaTultitlanM + sumaTultitlanA + sumaTultitlanMY + sumaTultitlanJN + sumaTultitlanJL;
        TotalSTultitlan = sumaT / 7;

        let sumaG = sumaGuadalajaraE + sumaGuadalajaraF + sumaGuadalajaraM + sumaGuadalajaraA + sumaGuadalajaraMY + sumaGuadalajaraJN + sumaGuadalajaraJL;
        TotalSGuadalajara = sumaG / 7;

        let sumaH = sumaHermosilloE + sumaHermosilloF + sumaHermosilloM + sumaHermosilloA + sumaHermosilloMY + sumaHermosilloJN + sumaHermosilloJL;
        TotalSHermosillo = sumaH / 7;

        let sumaM = sumaMexicaliE + sumaMexicaliF + sumaMexicaliM + sumaMexicaliA + sumaMexicaliMY + sumaMexicaliJN + sumaMexicaliJL;
        TotalSMexicali = sumaM / 7;

        let sumaO = sumaOrizabaE + sumaOrizabaF + sumaOrizabaM + sumaOrizabaA + sumaOrizabaMY + sumaOrizabaJN + sumaOrizabaJL;
        TotalSOrizaba = sumaO / 7;

        let sumaRA = sumaRamozAE + sumaRamozAF + sumaRamozAM + sumaRamozAA + sumaRamozAMY+ sumaRamozAJN+ sumaRamozAJL;
        TotalSRamozA = sumaRA / 7;

        row.values[1].value = TotalSCuautitlan;
        row.values[2].value = TotalSTultitlan;
        row.values[3].value = TotalSGuadalajara;
        row.values[4].value = TotalSHermosillo;
        row.values[5].value = TotalSMexicali;
        row.values[6].value = TotalSOrizaba;
        row.values[7].value = TotalSRamozA;


      }

    });

  }

//==============================INGRESO VIAJES=================================
  onRowPreparedIV(e){

  }

  onCellPreparedIV(e){
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

    var str = value.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let t=value.toString();
    let regex=/(\d*.\d{0,2})/;
    t.match(regex)[0];

    return str.join("."), t.match(regex)[0];;
  }

   //==================Formato a la data de la grafica==================================
   formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
}

}


