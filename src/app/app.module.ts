import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MortgageCalculatorFormComponent } from './mortgage-calculator-form/mortgage-calculator-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { CurrencyInputDirective } from './directives/currency.directive';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MortgageService } from './service/mortgage.service';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorFormComponent,
    CalculationSummaryComponent,
    CurrencyInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CurrencyPipe,
    MortgageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
