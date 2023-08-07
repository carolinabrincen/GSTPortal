import { RentContModel } from './../../shared/models/rentabilidad-contable/renta-contable.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/shared/models/apiURL';
import { AbstractManagerService } from 'src/app/shared/services/abstractManagerService';

@Injectable({
  providedIn: 'root'
})
export class CarteraClientesService extends AbstractManagerService {

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

  getCarteraDetalle(){
    return this.get<any>((this.API_URL + API_URLS.GET_CARTERA_DETALLE), this.httpOptions);
  }

  
  postCarteraCliente(periodo: number, compania: number){
    let body = {
      periodo: periodo,
      compania: compania
    }
    console.log(body)
    return this.post<any>((this.API_URL + API_URLS.POST_CARTERA_CLIENTE), body, this.httpOptions);
  }
}
