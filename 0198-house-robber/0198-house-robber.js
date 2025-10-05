/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    nums.push(0)
    for (let i=nums.length-4;i>=0;i--) {
        nums[i] += Math.max(nums[i+2],nums[i+3]);
    }
    return Math.max(nums[0],nums[1])
    
};