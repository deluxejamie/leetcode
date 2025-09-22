/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxFrequency = 0;
    let totalFrequency = 0;
    const map = new Map();
    for (let i=0;i<nums.length;i++) {
        let newFrequency = (map.get(nums[i]) ?? 0) +1 
        map.set(nums[i],newFrequency);
        if (newFrequency > maxFrequency) {
            maxFrequency = newFrequency;
            totalFrequency = newFrequency;
        } else if (newFrequency == maxFrequency) {
            totalFrequency += newFrequency
        }
    }
    return totalFrequency;
    
};