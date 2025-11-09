/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let left = 0;
    let pos = 0;
    while (left != chars.length) {
        let right=left;
        while (right < chars.length &&
        (chars[right+1] == chars[left])
        ) right++;
        if (right > left) {
            chars[pos++] = chars[left];
            const split = (right+1 - left).toString().split('')
            for (let i=0;i<split.length;i++) {
                chars[pos++] = split[i];
            }
        } else {
            chars[pos++] = chars[left];
        }
        left = right+1; 
    }
    return pos;
};