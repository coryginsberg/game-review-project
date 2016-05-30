/**
 * Created by Cory Ginsberg on 5/29/2016.
 */
import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams, JSONPBackend, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";

const GIANTBOMB_API_KEY = '9e110c38f924128c200ce3bea458dd12fc4acc90';
const GIANTBOMB_API_URL = 'http://www.giantbomb.com/api/search/?';

@Injectable()
export class SearchService {

  data:Object;

  constructor(private jsonp:Jsonp) { }

  // Uses jsonp.get() to load a single JSON file
  getSearchResults(request: string) {
    var search = new URLSearchParams();
    search.set('api_key', GIANTBOMB_API_KEY);
    search.set('query', request);
    search.set('field_list', 'name,deck,number_of_user_reviews');
    search.set('limit', '10');
    search.set('resources', 'game');
    search.set('format', 'jsonp');
    search.set('json_callback', 'JSONP_CALLBACK');

    let queryUrl = `${GIANTBOMB_API_URL}${search}`;
    this.jsonp.get(queryUrl)
              .map(res => res.json())
              .subscribe(data => this.data = data,
                          err => console.log(err),
                           () => console.log('Completed'));

    return this.data;
  }

  getData() {
    return this.data;
  }

}
