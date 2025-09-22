/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    const ltr = new Map();
    const rtl = new Map();

    for (let i=0;i<s.length;i++) {
        const char = s[i];
        const mappedChar = t[i];
        if ((
           (ltr.get(char) ?? mappedChar) != mappedChar
        ) || ((rtl.get(mappedChar) ?? char) != char)) return false;
        ltr.set(char,mappedChar);
        rtl.set(mappedChar,char);
    }
    return true;    
};