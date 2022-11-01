import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';
import {MortgageService} from '../service/mortgage.service'

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MortgageCalculatorFormComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
    .then(() => {
      fixture =  TestBed.createComponent(MortgageCalculatorFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    });


  it('should create a form with 6 controls', () => {
    expect(component.mortgageForm.contains('mortgageAmount')).toBeTruthy();
    expect(component.mortgageForm.contains('interestRate')).toBeTruthy();
    expect(component.mortgageForm.contains('amortizationYear')).toBeTruthy();
    expect(component.mortgageForm.contains('PaymentFreq')).toBeTruthy();
    expect(component.mortgageForm.contains('terms')).toBeTruthy();
    expect(component.mortgageForm.contains('prepayment')).toBeTruthy();
  });

  it('form invalid when empty', () => {
    let interestRate = component.mortgageForm.get('interestRate');
    expect(interestRate?.valid).toBeFalsy();
  });

  it('form invalid when empty', () => {
    let amortizationYear = component.mortgageForm.get('amortizationYear');
    expect(amortizationYear?.valid).toBeFalsy();
  });

  it('form invalid when empty', () => {
    let PaymentFreq = component.mortgageForm.get('PaymentFreq');
    expect(PaymentFreq?.valid).toBeFalsy();
  });

  it('form invalid when empty', () => {
    let terms = component.mortgageForm.get('terms');
    expect(terms?.valid).toBeFalsy();
  });

  it('form invalid when empty', () => {
    let prepayment = component.mortgageForm.get('prepayment');
    expect(prepayment?.valid).toBeTruthy();
  });

  it('should use term from mortgage service', () => {
    let mortgageService = fixture.debugElement.injector.get(MortgageService);
    fixture.detectChanges();
    expect(mortgageService.getTerms()).toEqual(component.terms);
  });

  it('should use years from mortgage service', () => {
    let mortgageService = fixture.debugElement.injector.get(MortgageService);
    fixture.detectChanges();
    expect(mortgageService.getAmortization()).toEqual(component.years);
  });

  it('should use peyFrequency from mortgage service', () => {
    let mortgageService = fixture.debugElement.injector.get(MortgageService);
    fixture.detectChanges();
    expect(mortgageService.getPaymentFrequency()).toEqual(component.peyFrequency);
  });



});
