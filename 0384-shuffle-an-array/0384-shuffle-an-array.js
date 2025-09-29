/**
 * @param {number[]} nums
 */
var Solution = function(nums) {    
    this.original = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const solution = [];
    const available = [...this.original];
    for (let i=0;i<this.original.length;i++) {
        const targetIndex = Math.floor(Math.random() * available.length);
        solution.push(available[targetIndex]);
        available.splice(targetIndex,1);
    }
    return solution;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */