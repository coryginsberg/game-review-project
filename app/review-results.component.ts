/**
 * Created by Cory Ginsberg on 5/30/2016.
 */
import {Component, OnInit} from "@angular/core";
import {RouteParams, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import {SearchService} from "./search.service";

@Component({
  selector: 'review-detail',
  template: `
    <h1>Results for {{id}}</h1>
    <div *ngFor="let result of results" class="details-div">
      <h2>{{result.name}}</h2>
      <h3>By {{result.developer}}</h3>
      <br>
      <h3>Description:</h3>
      <h3>{{result.deck}}</h3>
      
      <br>
      <button (click)="ReviewResultsComponent.goBack()" type="submit" class="btn btn-default review-btn" md-raised-button color="warn">Search For Another Game</button>
    </div>
  `,
  styleUrls: ['app/review-detail.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES]
})

export class ReviewResultsComponent implements OnInit {
  game:Object;
  id:string;
  title = 'Sorry! The game you entered was not found. Please make sure you spelled the name right and try again.';
  platforms:string[] = [];
  obj:any = "";
  results:any[] = [];

  constructor(private routeParams:RouteParams, private _searchService:SearchService) {
  }

  ngOnInit() {
    this.id = this.routeParams.get('id');
    this._searchService.getGameResults(this.id);
    this._searchService.getGameResults(this.id);

    this.obj = this._searchService.getData();
    this.obj = this._searchService.getData();

    console.log(this.obj + "The Object");
    this.obj.results.forEach(data => {
      var result = {
        name: data.name,
        deck: data.deck,
        developer: data.developer[0].name
      };
      this.results.push(result);
    });
  }

  static goBack() {
    window.history.back();
  }

}
