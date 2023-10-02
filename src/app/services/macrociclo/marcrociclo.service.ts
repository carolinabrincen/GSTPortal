import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';
import { ClientesAsignados } from '../../shared/models/carteraIntercompanias/clientesAsignados.model';

@Injectable({
  providedIn: 'root'
})
export class MarcroCicloService extends AbstractManagerService {

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

  // getCarteraClientes(){
  //   return this.get<any>((this.API_URL + API_URLS.GET_CARTERA_CLIENTES), this.httpOptions);
  // }


  postMacrociclo(anio: number, mes: number, udn: any[], tipoOpercion: any[]){
    let body = {
      anio: anio,
      mes: mes,
      unidadesNegocio: udn,
      tipoOperaciones: tipoOpercion
    }
    // console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_MACROCICLO), body, this.httpOptions);
  }

  postMacrocicloDetalle(idArea: number, ciclo: number){
    let body = {
      idArea: idArea,
      ciclo: ciclo,
    }
    // console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_MACROCICLO_DETALLE), body, this.httpOptions);
  }
}
