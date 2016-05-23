/**
 * Created by coryginsberg on 4/30/16.
 *
 * Mock Reviews for the App
 * ***Note: For Testing Purposes Only!!!***
 */
import {Review} from "./review";

export var REVIEWS:Review[] = [
    {
        title: "God of War",
        score: "9.8",
        publisher: "Sony Computer Entertainment",
        short_description: "March 22, 2005 - Metal\", God of War equips its hero with a pair of sword-like chain weapons that can grab enemies, perform multi-hit combos, and pull off a variety of different...",
        platforms: {
            "1": "PS2",
            "2": "PS3"
        },
        thumb: "http://ps2media.ign.com/ps2/image/object/661/661321/godofwar_ps2box_usa_org_000boxart_160w.jpg"
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "score": "9.5",
        "publisher": "Bethesda Softworks",
        "short_description": "November 11, 2011 - King of Skyrim has been murdered. Alliances form as claims to the throne are made. In the midst of this conflict, a far more dangerous, ancient evil is awakened...",
        "platforms": {
            "1": "PS3",
            "2": "Xbox 360",
            "3": "PC"
        },
        "thumb": "http://xbox360media.ign.com/xbox360/image/object/093/093394/skyrim_ps3_frontcover1boxart_160w.jpg"
    }
];
