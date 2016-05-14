/**
 * Created by Cory Ginsberg on 5/13/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router, RouteSegment} from "@angular/router";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Review} from "./review";
import {ReviewService} from "./review.service";
import {REVIEWS} from "./mock-reviews";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";

@Component({
  selector: 'review-detail',
  templateUrl: 'app/review-detail.component.html',
  styleUrls: ['app/review-detail.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton]
})

export class ReviewDetailComponent implements OnInit {
  review:Review;
  title:Review;
  score:Review;
  publisher:Review;
  short_description:Review;
  platforms:Review;
  thumb:Review;

  constructor(private router:Router,
              private service:ReviewService) {
  }

  routerOnActivate(curr:RouteSegment):void {
    let title = +curr.getParam('title');
    this.service.getReview(title.toString()).then(title => this.title = title);
  }

  ngOnInit() {
    this.printToConsole();
  }

  printToConsole() {
    this.service.getReview(REVIEWS[0].title)
        .then(review => this.title = review);
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