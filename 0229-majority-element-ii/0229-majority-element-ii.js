/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    const occs = new Map();
    const results = [];
    let threshold = nums.length/3;
    if (Number.isInteger(threshold)) threshold++;
    else threshold = Math.ceil(threshold);

    for (const num of nums) {
        let newOccs = (occs.get(num) ?? 0)+1;
        occs.set(num,newOccs);
        if (newOccs == threshold) results.push(num);
    }
    return results;
};