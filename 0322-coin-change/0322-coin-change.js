/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // since we don't know the denomiations we don't know whether greedy is optimal
    const dp = new Array(amount+1);
    dp[0] = 0;
    for (let i=1;i<=amount;i++) {
        dp[i] = Number.POSITIVE_INFINITY;
        for (const coin of coins) {
            const diff = i-coin;
            if (diff >=0 && dp[diff] != Number.POSITIVE_INFINITY) {
                dp[i] = Math.min(dp[i], 1 + dp[diff])
            }
        }
    }

    return dp[amount] == Number.POSITIVE_INFINITY ? -1 : dp[amount];

};