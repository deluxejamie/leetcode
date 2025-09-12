/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set();
    for (const v of ["a","e","i","o","u"]) {
        vowels.add(v.charCodeAt(0));
    }
    for (let i=0; i< s.length;i++) {
        if (vowels.has(s.charCodeAt(i))) return true
    }

    return false
    
};