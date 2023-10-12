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
        if (c.columnIndex == 15){
          c.cellElement.style.fontWeight = "bolder";
          c.cellElement.style.fontSize = "15px";
          c.cellElement.style.background = "#f5f5f5";
        }
      }
    });
  }

  if (e.rowType == 'group') {
    console.log(e.summaryCells)
  }
}

onCellPreparedOct(e: any){
  if (e.rowType == 'group') {
    //console.log(e.summaryCells)
  }
}

Actualizar(e: any){
  this.loadingVisible = true;
  this.getIDMMarzo();
  this.getIDMAbril();
  this.getIDMMayo();
  this.getIDMJunio();
  this.getIDMJulio();
}
}