import {Component, Input, Output, EventEmitter,} from '@angular/core';
import { SalesOrOpportunitiesByCategory } from 'src/app/types/analytics';

@Component({
  selector: 'sales-by-range-card',
  templateUrl: './sales-by-range-card.component.html',
  styleUrls: ['./sales-by-range-card.component.scss'],
})
export class SalesByRangeCardComponent {
  @Input() data: SalesOrOpportunitiesByCategory;

  @Input() groupByPeriods: string[];
  @Input() groupByUdn: string[];

  @Output() performancePeriodChanged = new EventEmitter();
  @Output() performanceUdnMenChanged = new EventEmitter();
  @Output() performanceUdnAnuChanged = new EventEmitter();


  item: string = "Seleccione";

  customizeSaleText(arg: { percentText: string }) {
    return arg.percentText;
  }


  selectBA(event) {
    this.performancePeriodChanged.emit(event);
    console.log(event)
    this.item = event.item;
  }

  selectUdnMensual(event) {
    this.performanceUdnMenChanged.emit(event);
        console.log(event)  
  }
  selectUdnAnual(event) {
    this.performanceUdnAnuChanged.emit(event);
        console.log(event)  
  }
}

