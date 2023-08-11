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
      
// ====================================INGRESOS========================================================================================================
      
      this.ingresos = data.data.scIng;
      this.ingresos.sort((a, b) => (a.orden < b.orden ? -1 : 1))
      // for(var i = 0; i<myIngresos.length; i ++){
      //   console.log(myIngresos[i])
      // } 
      // const orderIngreso: ScoreCard[] = data.data.scIng;
      // let neworderIngreso = [];
      // neworderIngreso.push(orderIngreso[0],orderIngreso[3],orderIngreso[2],orderIngreso[4],orderIngreso[1],
      //                   orderIngreso[5],orderIngreso[8],orderIngreso[7],orderIngreso[9],orderIngreso[6],
      //                   orderIngreso[10],orderIngreso[13],orderIngreso[12],orderIngreso[14],orderIngreso[11],
      //                   orderIngreso[15],orderIngreso[18],orderIngreso[17],orderIngreso[19],orderIngreso[16],
      //                   orderIngreso[20],orderIngreso[23],orderIngreso[22],orderIngreso[24],orderIngreso[21],
      //                   orderIngreso[26],orderIngreso[28],orderIngreso[25],orderIngreso[29],orderIngreso[27],
      //                   orderIngreso[31],orderIngreso[33],orderIngreso[30],orderIngreso[34],orderIngreso[32],
      //                   orderIngreso[36],orderIngreso[38],orderIngreso[35],orderIngreso[39],orderIngreso[37]);
      
      //this.ingresos ///= neworderIngreso;
// ====================================KILOMETROS========================================================================================================
      this.kilomentros = data.data.scKms;      
      this.kilomentros.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderKilometros: ScoreCard[] = data.data.scKms;
      // let neworderKlmts = [];
      // neworderKlmts.push(orderKilometros[4],orderKilometros[2 ],orderKilometros[3],orderKilometros[0],orderKilometros[1],
      //                   orderKilometros[5],orderKilometros[9],orderKilometros[8],orderKilometros[6],orderKilometros[7],
      //                   orderKilometros[11],orderKilometros[12],orderKilometros[13],orderKilometros[10],orderKilometros[14],orderKilometros[15],
      //                   orderKilometros[17],orderKilometros[20],orderKilometros[16],orderKilometros[18],orderKilometros[19],
      //                   orderKilometros[21],orderKilometros[25],orderKilometros[23],orderKilometros[22],orderKilometros[24],
      //                   orderKilometros[26],orderKilometros[29],orderKilometros[27],orderKilometros[28],orderKilometros[30],
      //                   orderKilometros[32],orderKilometros[35],orderKilometros[33],orderKilometros[31],orderKilometros[34],orderKilometros[36],
      //                   orderKilometros[38],orderKilometros[39],orderKilometros[37],orderKilometros[40],orderKilometros[41]);

      // this.kilomentros = neworderKlmts;
// ====================================VIAJES========================================================================================================
      this.viajes = data.data.scViajes;
      this.viajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderViajes: ScoreCard[] = data.data.scViajes;
      // let neworderViajes = [];
      // neworderViajes.push(orderViajes[4],orderViajes[2],orderViajes[3],orderViajes[0],orderViajes[1],
      //                   orderViajes[5],orderViajes[9],orderViajes[8],orderViajes[6],orderViajes[7],
      //                   orderViajes[11],orderViajes[12],orderViajes[13],orderViajes[10],orderViajes[14],orderViajes[15],
      //                   orderViajes[17],orderViajes[20],orderViajes[16],orderViajes[18],orderViajes[19],
      //                   orderViajes[21],orderViajes[25],orderViajes[23],orderViajes[22],orderViajes[24],
      //                   orderViajes[26],orderViajes[29],orderViajes[27],orderViajes[28],orderViajes[30],
      //                   orderViajes[32],orderViajes[35],orderViajes[33],orderViajes[31],orderViajes[34],orderViajes[36],
      //                   orderViajes[38],orderViajes[39],orderViajes[37],orderViajes[40],orderViajes[41]);
      
      // this.viajes = neworderViajes;
// ====================================VIAJES CARGADOS========================================================================================================
      this.viajesCargados = data.data.scViajesC;      
      this.viajesCargados.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderVjsCgds: ScoreCard[] = data.data.scViajesC;
      // let neworderVjsCgds = [];
      // neworderVjsCgds.push(orderVjsCgds[4],orderVjsCgds[2],orderVjsCgds[3],orderVjsCgds[0],orderVjsCgds[1],
      //                   orderVjsCgds[5],orderVjsCgds[9],orderVjsCgds[8],orderVjsCgds[6],orderVjsCgds[7],
      //                   orderVjsCgds[11],orderVjsCgds[12],orderVjsCgds[13],orderVjsCgds[10],orderVjsCgds[14],orderVjsCgds[15],
      //                   orderVjsCgds[17],orderVjsCgds[20],orderVjsCgds[16],orderVjsCgds[18],orderVjsCgds[19],
      //                   orderVjsCgds[21],orderVjsCgds[25],orderVjsCgds[23],orderVjsCgds[22],orderVjsCgds[24],
      //                   orderVjsCgds[26],orderVjsCgds[29],orderVjsCgds[27],orderVjsCgds[28],orderVjsCgds[30],
      //                   orderVjsCgds[32],orderVjsCgds[35],orderVjsCgds[33],orderVjsCgds[31],orderVjsCgds[34],orderVjsCgds[36],
      //                   orderVjsCgds[38],orderVjsCgds[39],orderVjsCgds[37],orderVjsCgds[40],orderVjsCgds[41]);

      // this.viajesCargados = neworderVjsCgds;
// ====================================INGRESO / KILOMETROS========================================================================================================
      this.ingresosKilometros = data.data.scIngXKm;
      this.ingresosKilometros.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderIngKlmts: ScoreCard[] = data.data.scIngXKm;
      // let neworderIngKlmts = [];
      // neworderIngKlmts.push(orderIngKlmts[4],orderIngKlmts[2],orderIngKlmts[3],orderIngKlmts[0],orderIngKlmts[1],
      //                   orderIngKlmts[5],orderIngKlmts[9],orderIngKlmts[8],orderIngKlmts[6],orderIngKlmts[7],
      //                   orderIngKlmts[11],orderIngKlmts[12],orderIngKlmts[13],orderIngKlmts[10],orderIngKlmts[14],orderIngKlmts[15],
      //                   orderIngKlmts[17],orderIngKlmts[20],orderIngKlmts[16],orderIngKlmts[18],orderIngKlmts[19],
      //                   orderIngKlmts[21],orderIngKlmts[25],orderIngKlmts[23],orderIngKlmts[22],orderIngKlmts[24],
      //                   orderIngKlmts[26],orderIngKlmts[29],orderIngKlmts[27],orderIngKlmts[28],orderIngKlmts[30],
      //                   orderIngKlmts[32],orderIngKlmts[35],orderIngKlmts[33],orderIngKlmts[31],orderIngKlmts[34],orderIngKlmts[36],
      //                   orderIngKlmts[38],orderIngKlmts[39],orderIngKlmts[37],orderIngKlmts[40],orderIngKlmts[41]);

      // this.ingresosKilometros = neworderIngKlmts;
      
// ====================================KILOMETROS / VIAJES========================================================================================================
      this.kilometroViajes = data.data.scKmsViaje;      
      this.kilometroViajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderKmsVjs: ScoreCard[] = data.data.scKmsViaje;
      // let neworderKmsVjs = [];
      // neworderKmsVjs.push(orderKmsVjs[4],orderKmsVjs[2],orderKmsVjs[3],orderKmsVjs[0],orderKmsVjs[1],
      //                   orderKmsVjs[5],orderKmsVjs[9],orderKmsVjs[8],orderKmsVjs[6],orderKmsVjs[7],
      //                   orderKmsVjs[11],orderKmsVjs[12],orderKmsVjs[13],orderKmsVjs[10],orderKmsVjs[14],orderKmsVjs[15],
      //                   orderKmsVjs[17],orderKmsVjs[20],orderKmsVjs[16],orderKmsVjs[18],orderKmsVjs[19],
      //                   orderKmsVjs[21],orderKmsVjs[25],orderKmsVjs[23],orderKmsVjs[22],orderKmsVjs[24],
      //                   orderKmsVjs[26],orderKmsVjs[29],orderKmsVjs[27],orderKmsVjs[28],orderKmsVjs[30],
      //                   orderKmsVjs[32],orderKmsVjs[35],orderKmsVjs[33],orderKmsVjs[31],orderKmsVjs[34],orderKmsVjs[36],
      //                   orderKmsVjs[38],orderKmsVjs[39],orderKmsVjs[37],orderKmsVjs[40],orderKmsVjs[41]);

      // this.kilometroViajes = neworderKmsVjs;
// ====================================INGRESO / VIAJES========================================================================================================
      this.ingresoViajes = data.data.scIngrViaje      
      this.ingresoViajes.sort((a, b) => (a.orden < b.orden ? -1 : 1));
      // const orderIngsVjs: ScoreCard[] = data.data.scIngrViaje;
      // let neworderIngsVjs = [];
      // neworderIngsVjs.push(orderIngsVjs[4],orderIngsVjs[2],orderIngsVjs[3],orderIngsVjs[0],orderIngsVjs[1],
      //                   orderIngsVjs[5],orderIngsVjs[9],orderIngsVjs[8],orderIngsVjs[6],orderIngsVjs[7],
      //                   orderIngsVjs[11],orderIngsVjs[12],orderIngsVjs[13],orderIngsVjs[10],orderIngsVjs[14],orderIngsVjs[15],
      //                   orderIngsVjs[17],orderIngsVjs[20],orderIngsVjs[16],orderIngsVjs[18],orderIngsVjs[19],
      //                   orderIngsVjs[21],orderIngsVjs[25],orderIngsVjs[23],orderIngsVjs[22],orderIngsVjs[24],
      //                   orderIngsVjs[26],orderIngsVjs[29],orderIngsVjs[27],orderIngsVjs[28],orderIngsVjs[30],
      //                   orderIngsVjs[32],orderIngsVjs[35],orderIngsVjs[33],orderIngsVjs[31],orderIngsVjs[34],orderIngsVjs[36],
      //                   orderIngsVjs[38],orderIngsVjs[39],orderIngsVjs[37],orderIngsVjs[40],orderIngsVjs[41]);

      // this.ingresoViajes = neworderIngsVjs;
      
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
      this.getkmsMensuales().then(() => {
        this.loadingVisible = false;
      });
    }

  };
//==============================INGRESOS=========================================
  onRowPreparedI(event){

    if (event.rowType == 'group'){
      
      if (event.data.key == '01 ENE') {
        // console.log(event)
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
      totalIngresos.cuautitlan = event.summaryCells[4][0]?.value;
      totalIngresos.tultitlan = event.summaryCells[5][0]?.value;
      totalIngresos.guadalajara = event.summaryCells[6][0]?.value;
      totalIngresos.hermosillo = event.summaryCells[7][0]?.value;
      totalIngresos.mexicali = event.summaryCells[8][0]?.value;
      totalIngresos.orizaba = event.summaryCells[9][0]?.value;
      totalIngresos.ramosArispe = event.summaryCells[10][0].value;
      totalIngresos.total = event.summaryCells[11][0].value;
      //console.log(totalIngresos.total);
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
      totalKilomentros.cuautitlan = e.summaryCells[4][0]?.value;
      totalKilomentros.tultitlan = e.summaryCells[5][0]?.value;
      totalKilomentros.guadalajara = e.summaryCells[6][0]?.value;
      totalKilomentros.hermosillo = e.summaryCells[7][0]?.value;
      totalKilomentros.mexicali = e.summaryCells[8][0]?.value;
      totalKilomentros.orizaba = e.summaryCells[9][0]?.value;
      totalKilomentros.ramosArispe = e.summaryCells[10][0].value;
      totalKilomentros.total = e.summaryCells[11][0].value;
      //console.log(totalKilomentros.total)

      totalOperacionIK.cuautitlan = totalIngresos.cuautitlan / totalKilomentros.cuautitlan;
      totalOperacionIK.tultitlan = totalIngresos.tultitlan / totalKilomentros.tultitlan;
      totalOperacionIK.guadalajara = totalIngresos.guadalajara / totalKilomentros.guadalajara;
      totalOperacionIK.hermosillo = totalIngresos.hermosillo / totalKilomentros.hermosillo;
      totalOperacionIK.mexicali = totalIngresos.mexicali / totalKilomentros.mexicali;
      totalOperacionIK.orizaba = totalIngresos.orizaba / totalKilomentros.orizaba;
      totalOperacionIK.ramosArispe = totalIngresos.ramosArispe / totalKilomentros.ramosArispe;
      totalOperacionIK.total = totalIngresos.total / totalKilomentros.total;
      //console.log(totalOperacionIK.total)
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
        e.summaryCells[4][0].value = totalAgrupamientoIKF.cuautitlan;//this.totalKF.cuautitlanTF;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKF.tultitlan;//this.totalKF.tultitlanTF;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKF.guadalajara;//this.totalKF.guadalajaraTF;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKF.hermosillo;//this.totalKF.hermosilloTF;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKF.mexicali;//this.totalKF.mexicaliTF;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKF.orizaba;//this.totalKF.orizabaTF;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKF.ramosArispe;//this.totalKF.ramisArispeTF;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKF.total;//this.totalKF.totalTF;
        }
      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKM.cuautitlan;// this.totalKM.cuautitlanTM;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKM.tultitlan;//this.totalKM.tultitlanTM;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKM.guadalajara;//this.totalKM.guadalajaraTM;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKM.hermosillo;//this.totalKM.hermosilloTM;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKM.mexicali;//this.totalKM.mexicaliTM;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKM.orizaba;//this.totalKM.orizabaTM;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKM.ramosArispe;//this.totalKM.ramisArispeTM;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKM.total;//this.totalKM.totalTM;
        }

      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKA.cuautitlan;// this.totalKA.cuautitlanTA;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKA.tultitlan;//this.totalKA.tultitlanTA;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKA.guadalajara;//this.totalKA.guadalajaraTA;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKA.hermosillo;//this.totalKA.hermosilloTA;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKA.mexicali;//this.totalKA.mexicaliTA;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKA.orizaba;//this.totalKA.orizabaTA;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKA.ramosArispe;//this.totalKA.ramisArispeTA;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKA.total;//this.totalKA.totalTA;
        }


      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKMY.tultitlan;//this.totalKMY.tultitlanTMY;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKMY.hermosillo;//this.totalKMY.hermosilloTMY;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKMY.mexicali;//this.totalKMY.mexicaliTMY;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKMY.orizaba;//this.totalKMY.orizabaTMY;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKMY.total;//this.totalKMY.totalTMY;
        }

      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJN.tultitlan;//this.totalKJN.tultitlanTJN;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJN.hermosillo;//this.totalKJN.hermosilloTJN;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJN.mexicali;//this.totalKJN.mexicaliTJN;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJN.orizaba;//this.totalKJN.orizabaTJN;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKJN.total;//this.totalKMY.totalTMY;
        }


      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJL.tultitlan;//this.totalKJL.tultitlanTJL;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJL.hermosillo;//this.totalKJL.hermosilloTJL;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJL.mexicali;//this.totalKJL.mexicaliTJL;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJL.orizaba;//this.totalKJL.orizabaTJL;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalAgrupamientoIKJL.total;//this.totalKJL.totalTMY;
        }


      }

      if (e.data.key == '08 AGO') {

        // if(Number.isNaN(totalAgrupamientoIKAG.cuautitlan)){
        //   e.summaryCells[2][0].value = 0.0;
        // }else{
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalAgrupamientoIKAG.cuautitlan;// this.totalKJL.cuautitlanTJL;
          }
        //}

          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalAgrupamientoIKAG.tultitlan;//this.totalKJL.tultitlanTJL;
          }
        
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalAgrupamientoIKAG.guadalajara;//this.totalKJL.guadalajaraTJL;
          }
        
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalAgrupamientoIKAG.hermosillo;//this.totalKJL.hermosilloTJL;
          }
        
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalAgrupamientoIKAG.mexicali;//this.totalKJL.mexicaliTJL;
          }
        
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalAgrupamientoIKAG.orizaba;//this.totalKJL.orizabaTJL;
          }
        
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalAgrupamientoIKAG.ramosArispe;//this.totalKJL.ramisArispeTJL;
          }
        
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalAgrupamientoIKAG.total;//this.totalKJL.totalTMY;
          }
        



      }

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
          console.log(rowValues)
          rowValues[3][0].value = totalAgrupamientoIKE.cuautitlan;//sumaCuautitlaE;
          rowValues[4][0].value = totalAgrupamientoIKE.tultitlan;//sumaTultitlanE;
          rowValues[5][0].value = totalAgrupamientoIKE.guadalajara;//sumaGuadalajaraE;
          rowValues[6][0].value = totalAgrupamientoIKE.hermosillo;//sumaHermosilloE;
          rowValues[7][0].value = totalAgrupamientoIKE.mexicali;//sumaMexicaliE;
          rowValues[8][0].value = totalAgrupamientoIKE.orizaba;//sumaOrizabaE;
          rowValues[9][0].value = totalAgrupamientoIKE.ramosArispe;//sumaRamozAE;
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
      }

      if(row.rowType == "totalFooter"){
        

        row.values[3].value = totalOperacionIK.cuautitlan;//TotalSCuautitlan;
        row.values[4].value = totalOperacionIK.tultitlan;//TotalSTultitlan;
        row.values[5].value = totalOperacionIK.guadalajara;//TotalSGuadalajara;
        row.values[6].value = totalOperacionIK.hermosillo;//TotalSHermosillo;
        row.values[7].value = totalOperacionIK.mexicali;//TotalSMexicali;
        row.values[8].value = totalOperacionIK.orizaba;//TotalSOrizaba;
        row.values[9].value = totalOperacionIK.ramosArispe;//TotalSRamozA;


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
        e.summaryCells[4][0].value = totalKVCF.cuautitlan;//this.totalKF.cuautitlanTF;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCF.tultitlan;//this.totalKF.tultitlanTF;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCF.guadalajara;//this.totalKF.guadalajaraTF;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCF.hermosillo;//this.totalKF.hermosilloTF;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCF.mexicali;//this.totalKF.mexicaliTF;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCF.orizaba;//this.totalKF.orizabaTF;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCF.ramosArispe;//this.totalKF.ramisArispeTF;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCF.total;//this.totalKF.totalTF;
        }


      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCM.cuautitlan;// this.totalKM.cuautitlanTM;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCM.tultitlan;//this.totalKM.tultitlanTM;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCM.guadalajara;//this.totalKM.guadalajaraTM;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCM.hermosillo;//this.totalKM.hermosilloTM;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCM.mexicali;//this.totalKM.mexicaliTM;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCM.orizaba;//this.totalKM.orizabaTM;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCM.ramosArispe;//this.totalKM.ramisArispeTM;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCM.total;//this.totalKM.totalTM;
        }


      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCA.cuautitlan;// this.totalKA.cuautitlanTA;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCA.tultitlan;//this.totalKA.tultitlanTA;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCA.guadalajara;//this.totalKA.guadalajaraTA;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCA.hermosillo;//this.totalKA.hermosilloTA;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCA.mexicali;//this.totalKA.mexicaliTA;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCA.orizaba;//this.totalKA.orizabaTA;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCA.ramosArispe;//this.totalKA.ramisArispeTA;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCA.total;//this.totalKA.totalTA;
        }


      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCMY.tultitlan;//this.totalKMY.tultitlanTMY;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCMY.hermosillo;//this.totalKMY.hermosilloTMY;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCMY.mexicali;//this.totalKMY.mexicaliTMY;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCMY.orizaba;//this.totalKMY.orizabaTMY;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCMY.total;//this.totalKMY.totalTMY;
        }


      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCJN.tultitlan;//this.totalKJN.tultitlanTJN;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCJN.hermosillo;//this.totalKJN.hermosilloTJN;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCJN.mexicali;//this.totalKJN.mexicaliTJN;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCJN.orizaba;//this.totalKJN.orizabaTJN;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCJN.total;//this.totalKMY.totalTMY;
        }


      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalKVCJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalKVCJL.tultitlan;//this.totalKJL.tultitlanTJL;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalKVCJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalKVCJL.hermosillo;//this.totalKJL.hermosilloTJL;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalKVCJL.mexicali;//this.totalKJL.mexicaliTJL;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalKVCJL.orizaba;//this.totalKJL.orizabaTJL;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalKVCJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalKVCJL.total;//this.totalKJL.totalTMY;
        }


      }

      if (e.data.key == '08 AGO') {
        // if(Number.isNaN(totalKVCAG.cuautitlan)){
        //   e.summaryCells[2][0].value = 0.0
        // }else{
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalKVCAG.cuautitlan;// this.totalKJL.cuautitlanTJL;
          }
          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalKVCAG.tultitlan;//this.totalKJL.tultitlanTJL; 
          }         
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalKVCAG.guadalajara;//this.totalKJL.guadalajaraTJL;    
          }      
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalKVCAG.hermosillo;//this.totalKJL.hermosilloTJL;
          }
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalKVCAG.mexicali;//this.totalKJL.mexicaliTJL;
          }
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalKVCAG.orizaba;//this.totalKJL.orizabaTJL;   
          }       
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalKVCAG.ramosArispe;//this.totalKJL.ramisArispeTJL; 
          }         
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalKVCAG.total;//this.totalKJL.totalTMY;   
          }       
        
      }

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
  
          rowValues[3][0].value = totalKVCE.cuautitlan;//sumaCuautitlaE;
          rowValues[4][0].value = totalKVCE.tultitlan;//sumaTultitlanE;
          rowValues[5][0].value = totalKVCE.guadalajara;//sumaGuadalajaraE;
          rowValues[6][0].value = totalKVCE.hermosillo;//sumaHermosilloE;
          rowValues[7][0].value = totalKVCE.mexicali;//sumaMexicaliE;
          rowValues[8][0].value = totalKVCE.orizaba;//sumaOrizabaE;
          rowValues[9][0].value = totalKVCE.ramosArispe;//sumaRamozAE;
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
      }
  
      if(row.rowType == "totalFooter"){
        
  
        row.values[3].value = totalOperacionKVC.cuautitlan;//TotalSCuautitlan;
        row.values[4].value = totalOperacionKVC.tultitlan;//TotalSTultitlan;
        row.values[5].value = totalOperacionKVC.guadalajara;//TotalSGuadalajara;
        row.values[6].value = totalOperacionKVC.hermosillo;//TotalSHermosillo;
        row.values[7].value = totalOperacionKVC.mexicali;//TotalSMexicali;
        row.values[8].value = totalOperacionKVC.orizaba;//TotalSOrizaba;
        row.values[9].value = totalOperacionKVC.ramosArispe;//TotalSRamozA;
        row.values[10].value = totalOperacionKVC.total;//TotalSRamozA;
  
  
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
          e.summaryCells[4][0].value = totalIVCF.cuautitlan;//this.totalKF.cuautitlanTF;
        }
        if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCF.tultitlan;//this.totalKF.tultitlanTF;
        }
        if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCF.guadalajara;//this.totalKF.guadalajaraTF;
        }
        if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCF.hermosillo;//this.totalKF.hermosilloTF;
        }
        if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCF.mexicali;//this.totalKF.mexicaliTF;
        }
        if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCF.orizaba;//this.totalKF.orizabaTF;
        }
        if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCF.ramosArispe;//this.totalKF.ramisArispeTF;
        }
        if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCF.total;//this.totalKF.totalTF;
        }

      }

      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCM.cuautitlan;// this.totalKM.cuautitlanTM;
        }
        if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCM.tultitlan;//this.totalKM.tultitlanTM;
        }
        if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCM.guadalajara;//this.totalKM.guadalajaraTM;
        }
        if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCM.hermosillo;//this.totalKM.hermosilloTM;
        }
        if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCM.mexicali;//this.totalKM.mexicaliTM;
        }
        if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCM.orizaba;//this.totalKM.orizabaTM;
        }
        if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCM.ramosArispe;//this.totalKM.ramisArispeTM;
        }
        if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCM.total;//this.totalKM.totalTM;
        }

      }

      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCA.cuautitlan;// this.totalKA.cuautitlanTA;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCA.tultitlan;//this.totalKA.tultitlanTA;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCA.guadalajara;//this.totalKA.guadalajaraTA;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCA.hermosillo;//this.totalKA.hermosilloTA;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCA.mexicali;//this.totalKA.mexicaliTA;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCA.orizaba;//this.totalKA.orizabaTA;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCA.ramosArispe;//this.totalKA.ramisArispeTA;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCA.total;//this.totalKA.totalTA;
        }


      }

      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCMY.cuautitlan;// this.totalKMY.cuautitlanTMY;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCMY.tultitlan;//this.totalKMY.tultitlanTMY;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCMY.guadalajara;//this.totalKMY.guadalajaraTMY;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCMY.hermosillo;//this.totalKMY.hermosilloTMY;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCMY.mexicali;//this.totalKMY.mexicaliTMY;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCMY.orizaba;//this.totalKMY.orizabaTMY;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCMY.ramosArispe;//this.totalKMY.ramisArispeTMY;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCMY.total;//this.totalKMY.totalTMY;
        }


      }

      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCJN.cuautitlan;// this.totalKJN.cuautitlanTJN;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCJN.tultitlan;//this.totalKJN.tultitlanTJN;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCJN.guadalajara;//this.totalKJN.guadalajaraTJN;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCJN.hermosillo;//this.totalKJN.hermosilloTJN;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCJN.mexicali;//this.totalKJN.mexicaliTJN;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCJN.orizaba;//this.totalKJN.orizabaTJN;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCJN.ramosArispe;//this.totalKJN.ramisArispeTJN;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCJN.total;//this.totalKMY.totalTMY;
        }


      }

      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCJL.cuautitlan;// this.totalKJL.cuautitlanTJL;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCJL.tultitlan;//this.totalKJL.tultitlanTJL;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCJL.guadalajara;//this.totalKJL.guadalajaraTJL;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCJL.hermosillo;//this.totalKJL.hermosilloTJL;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCJL.mexicali;//this.totalKJL.mexicaliTJL;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCJL.orizaba;//this.totalKJL.orizabaTJL;
        }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCJL.ramosArispe;//this.totalKJL.ramisArispeTJL;
        }
        if(e.summaryCells[11].length !== 0){
        e.summaryCells[11][0].value = totalIVCJL.total;//this.totalKJL.totalTMY;
        }


      }

      if (e.data.key == '08 AGO') {


        // if(Number.isNaN(totalIVCAG.cuautitlan)){
        //   e.summaryCells[2][0].value = 0.0;
        // }else{
          if(e.summaryCells[4].length !== 0){
          e.summaryCells[4][0].value = totalIVCAG.cuautitlan;// this.totalKJL.cuautitlanTJL;
          }
          if(e.summaryCells[5].length !== 0){
          e.summaryCells[5][0].value = totalIVCAG.tultitlan;//this.totalKJL.tultitlanTJL;
          }          
          if(e.summaryCells[6].length !== 0){
          e.summaryCells[6][0].value = totalIVCAG.guadalajara;//this.totalKJL.guadalajaraTJL;  
          }        
          if(e.summaryCells[7].length !== 0){
          e.summaryCells[7][0].value = totalIVCAG.hermosillo;//this.totalKJL.hermosilloTJL;
          }
          if(e.summaryCells[8].length !== 0){
          e.summaryCells[8][0].value = totalIVCAG.mexicali;//this.totalKJL.mexicaliTJL;
          }
          if(e.summaryCells[9].length !== 0){
          e.summaryCells[9][0].value = totalIVCAG.orizaba;//this.totalKJL.orizabaTJL;
          }          
          if(e.summaryCells[10].length !== 0){
          e.summaryCells[10][0].value = totalIVCAG.ramosArispe;//this.totalKJL.ramisArispeTJL;     
          }     
          if(e.summaryCells[11].length !== 0){
          e.summaryCells[11][0].value = totalIVCAG.total;//this.totalKJL.totalTMY;   
          }       
        
      }

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

        rowValues[3][0].value = totalIVCE.cuautitlan;//sumaCuautitlaE;
        rowValues[4][0].value = totalIVCE.tultitlan;//sumaTultitlanE;
        rowValues[5][0].value = totalIVCE.guadalajara;//sumaGuadalajaraE;
        rowValues[6][0].value = totalIVCE.hermosillo;//sumaHermosilloE;
        rowValues[7][0].value = totalIVCE.mexicali;//sumaMexicaliE;
        rowValues[8][0].value = totalIVCE.orizaba;//sumaOrizabaE;
        rowValues[9][0].value = totalIVCE.ramosArispe;//sumaRamozAE;
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
    }

    if(row.rowType == "totalFooter"){
      

      row.values[3].value = totalOperacionIVC.cuautitlan;//TotalSCuautitlan;
      row.values[4].value = totalOperacionIVC.tultitlan;//TotalSTultitlan;
      row.values[5].value = totalOperacionIVC.guadalajara;//TotalSGuadalajara;
      row.values[6].value = totalOperacionIVC.hermosillo;//TotalSHermosillo;
      row.values[7].value = totalOperacionIVC.mexicali;//TotalSMexicali;
      row.values[8].value = totalOperacionIVC.orizaba;//TotalSOrizaba;
      row.values[9].value = totalOperacionIVC.ramosArispe;//TotalSRamozA;
      row.values[10].value = totalOperacionIVC.total;//TotalSRamozA;


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


  onRowPreparedKMS(e){

  }

  onCellPreparedIKMS(e){

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


