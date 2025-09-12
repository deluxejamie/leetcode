/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Map();
    for (const v of ["a","e","i","o","u"]) {
        vowels.set(v,true);
    }
    for (let i=0; i< s.length;i++) {
        if (vowels.has(s[i])) return true
    }

    return false
    
};