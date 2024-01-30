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
    return this.post<any>((this.API_URL + API_URLS.POST_DISPONIBILIDAD_ANUAL), body, this.httpOptions);
  }

 



}
