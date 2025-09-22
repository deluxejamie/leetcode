/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxFrequency = 0;
    const map = new Map();
    for (let i=0;i<nums.length;i++) {
        let newFrequency = (map.get(nums[i]) ?? 0) +1 
        map.set(nums[i],newFrequency);
        if (newFrequency >= maxFrequency) maxFrequency = newFrequency;
    }
    let result = 0;
    for (const [k,v] of map.entries()) {
        if (v == maxFrequency) result += v
    }
    return result;
    
};