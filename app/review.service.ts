/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Service of the App
 */
import {Injectable} from "@angular/core";
import {REVIEWS} from "./mock-reviews";

@Injectable()
export class ReviewService {
    
    getReview(title:string) {
        return Promise.resolve(REVIEWS).then(
            reviews => reviews.filter(review => review.title === title)[0]
        );
    }
}
