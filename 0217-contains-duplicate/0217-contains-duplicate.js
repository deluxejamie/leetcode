/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const vals = new Set();
    for (let i=0;i<nums.length;i++) {
        if (vals.has(nums[i])) return true;
        vals.add(nums[i])
    }
    return false;
};