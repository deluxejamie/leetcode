/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => (a[0] - b[0]))
    const result = [];
    for (let i=0;i<intervals.length;i++) {
        const [start,end] = intervals[i];
        if (i != 0 && result[result.length-1][1] >= start ) {
            if (result[result.length-1][1] < end) result[result.length-1][1] = end;
        } else {
            result.push(intervals[i])
        }
    }    
    return result;
};