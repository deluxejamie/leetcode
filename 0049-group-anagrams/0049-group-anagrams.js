/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map();
    
    for (const str of strs) {
        const sorted = [...str].sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
        let targetArr = anagrams.get(sorted);
        if (!targetArr) {
            targetArr = [];
            anagrams.set(sorted,targetArr);
        }
        targetArr.push(str)
    }
    const res = [];
    for (const [k,anagram] of anagrams.entries()) {
        res.push(anagram)
    }
    return res;
    
};