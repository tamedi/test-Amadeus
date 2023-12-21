/**
 * Calculates the cumulative likes for a given day based on the viral advertising strategy.
 *
 * @param {number} n - The day number to report.
 * @returns {number} - The cumulative likes at that day.
 */
export function viralAdvertising(n:number):number{

    var sharedLikes: number = 5;
    var cumulativesLike:number = 0;
    var likes:number = 0;
    for(let day = 1;day<=n;day++){
        likes = Math.floor(sharedLikes/2);
        sharedLikes=likes*3;
        cumulativesLike+=likes;
    }
    
    return cumulativesLike;
}
const myDaynumber: number = 5;
viralAdvertising(myDaynumber);
console.log("the cumulative likes "
+"for " + myDaynumber + " days : "
+ viralAdvertising(myDaynumber));

/**
 * Calculates the minimum number of days needed to reach a certain number of likes.
 *
 * @param {number} n - The number of likes to reach.
 * @returns {number} - The minimum number of days to reach that objective.
 */

export function requiredMinimumDays(n:number):number{

    var sharedLikes: number = 5;
    var cumulativesLike:number = 0;
    var likes:number = 0;
    var day:number = 0;

    while(cumulativesLike<n){
        likes = Math.floor(sharedLikes/2);
        sharedLikes = likes*3;
        cumulativesLike+=likes;
        day++
    }
    return day;
}

const myNumberOfLikes:number = 15;
requiredMinimumDays(myNumberOfLikes);
console.log("the minimum number of days needed to reach "
+myNumberOfLikes
+" likes : "
+requiredMinimumDays(myNumberOfLikes));
