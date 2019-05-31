import { Bug } from '../models/Bug';
import * as uuid from 'uuid/v4';

export class BugStorageService{

	private storage = window.localStorage;

	save(bugData : Bug){
		bugData.id = bugData.id || uuid();
		this.storage.setItem(bugData.id, JSON.stringify(bugData))
		return bugData;
	}

	remove(bugData : Bug) : void {
		this.storage.removeItem(bugData.id);
	}

	getAll() : Bug[]{
		var result = [];
		for(let index = 0, count = this.storage.length; index < count; index++ ){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			result.push(bug);
		}
		return result;
	}
}