"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredMinimumDays = exports.viralAdvertising = void 0;
/**
 * Calculates the cumulative likes for a given day based on the viral advertising strategy.
 *
 * @param {number} n - The day number to report.
 * @returns {number} - The cumulative likes at that day.
 */
function viralAdvertising(n) {
    var sharedLikes = 5;
    var cumulativesLike = 0;
    var likes = 0;
    for (var day = 1; day <= n; day++) {
        likes = Math.floor(sharedLikes / 2);
        sharedLikes = likes * 3;
        cumulativesLike += likes;
    }
    return cumulativesLike;
}
exports.viralAdvertising = viralAdvertising;
var myDaynumber = 5;
viralAdvertising(myDaynumber);
console.log("the cumulative likes "
    + "for " + myDaynumber + " days : "
    + viralAdvertising(myDaynumber));
/**
 * Calculates the minimum number of days needed to reach a certain number of likes.
 *
 * @param {number} n - The number of likes to reach.
 * @returns {number} - The minimum number of days to reach that objective.
 */
function requiredMinimumDays(n) {
    var sharedLikes = 5;
    var cumulativesLike = 0;
    var likes = 0;
    var day = 0;
    while (cumulativesLike < n) {
        likes = Math.floor(sharedLikes / 2);
        sharedLikes = likes * 3;
        cumulativesLike += likes;
        day++;
    }
    return day;
}
exports.requiredMinimumDays = requiredMinimumDays;
var myNumberOfLikes = 15;
requiredMinimumDays(myNumberOfLikes);
console.log("the minimum number of days needed to reach "
    + myNumberOfLikes
    + " likes : "
    + requiredMinimumDays(myNumberOfLikes));
