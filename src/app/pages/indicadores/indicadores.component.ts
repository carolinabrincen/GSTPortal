import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { DxChartComponent, } from 'devextreme-angular';
import { IndicadoresService } from '../../services/indicadores/indicadores.service';
import { ScoreCard } from '../../shared/models/indicadores/scoreCard.model';
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
    TotalIngresosTotal,
    TotalOperacionIngresosTotal,
    TotalIngresos, 
    TotalKilometros, 
    TotalOperacionIK,
    AgrupamietoIngresoTotalE,
    AgrupamietoIngresoTotalF,
    AgrupamietoIngresoTotalM,
    AgrupamietoIngresoTotalA,
    AgrupamietoIngresoTotalMY,
    AgrupamietoIngresoTotalJN,
    AgrupamietoIngresoTotalJL,
    AgrupamietoIngresoTotalAG,
    AgrupamietoIngresoTotalS,
    AgrupamietoIngresoTotalOC,
    AgrupamietoIngresoTotalNV,
    AgrupamietoIngresoTotalDC,
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
    TotalAgrupamientoIngresosTotalE,
    TotalAgrupamientoIngresosTotalF,
    TotalAgrupamientoIngresosTotalM,
    TotalAgrupamientoIngresosTotalA,
    TotalAgrupamientoIngresosTotalMY,
    TotalAgrupamientoIngresosTotalJN,
    TotalAgrupamientoIngresosTotalJL,
    TotalAgrupamientoIngresosTotalAG,
    TotalAgrupamientoIngresosTotalS,
    TotalAgrupamientoIngresosTotalOC,
    TotalAgrupamientoIngresosTotalNV,
    TotalAgrupamientoIngresosTotalDC,
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
   import { Chart, ChartDescription } from '../../shared/models/indicadores/chart.model';
   import { exportWidgets } from 'devextreme/viz/export';

   import { exportFromMarkup } from 'devextreme/viz/export';
   import canvg from 'canvg';
  //  import { Canvg } from 'canvg';

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};

//=====================TOTALES INGRESOS/KILOMETROS============================================
const totalIngresosTL24 = new TotalIngresosTotal
const totalOperacionITL24 = new TotalOperacionIngresosTotal;
const totalIngresos = new TotalIngresos;
const totalIngresos24 = new TotalIngresos;
const totalKilomentros = new TotalKilometros;
const totalKilomentros24 = new TotalKilometros;
const totalOperacionIK = new TotalOperacionIK;
const totalOperacionIK24 = new TotalOperacionIK;

const agrupamientoITLE24 = new AgrupamietoIngresoTotalE;
const agrupamientoITLF24 = new AgrupamietoIngresoTotalF;
const agrupamientoITLM24 = new AgrupamietoIngresoTotalM;
const agrupamientoITLA24 = new AgrupamietoIngresoTotalA;
const agrupamientoITLMY24 = new AgrupamietoIngresoTotalMY;
const agrupamientoITLJN24 = new AgrupamietoIngresoTotalJN;
const agrupamientoITLJL24 = new AgrupamietoIngresoTotalJL;
const agrupamientoITLAG24 = new AgrupamietoIngresoTotalAG;
const agrupamientoITLS24 = new AgrupamietoIngresoTotalS;
const agrupamientoITLOC24 = new AgrupamietoIngresoTotalOC;
const agrupamientoITLNV24 = new AgrupamietoIngresoTotalNV;
const agrupamientoITLDC24 = new AgrupamietoIngresoTotalDC;
const agrupamientoIE = new AgrupamietoIngresoE;
const agrupamientoIE24 = new AgrupamietoIngresoE;
const agrupamientoIF = new AgrupamietoIngresoF;
const agrupamientoIF24 = new AgrupamietoIngresoF;
const agrupamientoIM = new AgrupamietoIngresoM;
const agrupamientoIM24 = new AgrupamietoIngresoM;
const agrupamientoIA = new AgrupamietoIngresoA;
const agrupamientoIA24 = new AgrupamietoIngresoA;
const agrupamientoIMY = new AgrupamietoIngresoMY;
const agrupamientoIMY24 = new AgrupamietoIngresoMY;
const agrupamientoIJN = new AgrupamietoIngresoJN;
const agrupamientoIJN24 = new AgrupamietoIngresoJN;
const agrupamientoIJL = new AgrupamietoIngresoJL;
const agrupamientoIJL24 = new AgrupamietoIngresoJL;
const agrupamientoIAG = new AgrupamietoIngresoAG;
const agrupamientoIAG24 = new AgrupamietoIngresoAG;
const agrupamientoIS = new AgrupamietoIngresoS;
const agrupamientoIS24 = new AgrupamietoIngresoS;
const agrupamientoIOC = new AgrupamietoIngresoOC;
const agrupamientoIOC24 = new AgrupamietoIngresoOC;
const agrupamientoINV = new AgrupamietoIngresoNV;
const agrupamientoINV24 = new AgrupamietoIngresoNV;
const agrupamientoIDC = new AgrupamietoIngresoDC;
const agrupamientoIDC24 = new AgrupamietoIngresoDC;
const agrupamientoKE = new AgrupamietoKilometrosE;
const agrupamientoKE24 = new AgrupamietoKilometrosE;
const agrupamientoKF = new AgrupamietoKilometrosF;
const agrupamientoKF24 = new AgrupamietoKilometrosF;
const agrupamientoKM = new AgrupamietoKilometrosM;
const agrupamientoKM24 = new AgrupamietoKilometrosM;
const agrupamientoKA = new AgrupamietoKilometrosA;
const agrupamientoKA24 = new AgrupamietoKilometrosA;
const agrupamientoKMY = new AgrupamietoKilometrosMY;
const agrupamientoKMY24 = new AgrupamietoKilometrosMY;
const agrupamientoKJN = new AgrupamietoKilometrosJN;
const agrupamientoKJN24 = new AgrupamietoKilometrosJN;
const agrupamientoKJL = new AgrupamietoKilometrosJL;
const agrupamientoKJL24 = new AgrupamietoKilometrosJL;
const agrupamientoKAG = new AgrupamietoKilometrosAG;
const agrupamientoKAG24 = new AgrupamietoKilometrosAG;
const agrupamientoKS = new AgrupamietoKilometrosS;
const agrupamientoKS24 = new AgrupamietoKilometrosS;
const agrupamientoKOC = new AgrupamietoKilometrosOC;
const agrupamientoKOC24 = new AgrupamietoKilometrosOC;
const agrupamientoKNV = new AgrupamietoKilometrosNV;
const agrupamientoKNV24 = new AgrupamietoKilometrosNV;
const agrupamientoKDC = new AgrupamietoKilometrosDC;
const agrupamientoKDC24 = new AgrupamietoKilometrosDC;

const totalAgrupamientoITLE24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLF24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLM24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLA24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLMY24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLJN24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLJL24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLAG24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLS24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLOC24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLNV24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoITLDC24 = new TotalAgrupamientoIngresosTotalE;
const totalAgrupamientoIKE = new TotalAgrupamientoIKE;
const totalAgrupamientoIKE24 = new TotalAgrupamientoIKE;
const totalAgrupamientoIKF = new TotalAgrupamientoIKF;
const totalAgrupamientoIKF24 = new TotalAgrupamientoIKF;
const totalAgrupamientoIKM = new TotalAgrupamientoIKM;
const totalAgrupamientoIKM24 = new TotalAgrupamientoIKM;
const totalAgrupamientoIKA = new TotalAgrupamientoIKA;
const totalAgrupamientoIKA24 = new TotalAgrupamientoIKA;
const totalAgrupamientoIKMY = new TotalAgrupamientoIKMY;
const totalAgrupamientoIKMY24 = new TotalAgrupamientoIKMY;
const totalAgrupamientoIKJN = new TotalAgrupamientoIKJN;
const totalAgrupamientoIKJN24 = new TotalAgrupamientoIKJN;
const totalAgrupamientoIKJL = new TotalAgrupamientoIKJL;
const totalAgrupamientoIKJL24 = new TotalAgrupamientoIKJL;
const totalAgrupamientoIKAG = new TotalAgrupamientoIKAG;
const totalAgrupamientoIKAG24 = new TotalAgrupamientoIKAG;
const totalAgrupamientoIKS = new TotalAgrupamientoIKS;
const totalAgrupamientoIKS24 = new TotalAgrupamientoIKS;
const totalAgrupamientoIKOC = new TotalAgrupamientoIKOC;
const totalAgrupamientoIKOC24 = new TotalAgrupamientoIKOC;
const totalAgrupamientoIKNV = new TotalAgrupamientoIKNV;
const totalAgrupamientoIKNV24 = new TotalAgrupamientoIKNV;
const totalAgrupamientoIKDC = new TotalAgrupamientoIKDC;
const totalAgrupamientoIKDC24 = new TotalAgrupamientoIKDC;

//=====================TOTALES VIAJES/INGRESOS============================================
const viajesCargadosE = new ViajesCargadosE;
const viajesCargadosE24 = new ViajesCargadosE;
const viajesCargadosF = new ViajesCargadosF;
const viajesCargadosF24 = new ViajesCargadosF;
const viajesCargadosM = new ViajesCargadosM;
const viajesCargadosM24 = new ViajesCargadosM;
const viajesCargadosA = new ViajesCargadosA;
const viajesCargadosA24 = new ViajesCargadosA;
const viajesCargadosMY = new ViajesCargadosMY;
const viajesCargadosMY24 = new ViajesCargadosMY;
const viajesCargadosJN = new ViajesCargadosJN;
const viajesCargadosJN24 = new ViajesCargadosJN;
const viajesCargadosJL = new ViajesCargadosJL;
const viajesCargadosJL24 = new ViajesCargadosJL;
const viajesCargadosAG = new ViajesCargadosAG;
const viajesCargadosAG24 = new ViajesCargadosAG;
const viajesCargadosS = new ViajesCargadosS;
const viajesCargadosS24 = new ViajesCargadosS;
const viajesCargadosOC = new ViajesCargadosOC;
const viajesCargadosOC24 = new ViajesCargadosOC;
const viajesCargadosNV = new ViajesCargadosNV;
const viajesCargadosNV24 = new ViajesCargadosNV;
const viajesCargadosDC = new ViajesCargadosDC;
const viajesCargadosDC24 = new ViajesCargadosDC;
const totalVC = new TotalViajesCargados;
const totalVC24 = new TotalViajesCargados;
const totalOperacionIVC = new TotalOperacionIVC;
const totalOperacionIVC24 = new TotalOperacionIVC;
const totalOperacionKVC = new TotalOperacionKVC;
const totalOperacionKVC24 = new TotalOperacionKVC;
const totalIVCE = new TotalIngresosVCE;
const totalIVCE24 = new TotalIngresosVCE;
const totalIVCF = new TotalIngresosVCF;
const totalIVCF24 = new TotalIngresosVCF;
const totalIVCM = new TotalIngresosVCM;
const totalIVCM24 = new TotalIngresosVCM;
const totalIVCA = new TotalIngresosVCA;
const totalIVCA24 = new TotalIngresosVCA;
const totalIVCMY = new TotalIngresosVCMY;
const totalIVCMY24 = new TotalIngresosVCMY;
const totalIVCJN = new TotalIngresosVCJN;
const totalIVCJN24 = new TotalIngresosVCJN;
const totalIVCJL = new TotalIngresosVCJL;
const totalIVCJL24 = new TotalIngresosVCJL;
const totalIVCAG = new TotalIngresosVCAG;
const totalIVCAG24 = new TotalIngresosVCAG;
const totalIVCS = new TotalIngresosVCS;
const totalIVCS24 = new TotalIngresosVCS;
const totalIVCOC = new TotalIngresosVCOC;
const totalIVCOC24 = new TotalIngresosVCOC;
const totalIVCNV = new TotalIngresosVCNV;
const totalIVCNV24 = new TotalIngresosVCNV;
const totalIVCDC = new TotalIngresosVCDC;
const totalIVCDC24 = new TotalIngresosVCDC;
const totalKVCE = new TotalKilomeotrsVCE;
const totalKVCE24 = new TotalKilomeotrsVCE;
const totalKVCF = new TotalKilomeotrsVCF;
const totalKVCF24 = new TotalKilomeotrsVCF;
const totalKVCM = new TotalKilomeotrsVCM;
const totalKVCM24 = new TotalKilomeotrsVCM;
const totalKVCA = new TotalKilomeotrsVCA;
const totalKVCA24 = new TotalKilomeotrsVCA;
const totalKVCMY = new TotalKilomeotrsVCMY;
const totalKVCMY24 = new TotalKilomeotrsVCMY;
const totalKVCJN = new TotalKilomeotrsVCJN;
const totalKVCJN24 = new TotalKilomeotrsVCJN;
const totalKVCJL = new TotalKilomeotrsVCJL;
const totalKVCJL24 = new TotalKilomeotrsVCJL;
const totalKVCAG = new TotalKilomeotrsVCAG;
const totalKVCAG24 = new TotalKilomeotrsVCAG;
const totalKVCS = new TotalKilomeotrsVCS;
const totalKVCS24 = new TotalKilomeotrsVCS;
const totalKVCOC = new TotalKilomeotrsVCOC;
const totalKVCOC24 = new TotalKilomeotrsVCOC;
const totalKVCNV = new TotalKilomeotrsVCNV;
const totalKVCNV24 = new TotalKilomeotrsVCNV;
const totalKVCDC = new TotalKilomeotrsVCDC;
const totalKVCDC24 = new TotalKilomeotrsVCDC;

@Component({
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
})
export class IndicadoresComponent implements OnInit {

  @ViewChild("chart1", { static: false }) chart1: DxChartComponent;
  @ViewChild("chart2", { static: false }) chart2: DxChartComponent;
  @ViewChild("chart3", { static: false }) chart3: DxChartComponent;
  @ViewChild("chart4", { static: false }) chart4: DxChartComponent;
  @ViewChild("chart5", { static: false }) chart5: DxChartComponent;
  @ViewChild("chart6", { static: false }) chart6: DxChartComponent;

  @ViewChild("chart1", { static: false }) chart124: DxChartComponent;
  @ViewChild("chart2", { static: false }) chart224: DxChartComponent;
  @ViewChild("chart3", { static: false }) chart324: DxChartComponent;
  @ViewChild("chart4", { static: false }) chart424: DxChartComponent;
  @ViewChild("chart5", { static: false }) chart524: DxChartComponent;
  @ViewChild("chart6", { static: false }) chart624: DxChartComponent;

  @ViewChild("chart1Test", { static: false }) chart1Test: DxChartComponent;
  @ViewChild("canvas", { static: false }) canvas;

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  ingresos: ScoreCard[] = [];
  ingresos24: ScoreCard[] = [];
  ingresosTotal2024: ScoreCard[] = [];
  kilomentros: ScoreCard[] = [];
  kilomentros24: ScoreCard[] = [];
  ingresosKilometros: ScoreCard[] = [];
  ingresosKilometros24: ScoreCard[] = [];
  viajes: ScoreCard[] = [];
  viajes24: ScoreCard[] = [];
  kilometroViajes: ScoreCard[] = [];
  kilometroViajes24: ScoreCard[] = [];
  ingresoViajes: ScoreCard[] = [];
  ingresoViajes24: ScoreCard[] = [];
  precioMeta: ScoreCard[] = [];
  precioMeta24: ScoreCard[] = [];
  viajesCargados: ScoreCard[] = [];
  viajesCargados24: ScoreCard[] = [];
  operadoresUDN: ScoreCard[] = [];
  operadoresUDN24: ScoreCard[] = [];
  ingresoOperador: ScoreCard[] = [];
  ingresoOperador24: ScoreCard[] = [];
  ingresoOpProm24: any[] = [];

  graficaIXO24: any[] = [];
  graficaOP24: any[] = [];

  chartData: any[] = [];

  kmsXOperacion: Chart[] = [];
  kmsXUdn: Chart[] = [];
  porXCargadosUdn: Chart[] = [];
  porXFlotaOperacion: Chart[] = [];
  porXFlotaUdn: Chart[] = [];
  porXOperacion: Chart[] = [];

  kmsXOperacion24: Chart[] = [];
  kmsXOperacionDescription24: ChartDescription[] = [];
  kmsXUdn24: Chart[] = [];
  KmsXUdnDescription24: ChartDescription[] = [];
  kmsXUdnTotal24: ChartDescription[] = [];
  porXCargadosUdn24: Chart[] = [];
  porXCargadosUdnDescription24: ChartDescription[] = [];
  porXFlotaOperacion24: Chart[] = [];
  porXFlotaOperacionDescription24: ChartDescription[] = [];
  porXFlotaUdn24: Chart[] = [];
  porXFlotaUdnDescription24: ChartDescription[] = [];
  porXOperacion24: Chart[] = [];
  porXOperacionDescription24: ChartDescription[] = [];

  periodoVariacion: string = "";

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
  kmsMensuales: any[] = [];
  periodo: any[] = [
    { id: 202301, periodo: 202301 },
    { id: 202302, periodo: 202302 },
    { id: 202303, periodo: 202303 },
    { id: 202304, periodo: 202304 },
    { id: 202305, periodo: 202305 },
    { id: 202306, periodo: 202306 },
    { id: 202307, periodo: 202307 },
    { id: 202308, periodo: 202308 },
    { id: 202309, periodo: 202309 },
    { id: 202310, periodo: 202310 },
    { id: 202311, periodo: 202311 },
    { id: 202312, periodo: 202312 },
    { id: 202401, periodo: 202401 },
    { id: 202402, periodo: 202402 },
    { id: 202403, periodo: 202403 },
    { id: 202404, periodo: 202404 },
    { id: 202405, periodo: 202405 },
    { id: 202406, periodo: 202406 },
    { id: 202407, periodo: 202407 },
  ];

  periodoAC: any[] = [
    { id: 202401, periodo: 202401 },
    { id: 202402, periodo: 202402 },
    { id: 202403, periodo: 202403 },
    { id: 202404, periodo: 202404 },
    { id: 202405, periodo: 202405 },
    { id: 202406, periodo: 202406 },
    { id: 202407, periodo: 202407 },
  ];

  selectedPeriodo: number = 0;
  selectedPerAC: number = 0;

  loadingVisible = false;

  graficaModel: GraficaIngresoO[] = [];
  subtalesGrafica: SubtotalesKCV;

  collapseGroup: boolean;

  graficaSueldoOp: any[] = [];
  graficaSueldoOpAc: any[] = [];

  arrUnidadesNegocio: any[] = [];
  arrTractos: string[] = [];

  mesSeleccionado: number = 0;
  anioSeleccionado: number = 0;
  udnSeleccionado: number[] = [];
  tractoSeleccionado: string = '';

  sueldoDetalle: any[] = [];

  arrMeses: any[] = [
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
  arrAnos: any[] = [
    { idAnio: 2024, anio: "2024" },
    { idAnio: 2023, anio: "2023" },
    { idAnio: 2022, anio: "2022" },
    { idAnio: 2021, anio: "2021" },
  ];

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

  oilProductionData = [];

  lineStyleValue: string;

  autoBreaksEnabledValue = true;
  breaksCountValue: number;

  soEne: number = 0;
  soFeb: number = 0;
  soMar: number = 0;
  soAbr: number = 0;
  soMay: number = 0;
  soJun: number = 0;

  sdEne: number = 0;
  sdFeb: number = 0;
  sdMar: number = 0;
  sdAbr: number = 0;
  sdMay: number = 0;
  sdJun: number = 0;

  totalOperaSO: number = 0;
  totalSueldoDSO: number = 0;

  autogrouping = false;

  soEneAC: number = 0;
  soFebAC: number = 0;
  soMarAC: number = 0;
  soAbrAC: number = 0;
  soMayAC: number = 0;
  soJunAC: number = 0;

  sdEneAC: number = 0;
  sdFebAC: number = 0;
  sdMarAC: number = 0;
  sdAbrAC: number = 0;
  sdMayAC: number = 0;
  sdJunAC: number = 0;

  totalOperaSOAC: number = 0;
  totalSueldoDSOAC: number = 0;

  autogroupingAC = false;

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

    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    
  }


  ngOnInit(): void {
    this.getScoreCard();
    this.getScoreCard2024();
    this.getIndicadoresChart();
    this.getIndicadoresChart24();
    this.getGraficaIO24();
    this.getSueldoBase();
    this.getSueldoOpAc();
    this.getUnidadesNegocio();
    this.getTractos();
  }

  ngAfterViewInit(): void {}

  customizeSeries(valueFromNameField: number) {
    return valueFromNameField === 2009
      ? { type: 'line', label: { visible: true }, color: '#ff3f7a' } : {};
  }

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

  getUnidadesNegocio() {
    this.indicadorService.getUnidadesNegocio().subscribe(res => {
      this.arrUnidadesNegocio = res.data;

    });

  }

  getTractos() {
    if (this.anioSeleccionado && this.mesSeleccionado && this.udnSeleccionado) {
      this.arrTractos = [];
      this.selectTracto.value = '';
      this.indicadorService.getTractos(this.anioSeleccionado, this.mesSeleccionado, this.udnSeleccionado).subscribe(res => {
        this.arrTractos = res.data.tractos;

      });
    }
  }

  getScoreCard(){
    this.loadingVisible = true;
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
      this.ingresoViajes = data.data.scIngrViaje;      
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

  getScoreCard2024(){
    // this.loadingVisible = true;
    this.indicadorService.getScoreCard2024().subscribe(data => {
// ====================================INGRESOS TOTAL======================================================================================================
      this.ingresosTotal2024 = data.data.scIngTotal;
// ====================================INGRESOS======================================================================================================
      this.ingresos24 = data.data.scIng;
      // this.ingresos24.sort((a, b) => (a.orden < b.orden ? -1 : 1))
// ====================================KILOMETROS====================================================================================================
      this.kilomentros24 = data.data.scKms;      
      //this.kilomentros24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================VIAJES========================================================================================================
      this.viajes24 = data.data.scViajes;
      //this.viajes24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================VIAJES CARGADOS===============================================================================================
      this.viajesCargados24 = data.data.scViajesC;      
      //this.viajesCargados24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================INGRESO / KILOMETROS==========================================================================================
      this.ingresosKilometros24 = data.data.scIngXKm;
      //this.ingresosKilometros24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================KILOMETROS / VIAJES===========================================================================================
      this.kilometroViajes24 = data.data.scKmsViaje;      
      //this.kilometroViajes24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================INGRESO / VIAJES==============================================================================================
      this.ingresoViajes24 = data.data.scIngrViaje
      //this.ingresoViajes24.sort((a, b) => (a.orden < b.orden ? -1 : 1));
// ====================================OPERADORES UDN ===============================================================================================  
      this.operadoresUDN24 = data.data.scOperadores// data.data.scOperadores;
// ====================================INGRESO POR OPERADOR =========================================================================================      
      this.ingresoOperador24 = data.data.scIngrXOperador;    
      
      this.ingresoOpProm24 = data.data.scIngrXOperadorProm;
 
      this.precioMeta24 = data.data.scPrecioMeta;

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

  getkmsMensuales(){
    const request = new Promise((resolve, reject) => {
    this.indicadorService.getkmsMensuales(this.selectedPeriodo).subscribe(data => {
      this.kmsMensuales = data.data;
      this.kmsMensuales.sort((a, b) => (a.udN < b.udN ? -1 : 1));
      console.log(this.kmsMensuales)
     
      this.loadingVisible = false;
    })

    })
    return request;
  }

  getIndicadoresChart(){
    this.indicadorService.getIndicadoresChart().subscribe(data => {
/*==========================MILLONES DE KMS RECORRIDOS POR TIPO DE OPERACIÓN=============================*/
      this.kmsXOperacion = data.data.kmsXOperacion;
      this.kmsXOperacion.sort((a, b) => (a.periodo < b.periodo ? -1 : 1)); 
/*==========================MILLONES KMS RECORRIDOS UDN==================================================*/
      this.kmsXUdn = data.data.kmsXUDN;
      this.kmsXUdn.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
/*===========================% KMS POR TIPO OPERACIÓN===================================================*/
      this.porXOperacion = data.data.porXOperacion;
      this.porXOperacion.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
/*===========================*% KMS CARGADOS UDN========================================================*/
      this.porXCargadosUdn = data.data.porXCargadosUDN;
      this.porXCargadosUdn.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
/*===========================% FLOTA ACTIVA TIPO OPERACIÓN==============================================*/
      this.porXFlotaOperacion = data.data.porXFlotaOperacion;
      this.porXFlotaOperacion.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
/*===========================% FLOTA ACTIVA UDN=========================================================*/
      this.porXFlotaUdn = data.data.porXFlotaUDN;
      this.porXFlotaUdn.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
    })
  }

  getIndicadoresChart24(){
    this.indicadorService.getIndicadoresChart24().subscribe(data => {
      // console.log(data.data)
      this.periodoVariacion = data.data.periodoVariacion;
      
/*==========================MILLONES DE KMS RECORRIDOS POR TIPO DE OPERACIÓN=============================*/
      var myKMSO = data.data.varKmsXOperacion;
      this.kmsXOperacion24 = data.data.kmsXOperacion;
      this.kmsXOperacion24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1)); 
      // console.log(this.kmsXOperacion24)
      
      const dataKMSO = data.data.varKmsXOperacion.filter((word) => word.clasificacion !== "KMS RECORRIDOS");
      this.kmsXOperacionDescription24 = dataKMSO;
      this.kmsXOperacionDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      for(let i =0; i<myKMSO.length; i++){
        var myvalue = Math.trunc(myKMSO[i].kmsDiferencia);

        var myFormat = myvalue.toString().split(".");
        myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        myKMSO[i].kmsDiferencia = myFormat.join("");

      }
/*==========================MILLONES KMS RECORRIDOS UDN==================================================*/
      var myKMSRUDN = data.data.varKmsXUDN

      this.kmsXUdn24 = data.data.kmsXUDN;
      this.kmsXUdn24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
      this.KmsXUdnDescription24 = data.data.varKmsXUDN
      this.KmsXUdnDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      var myTotal = []
      myTotal.push(data.data.varKmsXOperacion[0])
      this.kmsXUdnTotal24 = myTotal;

      for(let i =0; i<myKMSRUDN.length; i++){
        var myvalue = Math.trunc(myKMSRUDN[i].kmsDiferencia);

        var myFormat = myvalue.toString().split(".");
        myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        myKMSRUDN[i].kmsDiferencia = myFormat.join("");
      }
/*===========================% KMS POR TIPO OPERACIÓN===================================================*/
      var myKMSTOP = data.data.varPorXOperacion;

      this.porXOperacion24 = data.data.porXOperacion;
      this.porXOperacion24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
      this.porXOperacionDescription24 = data.data.varPorXOperacion;
      this.porXOperacionDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      for(let i =0; i<myKMSTOP.length; i++){

        var option = {
          style: 'percent',
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        };
        
        var formatter = new Intl.NumberFormat("en-US", option);
        var discountFormat = formatter.format(myKMSTOP[i].kmsDiferencia);
        
        myKMSTOP[i].kmsDiferencia = discountFormat;
      }

/*===========================*% KMS CARGADOS UDN========================================================*/
      var myKMSCUDN = data.data.varPorXCargadosUDN;
      this.porXCargadosUdn24 = data.data.porXCargadosUDN;
      this.porXCargadosUdn24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
      this.porXCargadosUdnDescription24 = data.data.varPorXCargadosUDN;
      this.porXCargadosUdnDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      for(let i =0; i<myKMSCUDN.length; i++){
        var option = {
          style: 'percent',
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        };
        
        var formatter2 = new Intl.NumberFormat("en-US", option);
        var discountFormat2 = formatter2.format(myKMSCUDN[i].kmsDiferencia);
        
        myKMSCUDN[i].kmsDiferencia = discountFormat2;

        var textMayus = myKMSCUDN[i].clasificacion.toUpperCase();
        myKMSCUDN[i].clasificacion = textMayus;
 
      }

/*===========================% FLOTA ACTIVA TIPO OPERACIÓN==============================================*/
      this.porXFlotaOperacion24 = data.data.porXFlotaOperacion;
      this.porXFlotaOperacion24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));


      const result = data.data.varPorXFlotaOperacion.filter((word) => word.clasificacion !== "KMS RECORRIDOS");
      this.porXFlotaOperacionDescription24 = result;
      this.porXFlotaOperacionDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      var myFATO = result;
/*===========================% FLOTA ACTIVA UDN=========================================================*/
      this.porXFlotaUdn24 = data.data.porXFlotaUDN;
      this.porXFlotaUdn24.sort((a, b) => (a.periodo < b.periodo ? -1 : 1));
      this.porXFlotaUdnDescription24 = data.data.varPorXFlotaUDN;
      this.porXFlotaUdnDescription24.sort((a, b) => (a.clasificacion < b.clasificacion ? -1 : 1));

      var myFAUDN = data.data.varPorXFlotaUDN;
    })
  }

  getGraficaIO24(){
    this.indicadorService.getScoreCard2024().subscribe(data => {
      this.graficaIXO24 = data.data.scIngrXOperador;
      this.graficaOP24 = data.data.scIngrXOperadorProm;

      var myArray = [

        {orden: 0, mes: '08 AGO', operadores: 0, ingreso: 0, ingresoXOperador: 0},
        {orden: 0, mes: '09 SEP', operadores: 0, ingreso: 0, ingresoXOperador: 0},
        {orden: 0, mes: '10 OCT', operadores: 0, ingreso: 0, ingresoXOperador: 0},
        {orden: 0, mes: '11 NOV', operadores: 0, ingreso: 0, ingresoXOperador: 0},
        {orden: 0, mes: '12 DIC', operadores: 0, ingreso: 0, ingresoXOperador: 0},
      ]

      this.graficaIXO24.push(myArray[0],myArray[1],myArray[2],myArray[3],myArray[4]);

      this.graficaOP24.push(myArray[0],myArray[1],myArray[2],myArray[3],myArray[4]);
     
    })
  }

  getSueldoBase(){
    var anio = 2024;
    var mes = 4;
    var idTracto = "string"
    var unidadesNegocio = [0]
    this.indicadorService.getSueldoOperador(anio, mes, idTracto, unidadesNegocio).subscribe(data => {
      this.graficaSueldoOp = data.data;
    })
  }

  getSueldoOpAc(){
    this.indicadorService.getSueldoOpAc().subscribe(data => {
      this.graficaSueldoOpAc = data.data;
      //console.log(this.graficaSueldoOpAc)
    })
  }

  getSueldoDetalle(){
    const request = new Promise((resolve, reject) => {
      this.indicadorService.postSueldoDetalle(this.selectedPerAC).subscribe(data =>{
        this.sueldoDetalle = data.data;
        console.log(this.sueldoDetalle)
        this.loadingVisible = false;
      })
    })
  return request;
    
  }

//=====================================Function Selected ======================================
  toPercenage(num) {
    return `${Math.round(num * 100)}%`;
  }

  percentageFormatter(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  
  seleccionarTipoOpe(e: any) {}

  seleccionarPeriodo(e: any) {
    this.selectedPeriodo = e.value
    console.log(this.selectedPeriodo)
  }

  seleccionarMes(e: any) {
    this.mesSeleccionado = e.value;

    this.getTractos();

  }
  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;

    this.getTractos();

  }
  seleccionarUDN(e: any) {
    this.udnSeleccionado = [];
    this.udnSeleccionado = e.value;


    this.getTractos();
  }
  seleccionarTracto(e: any) {
    this.tractoSeleccionado = e.value;

  }
  selectPeriodoAC(e: any) {
    this.selectedPerAC = e.value
    console.log(this.selectedPerAC)
  }


  buscarClick = (e: any) => {

    if (this.selectedPeriodo) {
      this.loadingVisible = true;
      this.getkmsMensuales().then(() => {
        this.loadingVisible = false;
      });
    }else{
      notify({
        message: 'Por favor seleccione el periodo',
        position: {
          my: 'center center',
          at: 'center center',
        },
      }, 'warning', 3000);
    }

  };

  buscarAC = (e: any) => {

    if (this.selectedPerAC) {
      this.loadingVisible = true;
      this.getSueldoDetalle().then(() => {
        this.loadingVisible = false;
      });
    }else{
      notify({
        message: 'Por favor seleccione el periodo',
        position: {
          my: 'center center',
          at: 'center center',
        },
      }, 'warning', 3000);
    }

  };

  borrarClick = (e: any) =>{
    this.selectTracto.value = '';
  }

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
      if (event.data.key == '10 OCT'){
        agrupamientoIOC.cuautitlan = event.summaryCells[4][0].value;
        agrupamientoIOC.tultitlan = event.summaryCells[5][0].value;
        agrupamientoIOC.guadalajara = event.summaryCells[6][0].value;
        agrupamientoIOC.hermosillo = event.summaryCells[7][0].value;
        agrupamientoIOC.mexicali = event.summaryCells[8][0].value;
        agrupamientoIOC.orizaba = event.summaryCells[9][0].value;
        agrupamientoIOC.ramosArispe = event.summaryCells[10][0].value;
        agrupamientoIOC.total = event.summaryCells[11][0].value;
      }
      if (event.data.key == '11 NOV'){
        agrupamientoINV.cuautitlan = event.summaryCells[4][0].value;
        agrupamientoINV.tultitlan = event.summaryCells[5][0].value;
        agrupamientoINV.guadalajara = event.summaryCells[6][0].value;
        agrupamientoINV.hermosillo = event.summaryCells[7][0].value;
        agrupamientoINV.mexicali = event.summaryCells[8][0].value;
        agrupamientoINV.orizaba = event.summaryCells[9][0].value;
        agrupamientoINV.ramosArispe = event.summaryCells[10][0].value;
        agrupamientoINV.total = event.summaryCells[11][0].value;
      }

      if (event.data.key == '12 DIC'){
        agrupamientoIDC.cuautitlan = event.summaryCells[4][0].value;
        agrupamientoIDC.tultitlan = event.summaryCells[5][0].value;
        agrupamientoIDC.guadalajara = event.summaryCells[6][0].value;
        agrupamientoIDC.hermosillo = event.summaryCells[7][0].value;
        agrupamientoIDC.mexicali = event.summaryCells[8][0].value;
        agrupamientoIDC.orizaba = event.summaryCells[9][0].value;
        agrupamientoIDC.ramosArispe = event.summaryCells[10][0].value;
        agrupamientoIDC.total = event.summaryCells[11][0].value;
      }
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
      if (e.data.key == '10 OCT'){
        agrupamientoKOC.cuautitlan = e.summaryCells[4][0].value;
        agrupamientoKOC.tultitlan = e.summaryCells[5][0].value;
        agrupamientoKOC.guadalajara = e.summaryCells[6][0].value;
        agrupamientoKOC.hermosillo = e.summaryCells[7][0].value;
        agrupamientoKOC.mexicali = e.summaryCells[8][0].value;
        agrupamientoKOC.orizaba = e.summaryCells[9][0].value;
        agrupamientoKOC.ramosArispe = e.summaryCells[10][0].value;
        agrupamientoKOC.total = e.summaryCells[11][0].value;

        totalAgrupamientoIKOC.cuautitlan = agrupamientoIOC.cuautitlan / agrupamientoKOC.cuautitlan;
        totalAgrupamientoIKOC.tultitlan = agrupamientoIOC.tultitlan / agrupamientoKOC.tultitlan;
        totalAgrupamientoIKOC.guadalajara = agrupamientoIOC.guadalajara / agrupamientoKOC.guadalajara;
        totalAgrupamientoIKOC.hermosillo = agrupamientoIOC.hermosillo / agrupamientoKOC.hermosillo;
        totalAgrupamientoIKOC.mexicali = agrupamientoIOC.mexicali / agrupamientoKOC.mexicali;
        totalAgrupamientoIKOC.orizaba = agrupamientoIOC.orizaba / agrupamientoKOC.orizaba;
        totalAgrupamientoIKOC.ramosArispe = agrupamientoIOC.ramosArispe / agrupamientoKOC.ramosArispe;
        totalAgrupamientoIKOC.total = agrupamientoIOC.total / agrupamientoKOC.total;
      }
      if (e.data.key == '11 NOV'){
        agrupamientoKNV.cuautitlan = e.summaryCells[4][0].value;
        agrupamientoKNV.tultitlan = e.summaryCells[5][0].value;
        agrupamientoKNV.guadalajara = e.summaryCells[6][0].value;
        agrupamientoKNV.hermosillo = e.summaryCells[7][0].value;
        agrupamientoKNV.mexicali = e.summaryCells[8][0].value;
        agrupamientoKNV.orizaba = e.summaryCells[9][0].value;
        agrupamientoKNV.ramosArispe = e.summaryCells[10][0].value;
        agrupamientoKNV.total = e.summaryCells[11][0].value;

        totalAgrupamientoIKNV.cuautitlan = agrupamientoINV.cuautitlan / agrupamientoKNV.cuautitlan;
        totalAgrupamientoIKNV.tultitlan = agrupamientoINV.tultitlan / agrupamientoKNV.tultitlan;
        totalAgrupamientoIKNV.guadalajara = agrupamientoINV.guadalajara / agrupamientoKNV.guadalajara;
        totalAgrupamientoIKNV.hermosillo = agrupamientoINV.hermosillo / agrupamientoKNV.hermosillo;
        totalAgrupamientoIKNV.mexicali = agrupamientoINV.mexicali / agrupamientoKNV.mexicali;
        totalAgrupamientoIKNV.orizaba = agrupamientoINV.orizaba / agrupamientoKNV.orizaba;
        totalAgrupamientoIKNV.ramosArispe = agrupamientoINV.ramosArispe / agrupamientoKNV.ramosArispe;
        totalAgrupamientoIKNV.total = agrupamientoINV.total / agrupamientoKNV.total;
      }
      if (e.data.key == '12 DIC'){
        agrupamientoKDC.cuautitlan = e.summaryCells[4][0].value;
        agrupamientoKDC.tultitlan = e.summaryCells[5][0].value;
        agrupamientoKDC.guadalajara = e.summaryCells[6][0].value;
        agrupamientoKDC.hermosillo = e.summaryCells[7][0].value;
        agrupamientoKDC.mexicali = e.summaryCells[8][0].value;
        agrupamientoKDC.orizaba = e.summaryCells[9][0].value;
        agrupamientoKDC.ramosArispe = e.summaryCells[10][0].value;
        agrupamientoKDC.total = e.summaryCells[11][0].value;

        totalAgrupamientoIKDC.cuautitlan = agrupamientoIDC.cuautitlan / agrupamientoKDC.cuautitlan;
        totalAgrupamientoIKDC.tultitlan = agrupamientoIDC.tultitlan / agrupamientoKDC.tultitlan;
        totalAgrupamientoIKDC.guadalajara = agrupamientoIDC.guadalajara / agrupamientoKDC.guadalajara;
        totalAgrupamientoIKDC.hermosillo = agrupamientoIDC.hermosillo / agrupamientoKDC.hermosillo;
        totalAgrupamientoIKDC.mexicali = agrupamientoIDC.mexicali / agrupamientoKDC.mexicali;
        totalAgrupamientoIKDC.orizaba = agrupamientoIDC.orizaba / agrupamientoKDC.orizaba;
        totalAgrupamientoIKDC.ramosArispe = agrupamientoIDC.ramosArispe / agrupamientoKDC.ramosArispe;
        totalAgrupamientoIKDC.total = agrupamientoIDC.total / agrupamientoKDC.total;
      }
   

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

      if (e.data.key == '10 OCT') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalAgrupamientoIKOC.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalAgrupamientoIKOC.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalAgrupamientoIKOC.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalAgrupamientoIKOC.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalAgrupamientoIKOC.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.orizaba)){
            e.summaryCells[9][0].value = 0;
          }{
            e.summaryCells[9][0].value = totalAgrupamientoIKOC.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalAgrupamientoIKOC.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKOC.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalAgrupamientoIKOC.total;
          }
        }

      }

      if (e.data.key == '11 NOV') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalAgrupamientoIKNV.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalAgrupamientoIKNV.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalAgrupamientoIKNV.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalAgrupamientoIKNV.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalAgrupamientoIKNV.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalAgrupamientoIKNV.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalAgrupamientoIKNV.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKNV.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalAgrupamientoIKNV.total;
          }
        }
      }

      if (e.data.key == '12 DIC') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalAgrupamientoIKDC.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalAgrupamientoIKDC.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalAgrupamientoIKDC.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalAgrupamientoIKDC.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalAgrupamientoIKDC.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalAgrupamientoIKDC.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalAgrupamientoIKDC.ramosArispe;
        }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalAgrupamientoIKDC.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalAgrupamientoIKDC.total;
          }
        }

      }
     
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

        if(row.key[0] == '10 OCT'){

          rowValues[3][0].value = totalAgrupamientoIKOC.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKOC.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKOC.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKOC.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKOC.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKOC.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKOC.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKOC.total;

        }

        if(row.key[0] == '11 NOV'){

          rowValues[3][0].value = totalAgrupamientoIKNV.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKNV.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKNV.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKNV.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKNV.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKNV.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKNV.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKNV.total;

        }

        if(row.key[0] == '12 DIC'){

          rowValues[3][0].value = totalAgrupamientoIKDC.cuautitlan;
          rowValues[4][0].value = totalAgrupamientoIKDC.tultitlan;
          rowValues[5][0].value = totalAgrupamientoIKDC.guadalajara;
          rowValues[6][0].value = totalAgrupamientoIKDC.hermosillo;
          rowValues[7][0].value = totalAgrupamientoIKDC.mexicali;
          rowValues[8][0].value = totalAgrupamientoIKDC.orizaba;
          rowValues[9][0].value = totalAgrupamientoIKDC.ramosArispe;
          rowValues[10][0].value = totalAgrupamientoIKDC.total;

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
      if (event.data.key == '10 OCT'){
        viajesCargadosOC.cuautitlan = event.summaryCells[4][0].value;
        viajesCargadosOC.tultitlan = event.summaryCells[5][0].value;
        viajesCargadosOC.guadalajara = event.summaryCells[6][0].value;
        viajesCargadosOC.hermosillo = event.summaryCells[7][0].value;
        viajesCargadosOC.mexicali = event.summaryCells[8][0].value;
        viajesCargadosOC.orizaba = event.summaryCells[9][0].value;
        viajesCargadosOC.ramosArispe = event.summaryCells[10][0].value;
        viajesCargadosOC.total = event.summaryCells[11][0].value;

        totalIVCOC.cuautitlan = agrupamientoIOC.cuautitlan / viajesCargadosOC.cuautitlan;
        totalIVCOC.tultitlan = agrupamientoIOC.tultitlan / viajesCargadosOC.tultitlan;
        totalIVCOC.guadalajara = agrupamientoIOC.guadalajara / viajesCargadosOC.guadalajara;
        totalIVCOC.hermosillo = agrupamientoIOC.hermosillo / viajesCargadosOC.hermosillo;
        totalIVCOC.mexicali = agrupamientoIOC.mexicali / viajesCargadosOC.mexicali;
        totalIVCOC.orizaba = agrupamientoIOC.orizaba / viajesCargadosOC.orizaba;
        totalIVCOC.ramosArispe = agrupamientoIOC.ramosArispe / viajesCargadosOC.ramosArispe;
        totalIVCOC.total = agrupamientoIOC.total / viajesCargadosOC.total;

        totalKVCOC.cuautitlan = agrupamientoKOC.cuautitlan / viajesCargadosOC.cuautitlan;
        totalKVCOC.tultitlan = agrupamientoKOC.tultitlan / viajesCargadosOC.tultitlan;
        totalKVCOC.guadalajara = agrupamientoKOC.guadalajara / viajesCargadosOC.guadalajara;
        totalKVCOC.hermosillo = agrupamientoKOC.hermosillo / viajesCargadosOC.hermosillo;
        totalKVCOC.mexicali = agrupamientoKOC.mexicali / viajesCargadosOC.mexicali;
        totalKVCOC.orizaba = agrupamientoKOC.orizaba / viajesCargadosOC.orizaba;
        totalKVCOC.ramosArispe = agrupamientoKOC.ramosArispe / viajesCargadosOC.ramosArispe;
        totalKVCOC.total = agrupamientoKOC.total / viajesCargadosOC.total;
      }
      if (event.data.key == '11 NOV'){
        viajesCargadosNV.cuautitlan = event.summaryCells[4][0].value;
        viajesCargadosNV.tultitlan = event.summaryCells[5][0].value;
        viajesCargadosNV.guadalajara = event.summaryCells[6][0].value;
        viajesCargadosNV.hermosillo = event.summaryCells[7][0].value;
        viajesCargadosNV.mexicali = event.summaryCells[8][0].value;
        viajesCargadosNV.orizaba = event.summaryCells[9][0].value;
        viajesCargadosNV.ramosArispe = event.summaryCells[10][0].value;
        viajesCargadosNV.total = event.summaryCells[11][0].value;

        totalIVCNV.cuautitlan = agrupamientoINV.cuautitlan / viajesCargadosNV.cuautitlan;
        totalIVCNV.tultitlan = agrupamientoINV.tultitlan / viajesCargadosNV.tultitlan;
        totalIVCNV.guadalajara = agrupamientoINV.guadalajara / viajesCargadosNV.guadalajara;
        totalIVCNV.hermosillo = agrupamientoINV.hermosillo / viajesCargadosNV.hermosillo;
        totalIVCNV.mexicali = agrupamientoINV.mexicali / viajesCargadosNV.mexicali;
        totalIVCNV.orizaba = agrupamientoINV.orizaba / viajesCargadosNV.orizaba;
        totalIVCNV.ramosArispe = agrupamientoINV.ramosArispe / viajesCargadosNV.ramosArispe;
        totalIVCNV.total = agrupamientoINV.total / viajesCargadosNV.total;

        totalKVCNV.cuautitlan = agrupamientoKNV.cuautitlan / viajesCargadosNV.cuautitlan;
        totalKVCNV.tultitlan = agrupamientoKNV.tultitlan / viajesCargadosNV.tultitlan;
        totalKVCNV.guadalajara = agrupamientoKNV.guadalajara / viajesCargadosNV.guadalajara;
        totalKVCNV.hermosillo = agrupamientoKNV.hermosillo / viajesCargadosNV.hermosillo;
        totalKVCNV.mexicali = agrupamientoKNV.mexicali / viajesCargadosNV.mexicali;
        totalKVCNV.orizaba = agrupamientoKNV.orizaba / viajesCargadosNV.orizaba;
        totalKVCNV.ramosArispe = agrupamientoKNV.ramosArispe / viajesCargadosNV.ramosArispe;
        totalKVCNV.total = agrupamientoKNV.total / viajesCargadosNV.total;
      }
      if (event.data.key == '12 DIC'){
        viajesCargadosDC.cuautitlan = event.summaryCells[4][0].value;
        viajesCargadosDC.tultitlan = event.summaryCells[5][0].value;
        viajesCargadosDC.guadalajara = event.summaryCells[6][0].value;
        viajesCargadosDC.hermosillo = event.summaryCells[7][0].value;
        viajesCargadosDC.mexicali = event.summaryCells[8][0].value;
        viajesCargadosDC.orizaba = event.summaryCells[9][0].value;
        viajesCargadosDC.ramosArispe = event.summaryCells[10][0].value;
        viajesCargadosDC.total = event.summaryCells[11][0].value;

        totalIVCDC.cuautitlan = agrupamientoIDC.cuautitlan / viajesCargadosDC.cuautitlan;
        totalIVCDC.tultitlan = agrupamientoIDC.tultitlan / viajesCargadosDC.tultitlan;
        totalIVCDC.guadalajara = agrupamientoIDC.guadalajara / viajesCargadosDC.guadalajara;
        totalIVCDC.hermosillo = agrupamientoIDC.hermosillo / viajesCargadosDC.hermosillo;
        totalIVCDC.mexicali = agrupamientoIDC.mexicali / viajesCargadosDC.mexicali;
        totalIVCDC.orizaba = agrupamientoIDC.orizaba / viajesCargadosDC.orizaba;
        totalIVCDC.ramosArispe = agrupamientoIDC.ramosArispe / viajesCargadosDC.ramosArispe;
        totalIVCDC.total = agrupamientoIDC.total / viajesCargadosDC.total;

        totalKVCDC.cuautitlan = agrupamientoKDC.cuautitlan / viajesCargadosDC.cuautitlan;
        totalKVCDC.tultitlan = agrupamientoKDC.tultitlan / viajesCargadosDC.tultitlan;
        totalKVCDC.guadalajara = agrupamientoKDC.guadalajara / viajesCargadosDC.guadalajara;
        totalKVCDC.hermosillo = agrupamientoKDC.hermosillo / viajesCargadosDC.hermosillo;
        totalKVCDC.mexicali = agrupamientoKDC.mexicali / viajesCargadosDC.mexicali;
        totalKVCDC.orizaba = agrupamientoKDC.orizaba / viajesCargadosDC.orizaba;
        totalKVCDC.ramosArispe = agrupamientoKDC.ramosArispe / viajesCargadosDC.ramosArispe;
        totalKVCDC.total = agrupamientoKDC.total / viajesCargadosDC.total;
      }
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
          if(Number.isNaN(totalKVCS.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalKVCS.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalKVCS.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalKVCS.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalKVCS.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalKVCS.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalKVCS.hermosillo)){
            e.summaryCells[7][0].value = 0;  
          }else{
            e.summaryCells[7][0].value = totalKVCS.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalKVCS.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalKVCS.mexicali;
          }
        }
        if(e.summaryCells[9][0].value.length !== 0){
          if(Number.isNaN(totalKVCS.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalKVCS.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalKVCS.ramosArispe)){
            e.summaryCells[10][0].value = 0;  
          }else{
            e.summaryCells[10][0].value = totalKVCS.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalKVCS.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalKVCS.total;
          }
        }
      }

      if (e.data.key == '10 OCT') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalKVCOC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalKVCOC.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalKVCOC.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalKVCOC.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalKVCOC.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalKVCOC.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalKVCOC.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalKVCOC.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalKVCOC.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalKVCOC.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalKVCOC.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalKVCOC.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalKVCOC.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalKVCOC.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalKVCOC.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalKVCOC.total;
          }
        }

      }

      if (e.data.key == '11 NOV') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalKVCNV.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalKVCNV.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalKVCNV.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalKVCNV.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalKVCNV.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalKVCNV.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalKVCNV.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalKVCNV.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalKVCNV.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalKVCNV.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalKVCNV.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalKVCNV.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalKVCNV.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalKVCNV.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalKVCNV.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalKVCNV.total;
          }
        }

      }

      if (e.data.key == '12 DIC') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCDC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCDC.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalIVCDC.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalIVCDC.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalIVCDC.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalIVCDC.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalIVCDC.hermosillo)){
            e.summaryCells[7][0].value = 0;
          }else{
            e.summaryCells[7][0].value = totalIVCDC.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalIVCDC.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalIVCDC.mexicali;
          }
          }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalIVCDC.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalIVCDC.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalIVCDC.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalIVCDC.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalIVCDC.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalIVCDC.total;
          }
        }

      }

    }

    this.paginacionKV = 60;
    if(this.paginacionKV = 60){
      this.expandGroupKV = false
    }
  }

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

        if(row.key[0] == '10 OCT'){
  
          rowValues[3][0].value = totalKVCOC.cuautitlan;
          rowValues[4][0].value = totalKVCOC.tultitlan;
          rowValues[5][0].value = totalKVCOC.guadalajara;
          rowValues[6][0].value = totalKVCOC.hermosillo;
          rowValues[7][0].value = totalKVCOC.mexicali;
          rowValues[8][0].value = totalKVCOC.orizaba;
          rowValues[9][0].value = totalKVCOC.ramosArispe;
          rowValues[10][0].value = totalKVCOC.total;
  
        }

        if(row.key[0] == '11 NOV'){
  
          rowValues[3][0].value = totalKVCNV.cuautitlan;
          rowValues[4][0].value = totalKVCNV.tultitlan;
          rowValues[5][0].value = totalKVCNV.guadalajara;
          rowValues[6][0].value = totalKVCNV.hermosillo;
          rowValues[7][0].value = totalKVCNV.mexicali;
          rowValues[8][0].value = totalKVCNV.orizaba;
          rowValues[9][0].value = totalKVCNV.ramosArispe;
          rowValues[10][0].value = totalKVCNV.total;
  
        }
        if(row.key[0] == '12 NOV'){
  
          rowValues[3][0].value = totalKVCDC.cuautitlan;
          rowValues[4][0].value = totalKVCDC.tultitlan;
          rowValues[5][0].value = totalKVCDC.guadalajara;
          rowValues[6][0].value = totalKVCDC.hermosillo;
          rowValues[7][0].value = totalKVCDC.mexicali;
          rowValues[8][0].value = totalKVCDC.orizaba;
          rowValues[9][0].value = totalKVCDC.ramosArispe;
          rowValues[10][0].value = totalKVCDC.total;
  
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

      if (e.data.key == '10 OCT') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCOC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCOC.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalIVCOC.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalIVCOC.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalIVCOC.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalIVCOC.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalIVCOC.hermosillo)){
            e.summaryCells[7][0].value = 0;
          } else{
            e.summaryCells[7][0].value = totalIVCOC.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalIVCOC.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalIVCOC.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalIVCOC.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalIVCOC.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalIVCOC.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalIVCOC.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalIVCOC.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalIVCOC.total;
          }
        }
      }

      if (e.data.key == '11 NOV') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCNV.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCNV.cuautitlan;
          }
        }
        if(e.summaryCells[5][0].length !== 0){
          if(Number.isNaN(totalIVCNV.tultitlan)){
            e.summaryCells[5][0].value = 0;
          }else{
            e.summaryCells[5][0].value = totalIVCNV.tultitlan;
          }
        }
        if(e.summaryCells[6][0].length !== 0){
          if(Number.isNaN(totalIVCNV.guadalajara)){
            e.summaryCells[6][0].value = 0;
          }else{
            e.summaryCells[6][0].value = totalIVCNV.guadalajara;
          }
        }
        if(e.summaryCells[7][0].length !== 0){
          if(Number.isNaN(totalIVCNV.hermosillo)){
            e.summaryCells[7][0].value = 0;
          } else{
            e.summaryCells[7][0].value = totalIVCNV.hermosillo;
          }
        }
        if(e.summaryCells[8][0].length !== 0){
          if(Number.isNaN(totalIVCNV.mexicali)){
            e.summaryCells[8][0].value = 0;
          }else{
            e.summaryCells[8][0].value = totalIVCNV.mexicali;
          }
        }
        if(e.summaryCells[9][0].length !== 0){
          if(Number.isNaN(totalIVCNV.orizaba)){
            e.summaryCells[9][0].value = 0;
          }else{
            e.summaryCells[9][0].value = totalIVCNV.orizaba;
          }
        }
        if(e.summaryCells[10][0].length !== 0){
          if(Number.isNaN(totalIVCNV.ramosArispe)){
            e.summaryCells[10][0].value = 0;
          }else{
            e.summaryCells[10][0].value = totalIVCNV.ramosArispe;
          }
        }
        if(e.summaryCells[11][0].length !== 0){
          if(Number.isNaN(totalIVCNV.total)){
            e.summaryCells[11][0].value = 0;
          }else{
            e.summaryCells[11][0].value = totalIVCNV.total;
          }
        }
      }

      if (e.data.key == '12 DIC') {
        if(e.summaryCells[4][0].length !== 0){
          if(Number.isNaN(totalIVCDC.cuautitlan)){
            e.summaryCells[4][0].value = 0;
          }else{
            e.summaryCells[4][0].value = totalIVCDC.cuautitlan;
          }
        }
      if(e.summaryCells[5][0].length !== 0){
        if(Number.isNaN(totalIVCDC.tultitlan)){
          e.summaryCells[5][0].value = 0;
        }else{
          e.summaryCells[5][0].value = totalIVCDC.tultitlan;
        }
      }
      if(e.summaryCells[6][0].length !== 0){
        if(Number.isNaN(totalIVCDC.guadalajara)){
          e.summaryCells[6][0].value = 0;
        }else{
          e.summaryCells[6][0].value = totalIVCDC.guadalajara;
        }
      }
      if(e.summaryCells[7][0].length !== 0){
        if(Number.isNaN(totalIVCDC.hermosillo)){
          e.summaryCells[7][0].value = 0;
        }else{
          e.summaryCells[7][0].value = totalIVCDC.hermosillo;
        }
      }
      if(e.summaryCells[8][0].length !== 0){
        if(Number.isNaN(totalIVCDC.mexicali)){
          e.summaryCells[8][0].value = 0;
        }else{
          e.summaryCells[8][0].value = totalIVCDC.mexicali;
        }
      }
      if(e.summaryCells[9][0].length !== 0){
        if(Number.isNaN(totalIVCDC.orizaba)){
          e.summaryCells[9][0].value = 0;
        }else{
          e.summaryCells[9][0].value = totalIVCDC.orizaba;
        }
      }
      if(e.summaryCells[10][0].length !== 0){
        if(Number.isNaN(totalIVCDC.ramosArispe)){
          e.summaryCells[10][0].value = 0;
        }else{
          e.summaryCells[10][0].value = totalIVCDC.ramosArispe;
        }
      }
      if(e.summaryCells[11][0].length !== 0){
        if(Number.isNaN(totalIVCDC.total)){
          e.summaryCells[11][0].value = 0;
        }else{
          e.summaryCells[11][0].value = totalIVCDC.total;
      }
    }



      }    
     
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

      if(row.key[0] == '10 OCT'){

        rowValues[3][0].value = totalIVCOC.cuautitlan;
        rowValues[4][0].value = totalIVCOC.tultitlan;
        rowValues[5][0].value = totalIVCOC.guadalajara;
        rowValues[6][0].value = totalIVCOC.hermosillo;
        rowValues[7][0].value = totalIVCOC.mexicali;
        rowValues[8][0].value = totalIVCOC.orizaba;
        rowValues[9][0].value = totalIVCOC.ramosArispe;
        rowValues[10][0].value = totalIVCOC.total;
      }

      if(row.key[0] == '11 NOV'){

        rowValues[3][0].value = totalIVCNV.cuautitlan;
        rowValues[4][0].value = totalIVCNV.tultitlan;
        rowValues[5][0].value = totalIVCNV.guadalajara;
        rowValues[6][0].value = totalIVCNV.hermosillo;
        rowValues[7][0].value = totalIVCNV.mexicali;
        rowValues[8][0].value = totalIVCNV.orizaba;
        rowValues[9][0].value = totalIVCNV.ramosArispe;
        rowValues[10][0].value = totalIVCNV.total;
      }

      if(row.key[0] == '12 DIC'){

        rowValues[3][0].value = totalIVCDC.cuautitlan;
        rowValues[4][0].value = totalIVCDC.tultitlan;
        rowValues[5][0].value = totalIVCDC.guadalajara;
        rowValues[6][0].value = totalIVCDC.hermosillo;
        rowValues[7][0].value = totalIVCDC.mexicali;
        rowValues[8][0].value = totalIVCDC.orizaba;
        rowValues[9][0].value = totalIVCDC.ramosArispe;
        rowValues[10][0].value = totalIVCDC.total;
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
//==============================INGRESOS 2024=========================================
onRowPreparedITL2024(event){
  
  if (event.rowType == 'group'){
    if(event.data.key == '01 ENE'){
      agrupamientoITLE24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLE24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLE24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLE24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLE24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLE24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLE24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLE24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLE24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLE24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLE24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLE24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLE24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLE24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLE24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLE24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLE24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLE24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLE24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLE24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLE24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLE24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLE24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLE24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLE24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLE24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLE24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLE24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLE24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLE24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLE24.cuatitlanPresPor = agrupamientoITLE24.cuatitlanIngr / agrupamientoITLE24.cuatitlanPres;
      totalAgrupamientoITLE24.cuatitlanPresAcPor = agrupamientoITLE24.cuatitlanIngrAc / agrupamientoITLE24.cuatitlanPresAc;
      totalAgrupamientoITLE24.cuatitlanIngrAntPor = agrupamientoITLE24.cuatitlanIngr / agrupamientoITLE24.cuatitlanIngrAnt;
      totalAgrupamientoITLE24.tultitlanPresPor = agrupamientoITLE24.tultitlanIngr / agrupamientoITLE24.tultitlanPres;
      totalAgrupamientoITLE24.tultitlanPresAcPor = agrupamientoITLE24.tultitlanIngrAc / agrupamientoITLE24.tultitlanPresAc;
      totalAgrupamientoITLE24.tultitlanIngrAntPor = agrupamientoITLE24.tultitlanIngr / agrupamientoITLE24.tultitlanIngrAnt;
      totalAgrupamientoITLE24.guadalajaraPresPor = agrupamientoITLE24.guadalajaraIngr / agrupamientoITLE24.guadalajaraPres;
      totalAgrupamientoITLE24.guadalajaraPresAcPor = agrupamientoITLE24.guadalajaraIngrAc / agrupamientoITLE24.guadalajaraPresAc;
      totalAgrupamientoITLE24.guadalajaraIngrAntPor = agrupamientoITLE24.guadalajaraIngr / agrupamientoITLE24.guadalajaraIngrAnt;
      totalAgrupamientoITLE24.hermosilloPresPor = agrupamientoITLE24.hermosilloIngr / agrupamientoITLE24.hermosilloPres;
      totalAgrupamientoITLE24.hermosilloPresAcPor = agrupamientoITLE24.hermosilloIngrAc / agrupamientoITLE24.hermosilloPresAc;
      totalAgrupamientoITLE24.hermosilloIngrAntPor = agrupamientoITLE24.hermosilloIngr / agrupamientoITLE24.hermosilloIngrAnt;
      totalAgrupamientoITLE24.mexicaliPresPor = agrupamientoITLE24.mexicaliIngr / agrupamientoITLE24.mexicaliPres;
      totalAgrupamientoITLE24.mexicaliPresAcPor = agrupamientoITLE24.mexicaliIngrAc / agrupamientoITLE24.mexicaliPresAc;
      totalAgrupamientoITLE24.mexicaliIngrAntPor = agrupamientoITLE24.mexicaliIngr / agrupamientoITLE24.mexicaliIngrAnt;
      totalAgrupamientoITLE24.orizabaPresPor = agrupamientoITLE24.orizabaIngr / agrupamientoITLE24.orizabaPres;
      totalAgrupamientoITLE24.orizabaPresAcPor = agrupamientoITLE24.orizabaIngrAc / agrupamientoITLE24.orizabaPresAc;
      totalAgrupamientoITLE24.orizabaIngrAntPor = agrupamientoITLE24.orizabaIngr / agrupamientoITLE24.orizabaIngrAnt;

      event.summaryCells[6][0].value = totalAgrupamientoITLE24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLE24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLE24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLE24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLE24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLE24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLE24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLE24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLE24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLE24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLE24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLE24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLE24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLE24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLE24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLE24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLE24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLE24.orizabaIngrAntPor;
    }
    if(event.data.key == '02 FEB'){
      agrupamientoITLF24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLF24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLF24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLF24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLF24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLF24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLF24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLF24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLF24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLF24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLF24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLF24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLF24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLF24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLF24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLF24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLF24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLF24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLF24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLF24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLF24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLF24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLF24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLF24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLF24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLF24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLF24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLF24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLF24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLF24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLF24.cuatitlanPresPor = agrupamientoITLF24.cuatitlanIngr / agrupamientoITLF24.cuatitlanPres;
      totalAgrupamientoITLF24.cuatitlanPresAcPor = agrupamientoITLF24.cuatitlanIngrAc / agrupamientoITLF24.cuatitlanPresAc;
      totalAgrupamientoITLF24.cuatitlanIngrAntPor = agrupamientoITLF24.cuatitlanIngr / agrupamientoITLF24.cuatitlanIngrAnt;
      totalAgrupamientoITLF24.tultitlanPresPor = agrupamientoITLF24.tultitlanIngr / agrupamientoITLF24.tultitlanPres;
      totalAgrupamientoITLF24.tultitlanPresAcPor = agrupamientoITLF24.tultitlanIngrAc / agrupamientoITLF24.tultitlanPresAc;
      totalAgrupamientoITLF24.tultitlanIngrAntPor = agrupamientoITLF24.tultitlanIngr / agrupamientoITLF24.tultitlanIngrAnt;
      totalAgrupamientoITLF24.guadalajaraPresPor = agrupamientoITLF24.guadalajaraIngr / agrupamientoITLF24.guadalajaraPres;
      totalAgrupamientoITLF24.guadalajaraPresAcPor = agrupamientoITLF24.guadalajaraIngrAc / agrupamientoITLF24.guadalajaraPresAc;
      totalAgrupamientoITLF24.guadalajaraIngrAntPor = agrupamientoITLF24.guadalajaraIngr / agrupamientoITLF24.guadalajaraIngrAnt;
      totalAgrupamientoITLF24.hermosilloPresPor = agrupamientoITLF24.hermosilloIngr / agrupamientoITLF24.hermosilloPres;
      totalAgrupamientoITLF24.hermosilloPresAcPor = agrupamientoITLF24.hermosilloIngrAc / agrupamientoITLF24.hermosilloPresAc;
      totalAgrupamientoITLF24.hermosilloIngrAntPor = agrupamientoITLF24.hermosilloIngr / agrupamientoITLF24.hermosilloIngrAnt;
      totalAgrupamientoITLF24.mexicaliPresPor = agrupamientoITLF24.mexicaliIngr / agrupamientoITLF24.mexicaliPres;
      totalAgrupamientoITLF24.mexicaliPresAcPor = agrupamientoITLF24.mexicaliIngrAc / agrupamientoITLF24.mexicaliPresAc;
      totalAgrupamientoITLF24.mexicaliIngrAntPor = agrupamientoITLF24.mexicaliIngr / agrupamientoITLF24.mexicaliIngrAnt;
      totalAgrupamientoITLF24.orizabaPresPor = agrupamientoITLF24.orizabaIngr / agrupamientoITLF24.orizabaPres;
      totalAgrupamientoITLF24.orizabaPresAcPor = agrupamientoITLF24.orizabaIngrAc / agrupamientoITLF24.orizabaPresAc;
      totalAgrupamientoITLF24.orizabaIngrAntPor = agrupamientoITLF24.orizabaIngr / agrupamientoITLF24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLF24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLF24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLF24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLF24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLF24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLF24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLF24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLF24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLF24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLF24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLF24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLF24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLF24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLF24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLF24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLF24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLF24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLF24.orizabaIngrAntPor;
    }
    if(event.data.key == '03 MAR'){
      agrupamientoITLM24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLM24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLM24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLM24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLM24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLM24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLM24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLM24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLM24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLM24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLM24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLM24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLM24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLM24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLM24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLM24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLM24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLM24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLM24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLM24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLM24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLM24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLM24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLM24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLM24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLM24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLM24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLM24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLM24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLM24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLM24.cuatitlanPresPor = agrupamientoITLM24.cuatitlanIngr / agrupamientoITLM24.cuatitlanPres;
      totalAgrupamientoITLM24.cuatitlanPresAcPor = agrupamientoITLM24.cuatitlanIngrAc / agrupamientoITLM24.cuatitlanPresAc;
      totalAgrupamientoITLM24.cuatitlanIngrAntPor = agrupamientoITLM24.cuatitlanIngr / agrupamientoITLM24.cuatitlanIngrAnt;
      totalAgrupamientoITLM24.tultitlanPresPor = agrupamientoITLM24.tultitlanIngr / agrupamientoITLM24.tultitlanPres;
      totalAgrupamientoITLM24.tultitlanPresAcPor = agrupamientoITLM24.tultitlanIngrAc / agrupamientoITLM24.tultitlanPresAc;
      totalAgrupamientoITLM24.tultitlanIngrAntPor = agrupamientoITLM24.tultitlanIngr / agrupamientoITLM24.tultitlanIngrAnt;
      totalAgrupamientoITLM24.guadalajaraPresPor = agrupamientoITLM24.guadalajaraIngr / agrupamientoITLM24.guadalajaraPres;
      totalAgrupamientoITLM24.guadalajaraPresAcPor = agrupamientoITLM24.guadalajaraIngrAc / agrupamientoITLM24.guadalajaraPresAc;
      totalAgrupamientoITLM24.guadalajaraIngrAntPor = agrupamientoITLM24.guadalajaraIngr / agrupamientoITLM24.guadalajaraIngrAnt;
      totalAgrupamientoITLM24.hermosilloPresPor = agrupamientoITLM24.hermosilloIngr / agrupamientoITLM24.hermosilloPres;
      totalAgrupamientoITLM24.hermosilloPresAcPor = agrupamientoITLM24.hermosilloIngrAc / agrupamientoITLM24.hermosilloPresAc;
      totalAgrupamientoITLM24.hermosilloIngrAntPor = agrupamientoITLM24.hermosilloIngr / agrupamientoITLM24.hermosilloIngrAnt;
      totalAgrupamientoITLM24.mexicaliPresPor = agrupamientoITLM24.mexicaliIngr / agrupamientoITLM24.mexicaliPres;
      totalAgrupamientoITLM24.mexicaliPresAcPor = agrupamientoITLM24.mexicaliIngrAc / agrupamientoITLM24.mexicaliPresAc;
      totalAgrupamientoITLM24.mexicaliIngrAntPor = agrupamientoITLM24.mexicaliIngr / agrupamientoITLM24.mexicaliIngrAnt;
      totalAgrupamientoITLM24.orizabaPresPor = agrupamientoITLM24.orizabaIngr / agrupamientoITLM24.orizabaPres;
      totalAgrupamientoITLM24.orizabaPresAcPor = agrupamientoITLM24.orizabaIngrAc / agrupamientoITLM24.orizabaPresAc;
      totalAgrupamientoITLM24.orizabaIngrAntPor = agrupamientoITLM24.orizabaIngr / agrupamientoITLM24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLM24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLM24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLM24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLM24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLM24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLM24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLM24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLM24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLM24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLM24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLM24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLM24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLM24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLM24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLM24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLM24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLM24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLM24.orizabaIngrAntPor;
    }
    if(event.data.key == '04 ABR'){
      agrupamientoITLA24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLA24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLA24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLA24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLA24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLA24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLA24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLA24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLA24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLA24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLA24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLA24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLA24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLA24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLA24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLA24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLA24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLA24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLA24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLA24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLA24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLA24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLA24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLA24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLA24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLA24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLA24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLA24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLA24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLA24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLA24.cuatitlanPresPor = agrupamientoITLA24.cuatitlanIngr / agrupamientoITLA24.cuatitlanPres;
      totalAgrupamientoITLA24.cuatitlanPresAcPor = agrupamientoITLA24.cuatitlanIngrAc / agrupamientoITLA24.cuatitlanPresAc;
      totalAgrupamientoITLA24.cuatitlanIngrAntPor = agrupamientoITLA24.cuatitlanIngr / agrupamientoITLA24.cuatitlanIngrAnt;
      totalAgrupamientoITLA24.tultitlanPresPor = agrupamientoITLA24.tultitlanIngr / agrupamientoITLA24.tultitlanPres;
      totalAgrupamientoITLA24.tultitlanPresAcPor = agrupamientoITLA24.tultitlanIngrAc / agrupamientoITLA24.tultitlanPresAc;
      totalAgrupamientoITLA24.tultitlanIngrAntPor = agrupamientoITLA24.tultitlanIngr / agrupamientoITLA24.tultitlanIngrAnt;
      totalAgrupamientoITLA24.guadalajaraPresPor = agrupamientoITLA24.guadalajaraIngr / agrupamientoITLA24.guadalajaraPres;
      totalAgrupamientoITLA24.guadalajaraPresAcPor = agrupamientoITLA24.guadalajaraIngrAc / agrupamientoITLA24.guadalajaraPresAc;
      totalAgrupamientoITLA24.guadalajaraIngrAntPor = agrupamientoITLA24.guadalajaraIngr / agrupamientoITLA24.guadalajaraIngrAnt;
      totalAgrupamientoITLA24.hermosilloPresPor = agrupamientoITLA24.hermosilloIngr / agrupamientoITLA24.hermosilloPres;
      totalAgrupamientoITLA24.hermosilloPresAcPor = agrupamientoITLA24.hermosilloIngrAc / agrupamientoITLA24.hermosilloPresAc;
      totalAgrupamientoITLA24.hermosilloIngrAntPor = agrupamientoITLA24.hermosilloIngr / agrupamientoITLA24.hermosilloIngrAnt;
      totalAgrupamientoITLA24.mexicaliPresPor = agrupamientoITLA24.mexicaliIngr / agrupamientoITLA24.mexicaliPres;
      totalAgrupamientoITLA24.mexicaliPresAcPor = agrupamientoITLA24.mexicaliIngrAc / agrupamientoITLA24.mexicaliPresAc;
      totalAgrupamientoITLA24.mexicaliIngrAntPor = agrupamientoITLA24.mexicaliIngr / agrupamientoITLA24.mexicaliIngrAnt;
      totalAgrupamientoITLA24.orizabaPresPor = agrupamientoITLA24.orizabaIngr / agrupamientoITLA24.orizabaPres;
      totalAgrupamientoITLA24.orizabaPresAcPor = agrupamientoITLA24.orizabaIngrAc / agrupamientoITLA24.orizabaPresAc;
      totalAgrupamientoITLA24.orizabaIngrAntPor = agrupamientoITLA24.orizabaIngr / agrupamientoITLA24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLA24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLA24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLA24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLA24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLA24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLA24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLA24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLA24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLA24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLA24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLA24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLA24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLA24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLA24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLA24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLA24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLA24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLA24.orizabaIngrAntPor;
    }
    if(event.data.key == '05 MAY'){
      agrupamientoITLMY24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLMY24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLMY24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLMY24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLMY24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLMY24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLMY24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLMY24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLMY24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLMY24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLMY24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLMY24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLMY24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLMY24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLMY24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLMY24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLMY24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLMY24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLMY24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLMY24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLMY24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLMY24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLMY24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLMY24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLMY24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLMY24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLMY24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLMY24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLMY24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLMY24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLMY24.cuatitlanPresPor = agrupamientoITLMY24.cuatitlanIngr / agrupamientoITLMY24.cuatitlanPres;
      totalAgrupamientoITLMY24.cuatitlanPresAcPor = agrupamientoITLMY24.cuatitlanIngrAc / agrupamientoITLMY24.cuatitlanPresAc;
      totalAgrupamientoITLMY24.cuatitlanIngrAntPor = agrupamientoITLMY24.cuatitlanIngr / agrupamientoITLMY24.cuatitlanIngrAnt;
      totalAgrupamientoITLMY24.tultitlanPresPor = agrupamientoITLMY24.tultitlanIngr / agrupamientoITLMY24.tultitlanPres;
      totalAgrupamientoITLMY24.tultitlanPresAcPor = agrupamientoITLMY24.tultitlanIngrAc / agrupamientoITLMY24.tultitlanPresAc;
      totalAgrupamientoITLMY24.tultitlanIngrAntPor = agrupamientoITLMY24.tultitlanIngr / agrupamientoITLMY24.tultitlanIngrAnt;
      totalAgrupamientoITLMY24.guadalajaraPresPor = agrupamientoITLMY24.guadalajaraIngr / agrupamientoITLMY24.guadalajaraPres;
      totalAgrupamientoITLMY24.guadalajaraPresAcPor = agrupamientoITLMY24.guadalajaraIngrAc / agrupamientoITLMY24.guadalajaraPresAc;
      totalAgrupamientoITLMY24.guadalajaraIngrAntPor = agrupamientoITLMY24.guadalajaraIngr / agrupamientoITLMY24.guadalajaraIngrAnt;
      totalAgrupamientoITLMY24.hermosilloPresPor = agrupamientoITLMY24.hermosilloIngr / agrupamientoITLMY24.hermosilloPres;
      totalAgrupamientoITLMY24.hermosilloPresAcPor = agrupamientoITLMY24.hermosilloIngrAc / agrupamientoITLMY24.hermosilloPresAc;
      totalAgrupamientoITLMY24.hermosilloIngrAntPor = agrupamientoITLMY24.hermosilloIngr / agrupamientoITLMY24.hermosilloIngrAnt;
      totalAgrupamientoITLMY24.mexicaliPresPor = agrupamientoITLMY24.mexicaliIngr / agrupamientoITLMY24.mexicaliPres;
      totalAgrupamientoITLMY24.mexicaliPresAcPor = agrupamientoITLMY24.mexicaliIngrAc / agrupamientoITLMY24.mexicaliPresAc;
      totalAgrupamientoITLMY24.mexicaliIngrAntPor = agrupamientoITLMY24.mexicaliIngr / agrupamientoITLMY24.mexicaliIngrAnt;
      totalAgrupamientoITLMY24.orizabaPresPor = agrupamientoITLMY24.orizabaIngr / agrupamientoITLMY24.orizabaPres;
      totalAgrupamientoITLMY24.orizabaPresAcPor = agrupamientoITLMY24.orizabaIngrAc / agrupamientoITLMY24.orizabaPresAc;
      totalAgrupamientoITLMY24.orizabaIngrAntPor = agrupamientoITLMY24.orizabaIngr / agrupamientoITLMY24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLMY24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLMY24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLMY24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLMY24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLMY24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLMY24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLMY24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLMY24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLMY24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLMY24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLMY24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLMY24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLMY24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLMY24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLMY24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLMY24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLMY24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLMY24.orizabaIngrAntPor;
    }
    if(event.data.key == '06 JUN'){
      agrupamientoITLJN24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLJN24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLJN24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLJN24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLJN24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLJN24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLJN24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLJN24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLJN24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLJN24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLJN24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLJN24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLJN24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLJN24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLJN24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLJN24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLJN24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLJN24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLJN24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLJN24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLJN24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLJN24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLJN24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLJN24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLJN24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLJN24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLJN24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLJN24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLJN24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLJN24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLJN24.cuatitlanPresPor = agrupamientoITLJN24.cuatitlanIngr / agrupamientoITLJN24.cuatitlanPres;
      totalAgrupamientoITLJN24.cuatitlanPresAcPor = agrupamientoITLJN24.cuatitlanIngrAc / agrupamientoITLJN24.cuatitlanPresAc;
      totalAgrupamientoITLJN24.cuatitlanIngrAntPor = agrupamientoITLJN24.cuatitlanIngr / agrupamientoITLJN24.cuatitlanIngrAnt;
      totalAgrupamientoITLJN24.tultitlanPresPor = agrupamientoITLJN24.tultitlanIngr / agrupamientoITLJN24.tultitlanPres;
      totalAgrupamientoITLJN24.tultitlanPresAcPor = agrupamientoITLJN24.tultitlanIngrAc / agrupamientoITLJN24.tultitlanPresAc;
      totalAgrupamientoITLJN24.tultitlanIngrAntPor = agrupamientoITLJN24.tultitlanIngr / agrupamientoITLJN24.tultitlanIngrAnt;
      totalAgrupamientoITLJN24.guadalajaraPresPor = agrupamientoITLJN24.guadalajaraIngr / agrupamientoITLJN24.guadalajaraPres;
      totalAgrupamientoITLJN24.guadalajaraPresAcPor = agrupamientoITLJN24.guadalajaraIngrAc / agrupamientoITLJN24.guadalajaraPresAc;
      totalAgrupamientoITLJN24.guadalajaraIngrAntPor = agrupamientoITLJN24.guadalajaraIngr / agrupamientoITLJN24.guadalajaraIngrAnt;
      totalAgrupamientoITLJN24.hermosilloPresPor = agrupamientoITLJN24.hermosilloIngr / agrupamientoITLJN24.hermosilloPres;
      totalAgrupamientoITLJN24.hermosilloPresAcPor = agrupamientoITLJN24.hermosilloIngrAc / agrupamientoITLJN24.hermosilloPresAc;
      totalAgrupamientoITLJN24.hermosilloIngrAntPor = agrupamientoITLJN24.hermosilloIngr / agrupamientoITLJN24.hermosilloIngrAnt;
      totalAgrupamientoITLJN24.mexicaliPresPor = agrupamientoITLJN24.mexicaliIngr / agrupamientoITLJN24.mexicaliPres;
      totalAgrupamientoITLJN24.mexicaliPresAcPor = agrupamientoITLJN24.mexicaliIngrAc / agrupamientoITLJN24.mexicaliPresAc;
      totalAgrupamientoITLJN24.mexicaliIngrAntPor = agrupamientoITLJN24.mexicaliIngr / agrupamientoITLJN24.mexicaliIngrAnt;
      totalAgrupamientoITLJN24.orizabaPresPor = agrupamientoITLJN24.orizabaIngr / agrupamientoITLJN24.orizabaPres;
      totalAgrupamientoITLJN24.orizabaPresAcPor = agrupamientoITLJN24.orizabaIngrAc / agrupamientoITLJN24.orizabaPresAc;
      totalAgrupamientoITLJN24.orizabaIngrAntPor = agrupamientoITLJN24.orizabaIngr / agrupamientoITLJN24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLJN24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLJN24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLJN24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLJN24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLJN24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLJN24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLJN24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLJN24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLJN24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLJN24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLJN24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLJN24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLJN24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLJN24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLJN24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLJN24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLJN24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLJN24.orizabaIngrAntPor;
    }
    if(event.data.key == '07 JUL'){
      agrupamientoITLJL24.cuatitlanIngr = event.summaryCells[4][0].value;
      agrupamientoITLJL24.cuatitlanPres = event.summaryCells[5][0].value;
      agrupamientoITLJL24.cuatitlanIngrAc = event.summaryCells[7][0].value;
      agrupamientoITLJL24.cuatitlanPresAc = event.summaryCells[8][0].value;
      agrupamientoITLJL24.cuatitlanIngrAnt = event.summaryCells[10][0].value;
      agrupamientoITLJL24.tultitlanIngr = event.summaryCells[12][0].value;
      agrupamientoITLJL24.tultitlanPres = event.summaryCells[13][0].value;
      agrupamientoITLJL24.tultitlanIngrAc = event.summaryCells[15][0].value;
      agrupamientoITLJL24.tultitlanPresAc = event.summaryCells[16][0].value;
      agrupamientoITLJL24.tultitlanIngrAnt = event.summaryCells[18][0].value;
      agrupamientoITLJL24.guadalajaraIngr = event.summaryCells[20][0].value;
      agrupamientoITLJL24.guadalajaraPres = event.summaryCells[21][0].value;
      agrupamientoITLJL24.guadalajaraIngrAc = event.summaryCells[23][0].value;
      agrupamientoITLJL24.guadalajaraPresAc = event.summaryCells[24][0].value;
      agrupamientoITLJL24.guadalajaraIngrAnt = event.summaryCells[26][0].value;
      agrupamientoITLJL24.hermosilloIngr = event.summaryCells[28][0].value;
      agrupamientoITLJL24.hermosilloPres = event.summaryCells[29][0].value;
      agrupamientoITLJL24.hermosilloIngrAc = event.summaryCells[31][0].value;
      agrupamientoITLJL24.hermosilloPresAc = event.summaryCells[32][0].value;
      agrupamientoITLJL24.hermosilloIngrAnt = event.summaryCells[34][0].value;
      agrupamientoITLJL24.mexicaliIngr = event.summaryCells[36][0].value;
      agrupamientoITLJL24.mexicaliPres = event.summaryCells[37][0].value;
      agrupamientoITLJL24.mexicaliIngrAc = event.summaryCells[39][0].value;
      agrupamientoITLJL24.mexicaliPresAc = event.summaryCells[40][0].value;
      agrupamientoITLJL24.mexicaliIngrAnt = event.summaryCells[42][0].value;
      agrupamientoITLJL24.orizabaIngr = event.summaryCells[44][0].value;
      agrupamientoITLJL24.orizabaPres = event.summaryCells[45][0].value;
      agrupamientoITLJL24.orizabaIngrAc = event.summaryCells[47][0].value;
      agrupamientoITLJL24.orizabaPresAc = event.summaryCells[48][0].value;
      agrupamientoITLJL24.orizabaIngrAnt = event.summaryCells[50][0].value;

      totalAgrupamientoITLJL24.cuatitlanPresPor = agrupamientoITLJL24.cuatitlanIngr / agrupamientoITLJL24.cuatitlanPres;
      totalAgrupamientoITLJL24.cuatitlanPresAcPor = agrupamientoITLJL24.cuatitlanIngrAc / agrupamientoITLJL24.cuatitlanPresAc;
      totalAgrupamientoITLJL24.cuatitlanIngrAntPor = agrupamientoITLJL24.cuatitlanIngr / agrupamientoITLJL24.cuatitlanIngrAnt;
      totalAgrupamientoITLJL24.tultitlanPresPor = agrupamientoITLJL24.tultitlanIngr / agrupamientoITLJL24.tultitlanPres;
      totalAgrupamientoITLJL24.tultitlanPresAcPor = agrupamientoITLJL24.tultitlanIngrAc / agrupamientoITLJL24.tultitlanPresAc;
      totalAgrupamientoITLJL24.tultitlanIngrAntPor = agrupamientoITLJL24.tultitlanIngr / agrupamientoITLJL24.tultitlanIngrAnt;
      totalAgrupamientoITLJL24.guadalajaraPresPor = agrupamientoITLJL24.guadalajaraIngr / agrupamientoITLJL24.guadalajaraPres;
      totalAgrupamientoITLJL24.guadalajaraPresAcPor = agrupamientoITLJL24.guadalajaraIngrAc / agrupamientoITLJL24.guadalajaraPresAc;
      totalAgrupamientoITLJL24.guadalajaraIngrAntPor = agrupamientoITLJL24.guadalajaraIngr / agrupamientoITLJL24.guadalajaraIngrAnt;
      totalAgrupamientoITLJL24.hermosilloPresPor = agrupamientoITLJL24.hermosilloIngr / agrupamientoITLJL24.hermosilloPres;
      totalAgrupamientoITLJL24.hermosilloPresAcPor = agrupamientoITLJL24.hermosilloIngrAc / agrupamientoITLJL24.hermosilloPresAc;
      totalAgrupamientoITLJL24.hermosilloIngrAntPor = agrupamientoITLJL24.hermosilloIngr / agrupamientoITLJL24.hermosilloIngrAnt;
      totalAgrupamientoITLJL24.mexicaliPresPor = agrupamientoITLJL24.mexicaliIngr / agrupamientoITLJL24.mexicaliPres;
      totalAgrupamientoITLJL24.mexicaliPresAcPor = agrupamientoITLJL24.mexicaliIngrAc / agrupamientoITLJL24.mexicaliPresAc;
      totalAgrupamientoITLJL24.mexicaliIngrAntPor = agrupamientoITLJL24.mexicaliIngr / agrupamientoITLJL24.mexicaliIngrAnt;
      totalAgrupamientoITLJL24.orizabaPresPor = agrupamientoITLJL24.orizabaIngr / agrupamientoITLJL24.orizabaPres;
      totalAgrupamientoITLJL24.orizabaPresAcPor = agrupamientoITLJL24.orizabaIngrAc / agrupamientoITLJL24.orizabaPresAc;
      totalAgrupamientoITLJL24.orizabaIngrAntPor = agrupamientoITLJL24.orizabaIngr / agrupamientoITLJL24.orizabaIngrAnt;
    
      event.summaryCells[6][0].value = totalAgrupamientoITLJL24.cuatitlanPresPor;
      event.summaryCells[9][0].value = totalAgrupamientoITLJL24.cuatitlanPresAcPor;
      event.summaryCells[11][0].value = totalAgrupamientoITLJL24.cuatitlanIngrAntPor;
      event.summaryCells[14][0].value = totalAgrupamientoITLJL24.tultitlanPresPor;
      event.summaryCells[17][0].value = totalAgrupamientoITLJL24.tultitlanPresAcPor;
      event.summaryCells[19][0].value = totalAgrupamientoITLJL24.tultitlanIngrAntPor;
      event.summaryCells[22][0].value = totalAgrupamientoITLJL24.guadalajaraPresPor;
      event.summaryCells[25][0].value = totalAgrupamientoITLJL24.guadalajaraPresAcPor;
      event.summaryCells[27][0].value = totalAgrupamientoITLJL24.guadalajaraIngrAntPor;
      event.summaryCells[30][0].value = totalAgrupamientoITLJL24.hermosilloPresPor;
      event.summaryCells[33][0].value = totalAgrupamientoITLJL24.hermosilloPresAcPor;
      event.summaryCells[35][0].value = totalAgrupamientoITLJL24.hermosilloIngrAntPor;
      event.summaryCells[38][0].value = totalAgrupamientoITLJL24.mexicaliPresPor;
      event.summaryCells[41][0].value = totalAgrupamientoITLJL24.mexicaliPresAcPor;
      event.summaryCells[43][0].value = totalAgrupamientoITLJL24.mexicaliIngrAntPor;
      event.summaryCells[46][0].value = totalAgrupamientoITLJL24.orizabaPresPor;
      event.summaryCells[49][0].value = totalAgrupamientoITLJL24.orizabaPresAcPor;
      event.summaryCells[51][0].value = totalAgrupamientoITLJL24.orizabaIngrAntPor;
    }
    
  }
}

onCellPreparedITL2024(e){
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

    totalOperacionITL24.cuatitlanIngr = c.totalItem.summaryCells[4][0].value;
    totalOperacionITL24.cuatitlanPres = c.totalItem.summaryCells[5][0].value;
    totalOperacionITL24.cuatitlanIngrAc = c.totalItem.summaryCells[7][0].value;
    totalOperacionITL24.cuatitlanPresAc = c.totalItem.summaryCells[8][0].value;
    totalOperacionITL24.cuatitlanIngrAnt = c.totalItem.summaryCells[10][0].value;
    totalOperacionITL24.tultitlanIngr = c.totalItem.summaryCells[12][0].value;
    totalOperacionITL24.tultitlanPres = c.totalItem.summaryCells[13][0].value;
    totalOperacionITL24.tultitlanIngrAc = c.totalItem.summaryCells[15][0].value;
    totalOperacionITL24.tultitlanPresAc = c.totalItem.summaryCells[16][0].value;
    totalOperacionITL24.tultitlanIngrAnt = c.totalItem.summaryCells[18][0].value;
    totalOperacionITL24.guadalajaraIngr = c.totalItem.summaryCells[20][0].value;
    totalOperacionITL24.guadalajaraPres = c.totalItem.summaryCells[21][0].value;
    totalOperacionITL24.guadalajaraIngrAc = c.totalItem.summaryCells[23][0].value;
    totalOperacionITL24.guadalajaraPresAc = c.totalItem.summaryCells[24][0].value;
    totalOperacionITL24.guadalajaraIngrAnt = c.totalItem.summaryCells[26][0].value;
    totalOperacionITL24.hermosilloIngr = c.totalItem.summaryCells[28][0].value;
    totalOperacionITL24.hermosilloPres = c.totalItem.summaryCells[29][0].value;
    totalOperacionITL24.hermosilloIngrAc = c.totalItem.summaryCells[31][0].value;
    totalOperacionITL24.hermosilloPresAc = c.totalItem.summaryCells[32][0].value;
    totalOperacionITL24.hermosilloIngrAnt = c.totalItem.summaryCells[34][0].value;
    totalOperacionITL24.mexicaliIngr = c.totalItem.summaryCells[36][0].value;
    totalOperacionITL24.mexicaliPres = c.totalItem.summaryCells[37][0].value;
    totalOperacionITL24.mexicaliIngrAc = c.totalItem.summaryCells[39][0].value;
    totalOperacionITL24.mexicaliPresAc = c.totalItem.summaryCells[40][0].value;
    totalOperacionITL24.mexicaliIngrAnt = c.totalItem.summaryCells[42][0].value;
    totalOperacionITL24.orizabaIngr = c.totalItem.summaryCells[44][0].value;
    totalOperacionITL24.orizabaPres = c.totalItem.summaryCells[45][0].value;
    totalOperacionITL24.orizabaIngrAc = c.totalItem.summaryCells[47][0].value;
    totalOperacionITL24.orizabaPresAc = c.totalItem.summaryCells[48][0].value;
    totalOperacionITL24.orizabaIngrAnt = c.totalItem.summaryCells[50][0].value;
    
    totalOperacionITL24.cuatitlanIngr === 0 ? c.totalItem.summaryCells[6][0].value = 0 : c.totalItem.summaryCells[6][0].value = totalOperacionITL24.cuatitlanIngr / totalOperacionITL24.cuatitlanPres;
    totalOperacionITL24.cuatitlanIngrAc == 0 ? c.totalItem.summaryCells[9][0].value = 0 : c.totalItem.summaryCells[9][0].value =   totalOperacionITL24.cuatitlanIngrAc / totalOperacionITL24.cuatitlanPresAc;
    totalOperacionITL24.cuatitlanIngr == 0 ? c.totalItem.summaryCells[11][0].value = 0 : c.totalItem.summaryCells[11][0].value =   totalOperacionITL24.cuatitlanIngr / totalOperacionITL24.cuatitlanIngrAnt;
    totalOperacionITL24.tultitlanIngr == 0 ? c.totalItem.summaryCells[14][0].value = 0 : c.totalItem.summaryCells[14][0].value =   totalOperacionITL24.tultitlanIngr / totalOperacionITL24.tultitlanPres;
    totalOperacionITL24.tultitlanIngrAc == 0 ? c.totalItem.summaryCells[17][0].value = 0 : c.totalItem.summaryCells[17][0].value =   totalOperacionITL24.tultitlanIngrAc / totalOperacionITL24.tultitlanPresAc;
    totalOperacionITL24.tultitlanIngr == 0 ? c.totalItem.summaryCells[19][0].value = 0 : c.totalItem.summaryCells[19][0].value =   totalOperacionITL24.tultitlanIngr / totalOperacionITL24.tultitlanIngrAnt;
    totalOperacionITL24.guadalajaraIngr == 0 ? c.totalItem.summaryCells[22][0].value = 0 : c.totalItem.summaryCells[22][0].value =   totalOperacionITL24.guadalajaraIngr / totalOperacionITL24.guadalajaraPres;
    totalOperacionITL24.guadalajaraIngrAc == 0 ? c.totalItem.summaryCells[25][0].value = 0 : c.totalItem.summaryCells[25][0].value =   totalOperacionITL24.guadalajaraIngrAc / totalOperacionITL24.guadalajaraPresAc;
    totalOperacionITL24.guadalajaraIngr == 0 ? c.totalItem.summaryCells[27][0].value = 0 : c.totalItem.summaryCells[27][0].value =   totalOperacionITL24.guadalajaraIngr / totalOperacionITL24.guadalajaraIngrAnt;
    totalOperacionITL24.hermosilloIngr == 0 ? c.totalItem.summaryCells[30][0].value = 0 : c.totalItem.summaryCells[30][0].value =   totalOperacionITL24.hermosilloIngr / totalOperacionITL24.hermosilloPres;
    totalOperacionITL24.hermosilloIngrAc == 0 ? c.totalItem.summaryCells[33][0].value = 0 : c.totalItem.summaryCells[33][0].value =   totalOperacionITL24.hermosilloIngrAc / totalOperacionITL24.hermosilloPresAc;
    totalOperacionITL24.hermosilloIngr == 0 ? c.totalItem.summaryCells[35][0].value = 0 : c.totalItem.summaryCells[35][0].value =   totalOperacionITL24.hermosilloIngr / totalOperacionITL24.hermosilloIngrAnt;
    totalOperacionITL24.mexicaliIngr == 0 ? c.totalItem.summaryCells[38][0].value = 0 : c.totalItem.summaryCells[38][0].value =   totalOperacionITL24.mexicaliIngr / totalOperacionITL24.mexicaliPres;
    totalOperacionITL24.mexicaliIngrAc == 0 ? c.totalItem.summaryCells[41][0].value = 0 : c.totalItem.summaryCells[41][0].value =   totalOperacionITL24.mexicaliIngrAc / totalOperacionITL24.mexicaliPresAc;
    totalOperacionITL24.mexicaliIngr == 0 ? c.totalItem.summaryCells[43][0].value = 0 : c.totalItem.summaryCells[43][0].value =   totalOperacionITL24.mexicaliIngr / totalOperacionITL24.mexicaliIngrAnt;
    totalOperacionITL24.orizabaIngr == 0 ? c.totalItem.summaryCells[46][0].value = 0 : c.totalItem.summaryCells[46][0].value =   totalOperacionITL24.orizabaIngr / totalOperacionITL24.orizabaPres;
    totalOperacionITL24.orizabaIngrAc == 0 ? c.totalItem.summaryCells[49][0].value = 0 : c.totalItem.summaryCells[49][0].value =   totalOperacionITL24.orizabaIngrAc / totalOperacionITL24.orizabaPresAc;
    totalOperacionITL24.orizabaIngr == 0 ? c.totalItem.summaryCells[51][0].value = 0 : c.totalItem.summaryCells[51][0].value =   totalOperacionITL24.orizabaIngr / totalOperacionITL24.orizabaIngrAnt;
      

    totalIngresosTL24.cuatitlanPresPor = c.totalItem.summaryCells[6][0].value;
    totalIngresosTL24.cuatitlanPresAcPor = c.totalItem.summaryCells[9][0].value;
    totalIngresosTL24.cuatitlanIngrAntPor = c.totalItem.summaryCells[11][0].value;
    totalIngresosTL24.tultitlanPresPor = c.totalItem.summaryCells[14][0].value;
    totalIngresosTL24.tultitlanPresAcPor = c.totalItem.summaryCells[17][0].value;
    totalIngresosTL24.tultitlanIngrAntPor = c.totalItem.summaryCells[19][0].value;
    totalIngresosTL24.guadalajaraPresPor = c.totalItem.summaryCells[22][0].value;
    totalIngresosTL24.guadalajaraPresAcPor = c.totalItem.summaryCells[25][0].value;
    totalIngresosTL24.guadalajaraIngrAntPor = c.totalItem.summaryCells[27][0].value;
    totalIngresosTL24.hermosilloPresPor = c.totalItem.summaryCells[30][0].value;
    totalIngresosTL24.hermosilloPresAcPor = c.totalItem.summaryCells[33][0].value;
    totalIngresosTL24.hermosilloIngrAntPor = c.totalItem.summaryCells[35][0].value;
    totalIngresosTL24.mexicaliPresPor = c.totalItem.summaryCells[38][0].value;
    totalIngresosTL24.mexicaliPresAcPor = c.totalItem.summaryCells[41][0].value;
    totalIngresosTL24.mexicaliIngrAntPor = c.totalItem.summaryCells[43][0].value;
    totalIngresosTL24.orizabaPresPor = c.totalItem.summaryCells[46][0].value;
    totalIngresosTL24.orizabaPresAcPor = c.totalItem.summaryCells[49][0].value;
    totalIngresosTL24.orizabaIngrAntPor = c.totalItem.summaryCells[51][0].value;
    })
  }
}

onRowPreparedI2024(event){

  if (event.rowType == 'group'){
    if (event.data.key == '01 ENE') {

      if(event.summaryCells[4].length !== 0){
      agrupamientoIE24.cuautitlan = event.summaryCells[4][0].value;
      }
      if(event.summaryCells[5].length !== 0){
        agrupamientoIE24.tultitlan = event.summaryCells[5][0].value;
      }
      if(event.summaryCells[6].length !== 0){
        agrupamientoIE24.guadalajara = event.summaryCells[6][0].value;
      }
      if(event.summaryCells[7].length !== 0){
        agrupamientoIE24.hermosillo = event.summaryCells[7][0].value;
      }
      if(event.summaryCells[8].length !== 0){
        agrupamientoIE24.mexicali = event.summaryCells[8][0].value;
      }
      if(event.summaryCells[9].length !== 0){
        agrupamientoIE24.orizaba = event.summaryCells[9][0].value;
      }
      // if(event.summaryCells[10].length !== 0){
      //   agrupamientoIE24.ramosArispe = event.summaryCells[10][0].value;
      // }
      if(event.summaryCells[10].length !== 0){
        agrupamientoIE24.total = event.summaryCells[10][0].value;
      }
    }
    if (event.data.key == '02 FEB'){
      agrupamientoIF24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIF24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIF24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIF24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIF24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIF24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIF24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIF24.total = event.summaryCells[10][0]?.value;
    }
    if (event.data.key == '03 MAR'){
      agrupamientoIM24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIM24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIM24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIM24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIM24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIM24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIM24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIM24.total = event.summaryCells[10][0]?.value;
    }
    if (event.data.key == '04 ABR'){
      agrupamientoIA24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIA24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIA24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIA24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIA24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIA24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIA24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIA24.total = event.summaryCells[10][0]?.value;
    }
    if (event.data.key == '05 MAY'){
      agrupamientoIMY24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIMY24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIMY24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIMY24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIMY24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIMY24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIMY24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIMY24.total = event.summaryCells[10][0]?.value;
    }
    if (event.data.key == '06 JUN'){
      agrupamientoIJN24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIJN24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIJN24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIJN24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIJN24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIJN24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIJN24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIJN24.total = event.summaryCells[10][0]?.value;
    }
    if (event.data.key == '07 JUL'){
      agrupamientoIJL24.cuautitlan = event.summaryCells[4][0]?.value;
      agrupamientoIJL24.tultitlan = event.summaryCells[5][0]?.value;
      agrupamientoIJL24.guadalajara = event.summaryCells[6][0]?.value;
      agrupamientoIJL24.hermosillo = event.summaryCells[7][0]?.value;
      agrupamientoIJL24.mexicali = event.summaryCells[8][0]?.value;
      agrupamientoIJL24.orizaba = event.summaryCells[9][0]?.value;
      // agrupamientoIJL24.ramosArispe = event.summaryCells[10][0]?.value;
      agrupamientoIJL24.total = event.summaryCells[10][0]?.value;
    }
    // if (event.data.key == '08 AGO'){
    //   agrupamientoIAG24.cuautitlan = event.summaryCells[4][0]?.value;
    //   agrupamientoIAG24.tultitlan = event.summaryCells[5][0]?.value;
    //   agrupamientoIAG24.guadalajara = event.summaryCells[6][0]?.value;
    //   agrupamientoIAG24.hermosillo = event.summaryCells[7][0]?.value;
    //   agrupamientoIAG24.mexicali = event.summaryCells[8][0]?.value;
    //   agrupamientoIAG24.orizaba = event.summaryCells[9][0]?.value;
    //   agrupamientoIAG24.ramosArispe = event.summaryCells[10][0]?.value;
    //   agrupamientoIAG24.total = event.summaryCells[11][0]?.value;
    // }
    // if (event.data.key == '09 SEP'){
    //   agrupamientoIS24.cuautitlan = event.summaryCells[4][0].value;
    //   agrupamientoIS24.tultitlan = event.summaryCells[5][0].value;
    //   agrupamientoIS24.guadalajara = event.summaryCells[6][0].value;
    //   agrupamientoIS24.hermosillo = event.summaryCells[7][0].value;
    //   agrupamientoIS24.mexicali = event.summaryCells[8][0].value;
    //   agrupamientoIS24.orizaba = event.summaryCells[9][0].value;
    //   agrupamientoIS24.ramosArispe = event.summaryCells[10][0].value;
    //   agrupamientoIS24.total = event.summaryCells[11][0].value;
    // }
    // if (event.data.key == '10 OCT'){
    //   agrupamientoIOC24.cuautitlan = event.summaryCells[4][0].value;
    //   agrupamientoIOC24.tultitlan = event.summaryCells[5][0].value;
    //   agrupamientoIOC24.guadalajara = event.summaryCells[6][0].value;
    //   agrupamientoIOC24.hermosillo = event.summaryCells[7][0].value;
    //   agrupamientoIOC24.mexicali = event.summaryCells[8][0].value;
    //   agrupamientoIOC24.orizaba = event.summaryCells[9][0].value;
    //   agrupamientoIOC24.ramosArispe = event.summaryCells[10][0].value;
    //   agrupamientoIOC24.total = event.summaryCells[11][0].value;
    // }
    // if (event.data.key == '11 NOV'){
    //   agrupamientoINV24.cuautitlan = event.summaryCells[4][0].value;
    //   agrupamientoINV24.tultitlan = event.summaryCells[5][0].value;
    //   agrupamientoINV24.guadalajara = event.summaryCells[6][0].value;
    //   agrupamientoINV24.hermosillo = event.summaryCells[7][0].value;
    //   agrupamientoINV24.mexicali = event.summaryCells[8][0].value;
    //   agrupamientoINV24.orizaba = event.summaryCells[9][0].value;
    //   agrupamientoINV24.ramosArispe = event.summaryCells[10][0].value;
    //   agrupamientoINV24.total = event.summaryCells[11][0].value;
    // }
    // if (event.data.key == '12 DIC'){
    //   agrupamientoIDC24.cuautitlan = event.summaryCells[4][0].value;
    //   agrupamientoIDC24.tultitlan = event.summaryCells[5][0].value;
    //   agrupamientoIDC24.guadalajara = event.summaryCells[6][0].value;
    //   agrupamientoIDC24.hermosillo = event.summaryCells[7][0].value;
    //   agrupamientoIDC24.mexicali = event.summaryCells[8][0].value;
    //   agrupamientoIDC24.orizaba = event.summaryCells[9][0].value;
    //   agrupamientoIDC24.ramosArispe = event.summaryCells[10][0].value;
    //   agrupamientoIDC24.total = event.summaryCells[11][0].value;
    // }
  }

  if(event.rowType == "totalFooter"){
    totalIngresos24.cuautitlan = event.summaryCells[4][0]?.value;
    totalIngresos24.tultitlan = event.summaryCells[5][0]?.value;
    totalIngresos24.guadalajara = event.summaryCells[6][0]?.value;
    totalIngresos24.hermosillo = event.summaryCells[7][0]?.value;
    totalIngresos24.mexicali = event.summaryCells[8][0]?.value;
    totalIngresos24.orizaba = event.summaryCells[9][0]?.value;
    // totalIngresos24.ramosArispe = event.summaryCells[10][0].value;
    totalIngresos24.total = event.summaryCells[10][0].value;
  }
}
onCellPreparedI2024(e: any) {
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
customizeI2024(e) {  

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
//==============================KILOMETROS 2024=======================================
onRowPreparedK2024(e){

  if (e.rowType == 'group'){
    
    if (e.data.key == '01 ENE') {

      if(e.summaryCells[4].length !== 0){
      agrupamientoKE24.cuautitlan = e.summaryCells[4][0].value;
      }
      if(e.summaryCells[5].length !== 0){
        agrupamientoKE24.tultitlan = e.summaryCells[5][0].value;
      }
      if(e.summaryCells[6].length !== 0){
        agrupamientoKE24.guadalajara = e.summaryCells[6][0].value;
      }
      if(e.summaryCells[7].length !== 0){
        agrupamientoKE24.hermosillo = e.summaryCells[7][0].value;
      }
      if(e.summaryCells[8].length !== 0){
        agrupamientoKE24.mexicali = e.summaryCells[8][0].value;
      }
      if(e.summaryCells[9].length !== 0){
        agrupamientoKE24.orizaba = e.summaryCells[9][0].value;
      }
      // if(e.summaryCells[10].length !== 0){
      //   agrupamientoKE24.ramosArispe = e.summaryCells[10][0].value;
      // }
      if(e.summaryCells[10].length !== 0){
        agrupamientoKE24.total = e.summaryCells[10][0].value;
      }

      totalAgrupamientoIKE24.cuautitlan = agrupamientoIE24.cuautitlan / agrupamientoKE24.cuautitlan;
      totalAgrupamientoIKE24.tultitlan = agrupamientoIE24.tultitlan / agrupamientoKE24.tultitlan;
      totalAgrupamientoIKE24.guadalajara = agrupamientoIE24.guadalajara / agrupamientoKE24.guadalajara;
      totalAgrupamientoIKE24.hermosillo = agrupamientoIE24.hermosillo / agrupamientoKE24.hermosillo;
      totalAgrupamientoIKE24.mexicali = agrupamientoIE24.mexicali / agrupamientoKE24.mexicali;
      totalAgrupamientoIKE24.orizaba = agrupamientoIE24.orizaba / agrupamientoKE24.orizaba;
      // totalAgrupamientoIKE24.ramosArispe = agrupamientoIE24.ramosArispe / agrupamientoKE24.ramosArispe;
      totalAgrupamientoIKE24.total = agrupamientoIE24.total / agrupamientoKE24.total
    }
    if (e.data.key == '02 FEB'){
      agrupamientoKF24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKF24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKF24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKF24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKF24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKF24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKF24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKF24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKF24.cuautitlan = agrupamientoIF24.cuautitlan / agrupamientoKF24.cuautitlan;
      totalAgrupamientoIKF24.tultitlan = agrupamientoIF24.tultitlan / agrupamientoKF24.tultitlan;
      totalAgrupamientoIKF24.guadalajara = agrupamientoIF24.guadalajara / agrupamientoKF24.guadalajara;
      totalAgrupamientoIKF24.hermosillo = agrupamientoIF24.hermosillo / agrupamientoKF24.hermosillo;
      totalAgrupamientoIKF24.mexicali = agrupamientoIF24.mexicali / agrupamientoKF24.mexicali;
      totalAgrupamientoIKF24.orizaba = agrupamientoIF24.orizaba / agrupamientoKF24.orizaba;
      // totalAgrupamientoIKF24.ramosArispe = agrupamientoIF24.ramosArispe / agrupamientoKF24.ramosArispe;
      totalAgrupamientoIKF24.total = agrupamientoIF24.total / agrupamientoKF24.total;
    }
    if (e.data.key == '03 MAR'){
      agrupamientoKM24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKM24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKM24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKM24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKM24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKM24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKM24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKM24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKM24.cuautitlan = agrupamientoIM24.cuautitlan / agrupamientoKM24.cuautitlan;
      totalAgrupamientoIKM24.tultitlan = agrupamientoIM24.tultitlan / agrupamientoKM24.tultitlan;
      totalAgrupamientoIKM24.guadalajara = agrupamientoIM24.guadalajara / agrupamientoKM24.guadalajara;
      totalAgrupamientoIKM24.hermosillo = agrupamientoIM24.hermosillo / agrupamientoKM24.hermosillo;
      totalAgrupamientoIKM24.mexicali = agrupamientoIM24.mexicali / agrupamientoKM24.mexicali;
      totalAgrupamientoIKM24.orizaba = agrupamientoIM24.orizaba / agrupamientoKM24.orizaba;
      // totalAgrupamientoIKM24.ramosArispe = agrupamientoIM24.ramosArispe / agrupamientoKM24.ramosArispe;
      totalAgrupamientoIKM24.total = agrupamientoIM24.total / agrupamientoKM24.total;
    }
    if (e.data.key == '04 ABR'){
      agrupamientoKA24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKA24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKA24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKA24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKA24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKA24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKA24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKA24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKA24.cuautitlan = agrupamientoIA24.cuautitlan / agrupamientoKA24.cuautitlan;
      totalAgrupamientoIKA24.tultitlan = agrupamientoIA24.tultitlan / agrupamientoKA24.tultitlan;
      totalAgrupamientoIKA24.guadalajara = agrupamientoIA24.guadalajara / agrupamientoKA24.guadalajara;
      totalAgrupamientoIKA24.hermosillo = agrupamientoIA24.hermosillo / agrupamientoKA24.hermosillo;
      totalAgrupamientoIKA24.mexicali = agrupamientoIA24.mexicali / agrupamientoKA24.mexicali;
      totalAgrupamientoIKA24.orizaba = agrupamientoIA24.orizaba / agrupamientoKA24.orizaba;
      // totalAgrupamientoIKA24.ramosArispe = agrupamientoIA24.ramosArispe / agrupamientoKA24.ramosArispe;
      totalAgrupamientoIKA24.total = agrupamientoIA24.total / agrupamientoKA24.total;
    }
    if (e.data.key == '05 MAY'){
      agrupamientoKMY24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKMY24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKMY24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKMY24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKMY24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKMY24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKMY24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKMY24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKMY24.cuautitlan = agrupamientoIMY24.cuautitlan / agrupamientoKMY24.cuautitlan;
      totalAgrupamientoIKMY24.tultitlan = agrupamientoIMY24.tultitlan / agrupamientoKMY24.tultitlan;
      totalAgrupamientoIKMY24.guadalajara = agrupamientoIMY24.guadalajara / agrupamientoKMY24.guadalajara;
      totalAgrupamientoIKMY24.hermosillo = agrupamientoIMY24.hermosillo / agrupamientoKMY24.hermosillo;
      totalAgrupamientoIKMY24.mexicali = agrupamientoIMY24.mexicali / agrupamientoKMY24.mexicali;
      totalAgrupamientoIKMY24.orizaba = agrupamientoIMY24.orizaba / agrupamientoKMY24.orizaba;
      // totalAgrupamientoIKMY24.ramosArispe = agrupamientoIMY24.ramosArispe / agrupamientoKMY24.ramosArispe;
      totalAgrupamientoIKMY24.total = agrupamientoIMY24.total / agrupamientoKMY24.total;
    }
    if (e.data.key == '06 JUN'){
      agrupamientoKJN24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKJN24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKJN24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKJN24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKJN24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKJN24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKJN24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKJN24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKJN24.cuautitlan = agrupamientoIJN24.cuautitlan / agrupamientoKJN24.cuautitlan;
      totalAgrupamientoIKJN24.tultitlan = agrupamientoIJN24.tultitlan / agrupamientoKJN24.tultitlan;
      totalAgrupamientoIKJN24.guadalajara = agrupamientoIJN24.guadalajara / agrupamientoKJN24.guadalajara;
      totalAgrupamientoIKJN24.hermosillo = agrupamientoIJN24.hermosillo / agrupamientoKJN24.hermosillo;
      totalAgrupamientoIKJN24.mexicali = agrupamientoIJN24.mexicali / agrupamientoKJN24.mexicali;
      totalAgrupamientoIKJN24.orizaba = agrupamientoIJN24.orizaba / agrupamientoKJN24.orizaba;
      // totalAgrupamientoIKJN24.ramosArispe = agrupamientoIJN24.ramosArispe / agrupamientoKJN24.ramosArispe;
      totalAgrupamientoIKJN24.total = agrupamientoIJN24.total / agrupamientoKJN24.total;
    }
    if (e.data.key == '07 JUL'){
      agrupamientoKJL24.cuautitlan = e.summaryCells[4][0]?.value;
      agrupamientoKJL24.tultitlan = e.summaryCells[5][0]?.value;
      agrupamientoKJL24.guadalajara = e.summaryCells[6][0]?.value;
      agrupamientoKJL24.hermosillo = e.summaryCells[7][0]?.value;
      agrupamientoKJL24.mexicali = e.summaryCells[8][0]?.value;
      agrupamientoKJL24.orizaba = e.summaryCells[9][0]?.value;
      // agrupamientoKJL24.ramosArispe = e.summaryCells[10][0]?.value;
      agrupamientoKJL24.total = e.summaryCells[10][0]?.value;

      totalAgrupamientoIKJL24.cuautitlan = agrupamientoIJL24.cuautitlan / agrupamientoKJL24.cuautitlan;
      totalAgrupamientoIKJL24.tultitlan = agrupamientoIJL24.tultitlan / agrupamientoKJL24.tultitlan;
      totalAgrupamientoIKJL24.guadalajara = agrupamientoIJL24.guadalajara / agrupamientoKJL24.guadalajara;
      totalAgrupamientoIKJL24.hermosillo = agrupamientoIJL24.hermosillo / agrupamientoKJL24.hermosillo;
      totalAgrupamientoIKJL24.mexicali = agrupamientoIJL24.mexicali / agrupamientoKJL24.mexicali;
      totalAgrupamientoIKJL24.orizaba = agrupamientoIJL24.orizaba / agrupamientoKJL24.orizaba;
      // totalAgrupamientoIKJL24.ramosArispe = agrupamientoIJL24.ramosArispe / agrupamientoKJL24.ramosArispe;
      totalAgrupamientoIKJL24.total = agrupamientoIJL24.total / agrupamientoKJL24.total;
    }
    // if (e.data.key == '08 AGO'){
    //   agrupamientoKAG24.cuautitlan = e.summaryCells[4][0]?.value;
    //   agrupamientoKAG24.tultitlan = e.summaryCells[5][0]?.value;
    //   agrupamientoKAG24.guadalajara = e.summaryCells[6][0]?.value;
    //   agrupamientoKAG24.hermosillo = e.summaryCells[7][0]?.value;
    //   agrupamientoKAG24.mexicali = e.summaryCells[8][0]?.value;
    //   agrupamientoKAG24.orizaba = e.summaryCells[9][0]?.value;
    //   agrupamientoKAG24.ramosArispe = e.summaryCells[10][0]?.value;
    //   agrupamientoKAG24.total = e.summaryCells[11][0]?.value;

    //   totalAgrupamientoIKAG24.cuautitlan = agrupamientoIAG24.cuautitlan / agrupamientoKAG24.cuautitlan;
    //   totalAgrupamientoIKAG24.tultitlan = agrupamientoIAG24.tultitlan / agrupamientoKAG24.tultitlan;
    //   totalAgrupamientoIKAG24.guadalajara = agrupamientoIAG24.guadalajara / agrupamientoKAG24.guadalajara;
    //   totalAgrupamientoIKAG24.hermosillo = agrupamientoIAG24.hermosillo / agrupamientoKAG24.hermosillo;
    //   totalAgrupamientoIKAG24.mexicali = agrupamientoIAG24.mexicali / agrupamientoKAG24.mexicali;
    //   totalAgrupamientoIKAG24.orizaba = agrupamientoIAG24.orizaba / agrupamientoKAG24.orizaba;
    //   totalAgrupamientoIKAG24.ramosArispe = agrupamientoIAG24.ramosArispe / agrupamientoKAG24.ramosArispe;
    //   totalAgrupamientoIKAG24.total = agrupamientoIAG24.total / agrupamientoKAG24.total;
    // }
    // if (e.data.key == '09 SEP'){
    //   agrupamientoKS24.cuautitlan = e.summaryCells[4][0].value;
    //   agrupamientoKS24.tultitlan = e.summaryCells[5][0].value;
    //   agrupamientoKS24.guadalajara = e.summaryCells[6][0].value;
    //   agrupamientoKS24.hermosillo = e.summaryCells[7][0].value;
    //   agrupamientoKS24.mexicali = e.summaryCells[8][0].value;
    //   agrupamientoKS24.orizaba = e.summaryCells[9][0].value;
    //   agrupamientoKS24.ramosArispe = e.summaryCells[10][0].value;
    //   agrupamientoKS24.total = e.summaryCells[11][0].value;

    //   totalAgrupamientoIKS24.cuautitlan = agrupamientoIS24.cuautitlan / agrupamientoKS24.cuautitlan;
    //   totalAgrupamientoIKS24.tultitlan = agrupamientoIS24.tultitlan / agrupamientoKS24.tultitlan;
    //   totalAgrupamientoIKS24.guadalajara = agrupamientoIS24.guadalajara / agrupamientoKS24.guadalajara;
    //   totalAgrupamientoIKS24.hermosillo = agrupamientoIS24.hermosillo / agrupamientoKS24.hermosillo;
    //   totalAgrupamientoIKS24.mexicali = agrupamientoIS24.mexicali / agrupamientoKS24.mexicali;
    //   totalAgrupamientoIKS24.orizaba = agrupamientoIS24.orizaba / agrupamientoKS24.orizaba;
    //   totalAgrupamientoIKS24.ramosArispe = agrupamientoIS24.ramosArispe / agrupamientoKS24.ramosArispe;
    //   totalAgrupamientoIKS24.total = agrupamientoIS24.total / agrupamientoKS24.total;
    // }
    // if (e.data.key == '10 OCT'){
    //   agrupamientoKOC24.cuautitlan = e.summaryCells[4][0].value;
    //   agrupamientoKOC24.tultitlan = e.summaryCells[5][0].value;
    //   agrupamientoKOC24.guadalajara = e.summaryCells[6][0].value;
    //   agrupamientoKOC24.hermosillo = e.summaryCells[7][0].value;
    //   agrupamientoKOC24.mexicali = e.summaryCells[8][0].value;
    //   agrupamientoKOC24.orizaba = e.summaryCells[9][0].value;
    //   agrupamientoKOC24.ramosArispe = e.summaryCells[10][0].value;
    //   agrupamientoKOC24.total = e.summaryCells[11][0].value;

    //   totalAgrupamientoIKOC24.cuautitlan = agrupamientoIOC24.cuautitlan / agrupamientoKOC24.cuautitlan;
    //   totalAgrupamientoIKOC24.tultitlan = agrupamientoIOC24.tultitlan / agrupamientoKOC24.tultitlan;
    //   totalAgrupamientoIKOC24.guadalajara = agrupamientoIOC24.guadalajara / agrupamientoKOC24.guadalajara;
    //   totalAgrupamientoIKOC24.hermosillo = agrupamientoIOC24.hermosillo / agrupamientoKOC24.hermosillo;
    //   totalAgrupamientoIKOC24.mexicali = agrupamientoIOC24.mexicali / agrupamientoKOC24.mexicali;
    //   totalAgrupamientoIKOC24.orizaba = agrupamientoIOC24.orizaba / agrupamientoKOC24.orizaba;
    //   totalAgrupamientoIKOC24.ramosArispe = agrupamientoIOC24.ramosArispe / agrupamientoKOC24.ramosArispe;
    //   totalAgrupamientoIKOC24.total = agrupamientoIOC24.total / agrupamientoKOC24.total;
    // }
    // if (e.data.key == '11 NOV'){
    //   agrupamientoKNV24.cuautitlan = e.summaryCells[4][0].value;
    //   agrupamientoKNV24.tultitlan = e.summaryCells[5][0].value;
    //   agrupamientoKNV24.guadalajara = e.summaryCells[6][0].value;
    //   agrupamientoKNV24.hermosillo = e.summaryCells[7][0].value;
    //   agrupamientoKNV24.mexicali = e.summaryCells[8][0].value;
    //   agrupamientoKNV24.orizaba = e.summaryCells[9][0].value;
    //   agrupamientoKNV24.ramosArispe = e.summaryCells[10][0].value;
    //   agrupamientoKNV24.total = e.summaryCells[11][0].value;

    //   totalAgrupamientoIKNV24.cuautitlan = agrupamientoINV24.cuautitlan / agrupamientoKNV24.cuautitlan;
    //   totalAgrupamientoIKNV24.tultitlan = agrupamientoINV24.tultitlan / agrupamientoKNV24.tultitlan;
    //   totalAgrupamientoIKNV24.guadalajara = agrupamientoINV24.guadalajara / agrupamientoKNV24.guadalajara;
    //   totalAgrupamientoIKNV24.hermosillo = agrupamientoINV24.hermosillo / agrupamientoKNV24.hermosillo;
    //   totalAgrupamientoIKNV24.mexicali = agrupamientoINV24.mexicali / agrupamientoKNV24.mexicali;
    //   totalAgrupamientoIKNV24.orizaba = agrupamientoINV24.orizaba / agrupamientoKNV24.orizaba;
    //   totalAgrupamientoIKNV24.ramosArispe = agrupamientoINV24.ramosArispe / agrupamientoKNV24.ramosArispe;
    //   totalAgrupamientoIKNV24.total = agrupamientoINV24.total / agrupamientoKNV24.total;
    // }
    // if (e.data.key == '12 DIC'){
    //   agrupamientoKDC24.cuautitlan = e.summaryCells[4][0].value;
    //   agrupamientoKDC24.tultitlan = e.summaryCells[5][0].value;
    //   agrupamientoKDC24.guadalajara = e.summaryCells[6][0].value;
    //   agrupamientoKDC24.hermosillo = e.summaryCells[7][0].value;
    //   agrupamientoKDC24.mexicali = e.summaryCells[8][0].value;
    //   agrupamientoKDC24.orizaba = e.summaryCells[9][0].value;
    //   agrupamientoKDC24.ramosArispe = e.summaryCells[10][0].value;
    //   agrupamientoKDC24.total = e.summaryCells[11][0].value;

    //   totalAgrupamientoIKDC24.cuautitlan = agrupamientoIDC24.cuautitlan / agrupamientoKDC24.cuautitlan;
    //   totalAgrupamientoIKDC24.tultitlan = agrupamientoIDC24.tultitlan / agrupamientoKDC24.tultitlan;
    //   totalAgrupamientoIKDC24.guadalajara = agrupamientoIDC24.guadalajara / agrupamientoKDC24.guadalajara;
    //   totalAgrupamientoIKDC24.hermosillo = agrupamientoIDC24.hermosillo / agrupamientoKDC24.hermosillo;
    //   totalAgrupamientoIKDC24.mexicali = agrupamientoIDC24.mexicali / agrupamientoKDC24.mexicali;
    //   totalAgrupamientoIKDC24.orizaba = agrupamientoIDC24.orizaba / agrupamientoKDC24.orizaba;
    //   totalAgrupamientoIKDC24.ramosArispe = agrupamientoIDC24.ramosArispe / agrupamientoKDC24.ramosArispe;
    //   totalAgrupamientoIKDC24.total = agrupamientoIDC24.total / agrupamientoKDC24.total;
    // }
 

  }

  if(e.rowType == "totalFooter"){
    totalKilomentros24.cuautitlan = e.summaryCells[4][0]?.value;
    totalKilomentros24.tultitlan = e.summaryCells[5][0]?.value;
    totalKilomentros24.guadalajara = e.summaryCells[6][0]?.value;
    totalKilomentros24.hermosillo = e.summaryCells[7][0]?.value;
    totalKilomentros24.mexicali = e.summaryCells[8][0]?.value;
    totalKilomentros24.orizaba = e.summaryCells[9][0]?.value;
    // totalKilomentros24.ramosArispe = e.summaryCells[10][0].value;
    totalKilomentros24.total = e.summaryCells[10][0].value;

    totalOperacionIK24.cuautitlan = totalIngresos24.cuautitlan / totalKilomentros24.cuautitlan;
    totalOperacionIK24.tultitlan = totalIngresos24.tultitlan / totalKilomentros24.tultitlan;
    totalOperacionIK24.guadalajara = totalIngresos24.guadalajara / totalKilomentros24.guadalajara;
    totalOperacionIK24.hermosillo = totalIngresos24.hermosillo / totalKilomentros24.hermosillo;
    totalOperacionIK24.mexicali = totalIngresos24.mexicali / totalKilomentros24.mexicali;
    totalOperacionIK24.orizaba = totalIngresos24.orizaba / totalKilomentros24.orizaba;
    // totalOperacionIK24.ramosArispe = totalIngresos24.ramosArispe / totalKilomentros24.ramosArispe;
    totalOperacionIK24.total = totalIngresos24.total / totalKilomentros24.total;
  }
}
onCellPreparedK2024(e){
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
customizeK2024(e) {  

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
//==============================VIAJES TOTALES 2024============================================
onRowPreparedV2024(e){}
onCellPreparedV2024(e){
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
customizeV2024(e) {  

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
//==============================VIAJES CARGADOS 2024============================================
  onRowPreparedVC2024(event){
    
    if (event.rowType == 'group'){
      
      if (event.data.key == '01 ENE') {
         
        viajesCargadosE24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosE24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosE24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosE24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosE24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosE24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosE24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosE24.total = event.summaryCells[10][0]?.value;

        totalIVCE24.cuautitlan = agrupamientoIE24.cuautitlan / viajesCargadosE24.cuautitlan;
        totalIVCE24.tultitlan = agrupamientoIE24.tultitlan / viajesCargadosE24.tultitlan;
        totalIVCE24.guadalajara = agrupamientoIE24.guadalajara / viajesCargadosE24.guadalajara;
        totalIVCE24.hermosillo = agrupamientoIE24.hermosillo / viajesCargadosE24.hermosillo;
        totalIVCE24.mexicali = agrupamientoIE24.mexicali / viajesCargadosE24.mexicali;
        totalIVCE24.orizaba = agrupamientoIE24.orizaba / viajesCargadosE24.orizaba;
        // totalIVCE24.ramosArispe = agrupamientoIE24.ramosArispe / viajesCargadosE24.ramosArispe;
        totalIVCE24.total = agrupamientoIE24.total / viajesCargadosE24.total;

        totalKVCE24.cuautitlan = agrupamientoKE24.cuautitlan / viajesCargadosE24.cuautitlan;
        totalKVCE24.tultitlan = agrupamientoKE24.tultitlan / viajesCargadosE24.tultitlan;
        totalKVCE24.guadalajara = agrupamientoKE24.guadalajara / viajesCargadosE24.guadalajara;
        totalKVCE24.hermosillo = agrupamientoKE24.hermosillo / viajesCargadosE24.hermosillo;
        totalKVCE24.mexicali = agrupamientoKE24.mexicali / viajesCargadosE24.mexicali;
        totalKVCE24.orizaba = agrupamientoKE24.orizaba / viajesCargadosE24.orizaba;
        // totalKVCE24.ramosArispe = agrupamientoKE24.ramosArispe / viajesCargadosE24.ramosArispe;
        totalKVCE24.total = agrupamientoKE24.total / viajesCargadosE24.total;


      }
      if (event.data.key == '02 FEB'){
        viajesCargadosF24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosF24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosF24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosF24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosF24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosF24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosF24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosF24.total = event.summaryCells[10][0]?.value;

        totalIVCF24.cuautitlan = agrupamientoIF24.cuautitlan / viajesCargadosF24.cuautitlan;
        totalIVCF24.tultitlan = agrupamientoIF24.tultitlan / viajesCargadosF24.tultitlan;
        totalIVCF24.guadalajara = agrupamientoIF24.guadalajara / viajesCargadosF24.guadalajara;
        totalIVCF24.hermosillo = agrupamientoIF24.hermosillo / viajesCargadosF24.hermosillo;
        totalIVCF24.mexicali = agrupamientoIF24.mexicali / viajesCargadosF24.mexicali;
        totalIVCF24.orizaba = agrupamientoIF24.orizaba / viajesCargadosF24.orizaba;
        // totalIVCF24.ramosArispe = agrupamientoIF24.ramosArispe / viajesCargadosF24.ramosArispe;
        totalIVCF24.total = agrupamientoIF24.total / viajesCargadosF24.total;

        totalKVCF24.cuautitlan = agrupamientoKF24.cuautitlan / viajesCargadosF24.cuautitlan;
        totalKVCF24.tultitlan = agrupamientoKF24.tultitlan / viajesCargadosF24.tultitlan;
        totalKVCF24.guadalajara = agrupamientoKF24.guadalajara / viajesCargadosF24.guadalajara;
        totalKVCF24.hermosillo = agrupamientoKF24.hermosillo / viajesCargadosF24.hermosillo;
        totalKVCF24.mexicali = agrupamientoKF24.mexicali / viajesCargadosF24.mexicali;
        totalKVCF24.orizaba = agrupamientoKF24.orizaba / viajesCargadosF24.orizaba;
        // totalKVCF24.ramosArispe = agrupamientoKF24.ramosArispe / viajesCargadosF24.ramosArispe;
        totalKVCF24.total = agrupamientoKF24.total / viajesCargadosF24.total;
      }
      if (event.data.key == '03 MAR'){
        viajesCargadosM24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosM24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosM24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosM24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosM24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosM24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosM24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosM24.total = event.summaryCells[10][0]?.value;

        totalIVCM24.cuautitlan = agrupamientoIM24.cuautitlan / viajesCargadosM24.cuautitlan;
        totalIVCM24.tultitlan = agrupamientoIM24.tultitlan / viajesCargadosM24.tultitlan;
        totalIVCM24.guadalajara = agrupamientoIM24.guadalajara / viajesCargadosM24.guadalajara;
        totalIVCM24.hermosillo = agrupamientoIM24.hermosillo / viajesCargadosM24.hermosillo;
        totalIVCM24.mexicali = agrupamientoIM24.mexicali / viajesCargadosM24.mexicali;
        totalIVCM24.orizaba = agrupamientoIM24.orizaba / viajesCargadosM24.orizaba;
        // totalIVCM24.ramosArispe = agrupamientoIM24.ramosArispe / viajesCargadosM24.ramosArispe;
        totalIVCM24.total = agrupamientoIM24.total / viajesCargadosM24.total;

        totalKVCM24.cuautitlan = agrupamientoKM24.cuautitlan / viajesCargadosM24.cuautitlan;
        totalKVCM24.tultitlan = agrupamientoKM24.tultitlan / viajesCargadosM24.tultitlan;
        totalKVCM24.guadalajara = agrupamientoKM24.guadalajara / viajesCargadosM24.guadalajara;
        totalKVCM24.hermosillo = agrupamientoKM24.hermosillo / viajesCargadosM24.hermosillo;
        totalKVCM24.mexicali = agrupamientoKM24.mexicali / viajesCargadosM24.mexicali;
        totalKVCM24.orizaba = agrupamientoKM24.orizaba / viajesCargadosM24.orizaba;
        // totalKVCM24.ramosArispe = agrupamientoKM24.ramosArispe / viajesCargadosM24.ramosArispe;
        totalKVCM24.total = agrupamientoKM24.total / viajesCargadosM24.total;
      }
      if (event.data.key == '04 ABR'){
        viajesCargadosA24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosA24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosA24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosA24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosA24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosA24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosA24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosA24.total = event.summaryCells[10][0]?.value;

        totalIVCA24.cuautitlan = agrupamientoIA24.cuautitlan / viajesCargadosA24.cuautitlan;
        totalIVCA24.tultitlan = agrupamientoIA24.tultitlan / viajesCargadosA24.tultitlan;
        totalIVCA24.guadalajara = agrupamientoIA24.guadalajara / viajesCargadosA24.guadalajara;
        totalIVCA24.hermosillo = agrupamientoIA24.hermosillo / viajesCargadosA24.hermosillo;
        totalIVCA24.mexicali = agrupamientoIA24.mexicali / viajesCargadosA24.mexicali;
        totalIVCA24.orizaba = agrupamientoIA24.orizaba / viajesCargadosA24.orizaba;
        // totalIVCA24.ramosArispe = agrupamientoIA24.ramosArispe / viajesCargadosA24.ramosArispe;
        totalIVCA24.total = agrupamientoIA24.total / viajesCargadosA24.total;

        totalKVCA24.cuautitlan = agrupamientoKA24.cuautitlan / viajesCargadosA24.cuautitlan;
        totalKVCA24.tultitlan = agrupamientoKA24.tultitlan / viajesCargadosA24.tultitlan;
        totalKVCA24.guadalajara = agrupamientoKA24.guadalajara / viajesCargadosA24.guadalajara;
        totalKVCA24.hermosillo = agrupamientoKA24.hermosillo / viajesCargadosA24.hermosillo;
        totalKVCA24.mexicali = agrupamientoKA24.mexicali / viajesCargadosA24.mexicali;
        totalKVCA24.orizaba = agrupamientoKA24.orizaba / viajesCargadosA24.orizaba;
        // totalKVCA24.ramosArispe = agrupamientoKA24.ramosArispe / viajesCargadosA24.ramosArispe;
        totalKVCA24.total = agrupamientoKA24.total / viajesCargadosA24.total;
      }
      if (event.data.key == '05 MAY'){
        viajesCargadosMY24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosMY24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosMY24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosMY24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosMY24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosMY24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosMY24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosMY24.total = event.summaryCells[10][0]?.value;

        totalIVCMY24.cuautitlan = agrupamientoIMY24.cuautitlan / viajesCargadosMY24.cuautitlan;
        totalIVCMY24.tultitlan = agrupamientoIMY24.tultitlan / viajesCargadosMY24.tultitlan;
        totalIVCMY24.guadalajara = agrupamientoIMY24.guadalajara / viajesCargadosMY24.guadalajara;
        totalIVCMY24.hermosillo = agrupamientoIMY24.hermosillo / viajesCargadosMY24.hermosillo;
        totalIVCMY24.mexicali = agrupamientoIMY24.mexicali / viajesCargadosMY24.mexicali;
        totalIVCMY24.orizaba = agrupamientoIMY24.orizaba / viajesCargadosMY24.orizaba;
        // totalIVCMY24.ramosArispe = agrupamientoIMY24.ramosArispe / viajesCargadosMY24.ramosArispe;
        totalIVCMY24.total = agrupamientoIMY24.total / viajesCargadosMY24.total;

        totalKVCMY24.cuautitlan = agrupamientoKMY24.cuautitlan / viajesCargadosMY24.cuautitlan;
        totalKVCMY24.tultitlan = agrupamientoKMY24.tultitlan / viajesCargadosMY24.tultitlan;
        totalKVCMY24.guadalajara = agrupamientoKMY24.guadalajara / viajesCargadosMY24.guadalajara;
        totalKVCMY24.hermosillo = agrupamientoKMY24.hermosillo / viajesCargadosMY24.hermosillo;
        totalKVCMY24.mexicali = agrupamientoKMY24.mexicali / viajesCargadosMY24.mexicali;
        totalKVCMY24.orizaba = agrupamientoKMY24.orizaba / viajesCargadosMY24.orizaba;
        // totalKVCMY24.ramosArispe = agrupamientoKMY24.ramosArispe / viajesCargadosMY24.ramosArispe;
        totalKVCMY24.total = agrupamientoKMY24.total / viajesCargadosMY24.total;
      }
      if (event.data.key == '06 JUN'){
        viajesCargadosJN24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosJN24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosJN24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosJN24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosJN24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosJN24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosJN24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosJN24.total = event.summaryCells[10][0]?.value;

        totalIVCJN24.cuautitlan = agrupamientoIJN24.cuautitlan / viajesCargadosJN24.cuautitlan;
        totalIVCJN24.tultitlan = agrupamientoIJN24.tultitlan / viajesCargadosJN24.tultitlan;
        totalIVCJN24.guadalajara = agrupamientoIJN24.guadalajara / viajesCargadosJN24.guadalajara;
        totalIVCJN24.hermosillo = agrupamientoIJN24.hermosillo / viajesCargadosJN24.hermosillo;
        totalIVCJN24.mexicali = agrupamientoIJN24.mexicali / viajesCargadosJN24.mexicali;
        totalIVCJN24.orizaba = agrupamientoIJN24.orizaba / viajesCargadosJN24.orizaba;
        // totalIVCJN24.ramosArispe = agrupamientoIJN24.ramosArispe / viajesCargadosJN24.ramosArispe;
        totalIVCJN24.total = agrupamientoIJN24.total / viajesCargadosJN24.total;

        totalKVCJN24.cuautitlan = agrupamientoKJN24.cuautitlan / viajesCargadosJN24.cuautitlan;
        totalKVCJN24.tultitlan = agrupamientoKJN24.tultitlan / viajesCargadosJN24.tultitlan;
        totalKVCJN24.guadalajara = agrupamientoKJN24.guadalajara / viajesCargadosJN24.guadalajara;
        totalKVCJN24.hermosillo = agrupamientoKJN24.hermosillo / viajesCargadosJN24.hermosillo;
        totalKVCJN24.mexicali = agrupamientoKJN24.mexicali / viajesCargadosJN24.mexicali;
        totalKVCJN24.orizaba = agrupamientoKJN24.orizaba / viajesCargadosJN24.orizaba;
        // totalKVCJN24.ramosArispe = agrupamientoKJN24.ramosArispe / viajesCargadosJN24.ramosArispe;
        totalKVCJN24.total = agrupamientoKJN24.total / viajesCargadosJN24.total;
      }
      if (event.data.key == '07 JUL'){
        viajesCargadosJL24.cuautitlan = event.summaryCells[4][0]?.value;
        viajesCargadosJL24.tultitlan = event.summaryCells[5][0]?.value;
        viajesCargadosJL24.guadalajara = event.summaryCells[6][0]?.value;
        viajesCargadosJL24.hermosillo = event.summaryCells[7][0]?.value;
        viajesCargadosJL24.mexicali = event.summaryCells[8][0]?.value;
        viajesCargadosJL24.orizaba = event.summaryCells[9][0]?.value;
        // viajesCargadosJL24.ramosArispe = event.summaryCells[10][0]?.value;
        viajesCargadosJL24.total = event.summaryCells[10][0]?.value;

        totalIVCJL24.cuautitlan = agrupamientoIJL24.cuautitlan / viajesCargadosJL24.cuautitlan;
        totalIVCJL24.tultitlan = agrupamientoIJL24.tultitlan / viajesCargadosJL24.tultitlan;
        totalIVCJL24.guadalajara = agrupamientoIJL24.guadalajara / viajesCargadosJL24.guadalajara;
        totalIVCJL24.hermosillo = agrupamientoIJL24.hermosillo / viajesCargadosJL24.hermosillo;
        totalIVCJL24.mexicali = agrupamientoIJL24.mexicali / viajesCargadosJL24.mexicali;
        totalIVCJL24.orizaba = agrupamientoIJL24.orizaba / viajesCargadosJL24.orizaba;
        // totalIVCJL24.ramosArispe = agrupamientoIJL24.ramosArispe / viajesCargadosJL24.ramosArispe;
        totalIVCJL24.total = agrupamientoIJL24.total / viajesCargadosJL24.total;

        totalKVCJL24.cuautitlan = agrupamientoKJL24.cuautitlan / viajesCargadosJL24.cuautitlan;
        totalKVCJL24.tultitlan = agrupamientoKJL24.tultitlan / viajesCargadosJL24.tultitlan;
        totalKVCJL24.guadalajara = agrupamientoKJL24.guadalajara / viajesCargadosJL24.guadalajara;
        totalKVCJL24.hermosillo = agrupamientoKJL24.hermosillo / viajesCargadosJL24.hermosillo;
        totalKVCJL24.mexicali = agrupamientoKJL24.mexicali / viajesCargadosJL24.mexicali;
        totalKVCJL24.orizaba = agrupamientoKJL24.orizaba / viajesCargadosJL24.orizaba;
        // totalKVCJL24.ramosArispe = agrupamientoKJL24.ramosArispe / viajesCargadosJL24.ramosArispe;
        totalKVCJL24.total = agrupamientoKJL24.total / viajesCargadosJL24.total;
      }
      // if (event.data.key == '08 AGO'){
      //   viajesCargadosAG24.cuautitlan = event.summaryCells[4][0]?.value;
      //   viajesCargadosAG24.tultitlan = event.summaryCells[5][0]?.value;
      //   viajesCargadosAG24.guadalajara = event.summaryCells[6][0]?.value;
      //   viajesCargadosAG24.hermosillo = event.summaryCells[7][0]?.value;
      //   viajesCargadosAG24.mexicali = event.summaryCells[8][0]?.value;
      //   viajesCargadosAG24.orizaba = event.summaryCells[9][0]?.value;
      //   viajesCargadosAG24.ramosArispe = event.summaryCells[10][0]?.value;
      //   viajesCargadosAG24.total = event.summaryCells[11][0]?.value;

      //   totalIVCAG24.cuautitlan = agrupamientoIAG24.cuautitlan / viajesCargadosAG24.cuautitlan;
      //   totalIVCAG24.tultitlan = agrupamientoIAG24.tultitlan / viajesCargadosAG24.tultitlan;
      //   totalIVCAG24.guadalajara = agrupamientoIAG24.guadalajara / viajesCargadosAG24.guadalajara;
      //   totalIVCAG24.hermosillo = agrupamientoIAG24.hermosillo / viajesCargadosAG24.hermosillo;
      //   totalIVCAG24.mexicali = agrupamientoIAG24.mexicali / viajesCargadosAG24.mexicali;
      //   totalIVCAG24.orizaba = agrupamientoIAG24.orizaba / viajesCargadosAG24.orizaba;
      //   totalIVCAG24.ramosArispe = agrupamientoIAG24.ramosArispe / viajesCargadosAG24.ramosArispe;
      //   totalIVCAG24.total = agrupamientoIAG24.total / viajesCargadosAG24.total;

      //   totalKVCAG24.cuautitlan = agrupamientoKAG24.cuautitlan / viajesCargadosAG24.cuautitlan;
      //   totalKVCAG24.tultitlan = agrupamientoKAG24.tultitlan / viajesCargadosAG24.tultitlan;
      //   totalKVCAG24.guadalajara = agrupamientoKAG24.guadalajara / viajesCargadosAG24.guadalajara;
      //   totalKVCAG24.hermosillo = agrupamientoKAG24.hermosillo / viajesCargadosAG24.hermosillo;
      //   totalKVCAG24.mexicali = agrupamientoKAG24.mexicali / viajesCargadosAG24.mexicali;
      //   totalKVCAG24.orizaba = agrupamientoKAG24.orizaba / viajesCargadosAG24.orizaba;
      //   totalKVCAG24.ramosArispe = agrupamientoKAG24.ramosArispe / viajesCargadosAG24.ramosArispe;
      //   totalKVCAG24.total = agrupamientoKAG24.total / viajesCargadosAG24.total;
      // }
      // if (event.data.key == '09 SEP'){
      //   viajesCargadosS24.cuautitlan = event.summaryCells[4][0].value;
      //   viajesCargadosS24.tultitlan = event.summaryCells[5][0].value;
      //   viajesCargadosS24.guadalajara = event.summaryCells[6][0].value;
      //   viajesCargadosS24.hermosillo = event.summaryCells[7][0].value;
      //   viajesCargadosS24.mexicali = event.summaryCells[8][0].value;
      //   viajesCargadosS24.orizaba = event.summaryCells[9][0].value;
      //   viajesCargadosS24.ramosArispe = event.summaryCells[10][0].value;
      //   viajesCargadosS24.total = event.summaryCells[11][0].value;

      //   totalIVCS24.cuautitlan = agrupamientoIS24.cuautitlan / viajesCargadosS24.cuautitlan;
      //   totalIVCS24.tultitlan = agrupamientoIS24.tultitlan / viajesCargadosS24.tultitlan;
      //   totalIVCS24.guadalajara = agrupamientoIS24.guadalajara / viajesCargadosS24.guadalajara;
      //   totalIVCS24.hermosillo = agrupamientoIS24.hermosillo / viajesCargadosS24.hermosillo;
      //   totalIVCS24.mexicali = agrupamientoIS24.mexicali / viajesCargadosS24.mexicali;
      //   totalIVCS24.orizaba = agrupamientoIS24.orizaba / viajesCargadosS24.orizaba;
      //   totalIVCS24.ramosArispe = agrupamientoIS24.ramosArispe / viajesCargadosS24.ramosArispe;
      //   totalIVCS24.total = agrupamientoIS24.total / viajesCargadosS24.total;

      //   totalKVCS24.cuautitlan = agrupamientoKS24.cuautitlan / viajesCargadosS24.cuautitlan;
      //   totalKVCS24.tultitlan = agrupamientoKS24.tultitlan / viajesCargadosS24.tultitlan;
      //   totalKVCS24.guadalajara = agrupamientoKS24.guadalajara / viajesCargadosS24.guadalajara;
      //   totalKVCS24.hermosillo = agrupamientoKS24.hermosillo / viajesCargadosS24.hermosillo;
      //   totalKVCS24.mexicali = agrupamientoKS24.mexicali / viajesCargadosS24.mexicali;
      //   totalKVCS24.orizaba = agrupamientoKS24.orizaba / viajesCargadosS24.orizaba;
      //   totalKVCS24.ramosArispe = agrupamientoKS24.ramosArispe / viajesCargadosS24.ramosArispe;
      //   totalKVCS24.total = agrupamientoKS24.total / viajesCargadosS24.total;
      // }
      // if (event.data.key == '10 OCT'){
      //   viajesCargadosOC24.cuautitlan = event.summaryCells[4][0].value;
      //   viajesCargadosOC24.tultitlan = event.summaryCells[5][0].value;
      //   viajesCargadosOC24.guadalajara = event.summaryCells[6][0].value;
      //   viajesCargadosOC24.hermosillo = event.summaryCells[7][0].value;
      //   viajesCargadosOC24.mexicali = event.summaryCells[8][0].value;
      //   viajesCargadosOC24.orizaba = event.summaryCells[9][0].value;
      //   viajesCargadosOC24.ramosArispe = event.summaryCells[10][0].value;
      //   viajesCargadosOC24.total = event.summaryCells[11][0].value;

      //   totalIVCOC24.cuautitlan = agrupamientoIOC24.cuautitlan / viajesCargadosOC24.cuautitlan;
      //   totalIVCOC24.tultitlan = agrupamientoIOC24.tultitlan / viajesCargadosOC24.tultitlan;
      //   totalIVCOC24.guadalajara = agrupamientoIOC24.guadalajara / viajesCargadosOC24.guadalajara;
      //   totalIVCOC24.hermosillo = agrupamientoIOC24.hermosillo / viajesCargadosOC24.hermosillo;
      //   totalIVCOC24.mexicali = agrupamientoIOC24.mexicali / viajesCargadosOC24.mexicali;
      //   totalIVCOC24.orizaba = agrupamientoIOC24.orizaba / viajesCargadosOC24.orizaba;
      //   totalIVCOC24.ramosArispe = agrupamientoIOC24.ramosArispe / viajesCargadosOC24.ramosArispe;
      //   totalIVCOC24.total = agrupamientoIOC24.total / viajesCargadosOC24.total;

      //   totalKVCOC24.cuautitlan = agrupamientoKOC24.cuautitlan / viajesCargadosOC24.cuautitlan;
      //   totalKVCOC24.tultitlan = agrupamientoKOC24.tultitlan / viajesCargadosOC24.tultitlan;
      //   totalKVCOC24.guadalajara = agrupamientoKOC24.guadalajara / viajesCargadosOC24.guadalajara;
      //   totalKVCOC24.hermosillo = agrupamientoKOC24.hermosillo / viajesCargadosOC24.hermosillo;
      //   totalKVCOC24.mexicali = agrupamientoKOC24.mexicali / viajesCargadosOC24.mexicali;
      //   totalKVCOC24.orizaba = agrupamientoKOC24.orizaba / viajesCargadosOC24.orizaba;
      //   totalKVCOC24.ramosArispe = agrupamientoKOC24.ramosArispe / viajesCargadosOC24.ramosArispe;
      //   totalKVCOC24.total = agrupamientoKOC24.total / viajesCargadosOC24.total;
      // }
      // if (event.data.key == '11 NOV'){
      //   viajesCargadosNV24.cuautitlan = event.summaryCells[4][0].value;
      //   viajesCargadosNV24.tultitlan = event.summaryCells[5][0].value;
      //   viajesCargadosNV24.guadalajara = event.summaryCells[6][0].value;
      //   viajesCargadosNV24.hermosillo = event.summaryCells[7][0].value;
      //   viajesCargadosNV24.mexicali = event.summaryCells[8][0].value;
      //   viajesCargadosNV24.orizaba = event.summaryCells[9][0].value;
      //   viajesCargadosNV24.ramosArispe = event.summaryCells[10][0].value;
      //   viajesCargadosNV24.total = event.summaryCells[11][0].value;

      //   totalIVCNV24.cuautitlan = agrupamientoINV24.cuautitlan / viajesCargadosNV24.cuautitlan;
      //   totalIVCNV24.tultitlan = agrupamientoINV24.tultitlan / viajesCargadosNV24.tultitlan;
      //   totalIVCNV24.guadalajara = agrupamientoINV24.guadalajara / viajesCargadosNV24.guadalajara;
      //   totalIVCNV24.hermosillo = agrupamientoINV24.hermosillo / viajesCargadosNV24.hermosillo;
      //   totalIVCNV24.mexicali = agrupamientoINV24.mexicali / viajesCargadosNV24.mexicali;
      //   totalIVCNV24.orizaba = agrupamientoINV24.orizaba / viajesCargadosNV24.orizaba;
      //   totalIVCNV24.ramosArispe = agrupamientoINV24.ramosArispe / viajesCargadosNV24.ramosArispe;
      //   totalIVCNV24.total = agrupamientoINV24.total / viajesCargadosNV24.total;

      //   totalKVCNV24.cuautitlan = agrupamientoKNV24.cuautitlan / viajesCargadosNV24.cuautitlan;
      //   totalKVCNV24.tultitlan = agrupamientoKNV24.tultitlan / viajesCargadosNV24.tultitlan;
      //   totalKVCNV24.guadalajara = agrupamientoKNV24.guadalajara / viajesCargadosNV24.guadalajara;
      //   totalKVCNV24.hermosillo = agrupamientoKNV24.hermosillo / viajesCargadosNV24.hermosillo;
      //   totalKVCNV24.mexicali = agrupamientoKNV24.mexicali / viajesCargadosNV24.mexicali;
      //   totalKVCNV24.orizaba = agrupamientoKNV24.orizaba / viajesCargadosNV24.orizaba;
      //   totalKVCNV24.ramosArispe = agrupamientoKNV24.ramosArispe / viajesCargadosNV24.ramosArispe;
      //   totalKVCNV24.total = agrupamientoKNV24.total / viajesCargadosNV24.total;
      // }
      // if (event.data.key == '12 DIC'){
      //   viajesCargadosDC24.cuautitlan = event.summaryCells[4][0].value;
      //   viajesCargadosDC24.tultitlan = event.summaryCells[5][0].value;
      //   viajesCargadosDC24.guadalajara = event.summaryCells[6][0].value;
      //   viajesCargadosDC24.hermosillo = event.summaryCells[7][0].value;
      //   viajesCargadosDC24.mexicali = event.summaryCells[8][0].value;
      //   viajesCargadosDC24.orizaba = event.summaryCells[9][0].value;
      //   viajesCargadosDC24.ramosArispe = event.summaryCells[10][0].value;
      //   viajesCargadosDC24.total = event.summaryCells[11][0].value;

      //   totalIVCDC24.cuautitlan = agrupamientoIDC24.cuautitlan / viajesCargadosDC24.cuautitlan;
      //   totalIVCDC24.tultitlan = agrupamientoIDC24.tultitlan / viajesCargadosDC24.tultitlan;
      //   totalIVCDC24.guadalajara = agrupamientoIDC24.guadalajara / viajesCargadosDC24.guadalajara;
      //   totalIVCDC24.hermosillo = agrupamientoIDC24.hermosillo / viajesCargadosDC24.hermosillo;
      //   totalIVCDC24.mexicali = agrupamientoIDC24.mexicali / viajesCargadosDC24.mexicali;
      //   totalIVCDC24.orizaba = agrupamientoIDC24.orizaba / viajesCargadosDC24.orizaba;
      //   totalIVCDC24.ramosArispe = agrupamientoIDC24.ramosArispe / viajesCargadosDC24.ramosArispe;
      //   totalIVCDC24.total = agrupamientoIDC24.total / viajesCargadosDC24.total;

      //   totalKVCDC24.cuautitlan = agrupamientoKDC24.cuautitlan / viajesCargadosDC24.cuautitlan;
      //   totalKVCDC24.tultitlan = agrupamientoKDC24.tultitlan / viajesCargadosDC24.tultitlan;
      //   totalKVCDC24.guadalajara = agrupamientoKDC24.guadalajara / viajesCargadosDC24.guadalajara;
      //   totalKVCDC24.hermosillo = agrupamientoKDC24.hermosillo / viajesCargadosDC24.hermosillo;
      //   totalKVCDC24.mexicali = agrupamientoKDC24.mexicali / viajesCargadosDC24.mexicali;
      //   totalKVCDC24.orizaba = agrupamientoKDC24.orizaba / viajesCargadosDC24.orizaba;
      //   totalKVCDC24.ramosArispe = agrupamientoKDC24.ramosArispe / viajesCargadosDC24.ramosArispe;
      //   totalKVCDC24.total = agrupamientoKDC24.total / viajesCargadosDC24.total;
      // }
    }

    if(event.rowType == "totalFooter"){
      totalVC24.cuautitlan = event.summaryCells[4][0]?.value;
      totalVC24.tultitlan = event.summaryCells[5][0]?.value;
      totalVC24.guadalajara = event.summaryCells[6][0]?.value;
      totalVC24.hermosillo = event.summaryCells[7][0]?.value;
      totalVC24.mexicali = event.summaryCells[8][0]?.value;
      totalVC24.orizaba = event.summaryCells[9][0]?.value;
      // totalVC24.ramosArispe = event.summaryCells[10][0]?.value;
      totalVC24.total = event.summaryCells[10][0]?.value

      totalOperacionIVC24.cuautitlan = totalIngresos24.cuautitlan / totalVC24.cuautitlan;
      totalOperacionIVC24.tultitlan = totalIngresos24.tultitlan / totalVC24.tultitlan;
      totalOperacionIVC24.guadalajara = totalIngresos24.guadalajara / totalVC24.guadalajara;
      totalOperacionIVC24.hermosillo = totalIngresos24.hermosillo / totalVC24.hermosillo;
      totalOperacionIVC24.mexicali = totalIngresos24.mexicali / totalVC24.mexicali;
      totalOperacionIVC24.orizaba = totalIngresos24.orizaba / totalVC24.orizaba;
      // totalOperacionIVC24.ramosArispe = totalIngresos24.ramosArispe / totalVC24.ramosArispe;
      totalOperacionIVC24.total = totalIngresos24.total / totalVC24.total;

      totalOperacionKVC24.cuautitlan = totalKilomentros24.cuautitlan / totalVC24.cuautitlan;
      totalOperacionKVC24.tultitlan = totalKilomentros24.tultitlan / totalVC24.tultitlan;
      totalOperacionKVC24.guadalajara = totalKilomentros24.guadalajara / totalVC24.guadalajara;
      totalOperacionKVC24.hermosillo = totalKilomentros24.hermosillo / totalVC24.hermosillo;
      totalOperacionKVC24.mexicali = totalKilomentros24.mexicali / totalVC24.mexicali;
      totalOperacionKVC24.orizaba = totalKilomentros24.orizaba / totalVC24.orizaba;
      // totalOperacionKVC24.ramosArispe = totalKilomentros24.ramosArispe / totalVC24.ramosArispe;
      totalOperacionKVC24.total = totalKilomentros24.total / totalVC24.total;


    }

  }
  onCellPreparedVC2024(e){
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
  customizeVC2024(e) {  

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
//==============================INGRESOS KILOMETROS 2024===============================
onCellPreparedPM2024(e){

  if (e.rowType == 'data'){

    e.cellElement.style.fontSize = '12px';
    e.cellElement.style.background = "#DCDCDC";
  }
}  

  onRowPreparedIK2024(e){
    if (e.rowType == 'group'){

      if(e.isExpanded == true){
        this.collapseGroup == true
      }


      if (e.data.key == '01 ENE') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value =  totalAgrupamientoIKE24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKE24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKE24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKE24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKE24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKE24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKE24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKE24.total;
        }
      
      }
      if (e.data.key == '02 FEB') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKF24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKF24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKF24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKF24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKF24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKF24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKF24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKF24.total;
        }
      }
      if (e.data.key == '03 MAR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKM24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKM24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKM24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKM24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKM24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKM24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKM24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKM24.total;
        }

      }
      if (e.data.key == '04 ABR') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKA24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKA24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKA24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKA24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKA24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKA24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKA24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKA24.total;
        }


      }
      if (e.data.key == '05 MAY') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKMY24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKMY24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKMY24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKMY24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKMY24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKMY24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKMY24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKMY24.total;
        }

      }
      if (e.data.key == '06 JUN') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJN24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJN24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJN24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJN24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJN24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJN24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKJN24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJN24.total;
        }
      }
      if (e.data.key == '07 JUL') {
        if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalAgrupamientoIKJL24.cuautitlan;
        }
        if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalAgrupamientoIKJL24.tultitlan;
        }
        if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalAgrupamientoIKJL24.guadalajara;
        }
        if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalAgrupamientoIKJL24.hermosillo;
        }
        if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalAgrupamientoIKJL24.mexicali;
        }
        if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalAgrupamientoIKJL24.orizaba;
        }
        // if(e.summaryCells[10].length !== 0){
        // e.summaryCells[10][0].value = totalAgrupamientoIKJL24.ramosArispe;
        // }
        if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalAgrupamientoIKJL24.total;
        }
      }
      // if (e.data.key == '08 AGO') {
      //     if(e.summaryCells[4].length !== 0){
      //     e.summaryCells[4][0].value = totalAgrupamientoIKAG24.cuautitlan;
      //     }

      //     if(e.summaryCells[5].length !== 0){
      //     e.summaryCells[5][0].value = totalAgrupamientoIKAG24.tultitlan;
      //     }
        
      //     if(e.summaryCells[6].length !== 0){
      //     e.summaryCells[6][0].value = totalAgrupamientoIKAG24.guadalajara;
      //     }
        
      //     if(e.summaryCells[7].length !== 0){
      //     e.summaryCells[7][0].value = totalAgrupamientoIKAG24.hermosillo;
      //     }
        
      //     if(e.summaryCells[8].length !== 0){
      //     e.summaryCells[8][0].value = totalAgrupamientoIKAG24.mexicali;
      //     }
        
      //     if(e.summaryCells[9].length !== 0){
      //     e.summaryCells[9][0].value = totalAgrupamientoIKAG24.orizaba;
      //     }
        
      //     if(e.summaryCells[10].length !== 0){
      //     e.summaryCells[10][0].value = totalAgrupamientoIKAG24.ramosArispe;
      //     }
        
      //     if(e.summaryCells[11].length !== 0){
      //     e.summaryCells[11][0].value = totalAgrupamientoIKAG24.total;
      //     }
      // }
      // if (e.data.key == '09 SEP') {
      //   if(e.summaryCells[4][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.cuautitlan)){
      //       e.summaryCells[4][0].value = 0;  
      //     }else{
      //       e.summaryCells[4][0].value = totalAgrupamientoIKS24.cuautitlan;
      //     }
      //   }
      //   if(e.summaryCells[5][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.tultitlan)){
      //       e.summaryCells[5][0].value = 0;  
      //     }else{
      //       e.summaryCells[5][0].value = totalAgrupamientoIKS24.tultitlan;
      //     }
      //   }
      //   if(e.summaryCells[6][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.guadalajara)){
      //       e.summaryCells[6][0].value = 0;
      //     }else{
      //       e.summaryCells[6][0].value = totalAgrupamientoIKS24.guadalajara;
      //     }
      //   }
      //   if(e.summaryCells[7][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.hermosillo)){
      //       e.summaryCells[7][0].value = 0;
      //     }else{
      //       e.summaryCells[7][0].value = totalAgrupamientoIKS24.hermosillo;
      //     }
      //   }
      //   if(e.summaryCells[8][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.mexicali)){
      //       e.summaryCells[8][0].value = 0;
      //     }else{
      //       e.summaryCells[8][0].value = totalAgrupamientoIKS24.mexicali;
      //     }
      //   }
      //   if(e.summaryCells[9][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.orizaba)){
      //       e.summaryCells[9][0].value = 0;
      //     }else{
      //       e.summaryCells[9][0].value = totalAgrupamientoIKS24.orizaba;
      //     }
      //   }
      //   if(e.summaryCells[10][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.ramosArispe)){
      //       e.summaryCells[10][0].value = 0;
      //     }else{
      //       e.summaryCells[10][0].value = totalAgrupamientoIKS24.ramosArispe;
      //     }
      //   }
      //   if(e.summaryCells[11][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS.total)){
      //       e.summaryCells[11][0].value = 0;
      //     }else{
      //       e.summaryCells[11][0].value = totalAgrupamientoIKS24.total;
      //     }
      //   }
      // }
      // if (e.data.key == '10 OCT') {
      //   if(e.summaryCells[4][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.cuautitlan)){
      //       e.summaryCells[4][0].value = 0;
      //     }else{
      //       e.summaryCells[4][0].value = totalAgrupamientoIKS24.cuautitlan;
      //     }
      //   }
      //   if(e.summaryCells[5][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.tultitlan)){
      //       e.summaryCells[5][0].value = 0;
      //     }else{
      //       e.summaryCells[5][0].value = totalAgrupamientoIKS24.tultitlan;
      //     }
      //   }
      //   if(e.summaryCells[6][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.guadalajara)){
      //       e.summaryCells[6][0].value = 0;
      //     }else{
      //       e.summaryCells[6][0].value = totalAgrupamientoIKS24.guadalajara;
      //     }
      //   }
      //   if(e.summaryCells[7][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.hermosillo)){
      //       e.summaryCells[7][0].value = 0;
      //     }else{
      //       e.summaryCells[7][0].value = totalAgrupamientoIKS24.hermosillo;
      //     }
      //   }
      //   if(e.summaryCells[8][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.mexicali)){
      //       e.summaryCells[8][0].value = 0;
      //     }else{
      //       e.summaryCells[8][0].value = totalAgrupamientoIKS24.mexicali;
      //     }
      //   }
      //   if(e.summaryCells[9][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.orizaba)){
      //       e.summaryCells[9][0].value = 0;
      //     }{
      //       e.summaryCells[9][0].value = totalAgrupamientoIKS24.orizaba;
      //     }
      //   }
      //   if(e.summaryCells[10][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.ramosArispe)){
      //       e.summaryCells[10][0].value = 0;
      //     }else{
      //       e.summaryCells[10][0].value = totalAgrupamientoIKS24.ramosArispe;
      //     }
      //   }
      //   if(e.summaryCells[11][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKS24.total)){
      //       e.summaryCells[11][0].value = 0;
      //     }else{
      //       e.summaryCells[11][0].value = totalAgrupamientoIKS24.total;
      //     }
      //   }

      // }
      // if (e.data.key == '11 NOV') {
      //   if(e.summaryCells[4][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.cuautitlan)){
      //       e.summaryCells[4][0].value = 0;
      //     }else{
      //       e.summaryCells[4][0].value = totalAgrupamientoIKNV24.cuautitlan;
      //     }
      //   }
      //   if(e.summaryCells[5][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.tultitlan)){
      //       e.summaryCells[5][0].value = 0;
      //     }else{
      //       e.summaryCells[5][0].value = totalAgrupamientoIKNV24.tultitlan;
      //     }
      //   }
      //   if(e.summaryCells[6][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.guadalajara)){
      //       e.summaryCells[6][0].value = 0;
      //     }else{
      //       e.summaryCells[6][0].value = totalAgrupamientoIKNV24.guadalajara;
      //     }
      //   }
      //   if(e.summaryCells[7][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.hermosillo)){
      //       e.summaryCells[7][0].value = 0;
      //     }else{
      //       e.summaryCells[7][0].value = totalAgrupamientoIKNV24.hermosillo;
      //     }
      //   }
      //   if(e.summaryCells[8][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.mexicali)){
      //       e.summaryCells[8][0].value = 0;
      //     }else{
      //       e.summaryCells[8][0].value = totalAgrupamientoIKNV24.mexicali;
      //     }
      //   }
      //   if(e.summaryCells[9][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.orizaba)){
      //       e.summaryCells[9][0].value = 0;
      //     }else{
      //       e.summaryCells[9][0].value = totalAgrupamientoIKNV24.orizaba;
      //     }
      //   }
      //   if(e.summaryCells[10][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.ramosArispe)){
      //       e.summaryCells[10][0].value = 0;
      //     }else{
      //       e.summaryCells[10][0].value = totalAgrupamientoIKNV24.ramosArispe;
      //     }
      //   }
      //   if(e.summaryCells[11][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKNV24.total)){
      //       e.summaryCells[11][0].value = 0;
      //     }else{
      //       e.summaryCells[11][0].value = totalAgrupamientoIKNV24.total;
      //     }
      //   }
      // }
      // if (e.data.key == '12 DIC') {
      //   if(e.summaryCells[4][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.cuautitlan)){
      //       e.summaryCells[4][0].value = 0;
      //     }else{
      //       e.summaryCells[4][0].value = totalAgrupamientoIKDC24.cuautitlan;
      //     }
      //   }
      //   if(e.summaryCells[5][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.tultitlan)){
      //       e.summaryCells[5][0].value = 0;
      //     }else{
      //       e.summaryCells[5][0].value = totalAgrupamientoIKDC24.tultitlan;
      //     }
      //   }
      //   if(e.summaryCells[6][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.guadalajara)){
      //       e.summaryCells[6][0].value = 0;
      //     }else{
      //       e.summaryCells[6][0].value = totalAgrupamientoIKDC24.guadalajara;
      //     }
      //   }
      //   if(e.summaryCells[7][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.hermosillo)){
      //       e.summaryCells[7][0].value = 0;
      //     }else{
      //       e.summaryCells[7][0].value = totalAgrupamientoIKDC24.hermosillo;
      //     }
      //   }
      //   if(e.summaryCells[8][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.mexicali)){
      //       e.summaryCells[8][0].value = 0;
      //     }else{
      //       e.summaryCells[8][0].value = totalAgrupamientoIKDC24.mexicali;
      //     }
      //   }
      //   if(e.summaryCells[9][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.orizaba)){
      //       e.summaryCells[9][0].value = 0;
      //     }else{
      //       e.summaryCells[9][0].value = totalAgrupamientoIKDC24.orizaba;
      //     }
      //   }
      //   if(e.summaryCells[10][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.ramosArispe)){
      //       e.summaryCells[10][0].value = 0;
      //     }else{
      //       e.summaryCells[10][0].value = totalAgrupamientoIKDC24.ramosArispe;
      //   }
      //   }
      //   if(e.summaryCells[11][0].length !== 0){
      //     if(Number.isNaN(totalAgrupamientoIKDC24.total)){
      //       e.summaryCells[11][0].value = 0;
      //     }else{
      //       e.summaryCells[11][0].value = totalAgrupamientoIKDC24.total;
      //     }
      //   }

      // }
     
    }

    this.paginacion = 60;
    if(this.paginacion = 60){
      this.expandGroup = false
    }
  }
  onCellPreparedIK2024(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";

    }

    if (e.rowType == 'totalFooter') {
   
      e.totalItem.cells.forEach((c: any) => {
        if(c.totalItem.summaryCells[4][0]?.value != undefined){
          c.totalItem.summaryCells[4][0].value = totalOperacionIK24.cuautitlan;
        }
        if(c.totalItem.summaryCells[5][0]?.value != undefined){
          c.totalItem.summaryCells[5][0].value = totalOperacionIK24.tultitlan;
        }
        if(c.totalItem.summaryCells[6][0]?.value != undefined){
          c.totalItem.summaryCells[6][0].value = totalOperacionIK24.guadalajara;
        }
        if(c.totalItem.summaryCells[7][0]?.value != undefined){
          c.totalItem.summaryCells[7][0].value = totalOperacionIK24.hermosillo;          
        }
        if(c.totalItem.summaryCells[8][0]?.value != undefined){
          c.totalItem.summaryCells[8][0].value = totalOperacionIK24.mexicali;
        }
        if(c.totalItem.summaryCells[9][0]?.value != undefined){
          c.totalItem.summaryCells[9][0].value = totalOperacionIK24.orizaba;
        }
        // if(c.totalItem.summaryCells[10][0]?.value != undefined){
        //   c.totalItem.summaryCells[10][0].value = totalOperacionIK24.ramosArispe;
        // }
        if(c.totalItem.summaryCells[10][0]?.value != undefined){
          c.totalItem.summaryCells[10][0].value = totalOperacionIK24.total;
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
//==============================VIAJES KILOMETROS 2024=================================
onRowPreparedKV2024(e){

  if (e.rowType == 'group'){

    if(e.isExpanded == true){
      this.collapseGroup == true
    }


    if (e.data.key == '01 ENE') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCE24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCE24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCE24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCE24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCE24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCE24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCE24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCE24.total;
      }
      
    }

    if (e.data.key == '02 FEB') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCF24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCF24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCF24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCF24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCF24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCF24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCF24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCF24.total;
      }
    }
    if (e.data.key == '03 MAR') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCM24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCM24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCM24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCM24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCM24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCM24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCM24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCM24.total;
      }
    }
    if (e.data.key == '04 ABR') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCA24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCA24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCA24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCA24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCA24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCA24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCA24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCA24.total;
      }
    }
    if (e.data.key == '05 MAY') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCMY24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCMY24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCMY24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCMY24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCMY24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCMY24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCMY24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCMY24.total;
      }
    }
    if (e.data.key == '06 JUN') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCJN24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCJN24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCJN24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCJN24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCJN24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCJN24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCJN24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCJN24.total;
      }
    }
    if (e.data.key == '07 JUL') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalKVCJL24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalKVCJL24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalKVCJL24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalKVCJL24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalKVCJL24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalKVCJL24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalKVCJL24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalKVCJL24.total;
      }
    }
    // if (e.data.key == '08 AGO') {
    //     if(e.summaryCells[4].length !== 0){
    //     e.summaryCells[4][0].value = totalKVCAG24.cuautitlan;
    //     }
    //     if(e.summaryCells[5].length !== 0){
    //     e.summaryCells[5][0].value = totalKVCAG24.tultitlan; 
    //     }         
    //     if(e.summaryCells[6].length !== 0){
    //     e.summaryCells[6][0].value = totalKVCAG24.guadalajara;    
    //     }      
    //     if(e.summaryCells[7].length !== 0){
    //     e.summaryCells[7][0].value = totalKVCAG24.hermosillo;
    //     }
    //     if(e.summaryCells[8].length !== 0){
    //     e.summaryCells[8][0].value = totalKVCAG24.mexicali;
    //     }
    //     if(e.summaryCells[9].length !== 0){
    //     e.summaryCells[9][0].value = totalKVCAG24.orizaba;   
    //     }       
    //     if(e.summaryCells[10].length !== 0){
    //     e.summaryCells[10][0].value = totalKVCAG24.ramosArispe; 
    //     }         
    //     if(e.summaryCells[11].length !== 0){
    //     e.summaryCells[11][0].value = totalKVCAG24.total;   
    //     }       
    // }
    // if (e.data.key == '09 SEP') {
    //   if(e.summaryCells[4][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.cuautitlan)){
    //       e.summaryCells[4][0].value = 0;
    //     }else{
    //       e.summaryCells[4][0].value = totalKVCS24.cuautitlan;
    //     }
    //   }
    //   if(e.summaryCells[5][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.tultitlan)){
    //       e.summaryCells[5][0].value = 0;
    //     }else{
    //       e.summaryCells[5][0].value = totalKVCS24.tultitlan;
    //     }
    //   }
    //   if(e.summaryCells[6][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.guadalajara)){
    //       e.summaryCells[6][0].value = 0;
    //     }else{
    //       e.summaryCells[6][0].value = totalKVCS24.guadalajara;
    //     }
    //   }
    //   if(e.summaryCells[7][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.hermosillo)){
    //       e.summaryCells[7][0].value = 0;  
    //     }else{
    //       e.summaryCells[7][0].value = totalKVCS24.hermosillo;
    //     }
    //   }
    //   if(e.summaryCells[8][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.mexicali)){
    //       e.summaryCells[8][0].value = 0;
    //     }else{
    //       e.summaryCells[8][0].value = totalKVCS24.mexicali;
    //     }
    //   }
    //   if(e.summaryCells[9][0].value.length !== 0){
    //     if(Number.isNaN(totalKVCS24.orizaba)){
    //       e.summaryCells[9][0].value = 0;
    //     }else{
    //       e.summaryCells[9][0].value = totalKVCS24.orizaba;
    //     }
    //   }
    //   if(e.summaryCells[10][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.ramosArispe)){
    //       e.summaryCells[10][0].value = 0;  
    //     }else{
    //       e.summaryCells[10][0].value = totalKVCS24.ramosArispe;
    //     }
    //   }
    //   if(e.summaryCells[11][0].length !== 0){
    //     if(Number.isNaN(totalKVCS24.total)){
    //       e.summaryCells[11][0].value = 0;
    //     }else{
    //       e.summaryCells[11][0].value = totalKVCS24.total;
    //     }
    //   }
    // }
    // if (e.data.key == '10 OCT') {
    //   if(e.summaryCells[4][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.cuautitlan)){
    //       e.summaryCells[4][0].value = 0;
    //     }else{
    //       e.summaryCells[4][0].value = totalKVCOC24.cuautitlan;
    //     }
    //   }
    //   if(e.summaryCells[5][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.tultitlan)){
    //       e.summaryCells[5][0].value = 0;
    //     }else{
    //       e.summaryCells[5][0].value = totalKVCOC24.tultitlan;
    //     }
    //   }
    //   if(e.summaryCells[6][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.guadalajara)){
    //       e.summaryCells[6][0].value = 0;
    //     }else{
    //       e.summaryCells[6][0].value = totalKVCOC24.guadalajara;
    //     }
    //   }
    //   if(e.summaryCells[7][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.hermosillo)){
    //       e.summaryCells[7][0].value = 0;
    //     }else{
    //       e.summaryCells[7][0].value = totalKVCOC24.hermosillo;
    //     }
    //   }
    //   if(e.summaryCells[8][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.mexicali)){
    //       e.summaryCells[8][0].value = 0;
    //     }else{
    //       e.summaryCells[8][0].value = totalKVCOC24.mexicali;
    //     }
    //   }
    //   if(e.summaryCells[9][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.orizaba)){
    //       e.summaryCells[9][0].value = 0;
    //     }else{
    //       e.summaryCells[9][0].value = totalKVCOC24.orizaba;
    //     }
    //   }
    //   if(e.summaryCells[10][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.ramosArispe)){
    //       e.summaryCells[10][0].value = 0;
    //     }else{
    //       e.summaryCells[10][0].value = totalKVCOC24.ramosArispe;
    //     }
    //   }
    //   if(e.summaryCells[11][0].length !== 0){
    //     if(Number.isNaN(totalKVCOC24.total)){
    //       e.summaryCells[11][0].value = 0;
    //     }else{
    //       e.summaryCells[11][0].value = totalKVCOC24.total;
    //     }
    //   }

    // }
    // if (e.data.key == '11 NOV') {
    //   if(e.summaryCells[4][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.cuautitlan)){
    //       e.summaryCells[4][0].value = 0;
    //     }else{
    //       e.summaryCells[4][0].value = totalKVCNV24.cuautitlan;
    //     }
    //   }
    //   if(e.summaryCells[5][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.tultitlan)){
    //       e.summaryCells[5][0].value = 0;
    //     }else{
    //       e.summaryCells[5][0].value = totalKVCNV24.tultitlan;
    //     }
    //   }
    //   if(e.summaryCells[6][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.guadalajara)){
    //       e.summaryCells[6][0].value = 0;
    //     }else{
    //       e.summaryCells[6][0].value = totalKVCNV24.guadalajara;
    //     }
    //   }
    //   if(e.summaryCells[7][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.hermosillo)){
    //       e.summaryCells[7][0].value = 0;
    //     }else{
    //       e.summaryCells[7][0].value = totalKVCNV24.hermosillo;
    //     }
    //   }
    //   if(e.summaryCells[8][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.mexicali)){
    //       e.summaryCells[8][0].value = 0;
    //     }else{
    //       e.summaryCells[8][0].value = totalKVCNV24.mexicali;
    //     }
    //   }
    //   if(e.summaryCells[9][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.orizaba)){
    //       e.summaryCells[9][0].value = 0;
    //     }else{
    //       e.summaryCells[9][0].value = totalKVCNV24.orizaba;
    //     }
    //   }
    //   if(e.summaryCells[10][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.ramosArispe)){
    //       e.summaryCells[10][0].value = 0;
    //     }else{
    //       e.summaryCells[10][0].value = totalKVCNV24.ramosArispe;
    //     }
    //   }
    //   if(e.summaryCells[11][0].length !== 0){
    //     if(Number.isNaN(totalKVCNV24.total)){
    //       e.summaryCells[11][0].value = 0;
    //     }else{
    //       e.summaryCells[11][0].value = totalKVCNV24.total;
    //     }
    //   }

    // }
    // if (e.data.key == '12 DIC') {
    //   if(e.summaryCells[4][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.cuautitlan)){
    //       e.summaryCells[4][0].value = 0;
    //     }else{
    //       e.summaryCells[4][0].value = totalIVCDC24.cuautitlan;
    //     }
    //   }
    //   if(e.summaryCells[5][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.tultitlan)){
    //       e.summaryCells[5][0].value = 0;
    //     }else{
    //       e.summaryCells[5][0].value = totalIVCDC24.tultitlan;
    //     }
    //   }
    //   if(e.summaryCells[6][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.guadalajara)){
    //       e.summaryCells[6][0].value = 0;
    //     }else{
    //       e.summaryCells[6][0].value = totalIVCDC24.guadalajara;
    //     }
    //   }
    //   if(e.summaryCells[7][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.hermosillo)){
    //       e.summaryCells[7][0].value = 0;
    //     }else{
    //       e.summaryCells[7][0].value = totalIVCDC24.hermosillo;
    //     }
    //   }
    //   if(e.summaryCells[8][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.mexicali)){
    //       e.summaryCells[8][0].value = 0;
    //     }else{
    //       e.summaryCells[8][0].value = totalIVCDC24.mexicali;
    //     }
    //     }
    //   if(e.summaryCells[9][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.orizaba)){
    //       e.summaryCells[9][0].value = 0;
    //     }else{
    //       e.summaryCells[9][0].value = totalIVCDC24.orizaba;
    //     }
    //   }
    //   if(e.summaryCells[10][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.ramosArispe)){
    //       e.summaryCells[10][0].value = 0;
    //     }else{
    //       e.summaryCells[10][0].value = totalIVCDC24.ramosArispe;
    //     }
    //   }
    //   if(e.summaryCells[11][0].length !== 0){
    //     if(Number.isNaN(totalIVCDC24.total)){
    //       e.summaryCells[11][0].value = 0;
    //     }else{
    //       e.summaryCells[11][0].value = totalIVCDC24.total;
    //     }
    //   }

    // }

  }

  this.paginacionKV = 60;
  if(this.paginacionKV = 60){
    this.expandGroupKV = false
  }
}

onCellPreparedKV2024(e){
  if (e.rowType == 'group'){

    e.cellElement.style.fontSize = '12px';
    e.cellElement.style.background = "#DCDCDC";

  }

  if (e.rowType == 'totalFooter') {
 
    e.totalItem.cells.forEach((c: any) => {

      if(c.totalItem.summaryCells[4][0]?.value != undefined){
        c.totalItem.summaryCells[4][0].value = totalOperacionKVC24.cuautitlan;
      }

      if(c.totalItem.summaryCells[5][0]?.value != undefined){
        c.totalItem.summaryCells[5][0].value = totalOperacionKVC24.tultitlan;
      }

      if(c.totalItem.summaryCells[6][0]?.value != undefined){
        c.totalItem.summaryCells[6][0].value = totalOperacionKVC24.guadalajara;
      }

      if(c.totalItem.summaryCells[7][0]?.value != undefined){
        c.totalItem.summaryCells[7][0].value = totalOperacionKVC24.hermosillo;          
      }

      if(c.totalItem.summaryCells[8][0]?.value != undefined){
        c.totalItem.summaryCells[8][0].value = totalOperacionKVC24.mexicali;
      }

      if(c.totalItem.summaryCells[9][0]?.value != undefined){
        c.totalItem.summaryCells[9][0].value = totalOperacionKVC24.orizaba;
      }
      // if(c.totalItem.summaryCells[10][0]?.value != undefined){
      //   c.totalItem.summaryCells[10][0].value = totalOperacionKVC24.ramosArispe;
      // }

      if(c.totalItem.summaryCells[10][0]?.value != undefined){
        c.totalItem.summaryCells[10][0].value = totalOperacionKVC24.total;
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
customizeKV2024(e) {  

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

customizeExportDataKV2024(cols, rows){

  rows.forEach((row: any) =>{  
    
    var rowValues =  row.values;  
    

    if(row.rowType == "group"){
      if(row.key[0] == '01 ENE'){

        rowValues[3][0].value = totalKVCE24.cuautitlan;
        rowValues[4][0].value = totalKVCE24.tultitlan;
        rowValues[5][0].value = totalKVCE24.guadalajara;
        rowValues[6][0].value = totalKVCE24.hermosillo;
        rowValues[7][0].value = totalKVCE24.mexicali;
        rowValues[8][0].value = totalKVCE24.orizaba;
        // rowValues[9][0].value = totalKVCE.ramosArispe;
        rowValues[9][0].value = totalKVCE24.total;
      }

      if(row.key[0] == '02 FEB'){

        rowValues[3][0].value = totalKVCF24.cuautitlan;
        rowValues[4][0].value = totalKVCF24.tultitlan;
        rowValues[5][0].value = totalKVCF24.guadalajara;
        rowValues[6][0].value = totalKVCF24.hermosillo;
        rowValues[7][0].value = totalKVCF24.mexicali;
        rowValues[8][0].value = totalKVCF24.orizaba;
        // rowValues[9][0].value = totalKVCF.ramosArispe;
        rowValues[9][0].value = totalKVCF24.total;
      }

      if(row.key[0] == '03 MAR'){

        rowValues[3][0].value = totalKVCM24.cuautitlan;
        rowValues[4][0].value = totalKVCM24.tultitlan;
        rowValues[5][0].value = totalKVCM24.guadalajara;
        rowValues[6][0].value = totalKVCM24.hermosillo;
        rowValues[7][0].value = totalKVCM24.mexicali;
        rowValues[8][0].value = totalKVCM24.orizaba;
        // rowValues[9][0].value = totalKVCM.ramosArispe;
        rowValues[9][0].value = totalKVCM24.total;
      }

      if(row.key[0] == '04 ABR'){

        rowValues[3][0].value = totalKVCA24.cuautitlan;
        rowValues[4][0].value = totalKVCA24.tultitlan;
        rowValues[5][0].value = totalKVCA24.guadalajara;
        rowValues[6][0].value = totalKVCA24.hermosillo;
        rowValues[7][0].value = totalKVCA24.mexicali;
        rowValues[8][0].value = totalKVCA24.orizaba;
        // rowValues[9][0].value = totalKVCA.ramosArispe;
        rowValues[9][0].value = totalKVCA24.total;
      }

      if(row.key[0] == '05 MAY'){

        rowValues[3][0].value = totalKVCMY24.cuautitlan;
        rowValues[4][0].value = totalKVCMY24.tultitlan;
        rowValues[5][0].value = totalKVCMY24.guadalajara;
        rowValues[6][0].value = totalKVCMY24.hermosillo;
        rowValues[7][0].value = totalKVCMY24.mexicali;
        rowValues[8][0].value = totalKVCMY24.orizaba;
        // rowValues[9][0].value = totalKVCMY.ramosArispe;
        rowValues[9][0].value = totalKVCMY24.total;
      }

      if(row.key[0] == '06 JUN'){

        rowValues[3][0].value = totalKVCJN24.cuautitlan;
        rowValues[4][0].value = totalKVCJN24.tultitlan;
        rowValues[5][0].value = totalKVCJN24.guadalajara;
        rowValues[6][0].value = totalKVCJN24.hermosillo;
        rowValues[7][0].value = totalKVCJN24.mexicali;
        rowValues[8][0].value = totalKVCJN24.orizaba;
        // rowValues[9][0].value = totalKVCJN24.ramosArispe;
        rowValues[9][0].value = totalKVCJN24.total;
      }

      if(row.key[0] == '07 JUL'){

        rowValues[3][0].value = totalKVCJL.cuautitlan;
        rowValues[4][0].value = totalKVCJL.tultitlan;
        rowValues[5][0].value = totalKVCJL.guadalajara;
        rowValues[6][0].value = totalKVCJL.hermosillo;
        rowValues[7][0].value = totalKVCJL.mexicali;
        rowValues[8][0].value = totalKVCJL.orizaba;
        // rowValues[9][0].value = totalKVCJL.ramosArispe;
        rowValues[9][0].value = totalKVCJL.total;

      }

      // if(row.key[0] == '08 AGO'){

      //   rowValues[3][0].value = totalKVCAG.cuautitlan;
      //   rowValues[4][0].value = totalKVCAG.tultitlan;
      //   rowValues[5][0].value = totalKVCAG.guadalajara;
      //   rowValues[6][0].value = totalKVCAG.hermosillo;
      //   rowValues[7][0].value = totalKVCAG.mexicali;
      //   rowValues[8][0].value = totalKVCAG.orizaba;
      //   rowValues[9][0].value = totalKVCAG.ramosArispe;
      //   rowValues[10][0].value = totalKVCAG.total;

      // }

      // if(row.key[0] == '09 SEP'){

      //   rowValues[3][0].value = totalKVCS.cuautitlan;
      //   rowValues[4][0].value = totalKVCS.tultitlan;
      //   rowValues[5][0].value = totalKVCS.guadalajara;
      //   rowValues[6][0].value = totalKVCS.hermosillo;
      //   rowValues[7][0].value = totalKVCS.mexicali;
      //   rowValues[8][0].value = totalKVCS.orizaba;
      //   rowValues[9][0].value = totalKVCS.ramosArispe;
      //   rowValues[10][0].value = totalKVCS.total;

      // }

      // if(row.key[0] == '10 OCT'){

      //   rowValues[3][0].value = totalKVCOC.cuautitlan;
      //   rowValues[4][0].value = totalKVCOC.tultitlan;
      //   rowValues[5][0].value = totalKVCOC.guadalajara;
      //   rowValues[6][0].value = totalKVCOC.hermosillo;
      //   rowValues[7][0].value = totalKVCOC.mexicali;
      //   rowValues[8][0].value = totalKVCOC.orizaba;
      //   rowValues[9][0].value = totalKVCOC.ramosArispe;
      //   rowValues[10][0].value = totalKVCOC.total;

      // }

      // if(row.key[0] == '11 NOV'){

      //   rowValues[3][0].value = totalKVCNV.cuautitlan;
      //   rowValues[4][0].value = totalKVCNV.tultitlan;
      //   rowValues[5][0].value = totalKVCNV.guadalajara;
      //   rowValues[6][0].value = totalKVCNV.hermosillo;
      //   rowValues[7][0].value = totalKVCNV.mexicali;
      //   rowValues[8][0].value = totalKVCNV.orizaba;
      //   rowValues[9][0].value = totalKVCNV.ramosArispe;
      //   rowValues[10][0].value = totalKVCNV.total;

      // }
      // if(row.key[0] == '12 NOV'){

      //   rowValues[3][0].value = totalKVCDC.cuautitlan;
      //   rowValues[4][0].value = totalKVCDC.tultitlan;
      //   rowValues[5][0].value = totalKVCDC.guadalajara;
      //   rowValues[6][0].value = totalKVCDC.hermosillo;
      //   rowValues[7][0].value = totalKVCDC.mexicali;
      //   rowValues[8][0].value = totalKVCDC.orizaba;
      //   rowValues[9][0].value = totalKVCDC.ramosArispe;
      //   rowValues[10][0].value = totalKVCDC.total;

      // }
    }

    if(row.rowType == "totalFooter"){
      

      row.values[3].value = totalOperacionKVC.cuautitlan;
      row.values[4].value = totalOperacionKVC.tultitlan;
      row.values[5].value = totalOperacionKVC.guadalajara;
      row.values[6].value = totalOperacionKVC.hermosillo;
      row.values[7].value = totalOperacionKVC.mexicali;
      row.values[8].value = totalOperacionKVC.orizaba;
      // row.values[9].value = totalOperacionKVC.ramosArispe;
      row.values[9].value = totalOperacionKVC.total;


    }

  });

}
//==============================INGRESO VIAJES 2024=================================
onRowPreparedIV2024(e){
  if (e.rowType == 'group'){

    if(e.isExpanded == true){
      this.collapseGroup == true
    }


    if (e.data.key == '01 ENE') {
      if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCE24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCE24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCE24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCE24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCE24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCE24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      //   e.summaryCells[10][0].value = totalIVCE24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCE24.total;
      }

    }

    if (e.data.key == '02 FEB') {
      if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCF24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCF24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCF24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCF24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCF24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCF24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      //   e.summaryCells[10][0].value = totalIVCF24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCF24.total;
      }
    }
    if (e.data.key == '03 MAR') {
      if(e.summaryCells[4].length !== 0){
        e.summaryCells[4][0].value = totalIVCM24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
        e.summaryCells[5][0].value = totalIVCM24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
        e.summaryCells[6][0].value = totalIVCM24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
        e.summaryCells[7][0].value = totalIVCM24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
        e.summaryCells[8][0].value = totalIVCM24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
        e.summaryCells[9][0].value = totalIVCM24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      //   e.summaryCells[10][0].value = totalIVCM24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
        e.summaryCells[10][0].value = totalIVCM24.total;
      }
    }
    if (e.data.key == '04 ABR') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalIVCA24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalIVCA24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalIVCA24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalIVCA24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalIVCA24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalIVCA24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalIVCA24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalIVCA24.total;
      }
    }
    if (e.data.key == '05 MAY') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalIVCMY24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalIVCMY24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalIVCMY24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalIVCMY24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalIVCMY24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalIVCMY24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalIVCMY24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalIVCMY24.total;
      }
    }
    if (e.data.key == '06 JUN') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalIVCJN24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalIVCJN24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalIVCJN24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalIVCJN24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalIVCJN24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalIVCJN24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalIVCJN24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalIVCJN24.total;
      }
    }
    if (e.data.key == '07 JUL') {
      if(e.summaryCells[4].length !== 0){
      e.summaryCells[4][0].value = totalIVCJL24.cuautitlan;
      }
      if(e.summaryCells[5].length !== 0){
      e.summaryCells[5][0].value = totalIVCJL24.tultitlan;
      }
      if(e.summaryCells[6].length !== 0){
      e.summaryCells[6][0].value = totalIVCJL24.guadalajara;
      }
      if(e.summaryCells[7].length !== 0){
      e.summaryCells[7][0].value = totalIVCJL24.hermosillo;
      }
      if(e.summaryCells[8].length !== 0){
      e.summaryCells[8][0].value = totalIVCJL24.mexicali;
      }
      if(e.summaryCells[9].length !== 0){
      e.summaryCells[9][0].value = totalIVCJL24.orizaba;
      }
      // if(e.summaryCells[10].length !== 0){
      // e.summaryCells[10][0].value = totalIVCJL24.ramosArispe;
      // }
      if(e.summaryCells[10].length !== 0){
      e.summaryCells[10][0].value = totalIVCJL24.total;
      }


    }
  //   if (e.data.key == '08 AGO') {
  //       if(e.summaryCells[4].length !== 0){
  //       e.summaryCells[4][0].value = totalIVCAG24.cuautitlan;
  //       }
  //       if(e.summaryCells[5].length !== 0){
  //       e.summaryCells[5][0].value = totalIVCAG24.tultitlan;
  //       }          
  //       if(e.summaryCells[6].length !== 0){
  //       e.summaryCells[6][0].value = totalIVCAG24.guadalajara;  
  //       }        
  //       if(e.summaryCells[7].length !== 0){
  //       e.summaryCells[7][0].value = totalIVCAG24.hermosillo;
  //       }
  //       if(e.summaryCells[8].length !== 0){
  //       e.summaryCells[8][0].value = totalIVCAG24.mexicali;
  //       }
  //       if(e.summaryCells[9].length !== 0){
  //       e.summaryCells[9][0].value = totalIVCAG24.orizaba;
  //       }          
  //       if(e.summaryCells[10].length !== 0){
  //       e.summaryCells[10][0].value = totalIVCAG24.ramosArispe;     
  //       }     
  //       if(e.summaryCells[11].length !== 0){
  //       e.summaryCells[11][0].value = totalIVCAG24.total;   
  //       }       
      
  //   }
  //   if (e.data.key == '09 SEP') {
  //     if(e.summaryCells[4][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.cuautitlan)){
  //         e.summaryCells[4][0].value = 0;
  //       }else{
  //         e.summaryCells[4][0].value = totalIVCS24.cuautitlan;
  //       }
  //     }
  //     if(e.summaryCells[5][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.tultitlan)){
  //         e.summaryCells[5][0].value = 0;  
  //       }else{
  //         e.summaryCells[5][0].value = totalIVCS24.tultitlan;
  //       }
  //     }
  //     if(e.summaryCells[6][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.guadalajara)){
  //         e.summaryCells[6][0].value = 0;
  //       }else{
  //         e.summaryCells[6][0].value = totalIVCS24.guadalajara;
  //       }
  //     }
  //     if(e.summaryCells[7][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.hermosillo)){
  //         e.summaryCells[7][0].value = 0;
  //       }else{
  //         e.summaryCells[7][0].value = totalIVCS24.hermosillo;
  //       }
  //     }
  //     if(e.summaryCells[8][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.mexicali)){
  //         e.summaryCells[8][0].value = 0;  
  //       }else{
  //         e.summaryCells[8][0].value = totalIVCS24.mexicali;
  //       }
  //     }
  //     if(e.summaryCells[9][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.orizaba)){
  //         e.summaryCells[9][0].value = 0;
  //       }else{
  //         e.summaryCells[9][0].value = totalIVCS24.orizaba;
  //       }
  //     }
  //     if(e.summaryCells[10][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.ramosArispe)){
  //         e.summaryCells[10][0].value = 0;
  //       }else{
  //         e.summaryCells[10][0].value = totalIVCS24.ramosArispe;
  //       }
  //     }
  //     if(e.summaryCells[11][0].length !== 0){
  //       if(Number.isNaN(totalIVCS24.total)){
  //         e.summaryCells[11][0].value = 0;  
  //       }else{
  //         e.summaryCells[11][0].value = totalIVCS24.total;
  //       }
  //     }
  //   }
  //   if (e.data.key == '10 OCT') {
  //     if(e.summaryCells[4][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.cuautitlan)){
  //         e.summaryCells[4][0].value = 0;
  //       }else{
  //         e.summaryCells[4][0].value = totalIVCOC24.cuautitlan;
  //       }
  //     }
  //     if(e.summaryCells[5][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.tultitlan)){
  //         e.summaryCells[5][0].value = 0;
  //       }else{
  //         e.summaryCells[5][0].value = totalIVCOC24.tultitlan;
  //       }
  //     }
  //     if(e.summaryCells[6][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.guadalajara)){
  //         e.summaryCells[6][0].value = 0;
  //       }else{
  //         e.summaryCells[6][0].value = totalIVCOC24.guadalajara;
  //       }
  //     }
  //     if(e.summaryCells[7][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.hermosillo)){
  //         e.summaryCells[7][0].value = 0;
  //       } else{
  //         e.summaryCells[7][0].value = totalIVCOC24.hermosillo;
  //       }
  //     }
  //     if(e.summaryCells[8][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.mexicali)){
  //         e.summaryCells[8][0].value = 0;
  //       }else{
  //         e.summaryCells[8][0].value = totalIVCOC24.mexicali;
  //       }
  //     }
  //     if(e.summaryCells[9][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.orizaba)){
  //         e.summaryCells[9][0].value = 0;
  //       }else{
  //         e.summaryCells[9][0].value = totalIVCOC24.orizaba;
  //       }
  //     }
  //     if(e.summaryCells[10][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.ramosArispe)){
  //         e.summaryCells[10][0].value = 0;
  //       }else{
  //         e.summaryCells[10][0].value = totalIVCOC24.ramosArispe;
  //       }
  //     }
  //     if(e.summaryCells[11][0].length !== 0){
  //       if(Number.isNaN(totalIVCOC24.total)){
  //         e.summaryCells[11][0].value = 0;
  //       }else{
  //         e.summaryCells[11][0].value = totalIVCOC24.total;
  //       }
  //     }
  //   }
  //   if (e.data.key == '11 NOV') {
  //     if(e.summaryCells[4][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.cuautitlan)){
  //         e.summaryCells[4][0].value = 0;
  //       }else{
  //         e.summaryCells[4][0].value = totalIVCNV24.cuautitlan;
  //       }
  //     }
  //     if(e.summaryCells[5][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.tultitlan)){
  //         e.summaryCells[5][0].value = 0;
  //       }else{
  //         e.summaryCells[5][0].value = totalIVCNV24.tultitlan;
  //       }
  //     }
  //     if(e.summaryCells[6][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.guadalajara)){
  //         e.summaryCells[6][0].value = 0;
  //       }else{
  //         e.summaryCells[6][0].value = totalIVCNV24.guadalajara;
  //       }
  //     }
  //     if(e.summaryCells[7][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.hermosillo)){
  //         e.summaryCells[7][0].value = 0;
  //       } else{
  //         e.summaryCells[7][0].value = totalIVCNV24.hermosillo;
  //       }
  //     }
  //     if(e.summaryCells[8][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.mexicali)){
  //         e.summaryCells[8][0].value = 0;
  //       }else{
  //         e.summaryCells[8][0].value = totalIVCNV24.mexicali;
  //       }
  //     }
  //     if(e.summaryCells[9][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.orizaba)){
  //         e.summaryCells[9][0].value = 0;
  //       }else{
  //         e.summaryCells[9][0].value = totalIVCNV24.orizaba;
  //       }
  //     }
  //     if(e.summaryCells[10][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.ramosArispe)){
  //         e.summaryCells[10][0].value = 0;
  //       }else{
  //         e.summaryCells[10][0].value = totalIVCNV24.ramosArispe;
  //       }
  //     }
  //     if(e.summaryCells[11][0].length !== 0){
  //       if(Number.isNaN(totalIVCNV24.total)){
  //         e.summaryCells[11][0].value = 0;
  //       }else{
  //         e.summaryCells[11][0].value = totalIVCNV24.total;
  //       }
  //     }
  //   }
  //   if (e.data.key == '12 DIC') {
  //     if(e.summaryCells[4][0].length !== 0){
  //       if(Number.isNaN(totalIVCDC24.cuautitlan)){
  //         e.summaryCells[4][0].value = 0;
  //       }else{
  //         e.summaryCells[4][0].value = totalIVCDC24.cuautitlan;
  //       }
  //     }
  //   if(e.summaryCells[5][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.tultitlan)){
  //       e.summaryCells[5][0].value = 0;
  //     }else{
  //       e.summaryCells[5][0].value = totalIVCDC24.tultitlan;
  //     }
  //   }
  //   if(e.summaryCells[6][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.guadalajara)){
  //       e.summaryCells[6][0].value = 0;
  //     }else{
  //       e.summaryCells[6][0].value = totalIVCDC24.guadalajara;
  //     }
  //   }
  //   if(e.summaryCells[7][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.hermosillo)){
  //       e.summaryCells[7][0].value = 0;
  //     }else{
  //       e.summaryCells[7][0].value = totalIVCDC24.hermosillo;
  //     }
  //   }
  //   if(e.summaryCells[8][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.mexicali)){
  //       e.summaryCells[8][0].value = 0;
  //     }else{
  //       e.summaryCells[8][0].value = totalIVCDC24.mexicali;
  //     }
  //   }
  //   if(e.summaryCells[9][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.orizaba)){
  //       e.summaryCells[9][0].value = 0;
  //     }else{
  //       e.summaryCells[9][0].value = totalIVCDC24.orizaba;
  //     }
  //   }
  //   if(e.summaryCells[10][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.ramosArispe)){
  //       e.summaryCells[10][0].value = 0;
  //     }else{
  //       e.summaryCells[10][0].value = totalIVCDC24.ramosArispe;
  //     }
  //   }
  //   if(e.summaryCells[11][0].length !== 0){
  //     if(Number.isNaN(totalIVCDC24.total)){
  //       e.summaryCells[11][0].value = 0;
  //     }else{
  //       e.summaryCells[11][0].value = totalIVCDC24.total;
  //   }
  // }



  //   }    
   
  }

  this.paginacion = 60;
  if(this.paginacion = 60){
    this.expandGroup = false
  }
}

onCellPreparedIV2024(e){
  if (e.rowType == 'group'){

    e.cellElement.style.fontSize = '12px';
    e.cellElement.style.background = "#DCDCDC";

  }

  if (e.rowType == 'totalFooter') {
 
    e.totalItem.cells.forEach((c: any) => {
      if(c.totalItem.summaryCells[4][0]?.value != undefined){
        c.totalItem.summaryCells[4][0].value = totalOperacionIVC24.cuautitlan;
      }

      if(c.totalItem.summaryCells[5][0]?.value != undefined){
        c.totalItem.summaryCells[5][0].value = totalOperacionIVC24.tultitlan;
      }

      if(c.totalItem.summaryCells[6][0]?.value != undefined){
        c.totalItem.summaryCells[6][0].value = totalOperacionIVC24.guadalajara;
      }

      if(c.totalItem.summaryCells[7][0]?.value != undefined){
        c.totalItem.summaryCells[7][0].value = totalOperacionIVC24.hermosillo;          
      }

      if(c.totalItem.summaryCells[8][0]?.value != undefined){
        c.totalItem.summaryCells[8][0].value = totalOperacionIVC24.mexicali;
      }

      if(c.totalItem.summaryCells[9][0]?.value != undefined){
        c.totalItem.summaryCells[9][0].value = totalOperacionIVC24.orizaba;
      }
      // if(c.totalItem.summaryCells[10][0]?.value != undefined){
      //   c.totalItem.summaryCells[10][0].value = totalOperacionIVC24.ramosArispe;
      // }

      if(c.totalItem.summaryCells[10][0]?.value != undefined){
        c.totalItem.summaryCells[10][0].value = totalOperacionIVC24.total;
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

customizeIV2024(e){
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

customizeExportDataIV2024(cols, rows){

  rows.forEach((row: any) =>{  
  var rowValues =  row.values;  

  if(row.rowType == "group"){
    if(row.key[0] == '01 ENE'){

      rowValues[3][0].value = totalIVCE24.cuautitlan;
      rowValues[4][0].value = totalIVCE24.tultitlan;
      rowValues[5][0].value = totalIVCE24.guadalajara;
      rowValues[6][0].value = totalIVCE24.hermosillo;
      rowValues[7][0].value = totalIVCE24.mexicali;
      rowValues[8][0].value = totalIVCE24.orizaba;
      // rowValues[9][0].value = totalIVCE.ramosArispe;
      rowValues[9][0].value = totalIVCE24.total;
    }

    if(row.key[0] == '02 FEB'){

      rowValues[3][0].value = totalIVCF24.cuautitlan;
      rowValues[4][0].value = totalIVCF24.tultitlan;
      rowValues[5][0].value = totalIVCF24.guadalajara;
      rowValues[6][0].value = totalIVCF24.hermosillo;
      rowValues[7][0].value = totalIVCF24.mexicali;
      rowValues[8][0].value = totalIVCF24.orizaba;
      // rowValues[9][0].value = totalIVCF.ramosArispe;
      rowValues[9][0].value = totalIVCF24.total;
    }

    if(row.key[0] == '03 MAR'){

      rowValues[3][0].value = totalIVCM24.cuautitlan;
      rowValues[4][0].value = totalIVCM24.tultitlan;
      rowValues[5][0].value = totalIVCM24.guadalajara;
      rowValues[6][0].value = totalIVCM24.hermosillo;
      rowValues[7][0].value = totalIVCM24.mexicali;
      rowValues[8][0].value = totalIVCM24.orizaba;
      // rowValues[9][0].value = totalIVCM.ramosArispe;
      rowValues[9][0].value = totalIVCM24.total;
    }

    if(row.key[0] == '04 ABR'){

      rowValues[3][0].value = totalIVCA24.cuautitlan;
      rowValues[4][0].value = totalIVCA24.tultitlan;
      rowValues[5][0].value = totalIVCA24.guadalajara;
      rowValues[6][0].value = totalIVCA24.hermosillo;
      rowValues[7][0].value = totalIVCA24.mexicali;
      rowValues[8][0].value = totalIVCA24.orizaba;
      // rowValues[9][0].value = totalIVCA.ramosArispe;
      rowValues[9][0].value = totalIVCA24.total;
    }

    if(row.key[0] == '05 MAY'){

      rowValues[3][0].value = totalIVCMY24.cuautitlan;
      rowValues[4][0].value = totalIVCMY24.tultitlan;
      rowValues[5][0].value = totalIVCMY24.guadalajara;
      rowValues[6][0].value = totalIVCMY24.hermosillo;
      rowValues[7][0].value = totalIVCMY24.mexicali;
      rowValues[8][0].value = totalIVCMY24.orizaba;
      // rowValues[9][0].value = totalIVCMY.ramosArispe;
      rowValues[9][0].value = totalIVCMY24.total;
    }

    if(row.key[0] == '06 JUN'){

      rowValues[3][0].value = totalIVCJN24.cuautitlan;
      rowValues[4][0].value = totalIVCJN24.tultitlan;
      rowValues[5][0].value = totalIVCJN24.guadalajara;
      rowValues[6][0].value = totalIVCJN24.hermosillo;
      rowValues[7][0].value = totalIVCJN24.mexicali;
      rowValues[8][0].value = totalIVCJN24.orizaba;
      // rowValues[9][0].value = totalIVCJN24.ramosArispe;
      rowValues[9][0].value = totalIVCJN24.total;
    }

    if(row.key[0] == '07 JUL'){

      rowValues[3][0].value = totalIVCJL.cuautitlan;
      rowValues[4][0].value = totalIVCJL.tultitlan;
      rowValues[5][0].value = totalIVCJL.guadalajara;
      rowValues[6][0].value = totalIVCJL.hermosillo;
      rowValues[7][0].value = totalIVCJL.mexicali;
      rowValues[8][0].value = totalIVCJL.orizaba;
      // rowValues[9][0].value = totalIVCJL.ramosArispe;
      rowValues[9][0].value = totalIVCJL.total;

    }

    // if(row.key[0] == '08 AGO'){

    //   rowValues[3][0].value = totalIVCAG.cuautitlan;
    //   rowValues[4][0].value = totalIVCAG.tultitlan;
    //   rowValues[5][0].value = totalIVCAG.guadalajara;
    //   rowValues[6][0].value = totalIVCAG.hermosillo;
    //   rowValues[7][0].value = totalIVCAG.mexicali;
    //   rowValues[8][0].value = totalIVCAG.orizaba;
    //   rowValues[9][0].value = totalIVCAG.ramosArispe;
    //   rowValues[10][0].value = totalIVCAG.total;
    // }

    // if(row.key[0] == '09 SEP'){

    //   rowValues[3][0].value = totalIVCS.cuautitlan;
    //   rowValues[4][0].value = totalIVCS.tultitlan;
    //   rowValues[5][0].value = totalIVCS.guadalajara;
    //   rowValues[6][0].value = totalIVCS.hermosillo;
    //   rowValues[7][0].value = totalIVCS.mexicali;
    //   rowValues[8][0].value = totalIVCS.orizaba;
    //   rowValues[9][0].value = totalIVCS.ramosArispe;
    //   rowValues[10][0].value = totalIVCS.total;
    // }

    // if(row.key[0] == '10 OCT'){

    //   rowValues[3][0].value = totalIVCOC.cuautitlan;
    //   rowValues[4][0].value = totalIVCOC.tultitlan;
    //   rowValues[5][0].value = totalIVCOC.guadalajara;
    //   rowValues[6][0].value = totalIVCOC.hermosillo;
    //   rowValues[7][0].value = totalIVCOC.mexicali;
    //   rowValues[8][0].value = totalIVCOC.orizaba;
    //   rowValues[9][0].value = totalIVCOC.ramosArispe;
    //   rowValues[10][0].value = totalIVCOC.total;
    // }

    // if(row.key[0] == '11 NOV'){

    //   rowValues[3][0].value = totalIVCNV.cuautitlan;
    //   rowValues[4][0].value = totalIVCNV.tultitlan;
    //   rowValues[5][0].value = totalIVCNV.guadalajara;
    //   rowValues[6][0].value = totalIVCNV.hermosillo;
    //   rowValues[7][0].value = totalIVCNV.mexicali;
    //   rowValues[8][0].value = totalIVCNV.orizaba;
    //   rowValues[9][0].value = totalIVCNV.ramosArispe;
    //   rowValues[10][0].value = totalIVCNV.total;
    // }

    // if(row.key[0] == '12 DIC'){

    //   rowValues[3][0].value = totalIVCDC.cuautitlan;
    //   rowValues[4][0].value = totalIVCDC.tultitlan;
    //   rowValues[5][0].value = totalIVCDC.guadalajara;
    //   rowValues[6][0].value = totalIVCDC.hermosillo;
    //   rowValues[7][0].value = totalIVCDC.mexicali;
    //   rowValues[8][0].value = totalIVCDC.orizaba;
    //   rowValues[9][0].value = totalIVCDC.ramosArispe;
    //   rowValues[10][0].value = totalIVCDC.total;
    // }
  }

  if(row.rowType == "totalFooter"){
    row.values[3].value = totalOperacionIVC.cuautitlan;
    row.values[4].value = totalOperacionIVC.tultitlan;
    row.values[5].value = totalOperacionIVC.guadalajara;
    row.values[6].value = totalOperacionIVC.hermosillo;
    row.values[7].value = totalOperacionIVC.mexicali;
    row.values[8].value = totalOperacionIVC.orizaba;
    // row.values[9].value = totalOperacionIVC.ramosArispe;
    row.values[9].value = totalOperacionIVC.total;
  }

});

}

//==============================INGRESO OPERADOR 2024===================================
onRowPreparedIO2024(e){
  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {
      if (c.cellElement) {
        if(c.columnIndex == 3){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }
        }
    })
  
  }
}

onCellPreparedIO2024(e){
  // if (e.rowType == 'data'){
  //   e.cellElement.style.fontSize = '12px';
  //   e.cellElement.style.background = "#DCDCDC";
  // }
}
// ======================================KMS MENSUALEs==============================
  onRowPreparedKMS(e){

  }

  onCellPreparedIKMS(e){

  }


  onRowPreparedSO(e){
    
    if(e.rowType == 'groupFooter'){
      if(e.data.key ==  "01: ENE"){
        this.soEne = e.summaryCells[3][0].value;
        this.sdEne = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "02: FEB"){
        this.soFeb = e.summaryCells[3][0].value;
        this.sdFeb = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "03: MAR"){
        this.soMar = e.summaryCells[3][0].value;
        this.sdMar = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "04: ABR"){
        this.soAbr = e.summaryCells[3][0].value;
        this.sdAbr = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "05: MAY"){
        this.soMay = e.summaryCells[3][0].value;
        this.sdMay = e.summaryCells[5][0].value;
      }

      // if(e.data.key ==  "06: JUN"){
      //   this.soJun = e.summaryCells[3][0].value;
      //   this.sdJun = e.summaryCells[5][0].value;
      // }
      // if(e.data.key ==  "06: JUL"){
      //   this.soJun = e.summaryCells[3][0].value;
      //   this.sdJun = e.summaryCells[5][0].value;
      // }


      var myOperation = this.soEne + this.soFeb + this.soMar + this.soAbr + this.soMay;
      this.totalOperaSO = myOperation / 5;

      var myOpSD = this.sdEne + this.sdFeb + this.sdMar + this.sdAbr + this.sdMay;
      this.totalSueldoDSO  = myOpSD / 5;
  
    }
    
      this.autogrouping = true;
  }

  onCellPreparedSO(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }

    

    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {

        c.totalItem.summaryCells[3][0].value = this.totalOperaSO
        c.totalItem.summaryCells[5][0].value = this.totalSueldoDSO
        
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

  onRowPreparedSOAC(e){
    
    if(e.rowType == 'groupFooter'){
      console.log(e.data)
      if(e.data.key ==  "01 ENE"){
        this.soEneAC = e.summaryCells[3][0].value;
        this.sdEneAC = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "02 FEB"){
        this.soFebAC = e.summaryCells[3][0].value;
        this.sdFebAC = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "03 MAR"){
        this.soMarAC = e.summaryCells[3][0].value;
        this.sdMarAC = e.summaryCells[5][0].value;
      }

      if(e.data.key ==  "04 ABR"){
        this.soAbrAC = e.summaryCells[3][0].value;
        this.sdAbrAC = e.summaryCells[5][0].value;
      }

      // if(e.data.key ==  "05 MAY"){
      //   this.soMayAC = e.summaryCells[3][0].value;
      //   this.sdMayAC = e.summaryCells[5][0].value;
      // }

      // if(e.data.key ==  "06 JUN"){
      //   this.soJunAC = e.summaryCells[3][0].value;
      //   this.sdJunAC = e.summaryCells[5][0].value;
      // }

      // if(e.data.key ==  "07 JUL"){
      //   this.soJunAC = e.summaryCells[3][0].value;
      //   this.sdJunAC = e.summaryCells[5][0].value;
      // }



      var myOperationAC = this.soEneAC + this.soFebAC + this.soMarAC + this.soAbrAC //+ this.soMay;
      this.totalOperaSOAC = myOperationAC / 4;

      var myOpSDAC = this.sdEneAC + this.sdFebAC + this.sdMarAC + this.sdAbrAC// + this.sdMay;
      this.totalSueldoDSOAC  = myOpSDAC / 4;
  
    }
    
      this.autogroupingAC = true;
  }

  onCellPreparedSOAC(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }

    

    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {

        c.totalItem.summaryCells[3][0].value = this.totalOperaSOAC
        c.totalItem.summaryCells[5][0].value = this.totalSueldoDSOAC
        
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }


  onRowPreparedSD(e){

  }

  onCellPreparedSD(e){
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

  formatPesosMX(value){
  
      var myvalue = Math.trunc(value);
  
      var myFormat = myvalue.toString().split(".");
      myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
  
      return '$ '+myFormat.join("");
  }
  /*================================EXPORTAR TODOS LOS KAPIS==========================*/
  export() {
    const chartInstance1 = this.chart1.instance;
    const chartInstance2 = this.chart2.instance;
    const chartInstance3 = this.chart3.instance;
    const chartInstance4 = this.chart4.instance;
    const chartInstance5 = this.chart5.instance;
    const chartInstance6 = this.chart6.instance;

    exportWidgets([[chartInstance1], [chartInstance2], [chartInstance3], [chartInstance4], [chartInstance5], [chartInstance6]], {
      fileName: 'KPI´s',
      format: 'PDF',
    });

    // const chartTest = this.chartTest.instance;
    // exportWidgets([[chartTest]], {
    //   fileName: 'KPI´s',
    //   format: 'PDF',
    // });

    // exportFromMarkup(this.prepareMarkup(), {
    //   width: 2000,
    //   height: 420,
    //   margin: 0,
    //   format: 'pdf',
    //   svgToCanvas(svg, canvas) {
    //     return new Promise((resolve) => {
    //       canvg(canvas, new XMLSerializer().serializeToString(svg), {
    //         ignoreDimensions: true,
    //         ignoreClear: true,
    //         renderCallback: resolve,
    //       });
    //     });
    //   },
    // });

    
  }

  export24() {
    const chartInstance124 = this.chart124.instance;
    const chartInstance224 = this.chart224.instance;
    const chartInstance324 = this.chart324.instance;
    const chartInstance424 = this.chart424.instance;
    const chartInstance524 = this.chart524.instance;
    const chartInstance624 = this.chart624.instance;

    exportWidgets([[chartInstance124], [chartInstance224], [chartInstance324], [chartInstance424], [chartInstance524], [chartInstance624]], {
      fileName: 'KPI´s',
      format: 'PDF',
    });

    // const chartTest = this.chartTest.instance;
    // exportWidgets([[chartTest]], {
    //   fileName: 'KPI´s',
    //   format: 'PDF',
    // });

    // exportFromMarkup(this.prepareMarkup(), {
    //   width: 2000,
    //   height: 420,
    //   margin: 0,
    //   format: 'pdf',
    //   svgToCanvas(svg, canvas) {
    //     return new Promise((resolve) => {
    //       canvg(canvas, new XMLSerializer().serializeToString(svg), {
    //         ignoreDimensions: true,
    //         ignoreClear: true,
    //         renderCallback: resolve,
    //       });
    //     });
    //   },
    // });

    
  }

  prepareMarkup() {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="820px" height="420px">${
      document.getElementById('custom_markup_container').innerHTML
    }<g transform="translate(305,12)">${
      this.chart1.instance.svg()
    }</g>`
            + '</svg>';
  }

   //==================Formato a la data de la grafica==================================
   formatSliderTooltip (value) {
    
    return ((value.valueText) * 100).toFixed(2).toString() + '%';
}

    clickClientesRutas = (e: any) => {
      this.loadingVisible = true;
      this.getScoreCard();
     };

  redondearD(value){
    const total = value.toFixed(2);

    return total;
  }

  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //   }
    // }
  }

  // customizeLabel = (point) =>{
  //   console.log(point)
  //   return `$${parseFloat(point.valueText).toFixed(2)}`;
  // }

  customizeLabel = (pointInfo) => {
    const value = parseFloat(pointInfo.valueText);
    const formattedValue = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    }).format(value);
    return formattedValue;
};

}


