import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService extends AbstractManagerService {

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

  getScoreCard(){
    return this.get<any>((this.API_URL + API_URLS.GET_SCORE_CARD), this.httpOptions);
  }

  getScoreCard2024(){
    return this.get<any>((this.API_URL + API_URLS.GET_SCORE_CARD_2024), this.httpOptions);
  }

  getIgresoOperador(periodo: number){
    return this.get<any>((this.API_URL + API_URLS.GET_INGRESO_OPERADOR+ periodo), this.httpOptions);
  }

  getkmsMensuales(periodo: number){
    return this.get<any>((this.API_URL + API_URLS.GET_KMS_MENSUALES+ periodo), this.httpOptions);
  }

  getIndicadoresChart(){
    return this.get<any>((this.API_URL + API_URLS.GET_INDICADORES_CHART), this.httpOptions);
  }

  getIndicadoresChart24(){
    return this.get<any>((this.API_URL + API_URLS.GET_INDICADORES_CHART24), this.httpOptions);
  }
  
  getUnidadesNegocio(){
    return this.get<any>((this.API_URL + API_URLS.GET_UNIDADES_NEOGCIO), this.httpOptions);
  }

  getTractos(anioSel: number, mesSel: number, udnSel: number[]){
    let body ={
      anio: anioSel,
      mes: mesSel,
      unidadesNegocio: udnSel
    };

    return this.post<any>((this.API_URL + API_URLS.POST_TRACTOS), body,this.httpOptions);
  }

  getSueldoOperador(anio: number, mes: number, idTracto: string, unidadesNegocio:number[]){
    let body = {
      anio:anio,
      mes: mes,
      idTracto:idTracto,
      unidadesNegocio:unidadesNegocio.length == 7 ? [] : unidadesNegocio
    };
    console.log(body);
    return this.post<any>((this.API_URL + API_URLS.POST_SUELDO_OPERADOR), body, this.httpOptions);
  }

  getSueldoOpAc(){
    return this.post<any>((this.API_URL + API_URLS.POST_SUELDO_OPERADOR_ACUMULADO), "", this.httpOptions);
  }

  postSueldoDetalle(periodo: number){
    return this.post<any>((this.API_URL + API_URLS.POST_SUELDO_DETALLE + periodo), "",  this.httpOptions);
  }

  

}
