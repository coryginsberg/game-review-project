/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Component of the App
 */
import {Component, OnInit} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {REVIEWS} from "./mock-reviews";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";

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
                    <md-input #title (keyup.enter)="getTitle(title.value)" (blur)="getTitle(title.value)" type="text" dividerColor="warn" placeholder="Name of the Game" class="game-input"></md-input>
                </div>
    
                <button [routerLink]="['ReviewDetails', {title: title.value}]" md-raised-button type="submit" color="warn" class="btn btn-default review-btn">Get Reviews</button>
            </form>
        </div>
    `,
    styleUrls: ['app/review.component.css'],
})

export class ReviewComponent implements OnInit {
    title = '';
    
    constructor(private router:Router) {
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

    ngOnInit() {
        this.printToConsole();
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
