/**
 * @param {number} num
 * @return {string}
 */
const descending = [
    {char:"M",val:1000},
    {char:"CM",val:900},
    {char:"D",val:500},
    {char:"CD",val:400},
    {char:"C",val:100},
    {char:"XC",val:90},
    {char:"L",val:50},
    {char:"XL",val:40},
    {char:"X",val:10},
    {char:"IX",val:9},
    {char:"V",val:5},
    {char:"IV",val:4},
    {char:"I",val:1}
    ];
var intToRoman = function(num) {
    let result = "";
    while (num > 0) {
        let largest = descending.find(t => t.val <= num);
        result+=largest.char;
        num-=largest.val;
    }
    return result;
};