/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const results = [];

    const compute = (choices,remaining) => {
        if (remaining.length == 0) {
            results.push(choices)
            return;
        }

        for (const r of remaining) {
            compute([...choices,r],remaining.filter(q => q!==r))
        }
    }
    compute([],nums);
    
    return results;
    
};