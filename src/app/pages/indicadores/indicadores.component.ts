import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { SumaTotalE } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalF } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalM } from '../../shared/models/indicadores/sumaTotal.model';
import { SumaTotalA } from '../../shared/models/indicadores/sumaTotal.model';

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

import { IngresoOperador } from '../../shared/models/indicadores/ingresoOperador.model';

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};
@Component({
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
})
export class IndicadoresComponent implements OnInit {

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

  ingresosKE = new IngresosKE;
  totalKE = new TotalKE;
  ingresosKF = new IngresosKF;
  totalKF = new TotalKF;
  ingresosKM = new IngresosKM;
  totalKM = new TotalKM;
  ingresosKA = new IngresosKA;
  totalKA = new TotalKA;

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

  sumaTotalGroupC = []
  sumaTotalGroupT = []
  sumaTotalGroupG = []
  sumaTotalGroupH = []
  sumaTotalGroupM = []
  sumaTotalGroupO = []
  sumaTotalGroupRA = []
  sumaTotalGT = []

  ingresoOperador: IngresoOperador[] = [];

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
    this.getIngresoOperador();
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
    this.indicadorService.getIgresoOperador().subscribe(data => {
      this.ingresoOperador = data.data;
      console.log(this.ingresoOperador);
    })
  }

  seleccionarTipoOpe(e: any) {
  }


  buscarClick = (e: any) => {
    this.getScoreCard()
    /*if (this.udnSeleccionado && this.mesSeleccionado && this.anioSeleccionado) {
      this.loadingVisible = true;
      this.getRentabilidad().then(() => {
        this.loadingVisible = false;
      });
    }*/

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
  totalEL = [];

  cuatitlanFL = [];
  tultitlanFL = [];
  guadalajaraFL = [];
  hermosilloFL = [];
  mexicaliFL = [];
  orizabaFL = [];
  ramosAFL = [];
  totalFL = [];

  cuatitlanML = [];
  tultitlanML = [];
  guadalajaraML = [];
  hermosilloML = [];
  mexicaliML = [];
  orizabaML = [];
  ramosAML = [];
  totalML = [];

  cuatitlanAL = [];
  tultitlanAL = [];
  guadalajaraAL = [];
  hermosilloAL = [];
  mexicaliAL = [];
  orizabaAL = [];
  ramosAAL = [];
  totalAL = [];
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
          if (c.cellElement && c.columnIndex == 9) {
            if (this.total >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalEL.push(c.value)

              let total = this.totalEL.reduce((a, b) => a + b, 0);
              this.sumaTotalE.sumaTotalTlE = total
              //console.log(total);
            }
          }
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
          if (c.cellElement && c.columnIndex == 9) {
            if (this.total >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalFL.push(c.value)

              let total = this.totalFL.reduce((a, b) => a + b, 0);
              this.sumaTotalF.sumaTotalTlF = total
              //console.log(total);
            }
          }
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
          if (c.cellElement && c.columnIndex == 9) {
            if (this.total >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalML.push(c.value)

              let total = this.totalML.reduce((a, b) => a + b, 0);
              this.sumaTotalM.sumaTotalTlM = total
              //console.log(total);
            }
          }
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
          if (c.cellElement && c.columnIndex == 9) {
            if (this.total >= c.value) {
              c.cellElement.style.color = "red";
            }

            if(c.value != 0){
              this.totalAL.push(c.value)

              let total = this.totalAL.reduce((a, b) => a + b, 0);
              this.sumaTotalA.sumaTotalTlA = total
              //console.log(total);
            }
          }
        }
      });
    }

    if (e.rowType == 'group'){

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

        this.ingresosKE.totalE = this.sumaTotalE.sumaTotalTlE;
        this.totalKE.totalTE = this.ingresosKE.totalE / this.totalEL.length;
        e.summaryCells[9][0].value = this.totalKE.totalTE;
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

        this.ingresosKF.totalF = this.sumaTotalF.sumaTotalTlF;
        this.totalKF.totalTF = this.ingresosKF.totalF / this.totalFL.length;
        e.summaryCells[9][0].value = this.totalKF.totalTF;


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

        this.ingresosKM.totalM = this.sumaTotalM.sumaTotalTlM;
        this.totalKM.totalTM = this.ingresosKM.totalM / this.totalML.length;
        e.summaryCells[9][0].value = this.totalKM.totalTM;


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

        this.ingresosKA.totalA = this.sumaTotalA.sumaTotalTlA;
        this.totalKA.totalTA = this.ingresosKA.totalA / this.totalAL.length;
        if(Number.isNaN(this.totalKA.totalTA)){
          this.totalKA.totalTA = 0.0;
        }
        e.summaryCells[9][0].value = this.totalKA.totalTA;


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
        if(c.columnIndex == 9){
        
          c.value = c.summaryItems[0].value
        
          if(Number.isNaN(c.value)){
            c.value = 0.0;
          }
  
          if(c.value != 0){
            this.sumaTotalGT.push(c.value)
          }

        }
      })
     
    }

    this.paginacion = 60;
    if(this.paginacion = 60){
      this.expandGroup = false
    }
  }

  onCellPreparedIK(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";

    }

    if (e.rowType == 'totalFooter') {

      e.totalItem.cells.forEach((c: any) => {
        var CuautitlanTS = 0;
        var TultitlanTS = 0;
        var GuadalajaraTS = 0;
        var HermosilloTS = 0;
        var MexicaliTS = 0;
        var OrizabaTS = 0;
        var RamosATS = 0;
        var TotalTS = 0;

        var totalCuautitlan = 0;
        var totalTultitlan = 0;
        var totalGuadalajara = 0;
        var totalHermosillo = 0;
        var totalMexicali = 0;
        var totalOrizaba = 0;
        var totalRamosA = 0;
        var totalTotal = 0;

        CuautitlanTS = this.totalKE.cuautitlanTE + this.totalKF.cuautitlanTF +this.totalKM.cuautitlanTM + this.totalKA.cuautitlanTA;
        totalCuautitlan = CuautitlanTS / this.sumaTotalGroupC.length;
        c.totalItem.summaryCells[2][0].value = totalCuautitlan;

        TultitlanTS = this.totalKE.tultitlanTE + this.totalKF.tultitlanTF +this.totalKM.tultitlanTM + this.totalKA.tultitlanTA;
        totalTultitlan = TultitlanTS / this.sumaTotalGroupT.length;
        c.totalItem.summaryCells[3][0].value = totalTultitlan;

        GuadalajaraTS = this.totalKE.guadalajaraTE + this.totalKF.guadalajaraTF +this.totalKM.guadalajaraTM + this.totalKA.guadalajaraTA;
        totalGuadalajara = GuadalajaraTS / this.sumaTotalGroupG.length;
        c.totalItem.summaryCells[4][0].value = totalGuadalajara;

        HermosilloTS = this.totalKE.hermosilloTE + this.totalKF.hermosilloTF +this.totalKM.hermosilloTM + this.totalKA.hermosilloTA;
        totalHermosillo = HermosilloTS / this.sumaTotalGroupH.length;
        c.totalItem.summaryCells[5][0].value = totalHermosillo;

        MexicaliTS = this.totalKE.mexicaliTE + this.totalKF.mexicaliTF +this.totalKM.mexicaliTM + this.totalKA.mexicaliTA;
        totalMexicali = MexicaliTS / this.sumaTotalGroupM.length;
        c.totalItem.summaryCells[6][0].value = totalMexicali;

        OrizabaTS = this.totalKE.orizabaTE + this.totalKF.orizabaTF +this.totalKM.orizabaTM + this.totalKA.orizabaTA;
        totalOrizaba = OrizabaTS / this.sumaTotalGroupO.length;
        c.totalItem.summaryCells[7][0].value = totalOrizaba;

        RamosATS = this.totalKE.ramisArispeTE + this.totalKF.ramisArispeTF +this.totalKM.ramisArispeTM + this.totalKA.ramisArispeTA;
        totalRamosA = RamosATS / this.sumaTotalGroupRA.length;
        c.totalItem.summaryCells[8][0].value = totalRamosA;

        TotalTS = this.totalKE.totalTE + this.totalKF.totalTF +this.totalKM.totalTM + this.totalKA.totalTA;
        totalTotal = TotalTS / this.sumaTotalGT.length;
        c.totalItem.summaryCells[9][0].value = totalTotal;

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
  onRowPreparedIO(event){

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

}


