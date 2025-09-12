/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    let vowelCount = 0;
    const vowels = new Map();
    for (const v of ["a","e","i","o","u"]) {
        vowels.set(v,true);
    }
    for (const c of s) {
        if (vowels.has(c)) vowelCount++;
    }

    return vowelCount != 0
    
};