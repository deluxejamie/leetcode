/**
 * @param {string} s
 * @return {number}
 */

const results = new Map();

var numDecodings = function(s) {
    if (s.length === 0) return 1;       // base case: empty string
    if (s[0] === "0") return 0;         // invalid start
    if (results.has(s)) return results.get(s);

    let thisResult = numDecodings(s.slice(1));  // single-digit

    if (s.length >= 2) {
        const twoDigit = parseInt(s.slice(0,2));
        if (twoDigit >= 10 && twoDigit <= 26) {
            thisResult += numDecodings(s.slice(2));
        }
    }

    results.set(s, thisResult);
    return thisResult;
};