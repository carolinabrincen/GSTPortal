import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel, NuevaCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';
import { API_URLS } from 'src/app/shared/models/apiURL';


@Injectable({
  providedIn: 'root'
})
export class LiquidacionService extends AbstractManagerService {

  token: string = sessionStorage.getItem('token')!;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };

  arrCotizaciones: CotizacionModel[] = [];
  arrPreCotizaciones: CotizacionModel[] = [];
  arrVariables: VariablesCotizacionModel[] = [];
  arrDetalleCotizacion: DetalleCotizacionModel[] = [];
  arrClasificaciones: string[] = [];

  constructor(http: HttpClient,) {
    super(http)
    this.putInterfaceManager(this);
  }

 
  getLiquidacion(anio: any, mes: any){
    return this.get<any>((this.API_URL + API_URLS.GET_LIQUIDACION_MENSUALES+anio+'/'+mes), this.httpOptions);
  }

  getObservaciones(cvetra: number){
    return this.get<any>((this.API_URL + API_URLS.GET_OBSERVACIONES+cvetra), this.httpOptions);
  }

  postObservaciones(cvetra: number, idusuario: string, observaciones: string){
    let body = {
      cvetra: cvetra,
      idusuario: idusuario,
      observaciones: observaciones
    }
    console.log(JSON.stringify(body))
    return this.post<any>((this.API_URL + API_URLS.POST_OBSERVACIONES), body, this.httpOptions);
  }
}
