/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 1) return s;

    
    const findLargestPalindrome = (start, end) => {
        if (s[start] != s[end]) return s[start];

        while (start-1 >=0 && end+1 < s.length && s[start-1] == s[end+1]) {
            start--; end++;
        }
        return s.substring(start,end+1);
    }

    let longest = "";
    for (let centre=0;centre < s.length; centre++) {
        let a = findLargestPalindrome(centre,centre);
        let b = findLargestPalindrome(centre,centre+1);

        if (a.length > longest.length) longest = a;
        if (b.length > longest.length) longest = b;
    }
    return longest;
};
