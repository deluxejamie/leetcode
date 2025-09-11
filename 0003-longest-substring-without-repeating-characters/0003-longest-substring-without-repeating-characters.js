/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = 0;
    let front = 0;

    while (front < (s.length - longestSubstring)) {
        const charsUsed = new Map();
        let end = front;
        while (end < s.length && !charsUsed.has(s[end])) {
            charsUsed.set(s[end],end);
            end++;
        };
        if (longestSubstring < charsUsed.size) longestSubstring = charsUsed.size
        front = charsUsed.get(s[end])+1;
    }
    return longestSubstring;
};