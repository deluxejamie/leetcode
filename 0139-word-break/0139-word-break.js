/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length+1);
    dp[s.length] = true;
    for (let i=s.length-1;i>=0;i--) {
        dp[i] = false;
        for (const word of wordDict) {
            if (word.length > s.length-i || !dp[word.length + i]) continue;

            if (s.substring(i,i+word.length) == word) {
                dp[i] = true;
            }
        }
    }
    console.log(dp)
    return dp[0];
    
};