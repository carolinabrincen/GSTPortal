import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import liquidaciones from 'src/assets/rc02.json';
import dxSelectBox from 'devextreme/ui/select_box';
import { DxSelectBoxComponent } from 'devextreme-angular';

import { CountryInfo, EnergyDescription, Service  } from './costos-anuales.service';
import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';
import { DetalleCuenta } from '../../shared/models/costos-anuales/detalleCuenta.model'
@Component({

  templateUrl: './costos-anuales.component.html',
  styleUrls: ['./costos-anuales.component.scss'],
  providers: [Service],
})
export class CostosAnualesComponent implements OnInit {

  @ViewChild('selectTracto') selectTracto!: DxSelectBoxComponent;

  liquidaciones: any = liquidaciones;
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();

  costosAnuales: CostosAnuales[] = [];
  DestalleCuenta: DetalleCuenta[] = []


  col: string = '50';


  arrUnidadesNegocio: UnidadesNegocioModel[] = [];

  arrTractos: string[] = [];

  arrMeses: MesesModel[] = [
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

  arrAnos: AniosModel[] = [
    { idAnio: 2022, anio: "2022" }
    // { idAnio: 2021, anio: "2021" },
  ];

  companias: CompaniaModel[] =[
    {idComp:1, compania: 'TRANSPORTES BONAMPAK'},
    {idComp:2, compania: 'TRANSPORTADORA ESPECIALIZADA INDUSTRIAL'},
    {idComp:3, compania: 'TRANSPORTE DE CARGA GEMINIS'}
  ]

  readonly allowedPageSizes = [5, 10, 20, 50, 100, 'all'];

  loadingVisible = false;

  costosAnuService!: CostosAnualesService;

  mesSeleccionado: number = 0;
  anioSeleccionado: number = 0;
  udnSeleccionado: number[] = [];
  tractoSeleccionado: string = '';
  selectedCompania: number = 0;

  objTracto: any;
  objRentabilidad: any;

  //===========chart===================
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[];
  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  openModReal: boolean = false;
  closeButtonOptions: any;
  printButtonOptions: any;
  positionOf: string = '#myDiv';
  arrRentGer: any[] = [];
  arrLiquidacionesDetalle: any[] = [];
  promedioPonderado: number = 0;
  //============test========
  positions: string[];
  states: string[];


  constructor(
    private costosAnualesService: CostosAnualesService,
    private service: Service
    ) {

    this.calcularPorcentajes = this.calcularPorcentajes.bind(this);
    this.verDetallesClick = this.verDetallesClick.bind(this)
    this.costosAnuService = costosAnualesService;

  //===========chart===================
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }


  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getCostosAnuales() {
    const request = new Promise((resolve, reject) => {

      var anio = 0
      var compania = 0
      var area = 0
      var mes = 0
      var clasificacion = 0
      this.costosAnuService.postEdoResult(anio, compania, area, mes, clasificacion).subscribe(data =>{
        this.costosAnuales = data.data;
        console.log(this.costosAnuales)
       
      })
    });
    return request;
  }

  getUnidadesNegocio() {
    this.costosAnuService.getUnidadesNegocio().subscribe(res => {
      
      if(this.selectedCompania == 1){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[1],orderdata[2],orderdata[3],
            orderdata[4]);//FALTA LA PAZ
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)      
      }else if(this.selectedCompania == 2){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[5]);
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)
      }else if(this.selectedCompania == 3){
        const orderdata: UnidadesNegocioModel[] = res.data;
        let neworderdata = [];
        neworderdata.push(orderdata[6]);
        this.arrUnidadesNegocio = neworderdata;
        // console.log(this.arrUnidadesNegocio)
      }

    });

  }

  //=================SELECTS========================
  //Manejadores de Eventos
  seleccionarMes(e: any) {
    this.mesSeleccionado = e.value;
  }
  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;
  }

  seleccionarUDN(e: any) {
    this.udnSeleccionado = [];
    this.udnSeleccionado = e.value;
  }

  selectCompania(e: any) {
    this.selectedCompania = e.value;
    this.getUnidadesNegocio();
  }

  verDetallesClick(data) {
      var periodo = 0
      var idcuenta = 0
      this.costosAnuService.postDetalleCuenta(periodo, idcuenta).subscribe(data =>{
        console.log(data)
        this.DestalleCuenta = data.data
        this.openModReal = true;
      })
  }

  borrarClick = (e: any) =>{
    this.selectTracto.value = '';
  }

  buscarClick = (e: any) => {
    // if (this.udnSeleccionado && this.mesSeleccionado && this.anioSeleccionado) {
      this.loadingVisible = true;
      this.getCostosAnuales().then(() => {
        this.loadingVisible = false;
      });
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

  onCellPrepared(e: any) {
    if(e.rowType === "groupFooter" && e.column.dataField === "margenUtilida") {
      //console.log('👣', e);

        e.cellElement.style.color = "red";
        // Tracks the `Amount` data field
        // e.watch(function() {
        //     return e.data.Amount;
        // }, function() {
        //     e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
        // })
    }
}

  onRowPrepared(e: any) {
    if (e.rowType == 'data') {
      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          //poner en rojo negativos
          if (c.value && c.value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
          }

          //negrita columna margen utilidad
          if (c.columnIndex == 7  || c.columnIndex == 8  ||
              c.columnIndex == 23 || c.columnIndex == 24 ||
              c.columnIndex == 37 || c.columnIndex == 38) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "14px";
            c.cellElement.style.background = "#f5f5f5";
          }

          //porcentaje de combistuble > .25 en rojo
          if (c.columnIndex == 16 && c.value >= .25) {
            c.cellElement.style.color = "red";
          }
        }



      });
    }

    if (e.rowType == 'group') {
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#ff9460';
        e.rowElement.style.color = "white";
      }
      else {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }
    }

    if (e.rowType == 'groupFooter') {
      let ingresoTotal = e.summaryCells[6][0].value;
      let margenUtilidad = e.summaryCells[7][0].value;
      let combustible = e.summaryCells[15][0].value;
      let casetas = e.summaryCells[17][0].value;
      let sueldosLiquidacion = e.summaryCells[19][0].value;
      let otros = e.summaryCells[21][0].value;
      let costosDirectos = e.summaryCells[23][0].value;
      let sueldoBase = e.summaryCells[25][0].value;
      let cargaSocial = e.summaryCells[27][0].value;
      let fijoMtto = e.summaryCells[29][0].value;
      let varMtto = e.summaryCells[31][0].value;
      let fijoTrans = e.summaryCells[33][0].value;
      let varTrans = e.summaryCells[35][0].value;
      let ctosAdicionales = e.summaryCells[37][0].value;


      //Porcentajes Margen utilidad
      ingresoTotal === 0 ? e.summaryCells[8][0].value = 0 : e.summaryCells[8][0].value = margenUtilidad/ingresoTotal;
      //Combustible
      ingresoTotal === 0 ? e.summaryCells[16][0].value = 0 : e.summaryCells[16][0].value = combustible/ingresoTotal;
      //Casetas
      ingresoTotal === 0 ? e.summaryCells[18][0].value = 0 : e.summaryCells[18][0].value = casetas/ingresoTotal;
      //Sueldos Liq
      ingresoTotal === 0 ? e.summaryCells[20][0].value = 0 : e.summaryCells[20][0].value = sueldosLiquidacion/ingresoTotal;
      //Otros
      ingresoTotal === 0 ? e.summaryCells[22][0].value = 0 : e.summaryCells[22][0].value = otros/ingresoTotal;
      //costosDirectos
      ingresoTotal === 0 ? e.summaryCells[24][0].value = 0 : e.summaryCells[24][0].value = costosDirectos/ingresoTotal;
      //sueldoBAse
      ingresoTotal === 0 ? e.summaryCells[26][0].value = 0 : e.summaryCells[26][0].value = sueldoBase/ingresoTotal;
      //Carga Social
      ingresoTotal === 0 ? e.summaryCells[28][0].value = 0 : e.summaryCells[28][0].value = cargaSocial/ingresoTotal;
      //Fijo Mtto
      ingresoTotal === 0 ? e.summaryCells[30][0].value = 0 : e.summaryCells[30][0].value = fijoMtto/ingresoTotal;
      //Variable Mtto
      ingresoTotal === 0 ? e.summaryCells[32][0].value = 0 : e.summaryCells[32][0].value = varMtto/ingresoTotal;
      //fijo Transportacion
      ingresoTotal === 0 ? e.summaryCells[34][0].value = 0 : e.summaryCells[34][0].value = fijoTrans/ingresoTotal;
      //variable Transportacion
      ingresoTotal === 0 ? e.summaryCells[36][0].value = 0 : e.summaryCells[36][0].value = varTrans/ingresoTotal;
      //Costso Adicionales
      ingresoTotal === 0 ? e.summaryCells[38][0].value = 0 : e.summaryCells[38][0].value = ctosAdicionales/ingresoTotal;


      if (e.groupIndex === 1) {
        e.summaryCells[5][0].displayFormat = 'SUBTOTAL TRACTO';
       // console.log('🌲', e);

      }
      if (e.groupIndex === 0) {
        e.summaryCells[5][0].displayFormat = 'SUBTOTAL ' + e.key[0];
        //e.rowElement.style.backgroundColor = '#dcdcdc';
      }





    }

    if (e.rowType == 'totalFooter') {
      console.log('TOT:', e);

      let ingresoTotal = e.summaryCells[6][0].value;
      let margenUtilidad = e.summaryCells[7][0].value;
      let combustible = e.summaryCells[15][0].value;
      let casetas = e.summaryCells[17][0].value;
      let sueldosLiquidacion = e.summaryCells[19][0].value;
      let otros = e.summaryCells[21][0].value;
      let costosDirectos = e.summaryCells[23][0].value;
      let sueldoBase = e.summaryCells[25][0].value;
      let cargaSocial = e.summaryCells[27][0].value;
      let fijoMtto = e.summaryCells[29][0].value;
      let varMtto = e.summaryCells[31][0].value;
      let fijoTrans = e.summaryCells[33][0].value;
      let varTrans = e.summaryCells[35][0].value;
      let ctosAdicionales = e.summaryCells[37][0].value;

      //Porcentajes Margen utilidad
      ingresoTotal === 0 ? e.summaryCells[8][0].value = 0 : e.summaryCells[8][0].value = margenUtilidad/ingresoTotal;
      //Combustible
      ingresoTotal === 0 ? e.summaryCells[16][0].value = 0 : e.summaryCells[16][0].value = combustible/ingresoTotal;
      //Casetas
      ingresoTotal === 0 ? e.summaryCells[18][0].value = 0 : e.summaryCells[18][0].value = casetas/ingresoTotal;
      //Sueldos Liq
      ingresoTotal === 0 ? e.summaryCells[20][0].value = 0 : e.summaryCells[20][0].value = sueldosLiquidacion/ingresoTotal;
      //Otros
      ingresoTotal === 0 ? e.summaryCells[22][0].value = 0 : e.summaryCells[22][0].value = otros/ingresoTotal;
      //costosDirectos
      ingresoTotal === 0 ? e.summaryCells[24][0].value = 0 : e.summaryCells[24][0].value = costosDirectos/ingresoTotal;
      //sueldoBAse
      ingresoTotal === 0 ? e.summaryCells[26][0].value = 0 : e.summaryCells[26][0].value = sueldoBase/ingresoTotal;
      //Carga Social
      ingresoTotal === 0 ? e.summaryCells[28][0].value = 0 : e.summaryCells[28][0].value = cargaSocial/ingresoTotal;
      //Fijo Mtto
      ingresoTotal === 0 ? e.summaryCells[30][0].value = 0 : e.summaryCells[30][0].value = fijoMtto/ingresoTotal;
      //Variable Mtto
      ingresoTotal === 0 ? e.summaryCells[32][0].value = 0 : e.summaryCells[32][0].value = varMtto/ingresoTotal;
      //fijo Transportacion
      ingresoTotal === 0 ? e.summaryCells[34][0].value = 0 : e.summaryCells[34][0].value = fijoTrans/ingresoTotal;
      //variable Transportacion
      ingresoTotal === 0 ? e.summaryCells[36][0].value = 0 : e.summaryCells[36][0].value = varTrans/ingresoTotal;
      //Costso Adicionales
      ingresoTotal === 0 ? e.summaryCells[38][0].value = 0 : e.summaryCells[38][0].value = ctosAdicionales/ingresoTotal;




      e.rowElement.style.backgroundColor = '#f5f5f5';
      e.rowElement.style.color = 'red';

      e.cells.forEach((c: any) => {

        if (c.cellElement) {
          //poner en rojo negativos
          if (c.summaryCells && c.summaryCells[7][0].value.toString().startsWith('-')) {
            c.cellElement.style.color = "red";
          }

          //negrita columna margen utilidad
          if (c.columnIndex == 5  || c.columnIndex == 6  ||
              c.columnIndex == 7  || c.columnIndex == 8  ||
              c.columnIndex == 23 || c.columnIndex == 24 ||
              c.columnIndex == 37 || c.columnIndex == 38) {
            c.cellElement.style.fontWeight = "bolder";
            c.cellElement.style.fontSize = "14px";
            c.cellElement.style.background = "#f5f5f5";
            c.cellElement.style.color = "red";
          }

          //porcentaje de combistuble > .25 en rojo
          if (c.columnIndex == 16 && c.value >= .25) {
            c.cellElement.style.color = "red";
          }
        }



      });


    }
  }

  calcularPorcentajes(options: any) {
    // //
    // if (options.summaryProcess === 'calculate') {
    //   if (options.name === 'grupMargenUtilidaPor') {
    //     options.totalValue = .17;
    //     console.log('📵', options);
    //   }
    // }
  }

  onRowPreparedDetalle(e: any){

  }

}

