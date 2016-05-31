/**
 * Created by Cory Ginsberg on 5/29/2016.
 */
import {Injectable} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";

const GIANTBOMB_API_KEY = '9e110c38f924128c200ce3bea458dd12fc4acc90';
const GIANTBOMB_API_SEARCH_URL = 'http://www.giantbomb.com/api/search/?';
const GIANTBOMB_API_GAME_URL = 'http://http://www.giantbomb.com/api/game/';

@Injectable()
export class SearchService {

  data:Object;

  constructor(private jsonp:Jsonp) { }

  // Uses jsonp.get() to load a single JSON file
  getSearchResults(request: string) {
    var search = new URLSearchParams();
    search.set('api_key', GIANTBOMB_API_KEY);
    search.set('query', request);
    search.set('field_list', 'name,deck,number_of_user_reviews,site_detail_url');
    search.set('limit', '10');
    search.set('resources', 'game');
    search.set('format', 'jsonp');
    search.set('json_callback', 'JSONP_CALLBACK');

    let queryUrl = `${GIANTBOMB_API_SEARCH_URL}${search}`;
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

  getGameResults(gameID:string) {
    var search = new URLSearchParams();
    search.set('api_key', GIANTBOMB_API_KEY);
    search.set('field_list', 'name,deck,developers');
    search.set('format', 'jsonp');
    search.set('json_callback', 'JSONP_CALLBACK');

    gameID += "/";

    let queryUrl = `${GIANTBOMB_API_GAME_URL}${gameID}${search}`;
    this.jsonp.get(queryUrl)
      .map(res => res.json())
      .subscribe(data => this.data = data,
        err => console.log(err),
        () => console.log('Completed'));

    // console.log(this.data + " this.data");
    
    return this.data;
  }
}
