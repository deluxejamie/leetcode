/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let res = 0;
    let currentChar = "0";
    for (let i=0;i<target.length;i++) {
        if (target[i] != currentChar) {
            res++;
            currentChar = target[i];
        }
    }
    return res;
};