import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { IndicadoresService } from '../../services/indicadores/indicadores.service';
import { ScoreCard } from '../../shared/models/indicadores/scoreCard.model';

@Component({
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
})
export class IndicadoresComponent implements OnInit {

  ingresos: ScoreCard[] = [];
  kilomentros: ScoreCard[] = []
  ingresosKilometros: ScoreCard[] = [];
  viajes: ScoreCard[] = [];
  kilometroViajes: ScoreCard[] = []

  constructor(
    private indicadorService: IndicadoresService

    ) {

  }


  ngOnInit(): void {
    this.getScoreCard();
  }

  ngAfterViewInit(): void {}

  //=================GETS===========================
  getScoreCard(){
    this.indicadorService.getScoreCard().subscribe(data => {
      console.log(data.data)
      this.ingresos = data.data.scIng;
      this.kilomentros = data.data.scKms;
      this.ingresosKilometros = data.data.scIngXKm;
      this.viajes = data.data.scViajes;
      this.kilometroViajes = data.data.scKmsViaje;
    })
  }

  onRowPreparedI(event){

  }

  onRowPreparedK(event){

  }

  onRowPreparedIK(event){

  }

  onRowPreparedV(event){

  }

  onRowPreparedKV(event){

  }

  separator(value) {
    var str = value.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
}


