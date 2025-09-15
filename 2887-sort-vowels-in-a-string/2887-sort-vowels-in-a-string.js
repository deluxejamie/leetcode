/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowelPositions = [];
    const vowelsContained = new Map();
    for (let i=0;i<s.length;i++) {
        if ("aeiou".includes(s[i].toLowerCase())) {
            vowelPositions.push(i);
        }
        vowelsContained.set(s[i], (vowelsContained.get(s[i]) ?? 0) + 1);
    };

    if (vowelPositions.length == 0) return s;


    let vowels = [..."AEIOU",..."aeiou"];
    let currentVowelsPosition = 0;
    const newString = [...s];
    
    for (let i=0;i<vowelPositions.length;i++) {
        while ((vowelsContained.get(vowels[currentVowelsPosition]) ?? 0) == 0) currentVowelsPosition++;
        newString[vowelPositions[i]] = vowels[currentVowelsPosition];
        vowelsContained.set(vowels[currentVowelsPosition],vowelsContained.get(vowels[currentVowelsPosition])-1)
    }
    return newString.join("");
    
};