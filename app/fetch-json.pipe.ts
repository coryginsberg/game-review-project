/**
 * Created by Cory Ginsberg on 5/29/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { Jsonp }                from '@angular/http';

@Pipe({
  name: 'fetch',
  pure: false
})

export class FetchJsonPipe  implements PipeTransform {
  private fetchedJson: any = null;
  private prevUrl = '';
  constructor(private _jsonp: Jsonp) { }
  transform(url: string): any {
    if (url !== this.prevUrl) {
      this.prevUrl = url;
      this.fetchedJson = null;
      this._jsonp.get(url)
        .map( result => result.json() )
        .subscribe( result => this.fetchedJson = result );
    }
    return this.fetchedJson;
  }
}
