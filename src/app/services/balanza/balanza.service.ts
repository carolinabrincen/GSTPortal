import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';

@Injectable({
  providedIn: 'root'
})
export class BalanzaService extends AbstractManagerService {

  token: string = sessionStorage.getItem('token')!;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };

  constructor(http: HttpClient,) {
    super(http)
    this.putInterfaceManager(this);
  }

  getUnidadesNegocio(){
    return this.get<any>((this.API_URL + API_URLS.GET_UNIDADES_NEOGCIO), this.httpOptions);
  }

  getCostosCC(){
    return this.get<any>((this.API_URL + API_URLS.GET_COSTOS_CC), this.httpOptions);
  }

  postBalanza (mes: number, anio: number, idCompania: number, idUdn: number, idCc: number){
    let body = {
      mes: mes,
      anio: anio,
      idCompania: idCompania,
      idUdn: idUdn,      
      idCc: idCc
    }
    console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_BALANZA), body, this.httpOptions);
  }

}
