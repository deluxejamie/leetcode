/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let minimalDiff = Number.POSITIVE_INFINITY;
    let minimalPairs = [];
    let sorted = arr.sort((a,b) => a-b);
    for (let i=0;i<sorted.length-1;i++) {
        const diff = Math.abs(sorted[i] - sorted[i+1]);
        if (diff == minimalDiff) minimalPairs.push([sorted[i],sorted[i+1]])
        else if (diff < minimalDiff) {
            minimalPairs = [[sorted[i],sorted[i+1]]];
            minimalDiff = diff;
        }
    }
    return minimalPairs;
};