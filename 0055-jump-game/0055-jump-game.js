/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // const visited = new Set();

    // const visitPos = (i) => {
        // top down approach
        // if (visited.has(i)) return false;
        // if (i == nums.length-1) return true;
        // visited.add(i);

        // for (let p=nums[i];p>0;p--) {
        //     if (visitPos(p+i)) {
        //         return true;
        //     } 
        // }
        // return false;
        // }
        //}
        // return visitPos(0)

    // bottom up approach
    const reachesSolution = new Set();
    reachesSolution.add(nums.length-1)
    for (let i=nums.length-2;i>=0;i--) {
        for (let j=1;j<=nums[i];j++) {
            if (reachesSolution.has(i+j)) {
                reachesSolution.add(i);
                break;
            }
        }
    }
    return reachesSolution.has(0);
    

    
};