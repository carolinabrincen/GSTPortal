import { Component, OnInit } from '@angular/core';
import { AniosModel, MesesModel } from 'src/app/shared/models/rentabilidad-contable/renta-contable.model';
import { costos } from 'src/app/shared/models/costos/costos.model';
import { detalleCostosModel } from 'src/app/shared/models/costos/costos.model';
import { CostosService } from 'src/app/services/costos/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent implements OnInit {

  arrMeses: MesesModel[] = [
    { idMes: 1, nombre: 'ENERO' },
    { idMes: 2, nombre: 'FEBRERO' },
    { idMes: 3, nombre: 'MARZO' },
    { idMes: 4, nombre: 'ABRIL' },
    { idMes: 5, nombre: 'MAYO' },
    { idMes: 6, nombre: 'JUNIO' },
    { idMes: 7, nombre: 'JULIO' },
    { idMes: 8, nombre: 'AGOSTO' },
    { idMes: 9, nombre: 'SEPTIEMBRE' },
    { idMes: 10, nombre: 'OCTUBRE' },
    { idMes: 11, nombre: 'NOVIEMBRE' },
    { idMes: 12, nombre: 'DICIEMBRE' }
  ];
  arrAnos: AniosModel[] = [
    { idAnio: 2022, anio: "2022" },
    { idAnio: 2021, anio: "2021" },
  ];

  mesSeleccionado: number = 0;
  anioSeleccionado: number = 0;

  arrCostos: detalleCostosModel[] = [];

  constructor(private service: CostosService) { 
    this.verDetallesClick = this.verDetallesClick.bind(this);
  }

  ngOnInit(): void {
  }

  seleccionarMes(e: any) {
    this.mesSeleccionado = e.value;
    
  }

  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;
    
  }

  verDetallesClick(e: any) {
    // this.loadingVisible = true;
    console.log(this.mesSeleccionado);
    console.log(this.anioSeleccionado);
      this.service.getCostosMes(this.mesSeleccionado, this.anioSeleccionado).subscribe((response) => {
    
        // this.arrCostos = response.data.costos;
        
        console.log(response.data);
        // this.loadingVisible = false;
      });
   


   
  }
}
