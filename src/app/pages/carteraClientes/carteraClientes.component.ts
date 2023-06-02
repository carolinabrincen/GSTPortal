import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';

import { Cartera } from '../../shared/models/carteraClientes/cartera';
import { CarteraClientes } from '../..//shared/models/carteraClientes/carteraClientes';

@Component({
  templateUrl: './carteraClientes.component.html',
  styleUrls: ['./carteraClientes.component.scss'],
})
export class CarteraClientesComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  costosAnuales: CostosAnuales[] = [];

  col: string = '50';


  boxCartera: Cartera[] = [
    { id: 1, cartera: "ATM" },
    { id: 2, cartera: "GEMINIS" },
    { id: 3, cartera: "TBK" },

  ];

  carteraClientes: CarteraClientes[] = [
    {nombreCliente: 'AIRPAC', corriente: 0, dias1A30: 0, dias31A60: 30662.02, dias61A90: 0, mayorA90: 0, total: 30662.02},
    {nombreCliente: 'BEST LOGISTIC SERVICES', corriente: 29139.26, dias1A30: 29139.26, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 58278.52},
    {nombreCliente: 'BEBIDAS INTERNACIONAES BEPENSA', corriente: 143360.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 143360.00},
    {nombreCliente: 'CAB LOGISTIC', corriente: 108039.48, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 108039.48},
    {nombreCliente: 'CADENA COMERCIAL OXXO', corriente: 23200.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 23200.00},
    {nombreCliente: 'CEMENTOS MOCTEZUMA', corriente: 2771672.13, dias1A30: 220685.34, dias31A60: 93517.66, dias61A90: 0, mayorA90: 0, total: 3085875.13},
    {nombreCliente: 'CERVECERIA CUAUHTEMOC MOCTEZUMA', corriente: 27104.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 27104.00},
    {nombreCliente: 'CERVECERIA MODELO DE MEXICO', corriente: 90720.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 90720.00},
    {nombreCliente: 'DXT LOGISTICA', corriente: 67200.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 67200.00},
    {nombreCliente: 'EUCOMEX', corriente: 405593.80, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 405593.80},
    {nombreCliente: 'ENVASES UNIVERSALES', corriente: 0, dias1A30: 29344.00, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 29344.00},
    {nombreCliente: 'FWD LOGISTICA', corriente: 0, dias1A30: 37408.00, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 37408.00},
    {nombreCliente: 'GRUPO PGL MEXICO', corriente: 988400.00, dias1A30: 125440.00, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 1113840.00},
    {nombreCliente: 'GRUPO ILIMEX', corriente: 28000.00, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 28000.00},
    {nombreCliente: 'KLS', corriente: 208320.00, dias1A30: 35840.00, dias31A60: 1.12, dias61A90: 0, mayorA90: 0, total: 244161.12},
    {nombreCliente: 'LA MADRILEÑA', corriente: 46017.68, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 46017.68},
    {nombreCliente: 'LUIS EDUARDO ARELLANO VALDEZ', corriente: 0, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 60320.00, total: 60320.00},
    {nombreCliente: 'OWENS AMERICA', corriente: 53180.96, dias1A30: 43376.48, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 96557.44},
    {nombreCliente: 'PRODUCTOS UVA', corriente: 180549.60, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 180549.60},
    {nombreCliente: 'SOLBE LOGISTICA', corriente: 73032.96, dias1A30: 0, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 73032.96},
    {nombreCliente: 'SALES DEL VALLE', corriente: 0, dias1A30: 101329.76, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 101329.76},
    {nombreCliente: 'VIDRIO PLANO DE MEXICO', corriente: 78400.00, dias1A30: 39200.00, dias31A60: 0, dias61A90: 0, mayorA90: 0, total: 117600.00},
    {nombreCliente: 'SUMA TERCEROS', corriente: 5321932.87, dias1A30: 632623.58, dias31A60: 153230.06, dias61A90: 0, mayorA90: 60320.00, total: 6168196.51},
    {nombreCliente: 'AVANCE AL 07 DE ABRIL', corriente: 382562.92, dias1A30: 220685.35, dias31A60: 124179.68, dias61A90: 0, mayorA90: 0, total: 0},
    {nombreCliente: 'PORCENTAJE DE AVANCE', corriente: 7, dias1A30: 35, dias31A60: 81, dias61A90: 0, mayorA90: 0, total: 0},

  ]

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;


  selectedBoxCartera: number = 0;

  modeSearch: 'true' | 'false' = 'false';

  isVisible = false;


  constructor(
    private costosAnualesService: CostosAnualesService,
    ) {

  //===========chart===================

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  // getCACostos(){
  //   const request = new Promise((resolve, reject) => {
  //     this.costosAnuService.postCACostos(this.anioSeleccionado, this.udnSeleccionado).subscribe(data => {
  //       this.CACostos = data.data;
  //     })
  //   });
  //   return request;
  // }

  //=================SELECTS========================

  selectBoxCartera(e: any) {
    this.selectedBoxCartera = e.value;
  }



  callCostosAnuales() {
    const request = new Promise((resolve, reject) => {
      // this.getCATPS();
      // this.getCACostos();
      // this.getCAAuxiliar();
    });
    return request;
  }


  borrarClick = (e: any) =>{
    this.selectTracto.value = '';
  }

  
  buscarClick = (e: any) => {
    // if (this.selectedClasficacion !==  undefined) {
    //   this.loadingVisible = true;
    //   this.modeSearch = 'true'

    //   this.totalesProvisiones = new Provisiones
    //   this.totalesOtrosGO = new OtrosGastosOperacion
    //   this.totalesOtrosGIE = new OtrosGastosIngresosEstraordinarios
    //   this.totalesOtros = new Otros
    //   this.totalesOperacion = new TotalesOperacion
    //   this.totalesOGIO = new OtrosGastosIngresosOrdonarios
    //   this.totalesGIF = new GastosIngresosFinancieros
    //   this.totales  = new Totales0

    //     // console.log('entre : '+this.totales.totalER)

    //   this.callCostosAnuales().then(() => {
    //     this.loadingVisible = false;
    //   });
    // }

  };

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onContentReady(e: any) {

    this.loadingVisible = false;

  }

  onHidden() {
  }

  onRowPreparedCAER(e: any){
    if (e.rowType == 'data') {
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          if (c.value && c.value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
            c.cellElement.style.fontWeight = "bolder";
          }
        }



      });
    }

    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
     
    }
  }

  onCellPreparedCAER(e: any){
    if (e.rowType == 'data') {

      // if(e.colum.caption == 'Total'){
        console.log(e)
      //}

    }
  }

//====================personalize style excel========================================
  customizeCAER(e) {  
    var gridCell = e.gridCell;
    if (gridCell.rowType === 'data') {
    
    }
  }

//==================Formato a la data de la grafica==================================
  formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
  }

//==================Formato solo comas===============================================  
  separator(value) {
      var str = value.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }



}


