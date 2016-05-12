/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Service of the App
 */
import {Injectable} from "@angular/core";
import {Review} from "./review";
import {REVIEWS} from "./mock-reviews";

@Injectable()
export class ReviewService {
    static getReviews() {
        return Promise.resolve(REVIEWS);
    }

    getReviewSlowly() {
        return new Promise<Review[]>(resolve =>
            setTimeout(()=>resolve(REVIEWS), 2000) // 2 seconds
        );
    }

    getReview(name:string) {
        return Promise.resolve(REVIEWS).then(
            reviews => reviews.filter(review => review.name === name)[0]
        );
    }
}
