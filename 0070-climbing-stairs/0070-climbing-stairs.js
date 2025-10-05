/**
 * @param {number} n
 * @return {number}
 */

const results = new Map([[1,1],[0,1]]);

var climbStairs = function(n) {
    if (results.has(n)) return results.get(n);

    const actualResult = climbStairs(n-1) + climbStairs(n-2);
    results.set(n,actualResult);
    return actualResult;

};
