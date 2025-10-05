/**
 * @param {string} s
 * @return {number}
 */

const results = new Map([["",1]]);


var numDecodings = function(s) {
    if (s[0] == "0") return 0;
    if (s.length == 1) return 1;

    if (results.has(s)) return results.get(s);

    let thisResult = 0;

    if (s[0] == "1" || (s[0] == "2" && "0123456".includes(s[1]))) thisResult+= (s.length == 1) ? 1 : numDecodings(s.slice(2));
    thisResult+=numDecodings(s.slice(1));

    results.set(s,thisResult);
    return thisResult;
    
};