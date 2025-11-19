/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {

    let max = 0;
    // dp[i][j] is the longest subsequent ending at nums1[i] and nums2[j]
    const dp = new Array(nums1.length);
    for (let i=0;i<nums1.length;i++) {
        dp[i] = new Array(nums2.length);
    }

    // setup first row and columns of dp
    for (let j=0; j<nums2.length;j++) {
        if (nums1[0] == nums2[j]) {
            dp[0][j] = 1;
            max = 1;
        } else { dp[0][j] = 0; }
    }

    for (let i=0;i<nums1.length;i++) {
        if (nums1[i] == nums2[0]) {
            dp[i][0] = 1;
            max = 1;
        } else { dp[i][0] = 0; }
    }

    for (let i=1;i<nums1.length;i++) {
        for (let j=1;j<nums2.length;j++) {
            const outcome = nums1[i] == nums2[j] ? dp[i-1][j-1] + 1 : 0;
            dp[i][j] = outcome;
            max = Math.max(max,outcome);
        }
    }
    return max;

};