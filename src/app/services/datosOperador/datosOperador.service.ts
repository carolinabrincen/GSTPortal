import { CotizacionModel, VariablesCotizacionModel, DetalleCotizacionModel, NuevaCotizacionModel } from './../../shared/models/cotizador/cotizador.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';
import { API_URLS } from 'src/app/shared/models/apiURL';


@Injectable({
  providedIn: 'root'
})
export class DatosOperadorService extends AbstractManagerService {

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

  getDatosOperador(udn: number){
    return this.get<any>((this.API_URL + API_URLS.GET_DATOS_OPERADOR+udn), this.httpOptions);
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
