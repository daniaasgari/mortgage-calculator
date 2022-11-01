import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss']
})
export class CalculationSummaryComponent implements OnInit {
  @Input() calculationData: any;
  calculatedAmount: number;
  numberOfPaymentsTerm = 0;
  numberOfPaymentAmortization = 0;
  prepayment = 0;
  totalCost = 0;
  totalCostAmortizationPeriod = 0;
  amortizationPeriod = 0;
  totalCostAmortizationTerm = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
   this.displayCalculationData();
  }

  displayCalculationData() {
    this.prepayment = this.calculationData.prepayment ? this.calculationData.prepayment : 0;
    this.calculateMortgage(this.calculationData.mortgageAmount, this.calculationData.interestRate, this.calculationData.amortizationYear);
    this.numberOfPaymentCal();
    this.amortizationPeriodCal();
    this.totalCostCal();
    this.totalCostAmortizationPeriodCal();
  }

  calculateMortgage(borrAmount: number, interest: number, amortizationYear: number) {
    const interestRate = (interest / 12) / 100;
    const amortization = amortizationYear * 12;
    this.calculatedAmount = (borrAmount * (interestRate) * ((Math.pow((1 + interestRate), amortization))) / (((Math.pow((1 + interestRate), amortization))) - 1));
  }

  numberOfPaymentCal() {
    this.numberOfPaymentsTerm = this.calculationData.PaymentFreq * this.calculationData.term;
  }

  amortizationPeriodCal() {
    this.numberOfPaymentAmortization = this.calculationData.amortizationYear * this.calculationData.PaymentFreq;
  }

  totalCostCal() {
    this.totalCost = this.calculatedAmount * this.numberOfPaymentsTerm;
  }

  totalCostAmortizationPeriodCal() {
    this.totalCostAmortizationPeriod = this.calculatedAmount * this.numberOfPaymentAmortization;
  }

}
