import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
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

@RouteConfig([
    {path: '/review', name: 'Review', component: ReviewComponent, useAsDefault: true},
    {path: '/review/:title', name: 'ReviewDetails', component: ReviewDetailComponent}
])

export class AppComponent {
    title = 'Video Game Reviews';
}
