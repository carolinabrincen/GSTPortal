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
  seleccionarAnio(e: any) {
    this.anioSeleccionado = e.value;
  }
  seleccionarMes(e: any) {
    this.mesSeleccionado = e.value;
  }
  selectCompania(e: any) {
    this.selectedCompania = e.value;
    this.getUnidadesNegocio();
  }  
  seleccionarUDN(e: any) {
    this.udnSeleccionado = [];
    this.udnSeleccionado = e.value;
  }

  callCostosAnuales() {
    const request = new Promise((resolve, reject) => {

      var clasificacion = 0
      this.costosAnuService.postEdoResult(this.anioSeleccionado, this.selectedCompania, this.udnSeleccionado, this.mesSeleccionado, clasificacion).subscribe(data =>{
        this.costosAnuales = data.data;
        console.log(this.costosAnuales)
       
      })
    });
    return request;
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
      this.callCostosAnuales().then(() => {
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
          // if (c.columnIndex == 7  || c.columnIndex == 8  ||
          //     c.columnIndex == 23 || c.columnIndex == 24 ||
          //     c.columnIndex == 37 || c.columnIndex == 38) {
          //   c.cellElement.style.fontWeight = "bolder";
          //   c.cellElement.style.fontSize = "14px";
          //   c.cellElement.style.background = "#f5f5f5";
          // }

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

      if(e.groupIndex == 2){
        console.log(e)

        e.cells[0].totalItem.summaryCells = []
      }

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

