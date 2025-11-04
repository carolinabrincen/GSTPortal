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

  @Output() performancePeriodChanged = new EventEmitter();

  customizeSaleText(arg: { percentText: string }) {
    return arg.percentText;
  }


  selectBA(event) {
    this.performancePeriodChanged.emit(event);
  }
}

