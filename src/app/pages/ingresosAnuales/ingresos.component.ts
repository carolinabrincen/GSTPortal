import { ReportsPDFService } from './../../shared/reports/reports-pdf.service';
import { CotizadorService } from './../../services/cotizador/cotizador.service';
import { ServiceSales } from '../tasks/app.serviceSales';
import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Component, OnInit } from '@angular/core';
import { IngresosDModel } from 'src/app/shared/models/ingresos/ingresosD.models';
import { DetalleModel } from 'src/app/shared/models/ingresos/detalle.models';

@Component({
  
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})

export class IngresosComponent implements OnInit {
  
  
  arrIngresos: IngresosDModel[] = [];
  arrDetalle: DetalleModel[] = [];

  ingresosServ!: ServiceSales;

  constructor( private ingresosService: ServiceSales) {

    //this.getIngresos();

    this.ingresosService.getIngresosDetallados().subscribe(res => {
      console.log(res.data);

    });
  }

  ngOnInit(): void {
    //this.getIngresos();
  }

  //#region :::: GETTERS ::::
  getIngresos(){
    

    this.ingresosService.getIngresosDetallados().subscribe(res => {
      console.log(res.data);

    });

  }

  


}
