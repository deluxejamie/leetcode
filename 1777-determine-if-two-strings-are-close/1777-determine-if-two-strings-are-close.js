/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;
    const occs1 = new Map();
    const occs2 = new Map();
    for (let i=0;i<word1.length;i++) {
        occs1.set(word1[i], (occs1.get(word1[i]) ?? 0) + 1);
    }
    for (let i=0;i<word2.length;i++) {
        occs2.set(word2[i], (occs2.get(word2[i]) ?? 0) + 1);
    }
    const occs1Entries = [...occs1.entries()];
    const occs2Entries = [...occs2.entries()];

    if (occs1Entries.length != occs2Entries.length) return false;

    occs1Entries.sort(([_k1,v1], [_k2,v2]) => v1-v2)
    occs2Entries.sort(([_k1,v1], [_k2,v2]) => v1-v2)
    
    for (let i=0;i<occs1Entries.length;i++) {if (!occs2.has(occs1Entries[i][0])) return false;}
    for (let i=0;i<occs2Entries.length;i++) {if (!occs1.has(occs2Entries[i][0])) return false;}
    
    for (let i=0;i<occs1Entries.length;i++) {
        if (occs1Entries[i][1] != occs2Entries[i][1]) return false;
    }
    return true;
};