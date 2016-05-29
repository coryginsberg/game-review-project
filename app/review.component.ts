/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, OnInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {Http, Jsonp, JSONP_PROVIDERS} from "@angular/http";
import {SearchResult} from "./search.results"
import 'rxjs/Rx';

const GIANTBOMB_API_KEY = '36fbe6d8b4d6c526b02dfff81bce0d9f996709e7';
const GIANTBOMB_API_URL = 'http://www.giantbomb.com/api/search/?';

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
                    <md-input #title type="text" dividerColor="warn" placeholder="Name of the Game" class="game-input"></md-input>
                </div>
    
                <button (click)="makeRequest(title.value)" md-raised-button type="submit" color="warn" class="btn btn-default review-btn">Get Reviews</button>
            </form>
        </div>
        <div *ngIf="loading">loading...</div>
        <pre>{{data | json}}</pre>
    `,
  styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
  title = '';
  data:Object;
  http:Http;
  jsonp:Jsonp;
  loading: boolean;

  constructor(private router:Router, http:Http, jsonp:Jsonp) {
    this.http = http;
    this.jsonp = jsonp;
  }

  getSearchResults(request:string) {
    let params:string = [
      `query=${request}`,
      `api_key=${GIANTBOMB_API_KEY}`,
      `field_list=name,deck,number_of_user_reviews`,
      `resources=game`,
      `limit=10`,
      `format=jsonp`,
      `json_callback=JSONP_CALLBACK`
    ].join('&');
    let queryUrl = `${GIANTBOMB_API_URL}${params}`;
    return this.jsonp.request(queryUrl).map(res => {
      return (<any>res.json()).items.map(item => {
        console.log("raw item", item);
        return new SearchResult({
          name: item.name,
          deck: item.deck,
          number_of_user_reviews: item.number_of_user_reviews,
          resourceType: item.resourceType
        });
      })
    })
  }

  makeRequest(request:string) {
    this.chooseGame(this.getSearchResults(request));
  }

  chooseGame(selection:any) {

  }

  ngOnInit() {

  }
}
