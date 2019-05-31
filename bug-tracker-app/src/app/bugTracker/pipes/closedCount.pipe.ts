import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: Bug[], args: any[]): any {
		console.log('getClosedCount.transform triggered');
		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);		
	}
}