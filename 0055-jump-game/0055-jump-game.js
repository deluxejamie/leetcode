/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const visited = new Set();

    const visitPos = (i) => {
        if (visited.has(i)) return false;
        if (i == nums.length-1) return true;

        for (let p=1;p<=nums[i];p++) {
            if (visitPos(p+i)) {
                return true;
            }
        }
        visited.add(i);
        return false;
    }
    return visitPos(0)
    
};