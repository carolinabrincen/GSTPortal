import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

import { BalanzaService } from '../../services/balanza/balanza.service';

@Component({
  templateUrl: './balanza.component.html',
  styleUrls: ['./balanza.component.scss'],
})  
export class BalanzaComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  gridBalanza: any[] = [];

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  unidadesNegocio: UnidadesNegocioModel[] = [];
  centroCostos: any[] = [];

  selectedAnio: any;
  selectedMes: any;
  selectedCompania: any;
  selectedUdN: any;
  selectedCostos: any;
  
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

  constructor(
    private balanzaService: BalanzaService
    ) {

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getUnidadesNegocio() {
    this.balanzaService.getUnidadesNegocio().subscribe(res => {
      console.log(res)
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
  //=================SELECTS========================
  selectAnio(e: any) {
    this.selectedAnio = e.value;
  } 
  
  selectMes(e: any){
    this.selectedMes = e.value;
  } 

  selectCompania(e: any){
    this.selectedCompania = e.value;
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
    //   this.loadingVisible = true;

    //     // console.log('entre : '+this.totales.totalER)

    //   this.callCostosAnuales().then(() => {
    //     this.loadingVisible = false;
    //   });
    // }

  };

  onRowPrepared(e:any){
    
  }


}


