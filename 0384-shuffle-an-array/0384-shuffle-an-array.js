/**
 * @param {number[]} nums
 */
var Solution = function(nums) {    
    this.original = [...nums];
    this.current = [...nums];
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
    for (let i=this.current.length-1;i>0;i--) {
        const newRandomIndex = Math.floor(Math.random() * (i+1));
        [this.current[i],this.current[newRandomIndex]] = [this.current[newRandomIndex],this.current[i]];
    }
    return this.current;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */