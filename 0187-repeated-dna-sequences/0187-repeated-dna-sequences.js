/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const map = new Map();
    const results = [];
    for (let i=0; i<s.length-9;i++) {
        const substr = s.substring(i,i+10);
        if (map.has(substr)) {
            if (map.get(substr) === true) {
                results.push(substr)
                map.set(substr,false);  
            }
        } else map.set(substr,true);
    }
    return results;
    
};