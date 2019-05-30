import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-2',
	templateUrl : 'calculatorTwo.component.html',
	providers : [CalculatorModel]
})
export class CalculatorTwoComponent{
	
	/*model : CalculatorModel;

	constructor(_model : CalculatorModel){
		this.model = _model;
	}*/

	constructor(private model : CalculatorModel){
		
	}	

	onCalculateClick(operator : string){

		switch (operator) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}
	}
}