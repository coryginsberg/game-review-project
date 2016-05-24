/**
 * Created by Cory Ginsberg on 5/24/2016.
 *
 * Review Service file
 *
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {


    constructor(http:Http) {
        // this.http = http;
    }


}
