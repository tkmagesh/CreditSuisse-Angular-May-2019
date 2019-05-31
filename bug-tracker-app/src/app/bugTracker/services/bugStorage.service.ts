import { Bug } from '../models/Bug';
import * as uuid from 'uuid/v4';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class BugStorageService{

	private storage = window.localStorage;

	private serviceEndPoint = 'http://localhost:3000/bugs/';

	constructor(private http : HttpClient){

	}

	save(bugData : Bug) : Observable<Bug>{
		if (bugData.id === 0){
			return this.http
				.post<Bug>(this.serviceEndPoint, bugData);
		} else {
			return this.http
				.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
		}
	}

	remove(bugData : Bug) : Observable<any> {
		return this.http.delete<any>(`${this.serviceEndPoint}/${bugData.id}`)
	}

	getAll() : Observable<Bug[]>{
		return this.http
			.get<Bug[]>(this.serviceEndPoint);
			
	}
}