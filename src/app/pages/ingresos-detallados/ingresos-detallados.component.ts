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

  constructor(private ingresosService: ServiceSales) 
  {
    this.ingresosService.getIngresosDetallados().subscribe(res => {
      
      this.arrIngresos = res.data.resumen;
      this.arrDetalle = res.data.detalle;
      
    });

    this.ingresosService.getIngresosDetalladosMarzo().subscribe(res => {
      
      this.arrIngresosMarzo = res.data.resumen;
      this.arrDetalleMarzo = res.data.detalle;
    
    });

    this.ingresosService.getIngresosDetalladosMensual().subscribe(res => {
     
      this.arrIngresosAbril = res.data.resumen;
      this.arrDetalleAbril = res.data.detalle;
     
    });

    this.ingresosService.getIngresosDetalladosMayo().subscribe(res => {
     
      this.arrIngresosMayo = res.data.resumen;
      this.arrDetalleMayo = res.data.detalle;
     
    });

    this.ingresosService.getIngresosDetalladosJunio().subscribe(res => {
     
      this.arrIngresosJunio = res.data.resumen;
      this.arrDetalleJunio = res.data.detalle;
     
    });

    this.ingresosService.getIngresosDetalladosJulio().subscribe(res => {
     
      this.arrIngresosJulio = res.data.resumen;
      this.arrDetalleJulio = res.data.detalle;
     
    });
  }

  ngOnInit(): void {
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

}