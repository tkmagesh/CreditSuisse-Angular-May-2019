import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html',
	styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{

	result : number = 0;

	v1 : number = 0;
	v2 : number = 0;

	/*setV1(value : string){
		this.v1 = parseInt(value);
	}

	setV2(value : string){
		this.v2 = parseInt(value);
	}*/

	onAddClick(){
		this.result = this.v1 + this.v2;
	}

	onSubtractClick() : void {
		this.result = this.v1 - this.v2;
	}

}