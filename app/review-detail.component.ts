/**
 * Created by Cory Ginsberg on 5/13/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router, RouteParams, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {REVIEWS} from "./mock-reviews";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";

@Component({
  selector: 'review-detail',
  template: `
    <h2>{{title}}</h2>
    <div>
        <h2>{{title | uppercase}} is my hero</h2>
    </div>
  `,
  styleUrls: ['app/review-detail.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES]
})

export class ReviewDetailComponent implements OnInit {
  title:string;

  constructor(private routeParams:RouteParams,
              private router:Router) {
  }

  ngOnInit() {
    let title = this.routeParams.get('title');
  }

  printToConsole() {
    console.log(REVIEWS[0].title);
    console.log(REVIEWS[0].score);
    console.log(REVIEWS[0].publisher);
    console.log(REVIEWS[0].short_description);

    for (var key in REVIEWS[0].platforms) {
      var system = REVIEWS[0].platforms[key];
      console.log('Key ' + key + ' has value : ' + system);
    }

    console.log(REVIEWS[0].platforms);
    console.log(REVIEWS[0].thumb);
  }
  
}