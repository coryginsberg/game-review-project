/**
 * Created by Cory Ginsberg on 5/24/2016.
 */


export class SearchResult {
    title:string;

    constructor(obj?:any) {
        this.title = obj && obj.title || null;
    }
}