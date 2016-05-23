/**
 * Created by Cory Ginsberg on 5/13/2016.
 */
import {Component, OnInit} from "@angular/core";
import {RouteParams, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {REVIEWS} from "./mock-reviews";
import {Review} from "./review";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MdButton} from "@angular2-material/button";
import "unirest";

@Component({
  selector: 'review-detail',
  template: `
    <h2 class="md-display-1">{{title}}</h2>
    <div>
        <h3 class="md-headline">{{game.publisher}}</h3>
        <h1 class="md-headline">{{game.score}}</h1>
    </div>
    <h3>{{game.short_description}}</h3>
    <img src="{{game.thumb}}" alt="{{game.title}} Thumbnail" title="{{game.title}} Thumbnail">
    <li *ngFor="let platform of platforms">
      {{platform}}
    </li>
    <br>
    <button (click)="goBack()" type="submit" class="btn btn-default review-btn" md-raised-button color="warn">Search For Another Game</button>

  `,
  styleUrls: ['app/review-detail.component.css'],
  directives: [MD_INPUT_DIRECTIVES, MdButton, ROUTER_DIRECTIVES]
})

export class ReviewDetailComponent implements OnInit {
  game:Review;
  title = 'Sorry! The game you entered was not found. Please make sure you spelled the name right and try again.';
  platforms:string[] = [];
  
  constructor(private routeParams:RouteParams) {
  }

  ngOnInit() {
    var unirest = require('unirest');
  
    unirest.get("https://videogamesrating.p.mashape.com/get.php?count=1&game=the+elder+scrolls+skyrim")
        .header("X-Mashape-Key", "3eVSH616qYmsh1v5ZbjRPu150bpyp10RGBDjsnWqAfBVERGFB8")
        .header("Accept", "application/json")
        .end(function (result) {
          console.log(result.status, result.headers, result.body);
        });
  
    name = this.routeParams.get('title').replace(/%20/, " ");
    for (var game of REVIEWS) {
      if (name == game.title) {
        this.title = this.routeParams.get('title').replace(/%20/, " ");
        this.game = game;
      
        for (var key in game.platforms) {
          let system = game.platforms[key];
          this.platforms.push(system);
        }
      }
      console.log(game.title);
    }
  }
  
  //FIXME: When going back from a search that is not in the game list, the page reverts to a white button and nothing happens when pressed. Works fine when the search succeeds.
  goBack() {
    window.history.back();
  }
  
}