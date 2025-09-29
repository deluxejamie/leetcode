/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    const map = new Map();
    for (let i=0;i<arr.length;i++) {
        let numOf1s = 0;
        for (const char of arr[i].toString(2)) {
            if (char == "1") numOf1s++;
        }
        map.set(arr[i],numOf1s);
    }


    return arr
    .sort((a,b) => (map.get(a)-map.get(b)) || (a-b) )
    
};