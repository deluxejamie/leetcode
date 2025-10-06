/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) return nums[0];
    const nums2 = nums.slice(1)
    nums2.push(0);
    nums[nums.length-1] = 0;

    for (let i=nums.length-4;i>=0;i--) {
        nums[i]+= Math.max(nums[i+2],nums[i+3]);
        nums2[i] +=Math.max(nums2[i+2],nums2[i+3]);
    }
    return Math.max(nums[0],nums[1],nums2[0],nums2[1])
    
};