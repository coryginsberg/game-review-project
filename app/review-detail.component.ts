/**
 * Created by Cory Ginsberg on 5/13/2016.
 *
 * Review-Detail Component
 */
import {Component, OnInit} from "@angular/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {Http, JSONP_PROVIDERS} from "@angular/http";
import {SearchService} from "./search.service";

@Component({
  selector: 'review-detail',
  template: `
    <div class="details-div">
      <h2>Results for: {{title}}</h2>
      <li *ngFor="let result of results">
        <a (click)="goToDetail(result.name)">{{result.name}}</a>
      </li>
      <br>
      <button (click)="goBack()" type="submit" class="btn btn-default review-btn" md-raised-button color="warn">Back To Search</button>
    </div>
  `,
  styleUrls: ['app/review-detail.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES],
  providers: [JSONP_PROVIDERS]
})

export class ReviewDetailComponent implements OnInit {
  // game:Review;
  title = 'Sorry! The game you entered was not found. Please make sure you spelled the name right and try again.';
  platforms:string[] = [];

  data:Object;
  loading:boolean;
  http:Http;
  searchService:SearchService;
  obj:any = "";
  public results:any[] = [];
  id:string;

  constructor(private router:Router, private routeParams:RouteParams, http:Http, _searchService:SearchService) {
    this.http = http;
    this.searchService = _searchService;
  }

  ngOnInit() {
    this.title = this.routeParams.get('title').replace(/%20/, " ");
    // console.log(this.title);

    this.searchService.getSearchResults(this.title);
    this.obj = this.searchService.getData();
    // console.log(this.obj.results.toString());
    this.obj.results.forEach(data => {
      var result = {
        name: data.name,
        deck: data.deck,
        number_of_user_reviews: data.number_of_user_reviews,
        site_detail_url: data.site_detail_url
      };
      this.results.push(result);
    });

    this.results.forEach(result => console.log('Name on review detail: ' + result.name));

  }

  // The address always ends in a '/' which will cause errors when trying to get the ID.
  removeLastSlash(url:string) {
    if (url.charAt(url.length - 1) == "/") {
      url.substring(0, url.length - 2);
    }
    return url;
  }

  goToDetail(name:string) {

    this.results.forEach(result => {
      if (result.name == name) {
        this.id = result.site_detail_url.substring(result.site_detail_url.slice(0, -1).lastIndexOf('/'));
        // console.log("ID: " + this.id.replace(/[^0-9-]/g,""));
      }
    });

    this.router.navigate(['ReviewResults', {id: this.id.replace(/[^0-9-]/g, "")}]);
  }

  goBack() {
    window.history.back();
  }
}

