import { OpcionesModel } from 'src/app/shared/models/kilometros/kilometrosModel';
import {
  NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef,AfterViewInit, OnInit
} from '@angular/core';

import DataGrid from "devextreme/ui/data_grid";
import { IngresosModel } from 'src/app/shared/models/ingresos/ingresos.models';

import {
  DxDataGridComponent,
} from 'devextreme-angular';

import {
  DxChartComponent,
} from 'devextreme-angular';


import { KilometrosService } from 'src/app/services/kilometros/kilometrosService';
import { KilometrosModel } from '../../shared/models/kilometros/kilometrosModel';



@Component({
  selector: 'app-kilometros',
  templateUrl: './kilometros.component.html',
  providers: [KilometrosService]
})
export class KilometrosComponent implements OnInit {

  arrOpciones: OpcionesModel[] = [
    { id: 1, periodo: 'MES ACTUAL' },
    { id: 2, periodo: 'MES ANTERIOR' },
    { id: 3, periodo: 'ANUAL' }
  ];

  showFilterRow: boolean;
  currentFilter: any;
  showHeaderFilter: boolean;

  loadingVisible = false;

  @ViewChild(DxChartComponent, { static: false }) chart: any;

  @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent | undefined;

  pivotGridDataSource: any;

  employee: any;
  treeBoxValue: string[];
  treeDataSource: any;

  dataSource: any;
  arrKilometros: KilometrosModel[] = [];
  
  kms: any;
  kmsGrafica: any;
  viajes: any;
  viajesGrafica: any;
  toneladas: any;
  toneladasGrafica: any;

  isTreeBoxOpened: boolean;
  
  gridDataSource: any;

  gridBoxValue: number[] = [3];

  dataGridInstance!: DataGrid;

  IdUnidadNegocio: number;
  UnidadNegocio: string;
  Anio: number;
 
  

  gridColumns: any = ['unidadNegocio','tipoOperacion', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
 


  constructor(private service: KilometrosService) { 
    // this.getKilometosActual();
  }

  ngOnInit(): void {
  }

  
  getKilometosActual()
  {
      this.service.getKmsActuales().subscribe((response) => {
    
        this.arrKilometros = response.data.kmsMensuales;
        console.log(this.arrKilometros);
    
      });
  }


  clickBuscar = (e: any) => {
      
    this.getKilometosActual();
    
    this.dataGrid?.instance.refresh();
   };

}
