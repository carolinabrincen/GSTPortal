import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent, DxFormComponent} from 'devextreme-angular';
import { Cartera } from '../../shared/models/carteraClientes/cartera';
import { MarcroCicloService } from '../../services/macrociclo/marcrociclo.service'
import { MacroCiclo } from '../../shared/models/macrocilo/macrociclo.model';

import { StorageService } from '../../shared/services/storage.service';
import themes from 'devextreme/ui/themes';
import notify from 'devextreme/ui/notify';
import { ActivatedRoute, Router } from '@angular/router';
import SelectBox from "devextreme/ui/select_box";

@Component({
  templateUrl: './macroCiclo.component.html',
  styleUrls: ['./macroCiclo.component.scss'],
})
export class MarcroCicloCompaniasComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent;
  
  col: string = '50';

  boxCartera: Cartera[] = [
    { id: 0, cartera: 'GST CONSOLIDADO'},
    { id: 1, cartera: "TRANSPORTES BONAMPAK S.A. DE C.V." },
    { id: 2, cartera: "AUTOTRANSPORTE MACUSPANA S.A. DE C.V." },
    { id: 3, cartera: "TRANSPORTADORA ESPECIALIZADA INDUSTRIAL S.A. DE C.V." },
    { id: 4, cartera: "TRANSPORTES DE CARGA GEMINIS S.A. DE C.V." },
    { id: 5, cartera: "GST FLETES Y SERVICIOS S.A. DE C.V." },

  ];

  macroCiclo: MacroCiclo[] = [];
  detalleMacro: any[] = [];

  periodo: any[] = [
    // { id: 1, periodo: 202301 },
    // { id: 2, periodo: 202302 },
    // { id: 3, periodo: 202303 },
    // { id: 4, periodo: 202304 },
    // { id: 5, periodo: 202305 },
    // { id: 6, periodo: 202306 },
    { id: 7, periodo: 202307 },
    { id: 8, periodo: 202308 },
    { id: 9, periodo: 202309 },
    { id: 10, periodo: 202310 },
    { id: 11, periodo: 202311 },
    { id: 12, periodo: 202312 },
  ];

  periodoActual: number;

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;


  selectedBoxCartera: number = 0;

  modeSearch: 'true' | 'false' = 'false';

  isVisible = false;

  selectedPeriodo: number = 0;

  modPeriodo: boolean;

  selectCliente: number;

  modDetalle: boolean;

  constructor(
    private macrocicloService: MarcroCicloService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    ) {

    }



  ngOnInit(): void {
    // this.getCarteraDetalle();
    this.postMacroCiclo()
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================

  //=================SELECTS========================
  printValue = "";
  selectBoxCartera(e: any) {
    this.selectedBoxCartera = e.value;
    if(e.value == 0){
      this.printValue = this.boxCartera[0].cartera
    }
    if(e.value == 1){
      this.printValue = this.boxCartera[1].cartera
    }
    if(e.value == 2){
      this.printValue = this.boxCartera[2].cartera
    }
    if(e.value == 3){
      this.printValue = this.boxCartera[3].cartera
    }
    if(e.value == 4){
      this.printValue = this.boxCartera[4].cartera
    }
    if(e.value == 5){
      this.printValue = this.boxCartera[5].cartera
    }

  }

  printPeriodo = ""
  seleccionarPeriodo(e: any) {
    this.selectedPeriodo = e.value

    if(this.selectedPeriodo == 202307){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO JULIO 2023"
    }
    if(this.selectedPeriodo  == 202308){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO AGOSTO 2023"
    }
    if(this.selectedPeriodo == 202309){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO SEPTIEMBRE 2023"
    }
    if(this.selectedPeriodo == 202310){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO OCTUBRE 2023"
    }
    if(this.selectedPeriodo == 202311){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO NOVIEMBRE 2023"
    }
    if(this.selectedPeriodo == 202312){
      this.printPeriodo = "SALDOS DE CARTERA DEL PERIODO DICIEMBRE 2023"
    }


  }

  selectedClientes(e: any){
    this.selectCliente = e.value
    console.log(this.selectCliente)
  }


  postMacroCiclo(){
    this.loadingVisible = true;
    var anio = 0;
    var mes = 0;
    var udn = [0];
    var tipoOp = [0];

    this.macrocicloService.postMacrociclo(anio, mes, udn, tipoOp).subscribe(data => {
      this.macroCiclo = data.data
        //console.log(data.data)
      
      this.loadingVisible = false;
    })
  }



  ActuaizarDetalle(){
    // this.getCarteraDetalle();
    this.loadingVisible = true;
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
    if (this.selectedPeriodo !==  0 && this.selectedBoxCartera !== undefined) {
      this.loadingVisible = true;
      this.modeSearch = 'true'

      //this.postCarteraCliente();
    }

  };

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }

//====================personalize style excel========================================
  onRowPrepared(e){
    // if (e.rowType == 'group') {
    //   if (e.groupIndex == 0) {
    //     e.rowElement.style.backgroundColor = '#dcdcdc';
    //     e.rowElement.style.color = "black";
    //     e.rowElement.style.fontWeight = "bolder";
    //   }
    //   else {
    //     e.rowElement.style.backgroundColor = '#dcdcdc';
    //     e.rowElement.style.color = "black";
    //     e.rowElement.style.fontWeight = "bolder";
    //   }
    // }

  }

  onCellPrepared(e){
    // if (e.rowType == 'group'){

    //   e.cellElement.style.fontSize = '12px';
    //   e.cellElement.style.background = "#DCDCDC";
    // }

    // if (e.rowType == 'totalFooter') {
    //   e.totalItem.cells.forEach((c: any) => {
    //     if (c.cellElement) {
    //         c.cellElement.style.fontWeight = "bolder";
    //         c.cellElement.style.fontSize = "14px";
    //         c.cellElement.style.background = "#ff9460";
    //         c.cellElement.style.color = "black"; 
    //     }   
    //   });
    // }
  }

  openDetalle(value){
    this.loadingVisible = true;
    var idArea = value.row.data.idArea;
    var ciclo = value.row.data.ciclo;
    
    if(idArea !== undefined && ciclo !== undefined){
    
      this.macrocicloService.postMacrocicloDetalle(idArea, ciclo).subscribe(data =>{
        console.log(data.data)
        this.detalleMacro = data.data
        this.modDetalle = true;
        this.loadingVisible = false;
      })

    }
  }

//==================Formato solo comas===============================================  
  separator(value) {

    // var str = value.toString().split(".");
    // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return str.join(".");

    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return myFormat.join("");
  }

  redondear(value){
    const total = value.toFixed(2);

    return "$ "+total;
  }

}


