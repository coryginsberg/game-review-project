// Imports for loading & configuring the in-memory web api
import {HTTP_PROVIDERS} from "@angular/http";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {AppComponent} from "./app.component";

// The usual bootstrapping imports

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);