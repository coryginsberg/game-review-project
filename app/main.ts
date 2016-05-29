import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, JSONP_PROVIDERS]);
