/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const chars = new Set();
    const freqs1 = new Map();
    const freqs2 = new Map();

    for (let i=0;i<word1.length;i++) {
        const char = word1[i];
        freqs1.set(char,(freqs1.get(char) ?? 0) +1);
        chars.add(char);
    }
    for (let i=0;i<word2.length;i++) {
        const char = word2[i];
        freqs2.set(char,(freqs2.get(char) ?? 0) +1);
        chars.add(char);
    }
    
    for (const char of chars) {
        if (Math.abs((freqs2.get(char) ?? 0) - (freqs1.get(char) ?? 0)) > 3) return false;
    }
    return true;

    
};