/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = 0;
    let front = 0;
    const charsUsed = new Map();

    for (let end=0;end<s.length;end++) {
        // if it hasnt been seen then undefined >= any number is false
        if (charsUsed.get(s[end]) >= front) {
            front = charsUsed.get(s[end])+1;
        }
        charsUsed.set(s[end],end);
        longestSubstring = Math.max(end+1-front,longestSubstring)
    }

    return longestSubstring;
};