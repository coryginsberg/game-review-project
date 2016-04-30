/**
 * Created by coryginsberg on 4/30/16.
 */
import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";
import {Review} from "./review";
import {ReviewService} from "./review.service";

@Component({
    selector: 'my-review',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/review.component.html',
    styleUrls: ['app/review.component.css'],
})
export class ReviewComponent implements OnInit {
    @Input() name:Review;
    // @input() console: Review;
    constructor(private _reviewService:ReviewService,
                private _routeParams:RouteParams) {

    }

    ngOnInit() {
        let name = +this._routeParams.get('name');
        let console = +this._routeParams.get('console');
        this._reviewService.getReview(name)
            .then(review => this.name = review);
    }

}
