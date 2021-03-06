import { Component, OnInit } from '@angular/core'
import { Bug } from './models/Bug';

import { BugOperationsService } from './services/bugOperations.service';

import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'

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

	loadBugs () {
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	ngOnInit(){
		//this.bugs = this.bugOperations.getAll();
		this.loadBugs();
	}

	onNewBugAdded(newBug: Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe((response) => {
				let toggledBug = response;
				this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
			});
		
	}

	onRemoveClosedClick(){
		var deleteObservables = this.bugs
			.filter(bug => bug.isClosed)
			.map(closedBug => this.bugOperations.remove(closedBug));

		forkJoin(deleteObservables)
			.subscribe(any => this.loadBugs());
	}

	
}