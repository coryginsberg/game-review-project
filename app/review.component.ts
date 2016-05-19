/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
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
    title = '';

    constructor(private router:Router,
                private reviewService:ReviewService) {
    }

    getTitle(title:string) {
        this.title = title;
        console.log(title); 

        this.router.navigate(['ReviewDetail', {title: this.title}]);
    }

    ngOnInit() {
        this.printToConsole();
    }

    printToConsole() {
        this.reviewService.getReview(REVIEWS[0].title)
            .then(string => this.title = string);
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
