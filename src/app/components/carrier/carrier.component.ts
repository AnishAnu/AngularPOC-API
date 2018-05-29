import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-carrier',
   providers: [SearchService],
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
public result = [];
constructor(public searchservice: SearchService,
  			  public route: ActivatedRoute,
  			  public router: Router ) { }
  ngOnInit() {
  }
  doSearch(searchTerm){
  	this.result=[];
    console.log('serach term', searchTerm);
  	if(searchTerm != undefined){
  		this.searchservice
  		.searchApi(searchTerm)
  		.subscribe((data)=>{
  			console.log("result",data);
  		// 		for(let i=0;i<data.length;i++) {
	  	// 		this.result.push({
	  	// 			name: data[i].artist,
	  	// 			link: data[i].link,
	  	// 			track: data[i].track,
	  	// 			artistId: data[i].artistId

  		// });
  	});


}
}
// }
}