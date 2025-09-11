/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // dummy result
    let shortestSubstring = s + "."
    const lettersNeeded = new Map();
    const distinctLetters = new Set();


    for (let i=0; i<t.length;i++) {
        lettersNeeded.set(t[i],(lettersNeeded.get(t[i]) ?? 0)+1);
        distinctLetters.add(t[i]);
    }

    const distinctLettersArr = [...distinctLetters];

    let start = 0;
    for (let end = 0; end < s.length; end++) {
        if (lettersNeeded.has(s[end])) {
            const demandForLetter = lettersNeeded.get(s[end])-1;
            lettersNeeded.set(s[end],demandForLetter);
        }
        while ((lettersNeeded.get(s[start]) ?? -1) < 0 && start < end) {
            if (lettersNeeded.has(s[start])) lettersNeeded.set(s[start],lettersNeeded.get(s[start])+1);
            start++;
        }



        if (distinctLettersArr.every(l => (lettersNeeded.get(l) ?? 0) <= 0) && shortestSubstring.length > (end + 1 - start)) shortestSubstring = s.substring(start,end+1);
        
    }

    if (shortestSubstring.length > s.length) return "";
    else return shortestSubstring

};