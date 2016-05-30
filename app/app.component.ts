import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {ReviewComponent} from "./review.component";
import {ReviewDetailComponent} from "./review-detail.component";
// import {SearchResult} from "./search.results";

@Component({
  selector: 'my-app',
  template: `
        <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ReviewDetailComponent],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {path: '/review',        name: 'Review',        component: ReviewComponent,       useAsDefault: true},
  {path: '/review/:title', name: 'ReviewDetails', component: ReviewDetailComponent}
])

export class AppComponent {

  ngOnInit() {
  }
}
