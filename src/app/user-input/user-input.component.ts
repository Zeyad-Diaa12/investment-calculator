import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentCalculatorService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '10';
  duration = '10';

  constructor(private investmentService: InvestmentCalculatorService) { }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: parseFloat(this.initialInvestment),
      annualInvestment: parseFloat(this.annualInvestment),
      expectedReturn: parseFloat(this.expectedReturn),
      duration: parseInt(this.duration)
    });
    this.initialInvestment = '0';
    this.annualInvestment = '0';
    this.expectedReturn = '10';
    this.duration = '10';
  }
}
