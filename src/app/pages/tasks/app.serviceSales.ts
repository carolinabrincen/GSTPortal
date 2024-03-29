import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { IUser } from 'src/app/shared/services';



export class Sale {
  id: number | undefined;

  region: string | undefined;

  country: string| undefined;

  city: string | undefined;

  amount: number| undefined;

  date: Date| undefined;
}

export class Indicador {
    id: number | undefined;
    unidadNegocio: string | undefined;
    tipoOperacion: string | undefined;
    enero: number| undefined;
    febrero: number| undefined;
    marzo: number| undefined;
    abril: number| undefined;
    mayo: number| undefined;
    junio: number| undefined;
    julio: number| undefined;
    agosto: number| undefined;
    septiembre: number| undefined;
    octubre: number| undefined;
    noviembre: number| undefined;
    diciembre: number| undefined;
  }

  export class IndicadorGrafica {
    id: number | undefined;
    mes: string | undefined;
    cajaSeca: number| undefined;
    encortinado: number| undefined;
    gondola: number| undefined;
    gradoAliment: number| undefined;
    granel: number| undefined;
    otro: number| undefined;
    tolvaAcero: number| undefined;
  }



@Injectable()
export class ServiceSales extends AbstractManagerService{

  user!: IUser;
  token: string = sessionStorage.getItem('token')!;

  //  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + this.token
      
    })
  };

  cadena: string | undefined; 

  constructor(private router: Router, http: HttpClient) { 
    super(http);
 }

  // getSales() {
  //   return sales;
  // }

  getIndicadores(Anio: number, UnidadNegocio: number) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
    
  }

  getIngresosDetallados() {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO),this.httpOptions);    
    
    
  }

  getIngresosDetalladosMarzo() {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_MARZO),this.httpOptions);    
    
    
  }

  getIngresosDetalladosMensual( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_ABRIL),this.httpOptions);    
    
    
  }

  getIngresosDetalladosMayo( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_MAYO),this.httpOptions);    
    
    
  }

  getIngresosDetalladosJunio( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_JUNIO),this.httpOptions);    
    
  }

  getIngresosDetalladosJulio( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_JULIO),this.httpOptions);    
    
  }

  getIngresosDetalladosAgosto( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_AGO),this.httpOptions);    
    
  }

  getIngresosDetalladosSeptiembre( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_SEP),this.httpOptions);    
    
  }

  getIngresosDetalladosOctubre( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_OCT),this.httpOptions);    
    
  }

  getIngresosDetalladosNoviembre( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_NOV),this.httpOptions);    
    
  }

  getIngresosDetalladosDiciembre( ) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_DETALLADO_DIC),this.httpOptions);    
    
  }

  
  getIndicadoresGrafica(Anio: number, UnidadNegocio: number) {
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESOS_ANUALES_CHART + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
  }

  getKms(Anio: number, UnidadNegocio: number) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_KMS_ANUALES + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
    
  }

  getKmsGrafica(Anio: number, UnidadNegocio: number) {
    return this.get<any>((this.API_URL + API_URLS.GET_KMS_ANUALES_CHART + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
  }

  getViajes(Anio: number, UnidadNegocio: number) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_VIAJES_ANUALES + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
    
  }

  getViajesGrafica(Anio: number, UnidadNegocio: number) {
    return this.get<any>((this.API_URL + API_URLS.GET_VIAJES_ANUALES_CHART + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
  }

  getToneladas(Anio: number, UnidadNegocio: number) {
    
    return this.get<any>((this.API_URL + API_URLS.GET_TONELADAS_ANUALES + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
    
  }

  getToneladasGrafica(Anio: number, UnidadNegocio: number) {
    return this.get<any>((this.API_URL + API_URLS.GET_TONELADAS_ANUALES_CHART + '/' + Anio + '/'+ UnidadNegocio),this.httpOptions);    
  }

  getReporte() {

    return this.post<any>((this.API_URL + API_URLS.GET_Rentabilidad_Contable), JSON.stringify('{"anio": 2022, "mes": 1,"idTracto": "","unidadesNegocio": [1]}'),this.httpOptions);    
  }
}
