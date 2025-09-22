/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    let bestTotal = nums[0];
    for (let i=1;i<nums.length; i++) {
        if (result < 0) result=0;
        result+=nums[i];
        bestTotal = Math.max(bestTotal,result);
    }
    return bestTotal;
};