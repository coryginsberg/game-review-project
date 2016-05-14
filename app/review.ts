/**
 * Created by coryginsberg on 4/30/16.
 *
 * Review Definition
 */
export class Review {
    title:string;
    score:string;
    publisher:string;
    short_description:string;
    platforms:{ [index:string]:string };
    thumb:string;
}