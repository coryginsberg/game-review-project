/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, Input, OnInit} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Review} from "./review";
import {ReviewService} from "./review.service";
import {REVIEWS} from "./mock-reviews";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {ReviewDetailComponent} from "./review-detail.component";

@Component({
    selector: 'my-review',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MdButton, ReviewDetailComponent],
    templateUrl: 'app/review.component.html',
    styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
    @Input() title:Review;

    constructor(private routeParams:RouteParams,
                private reviewService:ReviewService) {
    }


    ngOnInit() {
        // var unirest = require('unirest');
        // These code snippets use an open-source library. http://unirest.io/nodejs
        // unirest.get("https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=Call+of+Duty")
        //     .header("X-Mashape-Key", "3eVSH616qYmsh1v5ZbjRPu150bpyp10RGBDjsnWqAfBVERGFB8")
        //     .header("Accept", "application/json")
        //     .end(function (result) {
        //         console.log(result.status, result.headers, result.body);
        //     });
        this.printToConsole();

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
