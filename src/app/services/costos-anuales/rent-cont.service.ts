import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';

@Injectable({
  providedIn: 'root'
})
export class CostosAnualesService extends AbstractManagerService {

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

  getTPS(anio: number, mes: number){

    return this.get<any>((this.API_URL + API_URLS.GET_TPS+ anio+"/"+mes), this.httpOptions);
  }

  getCompanias(){
    return this.get<any>((this.API_URL + API_URLS.GET_COSTOS_COMPANIAS), this.httpOptions);
  }

  postUnidadesNegocio(id:number[]){
    //let body = {
      var myId = id.length == 7 ? []: id
    //}
    //console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_COSTOS_UDN), myId, this.httpOptions);
  }

  postEdoResult(anio: number, idCompania: number, idArea: number, mes: number, clasificacion: number){
    let body = {
      anio: anio,
      idCompania: idCompania,
      idArea: idArea,//area: area,
      mes: mes,
      clasificacion: clasificacion
    }
    console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_RESULT_COSTO_ANUAL), body, this.httpOptions);
  }

  postDetalleCuenta(periodo: number, idCuenta: number){
    let body = {
      periodo: periodo,
      idCuenta: idCuenta
    }
    return this.post<any>((this.API_URL + API_URLS.POST_DETALLE_CUENTA), body, this.httpOptions);
  }


}
