/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freqs = new Map();

    for (let i=0;i<word1.length;i++) {
        const char = word1[i];
        freqs.set(char,(freqs.get(char) ?? 0) +1);
    }
    for (let i=0;i<word2.length;i++) {
        const char = word2[i];
        freqs.set(char,(freqs.get(char) ?? 0) -1);
    }

    for (const [char,val] of freqs.entries()) {
        if (Math.abs(val) > 3) return false;
    }
    return true;

    
};