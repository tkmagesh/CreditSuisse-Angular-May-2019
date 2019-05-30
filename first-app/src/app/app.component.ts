import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(){
  	/*setTimeout(() => {
  		this.title = 'My New App';
  	}, 5000);*/
  }

  onChangeTitleClick(newTitle){
  	//let newTitle = prompt('Enter the new title');
  	this.title = newTitle;
  }
}
