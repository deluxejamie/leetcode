/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n == 0) return 0;
    const nums = new Array(n+1);
    nums[0] = 0;
    nums[1] = 1;
    let max = 1;

    let currentOdd = true;
    for (let i=2;i<=n;i++) {
        currentOdd = !currentOdd;
        if (currentOdd === true) {
            const halvedI = (i-1)/ 2;
            nums[i] = nums[halvedI] + nums[halvedI+1];
        } else {
            nums[i] = nums[i/2];
        }
        max = Math.max(max,nums[i]);       
    }
    console.log(nums)
    return max;
};