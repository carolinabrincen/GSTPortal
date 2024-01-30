import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel, NuevaCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';
import { API_URLS } from 'src/app/shared/models/apiURL';


@Injectable({
  providedIn: 'root'
})
export class DisponibilidadAnualService extends AbstractManagerService {

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

  getVariablesCotizacion(idUdn: number, idTipoOperacion: number, clasificacion: string) {
    let body = {
      id_udn: idUdn,
      id_tipo_operacion: idTipoOperacion,
      clasificacion: clasificacion
    };
    console.log('🥧', body);


    return this.post<any>((this.API_URL + API_URLS.POST_COTIZADOR_OBTENER_VARIABLES), body, this.httpOptions);
  }

  postDisponiblidad(idArea: number, fecha: string) {
    let body = {
      idArea: idArea,
      fecha: fecha,
    };
    console.log(JSON.stringify(body))
    return this.post<any>((this.API_URL + API_URLS.POST_DISPONIBILIDAD_ANUAL), body, this.httpOptions);
  }

  postStatusManual(cveOperador: number, idStatus: number, idUsuario: string, inicio: string, fin: string, observaciones: string) {
    let body = {
      cveOperador:cveOperador,
      idStatus: idStatus,
      idUsuario: idUsuario,
      inicio: inicio,
      fin: fin,
      observaciones: observaciones
    };
    console.log("status")
    console.log(JSON.stringify(body))
    return this.post<any>((this.API_URL + API_URLS.POST_STATUS_MANUAL), body, this.httpOptions);
  }

  postTipoOperacionOpe(cveOperador: number, idTipoOperacion: number, idUsuario: string) {
    let body = {
      cveOperador:cveOperador,
      idTipoOperacion: idTipoOperacion,
      idUsuario: idUsuario,
    };
    console.log("operacion")
    console.log(JSON.stringify(body))
    return this.post<any>((this.API_URL + API_URLS.POST_TIPO_OPERACION_OPERADOR), body, this.httpOptions);
  }

 



}
