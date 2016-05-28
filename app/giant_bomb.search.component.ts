/**
 * Created by Cory Ginsberg on 5/24/2016.
 */
import {Injectable, Inject} from "@angular/core";
import {Jsonp, Response} from "@angular/http";
// import {SearchResult} from "./review.component"

let GIANTBOMB_API_KEY = '9e110c38f924128c200ce3bea458dd12fc4acc90';
let GIANTBOMB_API_URL = 'http://www.giantbomb.com/api/search/?';

@Injectable()
export class GiantBombService {

    constructor(@Inject(GIANTBOMB_API_KEY) private apiKey,
                @Inject(GIANTBOMB_API_URL) private apiUrl,
                private jsonp:Jsonp) {

        apiKey = GIANTBOMB_API_KEY;
        apiUrl = GIANTBOMB_API_URL;
    }

    search(query:string) {
        let params:string = [
            `query=${query}`,
            `api_key=${this.apiKey}`,
            `field_list=aliases`,
            `limit=5`,
            `format=jsonp`,
            `json_callback=JSONP_CALLBACK`
        ].join('&');
        let queryUrl = `${this.apiUrl}?${params}`;

        return this.jsonp.get(queryUrl).map((response:Response) => {
            return ((<any>response.json()).items.map(item => {
                console.log("raw item", item); // uncomment if you want to debug
                // return new SearchResult({
                //     title: item.id.aliases
                // })
            }))
        })
    }
}