/**
 * @param {string} s
 * @return {boolean}
 */

const validChars = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
var isPalindrome = function(s) {
    const reduced = [...s.toLowerCase()].filter(c => validChars.has(c)).join('');
    let left = 0;
    let right = reduced.length-1;
    while (left < right) {
        if (reduced[left++] != reduced[right--]) return false;
    }
    return true;
};