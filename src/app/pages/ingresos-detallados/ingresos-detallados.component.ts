import { Component, OnInit } from '@angular/core';
import { ServiceSales } from '../tasks/app.serviceSales';
import { IngresosDModel } from 'src/app/shared/models/ingresos/ingresosD.models';
import { DetalleModel } from 'src/app/shared/models/ingresos/detalle.models';

@Component({
  
  templateUrl: './ingresos-detallados.component.html',
  styleUrls: ['./ingresos-detallados.component.scss'],
  providers: [ServiceSales]
})
export class IngresosDetalladosComponent implements OnInit {

  arrIngresos: IngresosDModel[] = [];
  arrDetalle: DetalleModel[] = [];
  arrIngresosFeb: IngresosDModel[] = [];
  arrDetalleFeb: DetalleModel[] = [];
  arrIngresosMarzo: IngresosDModel[] = [];
  arrDetalleMarzo: DetalleModel[] = [];
  arrIngresosAbril: IngresosDModel[] = [];
  arrDetalleAbril: DetalleModel[] = [];
  arrIngresosMayo: IngresosDModel[] = [];
  arrDetalleMayo: DetalleModel[] = [];
  arrIngresosJunio: IngresosDModel[] = [];
  arrDetalleJunio: DetalleModel[] = [];
  arrIngresosJulio: IngresosDModel[] = [];
  arrDetalleJulio: DetalleModel[] = [];
  arrIngresosAgosto: IngresosDModel[] = [];
  arrDetalleAgosto: DetalleModel[] = [];
  arrIngresosSeptiembre: IngresosDModel[] = [];
  arrDetalleSeptiembre: DetalleModel[] = [];
  arrIngresosOctubre: IngresosDModel[] = [];
  arrDetalleOctubre: DetalleModel[] = [];

  arrIngresosNoviembre: IngresosDModel[] = [];
  arrDetalleNoviembre: DetalleModel[] = [];
  arrIngresosDiciembre: IngresosDModel[] = [];
  arrDetalleDiciembre: DetalleModel[] = [];

  loadingVisible = false;

  constructor(private ingresosService: ServiceSales) 
  {
    // this.ingresosService.getIngresosDetalladosMensual().subscribe(res => {
      
    //   this.arrIngresos = res.data.resumen;
    //   this.arrDetalle = res.data.detalle;
      
    // });

  }

  ngOnInit(): void {
    this.getIDMMarzo();
    this.getIDMAbril();
    this.getIDMMayo();
    this.getIDMJunio();
    this.getIDMJulio();
    this.getIDMAgosto();
    this.getIDMSeptiembre();
    this.getIDMOctubre();
  }

  getIDMMarzo(){
    this.ingresosService.getIngresosDetalladosMensualMar().subscribe(res => {
      
      const orderIngreso: IngresosDModel[] = res.data.resumen;
      let neworderIngresoM = [];
      neworderIngresoM.push(orderIngreso[0],orderIngreso[1],
                        orderIngreso[2],orderIngreso[4],orderIngreso[5],orderIngreso[3],
                        orderIngreso[6],orderIngreso[7],
                        orderIngreso[8],orderIngreso[9],
                        orderIngreso[10],orderIngreso[11],
                        orderIngreso[12],orderIngreso[13],
                        orderIngreso[14],orderIngreso[15]);
 
      this.arrIngresosMarzo = neworderIngresoM;

      this.arrDetalleMarzo = res.data.detalle;
    });
  }
 
  getIDMAbril(){
    this.ingresosService.getIngresosDetalladosMensualAbr().subscribe(res => {

      const orderIngreso: IngresosDModel[] = res.data.resumen;
      let neworderIngresoA = [];
      neworderIngresoA.push(orderIngreso[0],orderIngreso[1],
                        orderIngreso[2],orderIngreso[3],
                        orderIngreso[4],orderIngreso[5],
                        orderIngreso[6],orderIngreso[7],
                        orderIngreso[8],orderIngreso[10],orderIngreso[9],orderIngreso[11],orderIngreso[12],
                        orderIngreso[13],orderIngreso[14],
                        orderIngreso[15],orderIngreso[16]);

      this.arrIngresosAbril = neworderIngresoA;

      this.arrDetalleAbril = res.data.detalle;
    });
  }

  getIDMMayo(){
    this.ingresosService.getIngresosDetalladosMensualMay().subscribe(res => {

      const orderIngreso: IngresosDModel[] = res.data.resumen;
      let neworderIngresoMY = [];
      neworderIngresoMY.push(orderIngreso[0],orderIngreso[1],
                        orderIngreso[2],orderIngreso[3],
                        orderIngreso[4],orderIngreso[5],
                        orderIngreso[6],orderIngreso[7],
                        orderIngreso[8],orderIngreso[10],orderIngreso[9],orderIngreso[11],orderIngreso[12],
                        orderIngreso[13],orderIngreso[14],orderIngreso[15],
                        orderIngreso[16],orderIngreso[17]);

      this.arrIngresosMayo = neworderIngresoMY;

      this.arrDetalleMayo = res.data.detalle;
    });
  }

  getIDMJunio(){
    this.ingresosService.getIngresosDetalladosMensualJun().subscribe(res => {

      const orderIngreso: IngresosDModel[] = res.data.resumen;
      let neworderIngresoJN = [];
      neworderIngresoJN.push(orderIngreso[0],orderIngreso[1],
                        orderIngreso[2],orderIngreso[3],orderIngreso[4],
                        orderIngreso[5],
                        orderIngreso[6],
                        orderIngreso[7],orderIngreso[9],orderIngreso[8],orderIngreso[10],orderIngreso[11],
                        orderIngreso[12],orderIngreso[13],orderIngreso[14],
                        orderIngreso[15],orderIngreso[16]);

      this.arrIngresosJunio = neworderIngresoJN;

      this.arrDetalleJunio = res.data.detalle;
    });
  }
  
  getIDMJulio(){
    this.ingresosService.getIngresosDetalladosMensualJul().subscribe(res => {

      const orderIngreso: IngresosDModel[] = res.data.resumen;
      let neworderIngresoJL = [];
      neworderIngresoJL.push(orderIngreso[0],orderIngreso[1],
                        orderIngreso[2],orderIngreso[3],orderIngreso[4],
                        orderIngreso[5],
                        orderIngreso[6],orderIngreso[7],
                        orderIngreso[8],orderIngreso[10],orderIngreso[9],orderIngreso[11],
                        orderIngreso[12],orderIngreso[13],
                        orderIngreso[14],orderIngreso[15]);

      this.arrIngresosJulio = res.data.resumen;

      this.arrDetalleJulio = res.data.detalle;

      //this.loadingVisible = false;
    });
  }

  getIDMAgosto(){
    this.ingresosService.getIngresosDetalladosMensualAgo().subscribe(res => {

      // const orderIngreso: IngresosDModel[] = res.data.resumen;
      // let neworderIngresoAG = [];
      // neworderIngresoAG.push(orderIngreso[0],orderIngreso[1],
      //                   orderIngreso[2],orderIngreso[3],orderIngreso[4],
      //                   orderIngreso[5],orderIngreso[6],
      //                   orderIngreso[7], orderIngreso[8],
      //                   orderIngreso[9],orderIngreso[11],orderIngreso[10],orderIngreso[12],
      //                   orderIngreso[13],orderIngreso[14],
      //                   orderIngreso[15],orderIngreso[16]);
      //                   console.log(res.data.resumen)
      this.arrIngresosAgosto = res.data.resumen;
     

      this.arrDetalleAgosto = res.data.detalle;

      //this.loadingVisible = false;
    });
  }

  getIDMSeptiembre(){
    this.ingresosService.getIngresosDetalladosMensualSep().subscribe(res => {

      this.arrIngresosSeptiembre = res.data.resumen;
  
      this.arrDetalleSeptiembre = res.data.detalle;

      //this.loadingVisible = false;
    });
  }

  getIDMOctubre(){
    this.loadingVisible = true;
    this.ingresosService.getIngresosDetalladosMensualOct().subscribe(res => {

      this.arrIngresosOctubre = res.data.resumen;
  
      this.arrDetalleOctubre = res.data.detalle;

      this.loadingVisible = false;
    });
  }


  onRowPrepared(e: any) {
    
    if (e.rowType == 'data') {

      e.cells.forEach((c: any) => {

        // if (c.value && c.value.toString().startsWith('-')) {
        //   c.cellElement.style.color = "red";
        // }

        if (c.cellElement) {
          // if (c.columnIndex == 15){
          //   c.cellElement.style.fontWeight = "bolder";
          //   c.cellElement.style.fontSize = "15px";
          //   c.cellElement.style.background = "#f5f5f5";
          // }
        }
      });
    }

    if (e.rowType == 'group') {


      e.cells.forEach((c: any) => {

          //poner en rojo negativos
          if (c.summaryCells && c.summaryCells[6][0].value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
          }

          //negrita columna margen utilidad
          if (c.columnIndex == 9  || c.columnIndex == 12) {
            //c.cellElement.style.fontWeight = "bolder";
            //c.cellElement.style.fontSize = "14px";
            //c.cellElement.style.background = "#f5f5f5";
            //c.cellElement.style.color = "red";
          }

          
        });

  }
}

onRowPreparedOct(e: any) {
    
  if (e.rowType == 'data') {

    e.cells.forEach((c: any) => {

      if (c.value && c.value.toString().startsWith('-')) {
        c.cellElement.style.color = "red";
      }

      if (c.cellElement) {
        if(c.columnIndex == 2){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
        }

        if(c.columnIndex == 3){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
        }

        if(c.columnIndex == 4){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
        }

        if(c.columnIndex == 5){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
        }

        if(c.columnIndex == 6){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
        }

        if(c.columnIndex == 7){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

        if(c.columnIndex == 11){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }

        if (c.columnIndex == 15){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#cdcbcb";
        }


      }
    });
  }

  if (e.rowType == 'totalFooter') {
    e.cells.forEach((c: any) => {

      if(c.columnIndex == 7){
        c.cellElement.style.fontWeight = "bolder";
        c.cellElement.style.fontSize = "15px";
        // c.cellElement.style.background = "#cdcbcb";
      }

      if(c.columnIndex == 11){
        c.cellElement.style.fontWeight = "bolder";
        c.cellElement.style.fontSize = "15px";
        // c.cellElement.style.background = "#cdcbcb";
      }

      if(c.columnIndex == 15){
        c.cellElement.style.fontWeight = "bolder";
        c.cellElement.style.fontSize = "15px";
        // c.cellElement.style.background = "#cdcbcb";
      }


    });
  }

}

onCellPreparedOct(e: any){

  if (e.rowType === 'groupFooter'){

    e.cellElement.style.background = "#cdcbcb";

    if(e.columnIndex == 2){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 3){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 4){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.row.summaryCells[4][0].value.toString().startsWith('-')) {
        e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 5){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.row.summaryCells[5][0].value.toString().startsWith('-')) {
        e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 6){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.row.summaryCells[6][0].value.toString().startsWith('-')) {
        e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 7){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
      e.cellElement.style.color = "#ff0000";

      if (e.row.summaryCells[7][0].value.toString().startsWith('-')) {
      e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 8){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 9){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 10){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 11){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
    }

    if(e.columnIndex == 12){
      if (e.row.summaryCells[12][0].value.toString().startsWith('-')) {
        e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 14){
      if (e.row.summaryCells[14][0].value.toString().startsWith('-')) {
        e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 15){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
      e.cellElement.style.background = "#cdcbcb";
    }    
    
  }

  if (e.rowType == 'totalFooter') {
    if(e.columnIndex == 2){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 3){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    } 

    if(e.columnIndex == 4){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.summaryItems[0].value.toString().startsWith('-')) {
         e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 5){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.summaryItems[0].value.toString().startsWith('-')) {
         e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 6){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";

      if (e.summaryItems[0].value.toString().startsWith('-')) {
         e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }

    if(e.columnIndex == 7){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 8){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 9){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 10){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 11){
      e.cellElement.style.fontWeight = "bolder";
      e.cellElement.style.fontSize = "15px";
    }

    if(e.columnIndex == 14){
      if (e.summaryItems[0].value.toString().startsWith('-')) {
         e.cellElement.querySelector(".dx-datagrid-summary-item").style.color = '#ff0000';
      }
    }


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

customizeOct(e) {  
  var gridCell = e.gridCell;
  if (gridCell.rowType === 'data') {

    if(e.gridCell.column.dataField !== 'tipoOperacion'){
      var x = Math.round(e.value)

      var myvalue = Math.trunc(x);
      var myFormat = myvalue.toString().split(".");
      myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      e.value = '$ '+myFormat;
    }

    if(e.gridCell.column.dataField == "facturadoProvision"){
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }

    if(e.gridCell.column.dataField == "refacturado"){
      e.fontWeight = "bolder"
      e.font = {bold: true}
    }

    if(e.gridCell.column.dataField == "cancelacionProvision"){
      e.fontWeight = "bolder"
      e.font = {bold: true}

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maSolicitudCancelacion"){
      e.fontWeight = "bolder"
      e.font = {bold: true}

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maCancelacionOtros"){
      e.fontWeight = "bolder"
      e.font = {bold: true}

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maTotal"){
      e.backgroundColor = "#DCDCDC";
      e.fontWeight = "bolder"
      e.font = {bold: true}

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "totalFlete"){
      e.backgroundColor = "#DCDCDC";
    }

    if(e.gridCell.column.dataField == "maTotal2"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "notasCredito"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "total"){
      e.backgroundColor = "#DCDCDC";
    }
  }

  if (gridCell.rowType === 'groupFooter') {
    
    e.backgroundColor = "#DCDCDC";
    e.fontWeight = "bolder"
    e.font = {bold: true}

    if(e.gridCell.column.dataField == "cancelacionProvision"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maSolicitudCancelacion"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maCancelacionOtros"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maTotal"){
      e.backgroundColor = "#DCDCDC";

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maTotal2"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "notasCredito"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

  }

  if (gridCell.rowType === 'totalFooter') {
      
    e.backgroundColor = "#ff9460";
    e.fontWeight = "bolder"
    e.font = {bold: true}

    if(e.gridCell.column.dataField == "cancelacionProvision"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maSolicitudCancelacion"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maCancelacionOtros"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maTotal"){
      // e.backgroundColor = "#DCDCDC";

      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "maTotal2"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }

    if(e.gridCell.column.dataField == "notasCredito"){
      if(e.gridCell.value.toString().startsWith('-')){
        e.font.color = '#ff0000'
      }
    }
  }
}


Actualizar(e: any){
  this.loadingVisible = true;
  this.getIDMMarzo();
  this.getIDMAbril();
  this.getIDMMayo();
  this.getIDMJunio();
  this.getIDMJulio();
  this.getIDMAgosto();
  this.getIDMSeptiembre();
  this.getIDMOctubre();
}

formating(value){
  var myvalue = Math.trunc(value);

  var myFormat = myvalue.toString().split(".");
  myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  

  return "$ "+myFormat.join("");
}

}