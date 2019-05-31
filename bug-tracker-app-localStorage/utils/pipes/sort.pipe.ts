import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(item1 : any , item2 : any ) : number;
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string) : Comparer {
		return function(p1 : any, p2 : any) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}

	private getDescendingComparerFor(comparer : Comparer){
		return function(p1 : any, p2 : any) : number {
			return comparer(p1, p2) * -1;
	    }
	}

	transform(data : any[], attrName : string, isDesc : boolean = false){
		//console.log('sortpipe.transform triggered');
		if (!data || !data.length || !attrName) return data;
		let comparer = this.getComparerFor(attrName);
		if (isDesc)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}