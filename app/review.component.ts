/**
 * Created by coryginsberg on 4/30/16.
 */
import {Component, Input, OnInit} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Review} from "./review";
import {ReviewService} from "./review.service";
import {REVIEWS} from "./mock-reviews";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";

@Component({
    selector: 'my-review',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES],
    templateUrl: 'app/review.component.html',
    styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
    @Input() name:Review;
    @Input() console:Review;
    constructor(private _reviewService:ReviewService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        // var unirest = require('unirest');
        
        let name = +this._routeParams.get('name');
        let gameConsole = +this._routeParams.get('console');

        this._reviewService.getReview(REVIEWS[0].name)
            .then(review => this.name = review);
        this._reviewService.getReview(REVIEWS[0].console)
            .then(review => this.console = review);
        console.log(REVIEWS[0].name);
        console.log(name + ", " + gameConsole);

        // These code snippets use an open-source library. http://unirest.io/nodejs
        // unirest.get("https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/search?game_name=Call+of+Duty")
        //     .header("X-Mashape-Key", "3eVSH616qYmsh1v5ZbjRPu150bpyp10RGBDjsnWqAfBVERGFB8")
        //     .header("Accept", "application/json")
        //     .end(function (result) {
        //         console.log(result.status, result.headers, result.body);
        //     });


    }
}
