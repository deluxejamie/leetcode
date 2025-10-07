/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0;
    const dupes = new Set();
    const needAbove = new Map();
    const needBelow = new Map();
    let maxLength = 0;

    for (let i=0;i<nums.length;i++) {
        if (dupes.has(nums[i])) continue;
        dupes.add(nums[i]);
        
        if (needBelow.has(nums[i])) {
            const data = needBelow.get(nums[i]);
            data.below--;
            needBelow.delete(nums[i]);

            if (needAbove.has(nums[i])) {
                const joinedBelow = needAbove.get(nums[i]);
                data.below = joinedBelow.below;
                needAbove.delete(nums[i]);
                needBelow.delete(joinedBelow.below);
                needBelow.set(data.below,data);
            } else {
                needBelow.set(nums[i]-1,data);
            }
            maxLength = Math.max(maxLength, (data.above - (data.below+1)))

        } else if (needAbove.has(nums[i])) {
            const data = needAbove.get(nums[i])
            data.above++;
            needAbove.delete(nums[i]);
            needAbove.set(nums[i]+1,data);
            maxLength = Math.max(maxLength,(data.above - (data.below+1)));
        } else {
            const seq = {
                above:nums[i]+1,
                below:nums[i]-1
            };
            maxLength = Math.max(maxLength,1);
            needAbove.set(nums[i]+1, seq);
            needBelow.set(nums[i]-1, seq);
        }
    }
    console.log(needAbove,needBelow);
    return maxLength;

};