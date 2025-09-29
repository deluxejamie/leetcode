/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const results = [];

    const compute = (current) => {
        if (current == nums.length) return results.push([...nums]);

        for (let pointer = current; pointer < nums.length;pointer++) {
            const temp = nums[current];
            nums[current] = nums[pointer];
            nums[pointer] = temp;
            compute(current+1);
            nums[pointer] = nums[current];
            nums[current] = temp;
        }     
    }
    compute(0);
    return results;
    
};