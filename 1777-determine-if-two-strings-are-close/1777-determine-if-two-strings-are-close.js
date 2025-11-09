/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const offset = "a".charCodeAt(0);
    if (word1.length != word2.length) return false;
    const occs1 = new Array(26).fill(0);
    const occs2 = new Array(26).fill(0);
    for (let i=0;i<word1.length;i++) {
        occs1[word1.charCodeAt(i) - offset]++;
    }
    for (let i=0;i<word2.length;i++) {
        occs2[word2.charCodeAt(i) - offset]++;
    }
    for (let i=0;i<occs1.length;i++) {
        if (
            (occs1[i] > 0 && occs2[i] == 0) ||
            (occs2[i] > 0 && occs1[i] == 0)
        ) return false;
    }
    occs1.sort((a,b) => a-b);
    occs2.sort((a,b) => a-b);
    
    for (let i=0;i<occs1.length;i++) {
        if (occs1[i] != occs2[i]) return false;
    }
    return true;
};