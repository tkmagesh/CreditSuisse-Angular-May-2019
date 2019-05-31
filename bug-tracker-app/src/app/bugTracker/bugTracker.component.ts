import { Component, OnInit } from '@angular/core'
import { Bug } from './models/Bug';

import { BugOperationsService } from './services/bugOperations.service';



@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	sortAttr : string = 'id';

	sortDesc : boolean = false;

	

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'))
		this.bugs.push(this.bugOperations.createNew('Application not responding'))
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'))
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'))
	}

	onNewBugAdded(newBug: Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}