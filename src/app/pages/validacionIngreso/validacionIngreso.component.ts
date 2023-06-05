import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent } from 'devextreme-angular';

import { ValidacionIngreso } from '../../shared/models/validacionIngreso/validacionIngreso';

@Component({
  templateUrl: './validacionIngreso.component.html',
  styleUrls: ['./validacionIngreso.component.scss'],
})
export class ValidacionIngresoComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  col: string = '50';

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;


  selectedBoxCartera: number = 0;

  modeSearch: 'true' | 'false' = 'false';

  isVisible = false;

  validacionI: ValidacionIngreso[] = [
    {udn: 'BONAMPAK', numGuia: 1520, cliente: 'MOCTEZUMA', flete: '?'}
  ]


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
       
      //}

    }
  }

//====================personalize style excel========================================
  customizeCAER(e) {  
    var gridCell = e.gridCell;
    if (gridCell.rowType === 'data') {

      if(e.gridCell.column.caption == "Total"){
        e.backgroundColor = "#DCDCDC";
      }

    }

    if (gridCell.rowType === 'header') {
      e.backgroundColor = "#DCDCDC";
    }
  }

  onRowPreparedD(e){

  }

  onCellPreparedD(e){

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

  verDetallesClick(data) {
    var mydata = data.data;
    // this.getDetalleTPS(mydata.renglon)
  }


}


