/**
 * @param {string} s
 * @return {boolean}
 */

const validChars = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        while (left < s.length-1 && !validChars.has(s[left].toLowerCase())) left++;
        while (right > 0 && !validChars.has(s[right].toLowerCase())) right--;
        if (left > right) break;
        if (s[left++].toLowerCase() != s[right--].toLowerCase()) return false;
    }
    return true;
};