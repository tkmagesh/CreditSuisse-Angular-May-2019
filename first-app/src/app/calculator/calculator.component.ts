import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{

	//model : CalculatorModel = new CalculatorModel();

	model : CalculatorModel;

	constructor(_model : CalculatorModel){
		this.model = _model;
	}

	onAddClick(){
		this.model.add();
	}

}