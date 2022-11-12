import { RentContModel, UnidadesNegocioModel, MesesModel, AniosModel, CompaniaModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { CostosAnualesService } from '../../services/costos-anuales/rent-cont.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import liquidaciones from 'src/assets/rc02.json';
import dxSelectBox from 'devextreme/ui/select_box';
import { DxSelectBoxComponent } from 'devextreme-angular';

import { CountryInfo, EnergyDescription, Service  } from './costos-anuales.service';
import { CostosAnuales } from '../../shared/models/costos-anuales/costosAnuales.model';
import { DetalleCuenta } from '../../shared/models/costos-anuales/detalleCuenta.model'
import { TotalesOperacion } from '../../shared/models/costos-anuales/totalesOperacion.model';

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

  totalesOperacion = new TotalesOperacion;

  totalOtrosGIER: number;
  totalIngresosER: number;
  totalOtrosGER: number;

  totalesOGOER: number;
  totalGAER: number;
  totalDAER: number;

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
          //porcentaje de combistuble > .25 en rojo
          if (c.columnIndex == 16 && c.value >= .25) {
            c.cellElement.style.color = "red";
          }
        }
      });
    }

    if (e.rowType == 'group') {
      //====Agregando estilos a la agrupacion=========================================
      if (e.groupIndex == 0) {
        e.rowElement.style.backgroundColor = '#ff9460';
        e.rowElement.style.color = "white";
      }
      else {
        e.rowElement.style.backgroundColor = '#dcdcdc';
        e.rowElement.style.color = "black";
        e.rowElement.style.fontWeight = "bolder";
      }

      //======Omitir totales en la agrupacion no afecta a la sumatoria========================================
      if(e.groupIndex == 1 && e.data.key == '0.- INDICADORES'){
          e.cells[0].totalItem.summaryCells = [] 
      }


      if(e.groupIndex == 2){
//================================Resta de la agrupacion de Operacion==============================================
        //===== Omitir totales en la agrupacion no afecta a la sumatoria===========================================
        if(e.data.key == 'INDICADORES'){
          e.cells[0].totalItem.summaryCells = [] 
        }

        //========================Sacando los valores para la operacion============================================
        if(e.data.key == 'a.- INGRESOS POR FLETE'){          
          console.log(e.data)
          this.totalesOperacion.totalFleteER = e.data.aggregates[0];
          this.totalesOperacion.totalFleteEP = e.data.aggregates[1];
          this.totalesOperacion.totalFleteED = e.data.aggregates[2]
          this.totalesOperacion.totalFleteFR
          this.totalesOperacion.totalFleteFP
          this.totalesOperacion.totalFleteFD
          this.totalesOperacion.totalFleteMR
          this.totalesOperacion.totalFleteMP
          this.totalesOperacion.totalFleteMD
          this.totalesOperacion.totalFleteAR
          this.totalesOperacion.totalFleteAP
          this.totalesOperacion.totalFleteAD
          this.totalesOperacion.totalFleteMYR
          this.totalesOperacion.totalFleteMYP
          this.totalesOperacion.totalFleteMYD
          this.totalesOperacion.totalFleteJR
          this.totalesOperacion.totalFleteJP
          this.totalesOperacion.totalFleteJD
          this.totalesOperacion.totalFleteJLR
          this.totalesOperacion.totalFleteJLP
          this.totalesOperacion.totalFleteJLD
          this.totalesOperacion.totalFleteAGR
          this.totalesOperacion.totalFleteAGP
          this.totalesOperacion.totalFleteAGD
          this.totalesOperacion.totalFleteSR
          this.totalesOperacion.totalFleteSP
          this.totalesOperacion.totalFleteSD
          this.totalesOperacion.totalFleteOR
          this.totalesOperacion.totalFleteOP
          this.totalesOperacion.totalFleteOD
          this.totalesOperacion.totalFleteNR
          this.totalesOperacion.totalFleteNP
          this.totalesOperacion.totalFleteND
          this.totalesOperacion.totalFleteDR
          this.totalesOperacion.totalFleteDP
          this.totalesOperacion.totalFleteDD
          this.totalesOperacion.totalFleteACR
          this.totalesOperacion.totalFleteACP
          this.totalesOperacion.totalFleteACD
        }

        if(e.data.key == 'b.- COSTOS '){      
          this.totalesOperacion.totalCostosER = e.data.aggregates[0]
          this.totalesOperacion.totalCostosEP
          this.totalesOperacion.totalCostosED
          this.totalesOperacion.totalCostosFR
          this.totalesOperacion.totalCostosFP
          this.totalesOperacion.totalCostosFD
          this.totalesOperacion.totalCostosMR
          this.totalesOperacion.totalCostosMP
          this.totalesOperacion.totalCostosMD
          this.totalesOperacion.totalCostosAR
          this.totalesOperacion.totalCostosAP
          this.totalesOperacion.totalCostosAD
          this.totalesOperacion.totalCostosMYR
          this.totalesOperacion.totalCostosMYP
          this.totalesOperacion.totalCostosMYD
          this.totalesOperacion.totalCostosJR
          this.totalesOperacion.totalCostosJP
          this.totalesOperacion.totalCostosJD
          this.totalesOperacion.totalCostosJLR
          this.totalesOperacion.totalCostosJLP
          this.totalesOperacion.totalCostosJLD
          this.totalesOperacion.totalCostosAGR
          this.totalesOperacion.totalCostosAGP
          this.totalesOperacion.totalCostosAGD
          this.totalesOperacion.totalCostosSR
          this.totalesOperacion.totalCostosSP
          this.totalesOperacion.totalCostosSD
          this.totalesOperacion.totalCostosOR
          this.totalesOperacion.totalCostosOP
          this.totalesOperacion.totalCostosOD
          this.totalesOperacion.totalCostosNR
          this.totalesOperacion.totalCostosNP
          this.totalesOperacion.totalCostosND
          this.totalesOperacion.totalCostosDR
          this.totalesOperacion.totalCostosDP
          this.totalesOperacion.totalCostosDD
          this.totalesOperacion.totalCostosACR
          this.totalesOperacion.totalCostosACP
          this.totalesOperacion.totalCostosACD


          this.totalesOperacion.totalOperacionER = this.totalesOperacion.totalFleteER - this.totalesOperacion.totalCostosER;
          this.totalesOperacion.totalOperacionEP
          this.totalesOperacion.totalOperacionED
          this.totalesOperacion.totalOperacionFR
          this.totalesOperacion.totalOperacionFP
          this.totalesOperacion.totalOperacionFD
          this.totalesOperacion.totalOperacionAR
          this.totalesOperacion.totalOperacionAP
          this.totalesOperacion.totalOperacionAD
          this.totalesOperacion.totalOperacionMYR
          this.totalesOperacion.totalOperacionMYP
          this.totalesOperacion.totalOperacionMYD
          this.totalesOperacion.totalOperacionJR
          this.totalesOperacion.totalOperacionJP
          this.totalesOperacion.totalOperacionJD
          this.totalesOperacion.totalOperacionJLR
          this.totalesOperacion.totalOperacionJLP
          this.totalesOperacion.totalOperacionJLD
          this.totalesOperacion.totalOperacionAGR
          this.totalesOperacion.totalOperacionAGP
          this.totalesOperacion.totalOperacionAGD
          this.totalesOperacion.totalOperacionSR
          this.totalesOperacion.totalOperacionSP
          this.totalesOperacion.totalOperacionSD
          this.totalesOperacion.totalOperacionOR
          this.totalesOperacion.totalOperacionOP
          this.totalesOperacion.totalOperacionOD
          this.totalesOperacion.totalOperacionNR
          this.totalesOperacion.totalOperacionNP
          this.totalesOperacion.totalOperacionND
          this.totalesOperacion.totalOperacionDR
          this.totalesOperacion.totalOperacionDP
          this.totalesOperacion.totalOperacionDD
          this.totalesOperacion.totalOperacionACR
          this.totalesOperacion.totalOperacionACP
          this.totalesOperacion.totalOperacionACD

          //alert('Total Resta : '+ totalesOperacion.totalOperacionER)
        }


//===============================Resta de la agrupacion de  Otros Gastos de Operacion===============================
        
        if(e.data.key == 'a.- GASTOS ADMINISTRATIVOS'){
            this.totalGAER = e.data.aggregates[0];
        }
        if(e.data.key == 'b.- DEPRECIACION DE ACTIVOS'){
          this.totalDAER = e.data.aggregates[0];

        }

      }

      //=====Resta Entre Fletes y Costos============================================
      if(e.groupIndex == 1 && e.data.key == '01.- OPERACION'){
        //console.log(e)
        e.summaryCells[6][0].value = this.totalesOperacion.totalOperacionER;
      }


//=================================Resta de la agrupacion Otros gastos/ingresos ordinarios=========================
      if(e.groupIndex == 3){
        //========================Sacando los valores para la operacion============================================
        if(e.data.key == '401-01-000 INGRESOS ORDINARIOS'){
          this.totalIngresosER = e.data.aggregates[0];
        }

        if(e.data.key == '505-01-000 OTROS GASTOS  ORDINARIOS      '){
          this.totalOtrosGER = e.data.aggregates[0];

          this.totalOtrosGIER = this.totalOtrosGER - this.totalIngresosER;
        }
      }

      if(e.groupIndex == 2 && e.data.key == 'c.- OTROS GASTOS/INGRESOS ORDINARIOS'){
        e.summaryCells[6][0].value = this.totalOtrosGIER;

        let sumaOGOER
        sumaOGOER = this.totalGAER + this.totalDAER;
        this.totalesOGOER = sumaOGOER - this.totalOtrosGIER
        
      }

      if(e.groupIndex == 1 && e.data.key == '02.- OTROS GASTOS DE OPERACIÓN'){
        e.summaryCells[6][0].value = this.totalesOGOER
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


