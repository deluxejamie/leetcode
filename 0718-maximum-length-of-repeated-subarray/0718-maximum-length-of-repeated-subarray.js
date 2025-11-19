/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {

    let max = Number.NEGATIVE_INFINITY;
    // dp[i][j] is the longest subsequent ending at text1[i] and text2[j]
    const dp = new Array(nums1.length);
    for (let i=0;i<nums1.length;i++) {
        dp[i] = new Array(nums2.length);
    }
    for (let i=0;i<nums1.length;i++) {
        for (let j=0;j<nums2.length;j++) {
            const fromBefore = j ==0 || i ==0 ? 0 : dp[i-1][j-1];
            const outcome = nums1[i] == nums2[j] ? 1 + fromBefore : 0;
            dp[i][j] = outcome;
            max = Math.max(max,outcome);
        }
    }
    return max;

};