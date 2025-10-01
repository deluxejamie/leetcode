/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    const freqs = new Map();
    for (let i=0;i<s.length;i++) freqs.set(s[i], (freqs.get(s[i]) ?? 0) + 1);
    
    let vowel = 0;
    let consonant = 0;
    
    for (const [char,freq] of freqs.entries()) {
        if ("aeiou".includes(char)) {
            vowel = Math.max(vowel,freq)
        } else {
            consonant = Math.max(consonant,freq)
        }
    }
    return vowel + consonant

};