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

  constructor(private ingresosService: ServiceSales) 
  {
    this.ingresosService.getIngresosDetallados().subscribe(res => {
      console.log(res.data);
      this.arrIngresos = res.data.resumen;
      this.arrDetalle = res.data.detalle;
      console.log(this.arrIngresos);
      console.log(this.arrDetalle);
    });

    this.ingresosService.getIngresosDetalladosMarzo().subscribe(res => {
      console.log(res.data);
      this.arrIngresosMarzo = res.data.resumen;
      this.arrDetalleMarzo = res.data.detalle;
    
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