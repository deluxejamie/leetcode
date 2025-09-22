/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const vals = new Map();
    for (const num of nums) {
        if (vals.has(num)) return true;
        vals.set(num,true);
    }
    return false;
};