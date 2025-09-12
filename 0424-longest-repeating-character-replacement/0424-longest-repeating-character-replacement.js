/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longestSection = 0;
    let start = 0;
    let mostCommonChar = "";
    let chars = new Map();
    for (let end=0;end <s.length;end++) {
        let newFreq = (chars.get(s[end]) ?? 0) +1
        chars.set(s[end],newFreq);
        if (newFreq >= ( chars.get(mostCommonChar) ?? 0) || (s[end] != mostCommonChar && k==0)) {
            mostCommonChar = s[end];
        }

        while ((end+1-(start+chars.get(mostCommonChar))) > k) {
            chars.set(s[start],chars.get(s[start])-1);
            start++;
            for (const [k,v] of chars) {
                if (chars.get(mostCommonChar) < v) {
                    mostCommonChar = k;
                }
            };
        }

        longestSection = Math.max((end+1-start),longestSection);
    }
    
    return longestSection;
};