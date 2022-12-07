import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

import { BalanzaService } from '../../services/balanza/balanza.service';
import { CentroCostos } from '../../shared/models/balanza/centroCostos.model';
import { Balanza } from '../../shared/models/balanza/balanza.model';
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

  unidadesNegocio: UnidadesNegocioModel[] = [];
  centroCostos: CentroCostos[] = [];

  selectedFechaI: any;
  selectedFechaF: any;
  selectedCompania: any;
  selectedUdN: any;
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

  companias: CompaniaModel[] =[
    {idComp:1, compania: 'TRANSPORTES BONAMPAK'},
    {idComp:2, compania: 'TRANSPORTADORA ESPECIALIZADA INDUSTRIAL'},
    {idComp:3, compania: 'TRANSPORTE DE CARGA GEMINIS'}
  ]


  maxDate: Date = new Date();
  now: Date = new Date();

  constructor(
    private balanzaService: BalanzaService
    ) {
  }


  ngOnInit(): void {
    this.getCC();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getUnidadesNegocio() {
    this.balanzaService.getUnidadesNegocio().subscribe(res => {
      if(this.selectedCompania == 1){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[0],orderdata[1],orderdata[2],orderdata[3],
            orderdata[4]);
        this.unidadesNegocio = neworderdata;  
      }else if(this.selectedCompania == 2){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[5]);
        this.unidadesNegocio = neworderdata;
      }else if(this.selectedCompania == 3){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[6]);
        this.unidadesNegocio = neworderdata;
      }

    });

  }

  getCC(){
    this.balanzaService.getCostosCC().subscribe(data => {
      this.centroCostos = data.data;
    })
  }
  //=================SELECTS========================
  
  selectFechaI(e: any) {
    console.log(e.value)
    this.selectedFechaI = e.value;
  } 
  
  fechaVal: boolean
  selectFechaF(e: any){
    this.selectedFechaF = e.value;

    if(this.selectedFechaI >= this.selectedFechaF){
      alert('entre')
      this.fechaVal == true;
    }
  } 

  selectCompania(e: any){
    this.selectedCompania = e.value;
    console.log(this.selectedCompania)
    this.getUnidadesNegocio();
  } 

  selectUdN(e: any){
    this.selectedUdN = e.value;
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


