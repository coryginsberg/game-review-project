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
import {SearchService} from "./search.service"
// import {SearchResult} from "./search.results"
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import {Observable} from "rxjs/Rx";
import { FetchJsonPipe } from './fetch-json.pipe';
import {Observable} from "rxjs/Rx";
import {Review} from "./review"

@Component({
  selector: 'my-review',
  providers: [JSONP_PROVIDERS],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES],
  template: `
        <section class="title-div">
            <h2>Please enter a video game name you want reviews for.</h2>
        </section>
        <div class="form-div">
            <form class="main-form">
                <div class="game-div">
                    <input #title type="text" placeholder="Name of the Game" class="game-input" (keyup)="search(title.value)"/>
                </div>
                
                <ul>
                    <li *ngFor="let result of results">
                        {{result.name}}
                    </li>
                </ul>
    
                <!--<button (click)="search(title.value)" md-raised-button type="submit" color="warn" class="btn btn-default review-btn">Get Reviews</button>-->
                <!--<ul>-->
                    <!--<li *ngFor="let results of ('http://www.giantbomb.com/api/search/?query=the%20witcher&api_key=9e110c38f924128c200ce3bea458dd12fc4acc90&field_list=name,deck,number_of_user_reviews&resources=game&limit=10&format=jsonp&json_callback=JSONP_CALLBACK' | fetch)">{{item}}</li>-->
                <!--</ul>-->
            </form>
        </div>
        
        <div *ngIf="loading">loading...</div>
        <pre>{{data | json}}</pre>
    `,
  styleUrls: ['app/review.component.css'],
  pipes: [FetchJsonPipe]
})

export class ReviewComponent implements OnInit {
  title = '';
  loading: boolean;
  items: Observable<string[]>;
  jsonOutput: string;
  obj:any;
  results:any[];

  constructor(private router:Router, private _searchService: SearchService) { }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{
      // console.log(obj[key]);
      return obj[key];
    });
  }

  search(request:string) {
    this.results = [];
    // console.log(this._searchService.getSearchResults(request).subscribe(res => this.data = res.data) + " As an Object");
    // console.log(this.generateArray(this._searchService.getSearchResults(request)) + " As an array");
    this._searchService.getSearchResults(request);
    // console.log(JSON.stringify(this._searchService.getData()));

    this.obj = this._searchService.getData();
    // console.log(this.obj.results[0].name + " Name Of First Listed.");
    for (let result of this.obj.results) {
      console.log("Name: " + result.name);
      console.log("Deck: " + result.deck);
      console.log("Number of User Review: " + result.number_of_user_reviews);
      console.log("");
      this.results.push(new Review(result.name, result.deck, result.number_of_user_reviews));
      console.log(this.results[this.results.length - 1].name + " This should be the name of the last item in the array.");
    }

    console.log(this.results.length);

    // console.log(JSON.stringify(this._searchService.getData()));
    // return this.items = JSON.stringify(this._searchService.getData());
    // return this._searchService.getSearchResults(request);

  }

  ngOnInit() {

  }
}
