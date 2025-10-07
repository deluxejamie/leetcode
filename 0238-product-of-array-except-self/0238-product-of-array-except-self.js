/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const results = new Array(nums.length);
    results[0] = 1;
    for (let i=1;i<nums.length;i++) {
        results[i] = results[i-1] * nums[i-1];
    }
    console.log(results);
    let total = 1;
    for (let i=nums.length-2;i>=0;i--) {
        total *= nums[i+1]
        results[i] *= (total);
    }
    return results;
    
};