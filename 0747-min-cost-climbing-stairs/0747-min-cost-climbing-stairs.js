/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    const dp = new Array(cost.length);
    
    const solve = (index) => {
        if (index == cost.length) return 0;
        if (index >= cost.length - 2) return cost[index];

        if (dp[index] != undefined) return dp[index];

        const res = cost[index] + Math.min(solve(index+1), solve(index+2));
        dp[index] = res;
        return res;

    } 
    return Math.min(solve(0), solve(1));
    
};