import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {

  constructor() { }

  getTerms() {
   const terms: { value: number, name: string }[] = [{ "value": 1, "name": "1 year" }];
      for (let i: number = 2; i < 11; i++) {
        terms.push({ "value": i, "name": i + " years" })
      }
    return terms;
  }

  getAmortization() {
    const years: { value: number, name: string }[] = [{ "value": 1, "name": "1 year" }];
    for (let i: number = 2; i < 31; i++) {
      years.push({ "value": i, "name": i + " years" })
    }
     return years;
   }

   getPaymentFrequency() {
    const frequency =  [
      {"value": 52, "name": "Accelerated Weekly"},
      {"value": 52, "name": "Weekly"},
      {"value": 26, "name": "Accelerated Bi-Weekly"},
      {"value": 26, "name": "Bi-Weekly (every 2 weeks)"},
      {"value": 24, "name": "Semi-monthly (24x per year))"},
      {"value": 12, "name": "Monthly (12x per year)"}
      ];

      return frequency;
   }
}
