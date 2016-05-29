/**
 * Created by Cory Ginsberg on 5/29/2016.
 */

export class SearchResult {
  name: string;
  deck: string;
  number_of_user_reviews:number;
  resourceType: string;

  constructor(obj?: any) {
    this.name = obj                   && obj.name                   || null;
    this.deck = obj                   && obj.deck                   || null;
    this.number_of_user_reviews = obj && obj.number_of_user_reviews || null;
    this.resourceType = obj           && obj.resourceType           || null;
  }

}
