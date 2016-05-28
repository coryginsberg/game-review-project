/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, OnInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {Http, Jsonp} from "@angular/http";

@Component({
    selector: 'my-review',
    directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES],
    template: `
        <section class="title-div">
            <h2>Please enter a video game name you want reviews for.</h2>
        </section>
        <div class="form-div">
            <form class="main-form">
                <div class="game-div">
                    <md-input #title  type="text" dividerColor="warn" placeholder="Name of the Game" class="game-input"></md-input>
                </div>
    
                <button (click)="makeRequest()" md-raised-button type="submit" color="warn" class="btn btn-default review-btn">Get Reviews</button>
            </form>
        </div>
        <button type="button" (click)="makeRequest()">Make Request</button>
        <div *ngIf="loading">Loading...</div>
        <pre>{{data | json}}</pre>
    `,
    styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
    title = '';
    data:Object;
    loading:boolean;
    http:Http;
    jsonp:Jsonp;
    private GIANTBOMB_API_KEY = '9e110c38f924128c200ce3bea458dd12fc4acc90';
    private GIANTBOMB_API_URL = 'http://www.giantbomb.com/api/search/?';

    constructor(private router:Router, http:Http, jsonp:Jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }

    getTitle(title:string) {
        this.title = title;
        console.log(title);
        if (title != null) {
            this.router.navigate(['ReviewDetails', {title: this.title}]);
        } else {
            console.log("Hello World");
        }
    }

    makeRequest(request:string) {
        this.search(request);
    }

    search(query:string) {
        let params:string = [
            `query=${query}`,
            `api_key=${this.GIANTBOMB_API_KEY}`,
            `field_list=aliases`,
            `limit=5`,
            `format=jsonp`,
            `json_callback=JSONP_CALLBACK`
        ].join('&');
        let queryUrl = `${this.GIANTBOMB_API_URL}?${params}`;
        this.loading = true;
        this.jsonp.request(queryUrl).subscribe(response => {
            (response.json().items.map(item => {
                console.log("raw item", item); // uncomment if you want to debug
                // return new SearchResult({
                //     title: item.id.aliases
                // })
            }));
        });
    }

    ngOnInit() {

    }
}

