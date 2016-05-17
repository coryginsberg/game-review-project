/**
 * Created by Cory Ginsberg on 5/13/2016.
 */
import {Component, OnInit} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";
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
  title:Review;

  constructor(private routeParams:RouteParams,
              private reviewService:ReviewService) {
  }

  ngOnInit() {
    let title = this.routeParams.get('title');
  }

  printToConsole() {
    this.reviewService.getReview(REVIEWS[0].title)
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