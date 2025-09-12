/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longestSection = 0;
    let start = 0;
    let mostFreqCount = 0;
    let chars = new Map();
    for (let end=0;end<s.length;end++) {
        let newFreq = (chars.get(s[end]) ?? 0) + 1;
        chars.set(s[end],newFreq);
        mostFreqCount = Math.max(mostFreqCount,newFreq);

        while((end+1-(start+mostFreqCount) > k)) {
            chars.set(s[start],chars.get(s[start])-1);
            start++
        }

        longestSection = Math.max((end+1-start),longestSection);
    }
    
    return longestSection;
};