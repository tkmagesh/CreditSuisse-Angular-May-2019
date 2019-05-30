import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html',
	styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{

	result : number = 0;

	onAddClick(v1 : string, v2 : string){
		var n1 = parseInt(v1),
			n2 = parseInt(v2);
		this.result = n1 + n2;
	}

}