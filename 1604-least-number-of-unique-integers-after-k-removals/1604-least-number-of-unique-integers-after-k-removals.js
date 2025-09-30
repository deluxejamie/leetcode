/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const occs = new Map();
    for (const elem of arr) {
        occs.set(elem,(occs.get(elem) ?? 0)+1)
    }

    if (k == 0) return occs.size;

    const ascending = [...occs].sort(([ka,va], [kb,vb]) => va - vb);

    console.log(ascending)

    let i=0;
    while (k > 0) {
        if (k >= ascending[i][1]) {
            k-= occs.get(ascending[i][0]);
            occs.delete(ascending[i++][0]);
        } else k=0;
    }
    return occs.size;
};