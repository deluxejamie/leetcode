/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let total = 0;
    let minimal = nums.length+1;
    for (let end=0;end<nums.length;end++) {
        total += nums[end];
        while (total - nums[start] >= target) total-= nums[start++];
        if (total >= target && (end+1-start) < minimal) minimal = (end+1-start)

    }
    return (minimal > nums.length) ? 0 : minimal
    
};