import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

import { BalanzaService } from '../../services/balanza/balanza.service';
import { CentroCostos } from '../../shared/models/balanza/centroCostos.model';
import { Balanza } from '../../shared/models/balanza/balanza.model';
import { Compania } from '../../shared/models/balanza/compania.model';
import { UnidadNegocio } from '../../shared/models/balanza/udn.model';
import { Tipos } from '../../shared/models/balanza/tipos.model';
import { Clases } from '../../shared/models/balanza/clases.model';

@Component({
  templateUrl: './balanza.component.html',
  styleUrls: ['./balanza.component.scss'],
})  
export class BalanzaComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  gridBalanza: Balanza[] = [];
  gridDetalle: any[] = [];

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  selectedFechaI: any;
  selectedFechaF: any;
  selectedCompania: any;
  selectedUdN: any;
  selectedTiposCostos: any;
  selectedClasesCostos: any;
  selectedCostos: any;

  modDetalle: boolean = false;

  positionOf: string = '#myDiv';
  
  anio: AniosModel[] = [
    { idAnio: 2022, anio: "2022" }
  ];

  meses: MesesModel[] = [
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

  companias: Compania[] =[]
  unidadesNegocio: UnidadNegocio[] = [];
  tiposCostos: Tipos[] = [];
  clasesCostos: Clases[] = [];
  centroCostos: CentroCostos[] = [];

  maxDate: any;
  now: Date = new Date();

  isVisible = false;
  type = 'info';
  message = '';

  constructor(
    private balanzaService: BalanzaService
    ) {
    }


  ngOnInit(): void {
    this.getCompanias();
    this.getTipoCostos();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getCompanias(){
    this.balanzaService.getCompanias().subscribe(data => {
      this.companias = data.data;
    })
  }

  getUnidadesNegocio(id) {
    const request = new Promise((resolve, reject) => {
      this.balanzaService.postUnidadesNegocio(id).subscribe(data =>{
        this.unidadesNegocio = data.data;
      })
    });
    return request;

  }

  getTipoCostos(){
    this.balanzaService.getTipoCostos().subscribe(data =>{
      this.tiposCostos = data.data;
      console.log(this.tiposCostos)
    })
  }

  postClasesCostos(id){
    const request = new Promise((resolve, reject) => {
      this.balanzaService.postClasesCostos(id).subscribe(data =>{
        this.clasesCostos = data.data;
      })
    });
    return request;

  }

  getCC(tipos, clase){
    const request = new Promise((resolve, reject) => {

      this.balanzaService.postCostosCC(tipos, clase).subscribe(data =>{
        this.centroCostos = data.data;
        console.log(this.centroCostos)
      })
    });
    return request;
  }
  //=================SELECTS========================
  
  selectFechaI(e: any) {
    console.log(e.value)
    this.selectedFechaI = e.value;
  } 
  
  selectFechaF(e: any){
    this.selectedFechaF = e.value;

    if(this.selectedFechaI >= this.selectedFechaF){
      this.isVisible = true;
    }
  } 

  selectCompania(e: any){
    this.selectedCompania = e.value;

    this.getUnidadesNegocio(this.selectedCompania)
  } 

  selectUdN(e: any){
    this.selectedUdN = e.value;
  } 

  selectTiposCostos(e: any){
    this.selectedTiposCostos = e.value;

    this.postClasesCostos(this.selectedTiposCostos)
  }

  selecttClasesCostos(e: any){
    this.selectedClasesCostos = e.value;

    var tipo = this.selectedTiposCostos;
    var clase =  this.selectedClasesCostos
    console.log(tipo, clase)
    this.getCC(this.selectedTiposCostos, this.selectedClasesCostos)
  }

  selectCostos(e: any){
    this.selectedCostos = e.value;
  }
  
  buscarClick = (e: any) => {
    // if (this.selectedClasficacion !==  undefined) {
      this.loadingVisible = true;
      this.postBalanza().then(() => {
        this.loadingVisible = false;
      });
    // }

  };

  postBalanza(){
    const request = new Promise((resolve, reject) => {
      var mes = 1;
      var anio = 2022;
      var compania = 1;
      var udn = 1;
      var costos = 2;

      this.balanzaService.postBalanza(mes, anio, compania, udn, costos).subscribe(data =>{
        this.gridBalanza = data.data;
        this.gridBalanza.sort((a, b) => (a.cuenta < b.cuenta ? -1 : 1));
        this.loadingVisible = false;
      })
    });
    return request;
  }

  onRowPrepared(e:any){

  }

  onRowPreparedDetalle(e:any){

  }
  
  verDetallesClick(e: any) {
    this.modDetalle = true;

  }
}


