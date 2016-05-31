import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {ReviewComponent} from "./review.component";
import {ReviewDetailComponent} from "./review-detail.component";
import {ReviewResultsComponent} from "./review-results.component";
import {SearchService} from "./search.service";

@Component({
  selector: 'my-app',
  template: `
        <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ReviewDetailComponent, ReviewResultsComponent],
  providers: [ROUTER_PROVIDERS, SearchService]
})

@RouteConfig([
  {path: '/', name: 'Review', component: ReviewComponent, useAsDefault: true},
  {path: '/:id', name: 'ReviewResults', component: ReviewResultsComponent},
  {path: '/results/:title', name: 'ReviewDetails', component: ReviewDetailComponent}
])

export class AppComponent {
  title = 'Video Game Reviews!'
}
