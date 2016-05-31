/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, OnInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {JSONP_PROVIDERS} from "@angular/http";
import {SearchService} from "./search.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";


@Component({
  selector: 'my-review',
  providers: [JSONP_PROVIDERS],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES],
  templateUrl: 'app/review.component.html',
  styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
  title = "";
  loading:boolean = true;
  obj:any = "";
  public results:any[] = [];

  constructor(private router:Router, private _searchService: SearchService) { }

  search(request:string) {
    this._searchService.getSearchResults(request);

    this.obj = this._searchService.getData();
    this.obj.results.forEach(data => {
      var result = {
        name: data.name,
        deck: data.deck,
        number_of_user_reviews: data.number_of_user_reviews,
        site_detail_url: data.site_detail_url
      };
      this.results.push(result);
    });

    this.router.navigate(['ReviewDetails', {title: request}]);

  }

  ngOnInit() {

  }
}
