import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h1>Products</h1>
		<hr>
		<ol>
			<li *ngFor='let item of list'>{{item}}</li>
		</ol>
	`
})
export class ProductsComponent{
	list : string = ['Pen', 'Pencil', 'Marker'];
}