/**
 * Created by Cory Ginsberg on 5/24/2016.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
// import {SearchResult} from "./review.component"

let GIANTBOMB_API_KEY = '9e110c38f924128c200ce3bea458dd12fc4acc90';
let GIANTBOMB_API_URL = 'http://www.giantbomb.com/api/search/?';

@Injectable()
export class GiantBombService {
    constructor(public http:Http, @Inject(GIANTBOMB_API_KEY) private apiKey, @Inject(GIANTBOMB_API_URL) private apiUrl) {

    }

    // search(query: string): Observable<SearchResult[]> {
    //     let params: string = [
    //         `query=${query}`,
    //         `api_key=${this.apiKey}`,
    //         `field_list=aliases`,
    //         `limit=5`,
    //         `format=json`
    //     ].join('&');
    //     let queryUrl = `${this.apiUrl}?${params}`;
    //
    //     return this.http.get(queryUrl).map((response: Response) => {
    //         return (<any>response.json().items.map(item => {
    //             console.log("raw item", item); // uncomment if you want to debug
    //             return new SearchResult({
    //                 title: item.id.aliases
    //             })
    //         }))
    //     })
    // }
}