import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MortgageService} from '../service/mortgage.service'

@Component({
  selector: 'mortgage-calculator-form',
  templateUrl: './mortgage-calculator-form.component.html',
  styleUrls: ['./mortgage-calculator-form.component.scss']
})
export class MortgageCalculatorFormComponent implements OnInit {
  mortgageForm: FormGroup;
  years: { value: number, name: string }[] = [];
  terms: { value: number, name: string }[] = [];
  peyFrequency: { value: number, name: string }[] = [];
  calculationData = {};
  displaySummary = false;

  constructor(
    private fb: FormBuilder,
    private mortgageService: MortgageService
    ) {
  }
  ngOnInit() {
    this.terms = this.mortgageService.getTerms();
    this.years = this.mortgageService.getAmortization();
    this.peyFrequency = this.mortgageService.getPaymentFrequency();
    this.createForm();
  }

  createForm() {
    this.mortgageForm = this.fb.group({
      mortgageAmount: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(4),
      ]],
      interestRate: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      amortizationYear: [null, Validators.required],
      PaymentFreq: [null, Validators.required],
      terms: [null, Validators.required],
      prepayment: [null, [
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(2),
      ]]
    });
  }

  getFormControl(ctrl: string) {
    return this.mortgageForm.get(ctrl);
  }

  prepareSummaryData() {
    const data = {
      mortgageAmount: this.mortgageForm.get('mortgageAmount')?.value,
      interestRate: this.mortgageForm.get('interestRate')?.value,
      amortizationYear: this.mortgageForm.get('amortizationYear')?.value,
      PaymentFreq: this.mortgageForm.get('PaymentFreq')?.value,
      term : this.mortgageForm.get('terms')?.value,
      prepayment: this.mortgageForm.get('prepayment')?.value
    }
    this.calculationData = data;
  }

  onReset() {
    this.mortgageForm.reset();
    this.calculationData = {};
    this.displaySummary = false;
  }

  onCalculate() {
    if (!this.mortgageForm.valid) {
      this.mortgageForm.markAllAsTouched();
      this.displaySummary = false;
    } else {
      console.log('tets3', this.calculationData);
      this.prepareSummaryData();
      this.displaySummary = true;
    }
  }

}
