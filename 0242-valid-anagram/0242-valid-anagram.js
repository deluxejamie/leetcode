/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    const chars = new Map();
    for (let i=0;i<s.length;i++) {
        chars.set(s[i], (chars.get(s[i]) ?? 0)+1 );
    }

    for (let i=0;i<t.length;i++) {
        const remaining = (chars.get(t[i]) ?? 0) -1 ;
        if (remaining < 0) return false;
        chars.set(t[i],remaining);
    }
    return true;
    
};