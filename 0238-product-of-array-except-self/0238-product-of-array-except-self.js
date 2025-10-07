/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const pres = new Array(nums.length);
    pres[0] = 1;
    const suffs = new Array(nums.length);
    suffs[nums.length-1] = 1;
    for (let i=1;i<nums.length;i++) {
        pres[i] = pres[i-1] * nums[i-1];
    }
    for (let i=nums.length-2;i>=0;i--) {
        suffs[i] = suffs[i+1] * nums[i+1]
    }

    const res = new Array(nums.length);
    for (let i=0;i<res.length;i++) {
        res[i] = pres[i] * suffs[i];
    }
    return res;
    
};