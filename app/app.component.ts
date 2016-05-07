import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {ReviewComponent} from "./review.component";
import {ReviewService} from "./review.service";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ReviewService
    ]
})

@RouteConfig([
    {
        path: '/review',
        name: 'Review',
        component: ReviewComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    title = 'Video Game Reviews';
}
