/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    for (let i=0;i<nums.length;i++) {
        set.add(nums[i]);
    }
    let maxLength = 0;
    for (const num of set) {
        // not the start of the sequence
        if (set.has(num-1)) continue;
        let sequenceLength = 1;
        let j=num+1;
        while(set.has(j)) {
            sequenceLength++;
            j++;
        }
        maxLength = Math.max(maxLength,sequenceLength)
    }
    return maxLength;

};