/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    let val = n;
    while (val > 0) {
        while ((val % 2) == 0) val/=2;
        bits++;
        val-=1;
    }
    return bits;


    
};