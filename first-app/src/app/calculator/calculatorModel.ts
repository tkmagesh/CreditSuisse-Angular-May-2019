export class CalculatorModel{
	//state
	v1 : number = 0;
	v2 : number = 0;
	result : number = 0;

	//behavior
	public add(){
		this.result = this.v1 + this.v2;
	}

	subtract(){
		this.result = this.v1 - this.v2;
	}

	multiply(){
		this.result = this.v1 * this.v2;
	}

	divide(){
		this.result = this.v1 / this.v2;
	}
}