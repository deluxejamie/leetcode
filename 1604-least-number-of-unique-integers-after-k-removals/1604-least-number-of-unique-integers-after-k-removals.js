/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const occs = new Map();
    arr.forEach(elem => occs.set(elem,(occs.get(elem) ?? 0)+1));

    if (k == 0) return occs.size;

    const ascending = [...occs.entries()].sort((a, b) => a[1] - b[1]);

    let i=0;
    let uniques = occs.size;
    while (k > 0) {
        if (k >= ascending[i][1]) {
            k-= occs.get(ascending[i++][0]);
            uniques--;
        } else break;
    }
    return uniques;
};