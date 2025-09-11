/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const found = new Map();
    for (let i=0; i <nums.length;i++) {
        if (found.has(nums[i]) && Math.abs(found.get(nums[i]) -  i) <=k) return true;
        found.set(nums[i], i);
    }

    return false;
};