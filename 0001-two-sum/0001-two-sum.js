/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i=0;i<nums.length;i++) {
        const targetNumber = nums[i];
        if (numMap.has(targetNumber)) numMap.get(targetNumber).push(i);
        else (numMap.set(targetNumber,[i]));
    }

    for (let i=0;i<nums.length;i++) {
        const required = target - nums[i];
        if (numMap.has(required) && numMap.get(required).some(q => q != i)) return [i,numMap.get(required).find(q => q != i)];
    }
};