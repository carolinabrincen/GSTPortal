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

  area: any[] = [
    {id: 0, area: 'TODOS'}
  ];

  operacion: any[] = [
    {id: 0, operacion: 'TODOS'},
    {id: 1, operacion: 'CAJA SECA'},
    {id: 2, operacion: 'ENCORTINADO'},
    {id: 3, operacion: 'GONDOLA'},
    {id: 4, operacion: 'GRADO ALIMENT'},
    {id: 5, operacion: 'TOLVA GRANEL'},
  ];

  estados: any[] = [
    {id: 1, estado: 'AGS'},
    {id: 2, estado: 'BCN'},
    {id: 3, estado: 'BCS'},
    {id: 4, estado: 'CAMP'},
    {id: 5, estado: 'CHIH'},
    {id: 6, estado: 'CHIS'},
    {id: 7, estado: 'COAH'},
    {id: 8, estado: 'COL'},
    {id: 9, estado: 'DF'},
    {id: 10, estado: 'DGO'},
    {id: 11, estado: 'GRO'},
    {id: 12, estado: 'GTO'},
    {id: 13, estado: 'HGO'},
    {id: 14, estado: 'JAL'},
    {id: 15, estado: 'MEX'},
    {id: 16, estado: 'MICH'}, 
    {id: 17, estado: 'MOR'},
    {id: 18, estado: 'NA'},
    {id: 19, estado: 'NAY'},
    {id: 20, estado: 'NL'},
    {id: 21, estado: 'OAX'},
    {id: 22, estado: 'PUE'},
    {id: 23, estado: 'QR'},
    {id: 24, estado: 'QROO'},
    {id: 25, estado: 'SIN'},
    {id: 26, estado: 'SLP'},
    {id: 27, estado: 'SON'},
    {id: 28, estado: 'TAB'},
    {id: 29, estado: 'TAMP'},
    {id: 31, estado: 'TLAX'},
    {id: 32, estado: 'VER'},
    {id: 33, estado: 'YUC'},
    {id: 34, estado: 'ZAC'}
  ]

  unidadNegoios: any[] = [
    {idUnidad: 0, ciudad: 'TODOS'},
    {idUnidad: 1, ciudad: 'ORIZABA'},
    {idUnidad: 2, ciudad: 'GUADALAJARA'},
    {idUnidad: 3, ciudad: 'RAMOS ARIZPE'},
    {idUnidad: 4, ciudad: 'MEXICALI'},
    {idUnidad: 5, ciudad: 'HERMOSILLO'},
    {idUnidad: 8, ciudad: 'CUAUTITLAN'},
    {idUnidad: 9, ciudad: 'TULTITLAN'},
    {idUnidad: 10, ciudad: 'MIGUEL HIDALGO'},
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

  showFilterRow: boolean;
  currentFilter: any;
  applyFilterTypes: any;

  selectedEstados: string[] = [];
  selectedUdN: number = 0;
  selectedOperacion: string = 'TODOS';

  selectedUdNRuta: number = 0;
  selectedOperacionRuta: string = 'TODOS';

  rutaOrigen: any[] = [];
  rutaDestino: any[] = [];
  rutaClientes: any[] = [];

  clientes: any[] = [];
  rutas: any[] = [];
  viajes: any[] = [];
  
  selectedRutaOrigen: string = "";
  selectedRutaDestino: string = "";
  selectedClientes: string = "";

  constructor(
    private macrocicloService: MarcroCicloService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
        this.showFilterRow = true;


        this.applyFilterTypes = [{
          key: 'auto',
          name: 'Immediately',
        }, {
          key: 'onClick',
          name: 'On Button Click',
        }];
        this.currentFilter = this.applyFilterTypes[0].key;
    }



  ngOnInit(): void {
    // this.getCarteraDetalle();
    //this.getUnidadesNegocio();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  // getUnidadesNegocio() {
  //   this.macrocicloService.getUnidadesNegocio().subscribe(res => {
  //     this.unidadNegoios = res.data;
  //     console.log(this.unidadNegoios)
  //   });

  // }
  //=================SELECTS========================
  selectOperacion(e: any) {
    this.selectedOperacion = e.value;
  }

  selectArea(e: any) {
    this.selectedUdN = e.value;
  }
  
  selectEstado(e: any) {
    this.selectedEstados = e.value;
  }

  selectUdN(e: any){
    this.selectedUdNRuta = e.value;
  }

  selectOperaRuta(e: any){
    this.selectedOperacionRuta = e.value;
  }

  selectClientes(e: any){
    this.selectedClientes = e.value;
  }

  selectRutaOri(e: any){
    this.selectedRutaOrigen = e.value;
    this.postRutaDestino()
  }

  selectRutaDestino(e: any){
    this.selectedRutaDestino = e.value;
  }



  postMacroCiclo(){
    this.loadingVisible = true;
    
    this.macrocicloService.postMacrociclo(this.selectedUdN, this.selectedOperacion, this.selectedEstados).subscribe(data => {
      this.macroCiclo = data.data
        //console.log(data.data)
      
      this.loadingVisible = false;
    })
  }


  postClienteRutaOri(){
    this.macrocicloService.postClienteRutaOri(this.selectedUdNRuta, this.selectedOperacionRuta).subscribe(data =>{
      
      this.rutaOrigen = data.data.rutasOrigen;
      this.rutaClientes = data.data.clientes
      console.log(data.data)
      this.loadingVisible = false;
    });
  }

  postRutaDestino(){
    this.macrocicloService.postRutaDestino(this.selectedUdNRuta, this.selectedOperacionRuta, this.selectedRutaOrigen).subscribe(data => {
      this.rutaDestino = data.data
      console.log(this.rutaDestino)
    })
  }

  postRutas(){
    var operador = ""
    this.macrocicloService.postRutas(this.selectedUdNRuta, this.selectedOperacionRuta, operador, this.selectedClientes, this.selectedRutaOrigen, this.selectedRutaDestino).subscribe(data =>{
      
      this.clientes = data.data.clientes;
      this.rutas = data.data.ruta;
      this.viajes = data.data.rentCiclo;

      console.log(data.data)
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

      this.loadingVisible = true;
      this.modeSearch = 'true'

      this.postMacroCiclo();
  };

  cargarRutaClientes = (e: any) =>{
    this.loadingVisible = true;

    if(this.rutaOrigen.length !== 0){
      let clientes = document.getElementById("selectClientes");
      let instanceClientes = SelectBox.getInstance(clientes) as SelectBox;
      instanceClientes.option("value", "");

      let origen = document.getElementById("selectOrigen");
      let instanceOrigen = SelectBox.getInstance(origen) as SelectBox;
      instanceOrigen.option("value", "");

      let destino = document.getElementById("selectDestino");
      let instanceDestino = SelectBox.getInstance(destino) as SelectBox;
      instanceDestino.option("value", "");
    }

    this.postClienteRutaOri()
  }

  buscarRutas = (e: any) =>{
    this.loadingVisible = true;
    this.postRutas();
  }

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
        this.detalleMacro.sort((a, b) => (a.noViaje < b.noViaje ? -1 : 1));

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

  separatorPesos(value) {

    // var str = value.toString().split(".");
    // str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return str.join(".");

    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return '$ '+myFormat.join("");
  }

  enteros(value){
    var myvalue = Math.trunc(value);

    var myFormat = myvalue.toString().split(".");
    myFormat[0] = myFormat[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    return "$ "+myFormat.join("");
  }

  redondear(value){
    const total = value.toFixed(2);

    return "$ "+total;
  }

  limpiar(){
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate(['./macroCiclo'])
    let udn = document.getElementById("selectUdN");
    let instanceUdn = SelectBox.getInstance(udn) as SelectBox;
    instanceUdn.option("value", "");

    let operacion = document.getElementById("selectOperacion");
    let instanceOperacion = SelectBox.getInstance(operacion) as SelectBox;
    instanceOperacion.option("value", "");
    
    let clientes = document.getElementById("selectClientes");
    let instanceClientes = SelectBox.getInstance(clientes) as SelectBox;
    instanceClientes.option("value", "");
    
    let origen = document.getElementById("selectOrigen");
    let instanceOrigen = SelectBox.getInstance(origen) as SelectBox;
    instanceOrigen.option("value", "");
    
    let destino = document.getElementById("selectDestino");
    let instanceDestino = SelectBox.getInstance(destino) as SelectBox;
    instanceDestino.option("value", "");

    this.selectedUdNRuta = undefined;
    this.selectedOperacionRuta = undefined;
    this.selectedClientes = undefined;
    this.selectedRutaOrigen = undefined;
    this.selectedRutaDestino = undefined;

    this.rutaOrigen = [];
    this.rutaDestino = [];
    this.rutaClientes = [];

    this.clientes = [];
    this.rutas = [];
    this.viajes = [];
  }

}


