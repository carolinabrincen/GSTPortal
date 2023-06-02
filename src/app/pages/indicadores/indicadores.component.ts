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

 import { TotalesLength } from '../../shared/models/indicadores/totalesLength.model';

import { IngresoOperador } from '../../shared/models/indicadores/ingresoOperador.model';
import { GraficaIngresoO } from '../../shared/models/indicadores/graficaIngresosO.model';
import { SubtotalesKCV } from '../../shared/models/indicadores/subtotalesKCV.model';
import { NgIf } from '@angular/common';

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};
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
  precioMeta: ScoreCard[] = [];

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
  
  paginacion: number = 0;
  expandGroup: boolean = true;

  tipoOperacion: any[] = [
    { id: 1, nombre: 'CAJA SECA' },
    { id: 2, nombre: 'GONDOLA' },
    { id: 3, nombre: 'TOLVA GRANEL' },
    { id: 4, nombre: 'ENCORITNADO' },
    { id: 5, nombre: 'GRADO ALIMENT' },
  ];

  customOperations: Array<any>;
  popupPosition: any;

  sumaTotalGroupC: any[] = [];
  sumaTotalGroupT = []
  sumaTotalGroupG = []
  sumaTotalGroupH = []
  sumaTotalGroupM = []
  sumaTotalGroupO = []
  sumaTotalGroupRA = []
  // sumaTotalGT = []

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
  getScoreCard(){
    this.indicadorService.getScoreCard().subscribe(data => {

      this.ingresos = data.data.scIng;
      this.kilomentros = data.data.scKms;
      this.ingresosKilometros = data.data.scIngXKm;
      this.viajes = data.data.scViajes;
      this.kilometroViajes = data.data.scKmsViaje;
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
      }

      this.expandGroup = true
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
              console.log(this.totalesArray.cuatitlanEL)
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

        // if(c.key.mes == "07 JUL"){

        //   if (c.cellElement && c.columnIndex == 2 ) {
        //     if (this.cuautitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.cuatitlanJLL.push(c.value)

        //       let total = this.totalesArray.cuatitlanJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalCJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 3) {
        //     if (this.tultitlan >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.tultitlanJLL.push(c.value)

        //       let total = this.totalesArray.tultitlanJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalTJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 4) {
        //     if (this.guadalajara >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.guadalajaraJLL.push(c.value)

        //       let total = this.totalesArray.guadalajaraJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalGJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 5) {
        //     if (this.hermosillo >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.hermosilloJLL.push(c.value)

        //       let total = this.totalesArray.hermosilloJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalHJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 6) {
        //     if (this.mexicali >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.mexicaliJLL.push(c.value)

        //       let total = this.totalesArray.mexicaliJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalMJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 7) {
        //     if (this.orizaba >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.orizabaJLL.push(c.value)

        //       let total = this.totalesArray.orizabaJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalOJL = total
        //       //console.log(total);
        //     }
        //   }
        //   if (c.cellElement && c.columnIndex == 8) {
        //     if (this.ramisArispe >= c.value) {
        //       c.cellElement.style.color = "red";
        //     }

        //     if(c.value != 0){
        //       this.totalesArray.ramosAJLL.push(c.value)

        //       let total = this.totalesArray.ramosAJLL.reduce((a, b) => a + b, 0);
        //       this.sumaTotalJL.sumaTotalRAJL = total
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
          this.ingresosKE = new IngresosKE;
          this.totalKE = new TotalKE;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKE.cuautitlanE = this.sumaTotalE.sumaTotalCE;
        this.totalKE.cuautitlanTE =  this.ingresosKE.cuautitlanE / this.totalesArray.cuatitlanEL.length;
        e.summaryCells[2][0].value =  this.totalKE.cuautitlanTE;
              
        this.ingresosKE.tultitlanE = this.sumaTotalE.sumaTotalTE;
        this.totalKE.tultitlanTE = this.ingresosKE.tultitlanE / this.totalesArray.tultitlanEL.length;
        e.summaryCells[3][0].value = this.totalKE.tultitlanTE;
        
        this.ingresosKE.guadalajaraE = this.sumaTotalE.sumaTotalGE;
        this.totalKE.guadalajaraTE = this.ingresosKE.guadalajaraE / this.totalesArray.guadalajaraEL.length;
        e.summaryCells[4][0].value = this.totalKE.guadalajaraTE;

        this.ingresosKE.hermosilloE = this.sumaTotalE.sumaTotalHE;
        this.totalKE.hermosilloTE = this.ingresosKE.hermosilloE / this.totalesArray.hermosilloEL.length;
        e.summaryCells[5][0].value = this.totalKE.hermosilloTE;

        this.ingresosKE.mexicaliE = this.sumaTotalE.sumaTotalME;
        this.totalKE.mexicaliTE = this.ingresosKE.mexicaliE / this.totalesArray.mexicaliEL.length;
        e.summaryCells[6][0].value = this.totalKE.mexicaliTE;

        this.ingresosKE.orizabaE = this.sumaTotalE.sumaTotalOE;
        this.totalKE.orizabaTE = this.ingresosKE.orizabaE / this.totalesArray.orizabaEL.length;
        e.summaryCells[7][0].value = this.totalKE.orizabaTE;

        this.ingresosKE.ramisArispeE = this.sumaTotalE.sumaTotalRAE;
        this.totalKE.ramisArispeTE = this.ingresosKE.ramisArispeE / this.totalesArray.ramosAEL.length;
        e.summaryCells[8][0].value = this.totalKE.ramisArispeTE;

        // this.ingresosKE.totalE = this.sumaTotalE.sumaTotalTlE;
        // this.totalKE.totalTE = this.ingresosKE.totalE / this.totalEL.length;
        // e.summaryCells[9][0].value = this.totalKE.totalTE;
      }

      if (e.data.key == '02 FEB') {
        if(e.isExpanded == true){
          this.ingresosKF = new IngresosKF;
          this.totalKF = new TotalKF;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKF.cuautitlanF = this.sumaTotalF.sumaTotalCF;
        this.totalKF.cuautitlanTF =  this.ingresosKF.cuautitlanF / this.totalesArray.cuatitlanFL.length;
        e.summaryCells[2][0].value =  this.totalKF.cuautitlanTF;
        
        this.ingresosKF.tultitlanF = this.sumaTotalF.sumaTotalTF;
        this.totalKF.tultitlanTF = this.ingresosKF.tultitlanF / this.totalesArray.tultitlanFL.length;
        e.summaryCells[3][0].value = this.totalKF.tultitlanTF;
        
        this.ingresosKF.guadalajaraF = this.sumaTotalF.sumaTotalGF;
        this.totalKF.guadalajaraTF = this.ingresosKF.guadalajaraF / this.totalesArray.guadalajaraFL.length;
        e.summaryCells[4][0].value = this.totalKF.guadalajaraTF;

        this.ingresosKF.hermosilloF = this.sumaTotalF.sumaTotalHF;
        this.totalKF.hermosilloTF = this.ingresosKF.hermosilloF / this.totalesArray.hermosilloFL.length;
        e.summaryCells[5][0].value = this.totalKF.hermosilloTF;

        this.ingresosKF.mexicaliF = this.sumaTotalF.sumaTotalMF;
        this.totalKF.mexicaliTF = this.ingresosKF.mexicaliF / this.totalesArray.mexicaliFL.length;
        e.summaryCells[6][0].value = this.totalKF.mexicaliTF;

        this.ingresosKF.orizabaF = this.sumaTotalF.sumaTotalOF;
        this.totalKF.orizabaTF = this.ingresosKF.orizabaF / this.totalesArray.orizabaFL.length;
        e.summaryCells[7][0].value = this.totalKF.orizabaTF;

        this.ingresosKF.ramisArispeF = this.sumaTotalF.sumaTotalRAF;
        this.totalKF.ramisArispeTF = this.ingresosKF.ramisArispeF / this.totalesArray.ramosAFL.length;
        e.summaryCells[8][0].value = this.totalKF.ramisArispeTF;

        // this.ingresosKF.totalF = this.sumaTotalF.sumaTotalTlF;
        // this.totalKF.totalTF = this.ingresosKF.totalF / this.totalFL.length;
        // e.summaryCells[9][0].value = this.totalKF.totalTF;


      }

      if (e.data.key == '03 MAR') {
        if(e.isExpanded == true){
          this.ingresosKM = new IngresosKM;
          this.totalKM = new TotalKM;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKM.cuautitlanM = this.sumaTotalM.sumaTotalCM;
        this.totalKM.cuautitlanTM =  this.ingresosKM.cuautitlanM / this.totalesArray.cuatitlanML.length;
        e.summaryCells[2][0].value =  this.totalKM.cuautitlanTM;
        
        this.ingresosKM.tultitlanM = this.sumaTotalM.sumaTotalTM;
        this.totalKM.tultitlanTM = this.ingresosKM.tultitlanM / this.totalesArray.tultitlanML.length;
        e.summaryCells[3][0].value = this.totalKM.tultitlanTM;
        
        this.ingresosKM.guadalajaraM = this.sumaTotalM.sumaTotalGM;
        this.totalKM.guadalajaraTM = this.ingresosKM.guadalajaraM / this.totalesArray.guadalajaraML.length;
        e.summaryCells[4][0].value = this.totalKM.guadalajaraTM;

        this.ingresosKM.hermosilloM = this.sumaTotalM.sumaTotalHM;
        this.totalKM.hermosilloTM = this.ingresosKM.hermosilloM / this.totalesArray.hermosilloML.length;
        e.summaryCells[5][0].value = this.totalKM.hermosilloTM;

        this.ingresosKM.mexicaliM = this.sumaTotalM.sumaTotalMM;
        this.totalKM.mexicaliTM = this.ingresosKM.mexicaliM / this.totalesArray.mexicaliML.length;
        e.summaryCells[6][0].value = this.totalKM.mexicaliTM;

        this.ingresosKM.orizabaM = this.sumaTotalM.sumaTotalOM;
        this.totalKM.orizabaTM = this.ingresosKM.orizabaM / this.totalesArray.orizabaML.length;
        e.summaryCells[7][0].value = this.totalKM.orizabaTM;

        this.ingresosKM.ramisArispeM = this.sumaTotalM.sumaTotalRAM;
        this.totalKM.ramisArispeTM = this.ingresosKM.ramisArispeM / this.totalesArray.ramosAML.length;
        e.summaryCells[8][0].value = this.totalKM.ramisArispeTM;

        // this.ingresosKM.totalM = this.sumaTotalM.sumaTotalTlM;
        // this.totalKM.totalTM = this.ingresosKM.totalM / this.totalML.length;
        // e.summaryCells[9][0].value = this.totalKM.totalTM;


      }

      if (e.data.key == '04 ABR') {
        if(e.isExpanded == true){
          this.ingresosKA = new IngresosKA;
          this.totalKA = new TotalKA;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKA.cuautitlanA = this.sumaTotalA.sumaTotalCA;
        this.totalKA.cuautitlanTA =  this.ingresosKA.cuautitlanA / this.totalesArray.cuatitlanAL.length;
        if(Number.isNaN(this.totalKA.cuautitlanTA)){
          this.totalKA.cuautitlanTA = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKA.cuautitlanTA;
        
        
        this.ingresosKA.tultitlanA = this.sumaTotalA.sumaTotalTA;
        this.totalKA.tultitlanTA = this.ingresosKA.tultitlanA / this.totalesArray.tultitlanAL.length;
        if(Number.isNaN(this.totalKA.tultitlanTA)){
          this.totalKA.tultitlanTA = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKA.tultitlanTA;
        
        this.ingresosKA.guadalajaraA = this.sumaTotalA.sumaTotalGA;
        this.totalKA.guadalajaraTA = this.ingresosKA.guadalajaraA / this.totalesArray.guadalajaraAL.length;
        if(Number.isNaN(this.totalKA.guadalajaraTA)){
          this.totalKA.guadalajaraTA = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKA.guadalajaraTA;

        this.ingresosKA.hermosilloA = this.sumaTotalA.sumaTotalHA;
        this.totalKA.hermosilloTA = this.ingresosKA.hermosilloA / this.totalesArray.hermosilloAL.length;
        if(Number.isNaN(this.totalKA.hermosilloTA)){
          this.totalKA.hermosilloTA = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKA.hermosilloTA;

        this.ingresosKA.mexicaliA = this.sumaTotalA.sumaTotalMA;
        this.totalKA.mexicaliTA = this.ingresosKA.mexicaliA / this.totalesArray.mexicaliAL.length;
        if(Number.isNaN(this.totalKA.mexicaliTA)){
          this.totalKA.mexicaliTA = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKA.mexicaliTA;

        this.ingresosKA.orizabaA = this.sumaTotalA.sumaTotalOA;
        this.totalKA.orizabaTA = this.ingresosKA.orizabaA / this.totalesArray.orizabaAL.length;
        if(Number.isNaN(this.totalKA.orizabaTA)){
          this.totalKA.orizabaTA = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKA.orizabaTA;
        

        this.ingresosKA.ramisArispeA = this.sumaTotalA.sumaTotalRAA;
        this.totalKA.ramisArispeTA = this.ingresosKA.ramisArispeA / this.totalesArray.ramosAAL.length;
        if(Number.isNaN(this.totalKA.ramisArispeTA)){
          this.totalKA.ramisArispeTA = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKA.ramisArispeTA;

        // this.ingresosKA.totalA = this.sumaTotalA.sumaTotalTlA;
        // this.totalKA.totalTA = this.ingresosKA.totalA / this.totalAL.length;
        // if(Number.isNaN(this.totalKA.totalTA)){
        //   this.totalKA.totalTA = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKA.totalTA;


      }

      if (e.data.key == '05 MAY') {
        if(e.isExpanded == true){
          this.ingresosKMY = new IngresosKMY;
          this.totalKMY = new TotalKMY;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKMY.cuautitlanMY = this.sumaTotalMY.sumaTotalCMY;
        this.totalKMY.cuautitlanTMY =  this.ingresosKMY.cuautitlanMY / this.totalesArray.cuatitlanMYL.length;
        if(Number.isNaN(this.totalKMY.cuautitlanTMY)){
          this.totalKMY.cuautitlanTMY = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKMY.cuautitlanTMY;
        
        
        this.ingresosKMY.tultitlanMY = this.sumaTotalMY.sumaTotalTMY;
        this.totalKMY.tultitlanTMY = this.ingresosKMY.tultitlanMY / this.totalesArray.tultitlanMYL.length;
        if(Number.isNaN(this.totalKMY.tultitlanTMY)){
          this.totalKMY.tultitlanTMY = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKMY.tultitlanTMY;
        
        this.ingresosKMY.guadalajaraMY = this.sumaTotalMY.sumaTotalGMY;
        this.totalKMY.guadalajaraTMY = this.ingresosKMY.guadalajaraMY / this.totalesArray.guadalajaraMYL.length;
        if(Number.isNaN(this.totalKMY.guadalajaraTMY)){
          this.totalKMY.guadalajaraTMY = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKMY.guadalajaraTMY;

        this.ingresosKMY.hermosilloMY = this.sumaTotalMY.sumaTotalHMY;
        this.totalKMY.hermosilloTMY = this.ingresosKMY.hermosilloMY / this.totalesArray.hermosilloMYL.length;
        if(Number.isNaN(this.totalKMY.hermosilloTMY)){
          this.totalKMY.hermosilloTMY = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKMY.hermosilloTMY;

        this.ingresosKMY.mexicaliMY = this.sumaTotalMY.sumaTotalMMY;
        this.totalKMY.mexicaliTMY = this.ingresosKMY.mexicaliMY / this.totalesArray.mexicaliMYL.length;
        if(Number.isNaN(this.totalKMY.mexicaliTMY)){
          this.totalKMY.mexicaliTMY = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKMY.mexicaliTMY;

        this.ingresosKMY.orizabaMY = this.sumaTotalMY.sumaTotalOMY;
        this.totalKMY.orizabaTMY = this.ingresosKMY.orizabaMY / this.totalesArray.orizabaMYL.length;
        if(Number.isNaN(this.totalKMY.orizabaTMY)){
          this.totalKMY.orizabaTMY = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKMY.orizabaTMY;
        

        this.ingresosKMY.ramisArispeMY = this.sumaTotalMY.sumaTotalRAMY;
        this.totalKMY.ramisArispeTMY = this.ingresosKMY.ramisArispeMY / this.totalesArray.ramosAMYL.length;
        if(Number.isNaN(this.totalKMY.ramisArispeTMY)){
          this.totalKMY.ramisArispeTMY = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKMY.ramisArispeTMY;

        // this.ingresosKMY.totalMY = this.sumaTotalMY.sumaTotalTlMY;
        // this.totalKMY.totalTMY = this.ingresosKMY.totalMY / this.totalMYL.length;
        // if(Number.isNaN(this.totalKMY.totalTMY)){
        //   this.totalKMY.totalTMY = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      }

      if (e.data.key == '06 JUN') {
        if(e.isExpanded == true){
          this.ingresosKJN = new IngresosKJN;
          this.totalKJN = new TotalKJN;
          //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
        }

        this.ingresosKJN.cuautitlanJN = this.sumaTotalJN.sumaTotalCJN;
        this.totalKJN.cuautitlanTJN =  this.ingresosKJN.cuautitlanJN / this.totalesArray.cuatitlanJNL.length;
        if(Number.isNaN(this.totalKJN.cuautitlanTJN)){
          this.totalKJN.cuautitlanTJN = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKJN.cuautitlanTJN;
        
        this.ingresosKJN.tultitlanJN = this.sumaTotalJN.sumaTotalTJN;
        this.totalKJN.tultitlanTJN = this.ingresosKJN.tultitlanJN / this.totalesArray.tultitlanJNL.length;
        if(Number.isNaN(this.totalKJN.tultitlanTJN)){
          this.totalKJN.tultitlanTJN = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKJN.tultitlanTJN;
        
        this.ingresosKJN.guadalajaraJN = this.sumaTotalJN.sumaTotalGJN;
        this.totalKJN.guadalajaraTJN = this.ingresosKJN.guadalajaraJN / this.totalesArray.guadalajaraJNL.length;
        if(Number.isNaN(this.totalKJN.guadalajaraTJN)){
          this.totalKJN.guadalajaraTJN = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKJN.guadalajaraTJN;

        this.ingresosKJN.hermosilloJN = this.sumaTotalJN.sumaTotalHJN;
        this.totalKJN.hermosilloTJN = this.ingresosKJN.hermosilloJN / this.totalesArray.hermosilloJNL.length;
        if(Number.isNaN(this.totalKJN.hermosilloTJN)){
          this.totalKJN.hermosilloTJN = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKJN.hermosilloTJN;

        this.ingresosKJN.mexicaliJN = this.sumaTotalJN.sumaTotalMJN;
        this.totalKJN.mexicaliTJN = this.ingresosKJN.mexicaliJN / this.totalesArray.mexicaliJNL.length;
        if(Number.isNaN(this.totalKJN.mexicaliTJN)){
          this.totalKJN.mexicaliTJN = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKJN.mexicaliTJN;

        this.ingresosKJN.orizabaJN = this.sumaTotalJN.sumaTotalOJN;
        this.totalKJN.orizabaTJN = this.ingresosKJN.orizabaJN / this.totalesArray.orizabaJNL.length;
        if(Number.isNaN(this.totalKJN.orizabaTJN)){
          this.totalKJN.orizabaTJN = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKJN.orizabaTJN;
        

        this.ingresosKJN.ramisArispeJN = this.sumaTotalJN.sumaTotalRAJN;
        this.totalKJN.ramisArispeTJN = this.ingresosKJN.ramisArispeJN / this.totalesArray.ramosAJNL.length;
        if(Number.isNaN(this.totalKJN.ramisArispeTJN)){
          this.totalKJN.ramisArispeTJN = 0.0;
        }
        e.summaryCells[8][0].value = this.totalKJN.ramisArispeTJN;

        // this.ingresosKJN.totalMY = this.sumaTotalJN.sumaTotalTlMY;
        // this.totalKMY.totalTMY = this.ingresosKJN.totalMY / this.totalMYL.length;
        // if(Number.isNaN(this.totalKMY.totalTMY)){
        //   this.totalKMY.totalTMY = 0.0;
        // }
        // e.summaryCells[9][0].value = this.totalKMY.totalTMY;


      }

      // if (e.data.key == '07 JUL') {
      //   if(e.isExpanded == true){
      //     this.ingresosKJL = new IngresosKJL;
      //     this.totalKJL = new TotalKJL;
      //     //console.log("ENTRE!!!!!  "+ this.ingresosKE.cuautitlanE +" ---- "+ this.totalKE.cuautitlanTE)
      //   }

      //   this.ingresosKJL.cuautitlanJL = this.sumaTotalJL.sumaTotalCJL;
      //   this.totalKJL.cuautitlanTJL =  this.ingresosKJL.cuautitlanJL / this.totalesArray.cuatitlanJLL.length;
      //   if(Number.isNaN(this.totalKJL.cuautitlanTJL)){
      //     this.totalKJL.cuautitlanTJL = 0.0;
      //   }
      //     e.summaryCells[2][0].value =  this.totalKJL.cuautitlanTJL;
        
        
      //   this.ingresosKJL.tultitlanJL = this.sumaTotalJL.sumaTotalTJL;
      //   this.totalKJL.tultitlanTJL = this.ingresosKJL.tultitlanJL / this.totalesArray.tultitlanJLL.length;
      //   if(Number.isNaN(this.totalKJL.tultitlanTJL)){
      //     this.totalKJL.tultitlanTJL = 0.0;
      //   }
      //   e.summaryCells[3][0].value = this.totalKJL.tultitlanTJL;
        
      //   this.ingresosKJL.guadalajaraJL = this.sumaTotalJL.sumaTotalGJL;
      //   this.totalKJL.guadalajaraTJL = this.ingresosKJL.guadalajaraJL / this.totalesArray.guadalajaraJLL.length;
      //   if(Number.isNaN(this.totalKJL.guadalajaraTJL)){
      //     this.totalKJL.guadalajaraTJL = 0.0;
      //   }
      //   e.summaryCells[4][0].value = this.totalKJL.guadalajaraTJL;

      //   this.ingresosKJL.hermosilloJL = this.sumaTotalJL.sumaTotalHJL;
      //   this.totalKJL.hermosilloTJL = this.ingresosKJL.hermosilloJL / this.totalesArray.hermosilloJLL.length;
      //   if(Number.isNaN(this.totalKJL.hermosilloTJL)){
      //     this.totalKJL.hermosilloTJL = 0.0;
      //   }
      //   e.summaryCells[5][0].value = this.totalKJL.hermosilloTJL;

      //   this.ingresosKJL.mexicaliJL = this.sumaTotalJL.sumaTotalMJL;
      //   this.totalKJL.mexicaliTJL = this.ingresosKJL.mexicaliJL / this.totalesArray.mexicaliJLL.length;
      //   if(Number.isNaN(this.totalKJL.mexicaliTJL)){
      //     this.totalKJL.mexicaliTJL = 0.0;
      //   }
      //   e.summaryCells[6][0].value = this.totalKJL.mexicaliTJL;

      //   this.ingresosKJL.orizabaJL = this.sumaTotalJL.sumaTotalOJL;
      //   this.totalKJL.orizabaTJL = this.ingresosKJL.orizabaJL / this.totalesArray.orizabaJLL.length;
      //   if(Number.isNaN(this.totalKJL.orizabaTJL)){
      //     this.totalKJL.orizabaTJL = 0.0;
      //   }
      //   e.summaryCells[7][0].value = this.totalKJL.orizabaTJL;
        

      //   this.ingresosKJL.ramisArispeJL = this.sumaTotalJL.sumaTotalRAJL;
      //   this.totalKJL.ramisArispeTJL = this.ingresosKJL.ramisArispeJL / this.totalesArray.ramosAJLL.length;
      //   if(Number.isNaN(this.totalKJL.ramisArispeTJL)){
      //     this.totalKJL.ramisArispeTJL = 0.0;
      //   }
      //   e.summaryCells[8][0].value = this.totalKJL.ramisArispeTJL;

      //   // this.ingresosKJL.totalMY = this.sumaTotalJL.sumaTotalTlMY;
      //   // this.totalKJL.totalTMY = this.ingresosKJL.totalMY / this.totalMYL.length;
      //   // if(Number.isNaN(this.totalKJL.totalTMY)){
      //   //   this.totalKJL.totalTMY = 0.0;
      //   // }
      //   // e.summaryCells[9][0].value = this.totalKJL.totalTMY;


      // }

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

        this.CuautitlanTS = this.totalKE.cuautitlanTE + this.totalKF.cuautitlanTF +this.totalKM.cuautitlanTM + this.totalKA.cuautitlanTA + this.totalKMY.cuautitlanTMY + this.totalKJN.cuautitlanTJN;
        this.totalCuautitlan = this.CuautitlanTS / 6;//this.sumaTotalGroupC.length;
        //console.log(this.CuautitlanTS +"  "+ this.sumaTotalGroupC.length)
        c.totalItem.summaryCells[2][0].value = this.totalCuautitlan;

        this.TultitlanTS = this.totalKE.tultitlanTE + this.totalKF.tultitlanTF +this.totalKM.tultitlanTM + this.totalKA.tultitlanTA + this.totalKMY.tultitlanTMY + this.totalKJN.tultitlanTJN;
        this.totalTultitlan = this.TultitlanTS / 6;//this.sumaTotalGroupT.length;
        c.totalItem.summaryCells[3][0].value = this.totalTultitlan;

        this.GuadalajaraTS = this.totalKE.guadalajaraTE + this.totalKF.guadalajaraTF +this.totalKM.guadalajaraTM + this.totalKA.guadalajaraTA + this.totalKMY.guadalajaraTMY;// + this.totalKJN.guadalajaraTJN;
        this.totalGuadalajara = this.GuadalajaraTS / 5;//this.sumaTotalGroupG.length;
        c.totalItem.summaryCells[4][0].value = this.totalGuadalajara;

        this.HermosilloTS = this.totalKE.hermosilloTE + this.totalKF.hermosilloTF +this.totalKM.hermosilloTM + this.totalKA.hermosilloTA + this.totalKMY.hermosilloTMY + this.totalKJN.hermosilloTJN;
        this.totalHermosillo = this.HermosilloTS / 6;//this.sumaTotalGroupH.length;
        c.totalItem.summaryCells[5][0].value = this.totalHermosillo;

        this.MexicaliTS = this.totalKE.mexicaliTE + this.totalKF.mexicaliTF +this.totalKM.mexicaliTM + this.totalKA.mexicaliTA + this.totalKMY.mexicaliTMY + this.totalKJN.mexicaliTJN;
        this.totalMexicali = this.MexicaliTS / 6;//this.sumaTotalGroupM.length;
        c.totalItem.summaryCells[6][0].value = this.totalMexicali;

        this.OrizabaTS = this.totalKE.orizabaTE + this.totalKF.orizabaTF +this.totalKM.orizabaTM + this.totalKA.orizabaTA + this.totalKMY.orizabaTMY;// + this.totalKJN.orizabaTJN;
        this.totalOrizaba = this.OrizabaTS / 5;//this.sumaTotalGroupO.length;
        c.totalItem.summaryCells[7][0].value = this.totalOrizaba;

        this.RamosATS = this.totalKE.ramisArispeTE + this.totalKF.ramisArispeTF +this.totalKM.ramisArispeTM + this.totalKA.ramisArispeTA + this.totalKMY.ramisArispeTMY + this.totalKJN.ramisArispeTJN;
        this.totalRamosA = this.RamosATS / 6;//this.sumaTotalGroupRA.length;
        c.totalItem.summaryCells[8][0].value = this.totalRamosA;

        // this.TotalTS = this.totalKE.totalTE + this.totalKF.totalTF +this.totalKM.totalTM + this.totalKA.totalTA + this.totalKMY.totalTMY;
        // this.totalTotal = this.TotalTS / 5;//this.sumaTotalGT.length;
        // c.totalItem.summaryCells[9][0].value = this.totalTotal;

          //console.log(c.totalItem.summaryCells[2][0].value = e.component.getTotalSummaryValue(totalCuautitlan));
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

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
    
  }
  onCellPreparedKV(e){
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


