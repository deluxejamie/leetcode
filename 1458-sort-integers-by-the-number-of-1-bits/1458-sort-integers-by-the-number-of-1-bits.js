/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    const bits = new Array(arr.length).fill(0);
    for (let i=0;i<arr.length;i++) {
        let res = arr[i];
        while (res !=0) {
            bits[i]+= (res&1)
            res >>= 1;
        }
    }

    const indexes = new Array(arr.length);
    for (let i=0;i<indexes.length;i++) indexes[i] = i;
    
    indexes.sort((a,b) => (bits[a] - bits[b]) || (arr[a] - arr[b]) )
    for (let i=0;i<indexes.length;i++) indexes[i] = arr[indexes[i]];
    return indexes;
    
};