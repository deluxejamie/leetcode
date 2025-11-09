/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const result = [];
    for (let i=0;i<s.length;i++) {
        if (s[i] == '*') result.pop();
        else result.push(s[i])
    }
    return result.join('')
};