import {Component} from "@angular/core";
import {Router, ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {ReviewComponent} from "./review.component";
import {ReviewService} from "./review.service";
import {ReviewDetailComponent} from "./review-detail.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ReviewService]
})

@Routes([
    {path: '/review', component: ReviewComponent},
    {path: '/review/details', component: ReviewDetailComponent}
])

export class AppComponent {
    constructor(private router:Router) {
    }

    title = 'Video Game Reviews';
}
