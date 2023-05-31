import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { DxChartComponent, } from 'devextreme-angular';

import { SumaTotalE } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalF } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalM } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalA } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalMY } from '../../shared/models/indicadores/sumaTotal.model';

import { IndicadoresService } from '../../services/indicadores/indicadores.service';
import { ScoreCard } from '../../shared/models/indicadores/scoreCard.model';
import { IngresosKE } from '../../shared/models/indicadores/ingresosKilometros.model';
import { TotalKE } from '../../shared/models/indicadores/ingresosKilometros.model';
import { IngresosKF } from '../../shared/models/indicadores/ingresosKilometros.model';
import { TotalKF } from '../../shared/models/indicadores/ingresosKilometros.model';
import { IngresosKM } from '../../shared/models/indicadores/ingresosKilometros.model';
import { TotalKM } from '../../shared/models/indicadores/ingresosKilometros.model';
import { IngresosKA } from '../../shared/models/indicadores/ingresosKilometros.model';
import { TotalKA } from '../../shared/models/indicadores/ingresosKilometros.model';
import { IngresosKMY } from '../../shared/models/indicadores/ingresosKilometros.model';
import { TotalKMY } from '../../shared/models/indicadores/ingresosKilometros.model';

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

  cuatitlanEL = [];
  tultitlanEL = [];
  guadalajaraEL = [];
  hermosilloEL = [];
  mexicaliEL = [];
  orizabaEL = [];
  ramosAEL = [];
  // totalEL = [];

  cuatitlanFL = [];
  tultitlanFL = [];
  guadalajaraFL = [];
  hermosilloFL = [];
  mexicaliFL = [];
  orizabaFL = [];
  ramosAFL = [];
  // totalFL = [];

  cuatitlanML = [];
  tultitlanML = [];
  guadalajaraML = [];
  hermosilloML = [];
  mexicaliML = [];
  orizabaML = [];
  ramosAML = [];
  // totalML = [];

  cuatitlanAL = [];
  tultitlanAL = [];
  guadalajaraAL = [];
  hermosilloAL = [];
  mexicaliAL = [];
  orizabaAL = [];
  ramosAAL = [];
  // totalAL = [];

  cuatitlanMYL = [];
  tultitlanMYL = [];
  guadalajaraMYL = [];
  hermosilloMYL = [];
  mexicaliMYL = [];
  orizabaMYL = [];
  ramosAMYL = [];
  // totalMYL = [];
  onRowPreparedIK(e){
    
    if (e.rowType == 'data') {
      
      e.cells.forEach((c: any) => {

        if(c.key.mes == "01 ENE"){

          if (c.cellElement && c.columnIndex == 2 ) {
            if (this.cuautitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.cuatitlanEL.push(c.value)

              let total = this.cuatitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalCE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.tultitlanEL.push(c.value)

              let total = this.tultitlanEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalTE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.guadalajaraEL.push(c.value)

              let total = this.guadalajaraEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalGE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.hermosilloEL.push(c.value)

              let total = this.hermosilloEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalHE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.mexicaliEL.push(c.value)

              let total = this.mexicaliEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalME = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.orizabaEL.push(c.value)

              let total = this.orizabaEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalOE = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.ramosAEL.push(c.value)

              let total = this.ramosAEL.reduce((a, b) => a + b, 0);
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
              this.cuatitlanFL.push(c.value)

              let total = this.cuatitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalCF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.tultitlanFL.push(c.value)

              let total = this.tultitlanFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalTF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.guadalajaraFL.push(c.value)

              let total = this.guadalajaraFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalGF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.hermosilloFL.push(c.value)

              let total = this.hermosilloFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalHF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.mexicaliFL.push(c.value)

              let total = this.mexicaliFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalMF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.orizabaFL.push(c.value)

              let total = this.orizabaFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalOF = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.ramosAFL.push(c.value)

              let total = this.ramosAFL.reduce((a, b) => a + b, 0);
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
              this.cuatitlanML.push(c.value)

              let total = this.cuatitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalCM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.tultitlanML.push(c.value)

              let total = this.tultitlanML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalTM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.guadalajaraML.push(c.value)

              let total = this.guadalajaraML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalGM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.hermosilloML.push(c.value)

              let total = this.hermosilloML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalHM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.mexicaliML.push(c.value)

              let total = this.mexicaliML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalMM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.orizabaML.push(c.value)

              let total = this.orizabaML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalOM = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.ramosAML.push(c.value)

              let total = this.ramosAML.reduce((a, b) => a + b, 0);
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
              this.cuatitlanAL.push(c.value)

              let total = this.cuatitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalCA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.tultitlanAL.push(c.value)

              let total = this.tultitlanAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalTA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.guadalajaraAL.push(c.value)

              let total = this.guadalajaraAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalGA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.hermosilloAL.push(c.value)

              let total = this.hermosilloAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalHA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.mexicaliAL.push(c.value)

              let total = this.mexicaliAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalMA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.orizabaAL.push(c.value)

              let total = this.orizabaAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalOA = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.ramosAAL.push(c.value)

              let total = this.ramosAAL.reduce((a, b) => a + b, 0);
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
              this.cuatitlanMYL.push(c.value)

              let total = this.cuatitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalCMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 3) {
            if (this.tultitlan >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.tultitlanMYL.push(c.value)

              let total = this.tultitlanMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalTMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 4) {
            if (this.guadalajara >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.guadalajaraMYL.push(c.value)

              let total = this.guadalajaraMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalGMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 5) {
            if (this.hermosillo >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.hermosilloMYL.push(c.value)

              let total = this.hermosilloMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalHMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 6) {
            if (this.mexicali >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.mexicaliMYL.push(c.value)

              let total = this.mexicaliMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalMMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 7) {
            if (this.orizaba >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.orizabaMYL.push(c.value)

              let total = this.orizabaMYL.reduce((a, b) => a + b, 0);
              this.sumaTotalMY.sumaTotalOMY = total
              //console.log(total);
            }
          }
          if (c.cellElement && c.columnIndex == 8) {
            if (this.ramisArispe >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.ramosAMYL.push(c.value)

              let total = this.ramosAMYL.reduce((a, b) => a + b, 0);
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
        this.totalKE.cuautitlanTE =  this.ingresosKE.cuautitlanE / this.cuatitlanEL.length;
        e.summaryCells[2][0].value =  this.totalKE.cuautitlanTE;
        
        

        
        this.ingresosKE.tultitlanE = this.sumaTotalE.sumaTotalTE;
        this.totalKE.tultitlanTE = this.ingresosKE.tultitlanE / this.tultitlanEL.length;
        e.summaryCells[3][0].value = this.totalKE.tultitlanTE;
        
        this.ingresosKE.guadalajaraE = this.sumaTotalE.sumaTotalGE;
        this.totalKE.guadalajaraTE = this.ingresosKE.guadalajaraE / this.guadalajaraEL.length;
        e.summaryCells[4][0].value = this.totalKE.guadalajaraTE;

        this.ingresosKE.hermosilloE = this.sumaTotalE.sumaTotalHE;
        this.totalKE.hermosilloTE = this.ingresosKE.hermosilloE / this.hermosilloEL.length;
        e.summaryCells[5][0].value = this.totalKE.hermosilloTE;

        this.ingresosKE.mexicaliE = this.sumaTotalE.sumaTotalME;
        this.totalKE.mexicaliTE = this.ingresosKE.mexicaliE / this.mexicaliEL.length;
        e.summaryCells[6][0].value = this.totalKE.mexicaliTE;

        this.ingresosKE.orizabaE = this.sumaTotalE.sumaTotalOE;
        this.totalKE.orizabaTE = this.ingresosKE.orizabaE / this.orizabaEL.length;
        e.summaryCells[7][0].value = this.totalKE.orizabaTE;

        this.ingresosKE.ramisArispeE = this.sumaTotalE.sumaTotalRAE;
        this.totalKE.ramisArispeTE = this.ingresosKE.ramisArispeE / this.ramosAEL.length;
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
        this.totalKF.cuautitlanTF =  this.ingresosKF.cuautitlanF / this.cuatitlanFL.length;
        e.summaryCells[2][0].value =  this.totalKF.cuautitlanTF;
        
        this.ingresosKF.tultitlanF = this.sumaTotalF.sumaTotalTF;
        this.totalKF.tultitlanTF = this.ingresosKF.tultitlanF / this.tultitlanFL.length;
        e.summaryCells[3][0].value = this.totalKF.tultitlanTF;
        
        this.ingresosKF.guadalajaraF = this.sumaTotalF.sumaTotalGF;
        this.totalKF.guadalajaraTF = this.ingresosKF.guadalajaraF / this.guadalajaraFL.length;
        e.summaryCells[4][0].value = this.totalKF.guadalajaraTF;

        this.ingresosKF.hermosilloF = this.sumaTotalF.sumaTotalHF;
        this.totalKF.hermosilloTF = this.ingresosKF.hermosilloF / this.hermosilloFL.length;
        e.summaryCells[5][0].value = this.totalKF.hermosilloTF;

        this.ingresosKF.mexicaliF = this.sumaTotalF.sumaTotalMF;
        this.totalKF.mexicaliTF = this.ingresosKF.mexicaliF / this.mexicaliFL.length;
        e.summaryCells[6][0].value = this.totalKF.mexicaliTF;

        this.ingresosKF.orizabaF = this.sumaTotalF.sumaTotalOF;
        this.totalKF.orizabaTF = this.ingresosKF.orizabaF / this.orizabaFL.length;
        e.summaryCells[7][0].value = this.totalKF.orizabaTF;

        this.ingresosKF.ramisArispeF = this.sumaTotalF.sumaTotalRAF;
        this.totalKF.ramisArispeTF = this.ingresosKF.ramisArispeF / this.ramosAFL.length;
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
        this.totalKM.cuautitlanTM =  this.ingresosKM.cuautitlanM / this.cuatitlanML.length;
        e.summaryCells[2][0].value =  this.totalKM.cuautitlanTM;
        
        this.ingresosKM.tultitlanM = this.sumaTotalM.sumaTotalTM;
        this.totalKM.tultitlanTM = this.ingresosKM.tultitlanM / this.tultitlanML.length;
        e.summaryCells[3][0].value = this.totalKM.tultitlanTM;
        
        this.ingresosKM.guadalajaraM = this.sumaTotalM.sumaTotalGM;
        this.totalKM.guadalajaraTM = this.ingresosKM.guadalajaraM / this.guadalajaraML.length;
        e.summaryCells[4][0].value = this.totalKM.guadalajaraTM;

        this.ingresosKM.hermosilloM = this.sumaTotalM.sumaTotalHM;
        this.totalKM.hermosilloTM = this.ingresosKM.hermosilloM / this.hermosilloML.length;
        e.summaryCells[5][0].value = this.totalKM.hermosilloTM;

        this.ingresosKM.mexicaliM = this.sumaTotalM.sumaTotalMM;
        this.totalKM.mexicaliTM = this.ingresosKM.mexicaliM / this.mexicaliML.length;
        e.summaryCells[6][0].value = this.totalKM.mexicaliTM;

        this.ingresosKM.orizabaM = this.sumaTotalM.sumaTotalOM;
        this.totalKM.orizabaTM = this.ingresosKM.orizabaM / this.orizabaML.length;
        e.summaryCells[7][0].value = this.totalKM.orizabaTM;

        this.ingresosKM.ramisArispeM = this.sumaTotalM.sumaTotalRAM;
        this.totalKM.ramisArispeTM = this.ingresosKM.ramisArispeM / this.ramosAML.length;
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
        this.totalKA.cuautitlanTA =  this.ingresosKA.cuautitlanA / this.cuatitlanAL.length;
        if(Number.isNaN(this.totalKA.cuautitlanTA)){
          this.totalKA.cuautitlanTA = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKA.cuautitlanTA;
        
        
        this.ingresosKA.tultitlanA = this.sumaTotalA.sumaTotalTA;
        this.totalKA.tultitlanTA = this.ingresosKA.tultitlanA / this.tultitlanAL.length;
        if(Number.isNaN(this.totalKA.tultitlanTA)){
          this.totalKA.tultitlanTA = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKA.tultitlanTA;
        
        this.ingresosKA.guadalajaraA = this.sumaTotalA.sumaTotalGA;
        this.totalKA.guadalajaraTA = this.ingresosKA.guadalajaraA / this.guadalajaraAL.length;
        if(Number.isNaN(this.totalKA.guadalajaraTA)){
          this.totalKA.guadalajaraTA = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKA.guadalajaraTA;

        this.ingresosKA.hermosilloA = this.sumaTotalA.sumaTotalHA;
        this.totalKA.hermosilloTA = this.ingresosKA.hermosilloA / this.hermosilloAL.length;
        if(Number.isNaN(this.totalKA.hermosilloTA)){
          this.totalKA.hermosilloTA = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKA.hermosilloTA;

        this.ingresosKA.mexicaliA = this.sumaTotalA.sumaTotalMA;
        this.totalKA.mexicaliTA = this.ingresosKA.mexicaliA / this.mexicaliAL.length;
        if(Number.isNaN(this.totalKA.mexicaliTA)){
          this.totalKA.mexicaliTA = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKA.mexicaliTA;

        this.ingresosKA.orizabaA = this.sumaTotalA.sumaTotalOA;
        this.totalKA.orizabaTA = this.ingresosKA.orizabaA / this.orizabaAL.length;
        if(Number.isNaN(this.totalKA.orizabaTA)){
          this.totalKA.orizabaTA = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKA.orizabaTA;
        

        this.ingresosKA.ramisArispeA = this.sumaTotalA.sumaTotalRAA;
        this.totalKA.ramisArispeTA = this.ingresosKA.ramisArispeA / this.ramosAAL.length;
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
        this.totalKMY.cuautitlanTMY =  this.ingresosKMY.cuautitlanMY / this.cuatitlanMYL.length;
        if(Number.isNaN(this.totalKMY.cuautitlanTMY)){
          this.totalKMY.cuautitlanTMY = 0.0;
        }
          e.summaryCells[2][0].value =  this.totalKMY.cuautitlanTMY;
        
        
        this.ingresosKMY.tultitlanMY = this.sumaTotalMY.sumaTotalTMY;
        this.totalKMY.tultitlanTMY = this.ingresosKMY.tultitlanMY / this.tultitlanMYL.length;
        if(Number.isNaN(this.totalKMY.tultitlanTMY)){
          this.totalKMY.tultitlanTMY = 0.0;
        }
        e.summaryCells[3][0].value = this.totalKMY.tultitlanTMY;
        
        this.ingresosKMY.guadalajaraMY = this.sumaTotalMY.sumaTotalGMY;
        this.totalKMY.guadalajaraTMY = this.ingresosKMY.guadalajaraMY / this.guadalajaraMYL.length;
        if(Number.isNaN(this.totalKMY.guadalajaraTMY)){
          this.totalKMY.guadalajaraTMY = 0.0;
        }
        e.summaryCells[4][0].value = this.totalKMY.guadalajaraTMY;

        this.ingresosKMY.hermosilloMY = this.sumaTotalMY.sumaTotalHMY;
        this.totalKMY.hermosilloTMY = this.ingresosKMY.hermosilloMY / this.hermosilloMYL.length;
        if(Number.isNaN(this.totalKMY.hermosilloTMY)){
          this.totalKMY.hermosilloTMY = 0.0;
        }
        e.summaryCells[5][0].value = this.totalKMY.hermosilloTMY;

        this.ingresosKMY.mexicaliMY = this.sumaTotalMY.sumaTotalMMY;
        this.totalKMY.mexicaliTMY = this.ingresosKMY.mexicaliMY / this.mexicaliMYL.length;
        if(Number.isNaN(this.totalKMY.mexicaliTMY)){
          this.totalKMY.mexicaliTMY = 0.0;
        }
        e.summaryCells[6][0].value = this.totalKMY.mexicaliTMY;

        this.ingresosKMY.orizabaMY = this.sumaTotalMY.sumaTotalOMY;
        this.totalKMY.orizabaTMY = this.ingresosKMY.orizabaMY / this.orizabaMYL.length;
        if(Number.isNaN(this.totalKMY.orizabaTMY)){
          this.totalKMY.orizabaTMY = 0.0;
        }
        e.summaryCells[7][0].value = this.totalKMY.orizabaTMY;
        

        this.ingresosKMY.ramisArispeMY = this.sumaTotalMY.sumaTotalRAMY;
        this.totalKMY.ramisArispeTMY = this.ingresosKMY.ramisArispeMY / this.ramosAMYL.length;
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

        this.CuautitlanTS = this.totalKE.cuautitlanTE + this.totalKF.cuautitlanTF +this.totalKM.cuautitlanTM + this.totalKA.cuautitlanTA + this.totalKMY.cuautitlanTMY;
        this.totalCuautitlan = this.CuautitlanTS / 5;//this.sumaTotalGroupC.length;
        //console.log(this.CuautitlanTS +"  "+ this.sumaTotalGroupC.length)
        c.totalItem.summaryCells[2][0].value = this.totalCuautitlan;

        this.TultitlanTS = this.totalKE.tultitlanTE + this.totalKF.tultitlanTF +this.totalKM.tultitlanTM + this.totalKA.tultitlanTA + this.totalKMY.tultitlanTMY;
        this.totalTultitlan = this.TultitlanTS / 5;//this.sumaTotalGroupT.length;
        c.totalItem.summaryCells[3][0].value = this.totalTultitlan;

        this.GuadalajaraTS = this.totalKE.guadalajaraTE + this.totalKF.guadalajaraTF +this.totalKM.guadalajaraTM + this.totalKA.guadalajaraTA + this.totalKMY.guadalajaraTMY;
        this.totalGuadalajara = this.GuadalajaraTS / 5;//this.sumaTotalGroupG.length;
        c.totalItem.summaryCells[4][0].value = this.totalGuadalajara;

        this.HermosilloTS = this.totalKE.hermosilloTE + this.totalKF.hermosilloTF +this.totalKM.hermosilloTM + this.totalKA.hermosilloTA + this.totalKMY.hermosilloTMY;
        this.totalHermosillo = this.HermosilloTS / 5;//this.sumaTotalGroupH.length;
        c.totalItem.summaryCells[5][0].value = this.totalHermosillo;

        this.MexicaliTS = this.totalKE.mexicaliTE + this.totalKF.mexicaliTF +this.totalKM.mexicaliTM + this.totalKA.mexicaliTA + this.totalKMY.mexicaliTMY;
        this.totalMexicali = this.MexicaliTS / 5;//this.sumaTotalGroupM.length;
        c.totalItem.summaryCells[6][0].value = this.totalMexicali;

        this.OrizabaTS = this.totalKE.orizabaTE + this.totalKF.orizabaTF +this.totalKM.orizabaTM + this.totalKA.orizabaTA + this.totalKMY.orizabaTMY;
        this.totalOrizaba = this.OrizabaTS / 5;//this.sumaTotalGroupO.length;
        c.totalItem.summaryCells[7][0].value = this.totalOrizaba;

        this.RamosATS = this.totalKE.ramisArispeTE + this.totalKF.ramisArispeTF +this.totalKM.ramisArispeTM + this.totalKA.ramisArispeTA + this.totalKMY.ramisArispeTMY;
        this.totalRamosA = this.RamosATS / 5;//this.sumaTotalGroupRA.length;
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


