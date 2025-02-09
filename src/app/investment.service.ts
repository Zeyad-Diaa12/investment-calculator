import { Injectable } from "@angular/core";
import { Investmentinput } from "./investment-input.model";
import { InvestmentResult } from "./investment-result.model";

@Injectable({ providedIn: 'root' })
export class InvestmentCalculatorService {
    resultsData?: InvestmentResult[];

    calculateInvestmentResults(data: Investmentinput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.resultsData = annualData
    }
}