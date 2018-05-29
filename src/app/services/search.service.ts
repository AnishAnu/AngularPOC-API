import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Searchresult} from '../models'


@Injectable()
export class SearchService {
	
	results: Searchresult[];
	apiRoot: string = 'https://itunes.apple.com/search';
	constructor(private http: Http) {
		console.log("sss");
		this.results = [];
	}

  	public searchApi(term: string): Observable<Searchresult> {
		console.log("api---------",term);
		let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
		console.log("api url",apiURL);
		return this.http.get(apiURL)
			   .map((response) => {
			   	console.log('response', response.json());
			   	return this.results = response.json().results
			   	.map(item => {
			   		return {
			   			videoname:item.trackName,
                		title:item.artistName,
                		type:item.trackViewUrl
                	};
                		
			   			
			   	});
			   		
			   });
	}
}
