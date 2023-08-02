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
  }

  getIDMMarzo(){
    this.ingresosService.getIngresosDetalladosMensualMar().subscribe(res => {
      this.arrIngresosMarzo = res.data.resumen;
      this.arrDetalleMarzo = res.data.detalle;
    });
  }
 
  getIDMAbril(){
    this.ingresosService.getIngresosDetalladosMensualAbr().subscribe(res => {
      this.arrIngresosAbril = res.data.resumen;
      this.arrDetalleAbril = res.data.detalle;
    });
  }

  getIDMMayo(){
    this.ingresosService.getIngresosDetalladosMensualMay().subscribe(res => {
      this.arrIngresosMayo = res.data.resumen;
      this.arrDetalleMayo = res.data.detalle;
    });
  }

  getIDMJunio(){
    this.ingresosService.getIngresosDetalladosMensualJun().subscribe(res => {
      this.arrIngresosJunio = res.data.resumen;
      this.arrDetalleJunio = res.data.detalle;
    });
  }
  
  getIDMJulio(){
    this.ingresosService.getIngresosDetalladosMensualJul().subscribe(res => {
      this.arrIngresosJulio = res.data.resumen;
      this.arrDetalleJulio = res.data.detalle;

      this.loadingVisible = false;
    });
  }

  getIDMAgosto(){
    this.ingresosService.getIngresosDetalladosMensualAgo().subscribe(res => {
      this.arrIngresosAgosto = res.data.resumen;
      this.arrDetalleAgosto = res.data.detalle;

      this.loadingVisible = false;
    });
  }
  onRowPrepared(e: any) {
    

    // if (e.rowType == 'group') {
    //   if (e.groupIndex == 0) {
    //     e.rowElement.style.backgroundColor = '#ff9460';
    //     e.rowElement.style.color = "white";
    //   }
      
    // }

    if (e.rowType == 'groupFooter') {

      

      e.cells.forEach((c: any) => {

        

          //negrita columna margen utilidad
          if (c.columnIndex == 9  || c.columnIndex == 12) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "14px";
            c.cellElement.style.background = "#f5f5f5";
            c.cellElement.style.color = "red";
          }

          
        });

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