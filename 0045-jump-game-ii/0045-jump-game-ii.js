/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let jumps =0;
    let pos = 0;
    while (pos < nums.length-1) {
        let bestWeight = nums[pos];
        let bestPos = pos;
        for (let offset=1;offset<=nums[pos];offset++) {
            const newPos = pos+offset;
            if (newPos >= nums.length-1) {
                bestPos = newPos;
                break;
            }
            const weight = newPos+nums[newPos];
            if (weight > bestWeight) {
                bestPos = newPos;
                bestWeight = weight;
            }
        }
        jumps++;
        pos = bestPos;
    }
    return jumps;
};