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

  getCompanias(){
    return this.get<any>((this.API_URL + API_URLS.GET_COSTOS_COMPANIAS), this.httpOptions);
  }

  getTipoCostos(){
    return this.get<any>((this.API_URL + API_URLS.GET_COSTOS_TIPOS), this.httpOptions);
  }

  postClasesCostos(id: number[]){
    var myId = id.length == 7 ? []: id;
    return this.post<any>((this.API_URL + API_URLS.GET_COSTOS_CLASES), myId, this.httpOptions);
  }

  postCostosCC(tipos: number[], clase:number[]){
    let body = {
      tipos: tipos.length == 7 ? []: tipos,
      clase: clase.length == 7 ? []: clase
    }
    return this.post<any>((this.API_URL + API_URLS.POST_CENTRO_COSTOS), body, this.httpOptions);
  }

  postUnidadesNegocio(id:number[]){
    //let body = {
      var myId = id.length == 7 ? []: id
    //}
    //console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_COSTOS_UDN), myId, this.httpOptions);
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
