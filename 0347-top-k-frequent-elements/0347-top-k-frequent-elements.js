/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    const freqs = new Map();
    for (let i=0;i<nums.length;i++) {
        const newFreq = (map.get(nums[i]) ?? 0) + 1
        map.set(nums[i], newFreq);
        let arr = freqs.get(newFreq)
        if (!arr) {
            arr = []
            freqs.set(newFreq,arr)
        }
        arr.push(nums[i]);
    }
    const results = [];
    let remaining = k;
    const used = new Set();
    const values = [...freqs.entries()];
    for (let i=values.length-1;i>=0;i--) {
        // there will always be a unique answer so no need to deal with found.length consuming more than remains in k
        const [_qnty,found] = values[i];
        const ftr = found.filter(p => !used.has(p));
        ftr.forEach(p => used.add(p));
        results.push(...ftr)
        k-=ftr.length
        if (k ==0 ) break;
    }
    return results;
};