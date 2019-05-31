import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';


@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug{
		let newBug : Bug = {
			id : '',
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugStorage.save(newBug);
	}
	toggle(bugToToggle : Bug) : Bug {
		//bugToToggle.isClosed = !bugToToggle.isClosed;
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorage.save(toggledBug);
	}

	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}

	getAll(){
		return this.bugStorage.getAll();
	}
}