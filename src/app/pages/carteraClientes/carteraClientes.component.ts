import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DxSelectBoxComponent, DxFormComponent} from 'devextreme-angular';

import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';

import { Cartera } from '../../shared/models/carteraClientes/cartera';
import { CarteraClientes } from '../..//shared/models/carteraClientes/carteraClientes';
import { Detalle } from '../../shared/models/carteraClientes/detalle';

import { CarteraClientesService } from '../../services/carteraClientes/carteraCliente.service';
import Validator from 'devextreme/ui/validator';
import { StorageService } from '../../shared/services/storage.service';
import notify from 'devextreme/ui/notify';

@Component({
  templateUrl: './carteraClientes.component.html',
  styleUrls: ['./carteraClientes.component.scss'],
})
export class CarteraClientesComponent implements OnInit {

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

  carteraClientes: CarteraClientes[] = [];
  carteraMI: CarteraClientes[] = [];
  carteraInfo: any;


  detalle: Detalle[] = [];

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

  buttonOptions: any = {
    text: 'Guardar',
    type: 'success',
    useSubmitBehavior: true,

  };

  buttonOptionsVariables: any;
  buttonOptionsPre: any;
  positionOf: string = '#myDiv';

  formCierre: any = {
    usuario: "",
    contrasenia: "",

  }
  buttonOptionsCancelar: any
  bolFormSoloLectura = false;
  
  passwordOptions: any = {
    mode: 'password',
    // onValueChanged: () => {
    //   let editor = this.form.instance.getEditor('ConfirmPassword');
    //   if (editor.option('value')) {
    //     let instance = Validator.getInstance(editor.element()) as Validator;
    //     instance.validate();
    //   }
    // },
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: 'assets/ojo.png',
          type: 'default',
          onClick: () => this.changePasswordMode('Contraseña'),
        },
      },
    ],
  };

  changePasswordMode = (name) => {
    let editor = this.form.instance.getEditor(name);
    editor.option(
      'mode',
      editor.option('mode') === 'text' ? 'password' : 'text',
    );
  };

  
  constructor(
    private carteraClientesService: CarteraClientesService,
    private storageService: StorageService
    ) {
      const that = this;

        this.buttonOptionsCancelar= {
          text: 'Cancelar',
          type: 'danger',
          onClick(e: any) {
            that.modPeriodo = false;
          },
        };
      }



  ngOnInit(): void {
    this.getCarteraDetalle();
    this.getPeriodo();
    this.getUserName();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getCarteraDetalle(){
    const request = new Promise((resolve, reject) => {
      this.carteraClientesService.getCarteraDetalle().subscribe(data => {
        this.detalle = data.data;
        console.log(this.detalle)

        this.loadingVisible = false;
      })
    });
    return request;
  }

  getPeriodo(){
    this.carteraClientesService.getPeriodoActual().subscribe(data => {
      this.periodoActual = data.data;
      console.log(data)
    })
  }

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


  postCarteraCliente(){
    this.carteraClientesService.postCarteraCliente(this.selectedPeriodo, this.selectedBoxCartera).subscribe(data => {
      

      if(data.data != undefined || data.data != null){

        var conCarta = new Intl.NumberFormat().format(data.data.facturasConCarta);
        var sinCarta = new Intl.NumberFormat().format(data.data.facturasSinCarta);
        var total = new Intl.NumberFormat().format(data.data.facturasTotal);

        data.data.facturasConCarta = conCarta;
        data.data.facturasSinCarta = sinCarta;
        data.data.facturasTotal = total;
        
      }

      console.log(data.data)

      this.carteraClientes = data.data.carteraMensual;
      this.carteraClientes.sort((a, b) => (a.cliente < b.cliente ? -1 : 1));

      this.carteraMI = data.data.carteraMensualIntercompanias;

      this.carteraInfo = data.data

      this.loadingVisible = false;
    })
  }

  username: string
  getUserName(){
    this.username = this.storageService.getSession("username");

    console.log(this.username)
  }

  guardarCotizacionClick(e) {
    e.preventDefault();

    this.loadingVisible = true;

    this.carteraClientesService.postCierreCartera(this.username, this.formCierre.Contraseña).subscribe(data =>{
      console.log(data)

      if (data.responseCode === 200) {

        if(data.data == "¡Cierre exitoso!"){
          notify({
            message: data.data,
            position: {
              my: 'center center',
              at: 'center center',
            },
          }, 'success', 3000);
  
          this.modPeriodo = false;
          this.bolFormSoloLectura = false;
          this.loadingVisible = false;
          
        }else if(data.data == "¡Usuario inválido o contraseña incorrecta!"){
          notify({
            message: data.data,
            position: {
              my: 'center center',
              at: 'center center',
            },
          }, 'warning', 3000);

          this.loadingVisible = false;
        }
        
        
      } else {
        notify({
          message: "No se puedo completar el cierre",
          position: {
            my: 'center center',
            at: 'center center',
          },
        }, 'error', 3000);

        this.loadingVisible = false;
      }
    })
   
  }

  ActuaizarDetalle(){
    this.getCarteraDetalle();
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

      this.postCarteraCliente();
    }

  };

  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }

  onRowPreparedCC(e: any){
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

  onCellPreparedCC(e: any){
    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

  onRowPreparedCMI(e: any){
    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = 'black';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
    }
  }

  onCellPreparedCMI(e: any){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }

    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "16px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
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


  if (gridCell.rowType === 'totalFooter') {
      
    e.backgroundColor = "#ff9460";
    e.fontWeight = "bolder"
    e.font = {bold: true}

  }
  }

  onRowPreparedD(e){

    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
      else {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
    }

  }

  onCellPreparedD(e){
    if (e.rowType == 'group'){

      e.cellElement.style.fontSize = '12px';
      e.cellElement.style.background = "#DCDCDC";
    }

    if (e.rowType == 'totalFooter') {
      e.totalItem.cells.forEach((c: any) => {
        if (c.cellElement) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "14px";
            c.cellElement.style.background = "#ff9460";
            c.cellElement.style.color = "black"; 
        }   
      });
    }
  }

//==================Formato a la data de la grafica==================================
  formatSliderTooltip (value) {
    
    return Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(value);
  }

//==================Formato solo comas===============================================  
  separator(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return '$ '+myFormat.join("");
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }

  customizeDate(data) {
    data = "SUMA TERCEROS"
    return data;
  }

  customizeIC(data){
    data = "SUMA INTERCOMPAÑIAS "
    return data;
  }

  customizeDateDetalle(data) {
    data = "TOTAL"
    return data;
  }

  separatorcon(value) {
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return '$ '+myFormat.join("");
  }

  changePeriodoClick() {
    this.modPeriodo = true;
  }

  Cancelar(e){
    console.log(e)
    this.modPeriodo = false;
  }
}


