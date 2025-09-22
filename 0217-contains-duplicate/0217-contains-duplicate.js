/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const vals = new Map();
    for (let i=0;i<nums.length;i++) {
        if (vals.has(nums[i])) return true;
        vals.set(nums[i],true)
    }
    return false;
};