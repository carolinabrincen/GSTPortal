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

  constructor(private ingresosService: ServiceSales) 
  {
    this.ingresosService.getIngresosDetallados().subscribe(res => {
      console.log(res.data);
      this.arrIngresos = res.data.resumen;
      this.arrDetalle = res.data.detalle;
      console.log(this.arrIngresos);
      console.log(this.arrDetalle);
    });
  }

  ngOnInit(): void {
  }

}

