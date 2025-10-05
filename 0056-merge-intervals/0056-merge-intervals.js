/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => (a[0] - b[0]))
    const result = [intervals[0]];
    for (let i=1;i<intervals.length;i++) {
        const [start,end] = intervals[i];
        if (result[result.length-1][1] >= start) {
            if (result[result.length-1][1] < end) result[result.length-1][1] = end;
        } else {
            result.push(intervals[i])
        }
    }    
    return result;
};