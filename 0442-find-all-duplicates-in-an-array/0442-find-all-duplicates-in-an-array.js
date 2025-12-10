/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const results = [];
    for (let i=0;i<nums.length;i++) {
        let abs = Math.abs(nums[i])
        if (nums[abs-1] < 0) results.push(abs);
        else {
            nums[abs-1]*=-1;
        }
    }
    return results;
};