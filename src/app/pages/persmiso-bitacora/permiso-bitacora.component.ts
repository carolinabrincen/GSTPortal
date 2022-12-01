import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  templateUrl: './permiso-bitacora.component.html',
  styleUrls: ['./permiso-bitacora.component.scss'],
})
export class PermisoBitacoraComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  portalGST: any[] = [];
  gerencialGST: any[] = [];
  bitacora: any[] = [];


  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();


  usuarios: any[] = [
    { id: 1, usuario: "Marco" }
    // { idAnio: 2021, anio: "2021" },
  ];

  tipo: any[] = [
    { id: 1, tipo: '' },
  ];

  portal: any[] = [
    { id: 1, portal: 'Portal GST' },
    { id: 2, portal: 'Gerencial GST' },
  ];


  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  selectedUsuarios: any;
  selectedTipo: any;
  selectedPortal: any;
  selectedCompania: number = 0;

  objTracto: any;
  objRentabilidad: any;

  closeButtonOptions: any;
  printButtonOptions: any;
  positionOf: string = '#myDiv';
  promedioPonderado: number = 0;

  constructor(
    ) {

  }


  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  //=================GETS===========================

  //=================SELECTS========================
  selectUsuarios(e: any) {
    this.selectedUsuarios = e.value;
  }

  selectTipo(e: any) {
    this.selectedTipo = e.value;
  }

  selectPortal(e: any) {
    this.selectedPortal = e.value;
  }


  callCostosAnuales() {
    const request = new Promise((resolve, reject) => {
      // this.costosAnuService.postEdoResult(this.anioSeleccionado, this.selectedCompania, this.udnSeleccionado, this.mesSeleccionado, this.selectedClasficacion).subscribe(data =>{
       
      // })
    });
    return request;
  }
  
  buscarClick = (e: any) => {
    // if (this.selectedClasficacion !==  undefined) {
    //   this.loadingVisible = true;

    //     // console.log('entre : '+this.totales.totalER)

    //   this.callCostosAnuales().then(() => {
    //     this.loadingVisible = false;
    //   });
    // }

  };

  onRowPrepared(e: any) {

    // if (e.rowType == 'data') {
    //   e.cells.forEach((c: any) => {
    //     if (c.cellElement) {
    //       //poner en rojo negativos
    //       if (c.value && c.value.toString().startsWith('-')) {
    //         c.cellElement.style.color = "red";
    //       }
    //       //porcentaje de combistuble > .25 en rojo
    //       if (c.columnIndex == 16 && c.value >= .25) {
    //         c.cellElement.style.color = "red";
    //       }
    //     }
    //   });
    // }

    // if (e.rowType == 'group') {
    //   //====Agregando estilos a la agrupacion=========================================
    //   if (e.groupIndex == 0) {
    //     e.rowElement.style.backgroundColor = '#ff9460';
    //     e.rowElement.style.color = "white";
        
    //   }
    //   else {
    //     e.rowElement.style.backgroundColor = '#dcdcdc';
    //     e.rowElement.style.color = "black";
    //     e.rowElement.style.fontWeight = "bolder";
    //   }
    // }


  }

}


