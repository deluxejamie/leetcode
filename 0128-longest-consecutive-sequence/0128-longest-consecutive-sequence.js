/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLength = 0;
    for (const num of set) {
        // not the start of the sequence
        if (set.has(num-1)) continue;
        let sequenceLength = 1;

        while (set.has(num+sequenceLength)) {
            sequenceLength++;
        }
        maxLength = Math.max(maxLength,sequenceLength)
        if (maxLength > nums.length/2) break;
    }
    return maxLength;

};