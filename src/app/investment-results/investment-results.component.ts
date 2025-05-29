import { CurrencyPipe } from '@angular/common';
import { Component, computed, } from '@angular/core';
import { InvestService } from '../invest.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestService) { }
  
   results = computed(() => this.investmentService.resultData());
  // results  = this.investmentService.resultData.asReadonly();
}
