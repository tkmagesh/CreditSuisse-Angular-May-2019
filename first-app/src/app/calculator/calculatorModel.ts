export class CalculatorModel{
	//state
	v1 : number = 0;
	v2 : number = 0;
	result : number = 0;

	//behavior
	add(){
		this.result = this.v1 + this.v2;
	}

	subtract(){
		this.result = this.v1 - this.v2;
	}
}