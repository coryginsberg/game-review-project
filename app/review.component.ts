/**
 * Created by coryginsberg on 4/30/16.
 */
import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Review} from "./review";
import {ReviewService} from "./review.service";
import {REVIEWS} from "./mock-reviews";
@Component({
    selector: 'my-review',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
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
        let name = +this._routeParams.get('name');
        let gameConsole = +this._routeParams.get('console');
        this._reviewService.getReview(REVIEWS[0].name)
            .then(review => this.name = review);
        this._reviewService.getReview(REVIEWS[0].console)
            .then(review => this.console = review);
        console.log(REVIEWS[0].name);
        console.log(name + ", " + gameConsole);
    }

}
