import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';

@Injectable({
  providedIn: 'root'
})
export class PermisoBitacoraService extends AbstractManagerService {

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


  postEdoResult(anio: number, compania: number, area: number[], mes: number, clasificacion: string){
    let body = {
      anio: anio,
      compania: compania,
      area:area.length == 7 ? [] : area,//area: area,
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

  getUnidadesNegocio(){
    return this.get<any>((this.API_URL + API_URLS.GET_UNIDADES_NEOGCIO), this.httpOptions);
  }

  getTPS(anio: number, mes: number){

    return this.get<any>((this.API_URL + API_URLS.GET_TPS+ anio+"/"+mes), this.httpOptions);
  }


}
