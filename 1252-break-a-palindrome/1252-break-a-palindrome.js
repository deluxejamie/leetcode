/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length== 1) return "";
    let updatedString = [...palindrome]

    for (let i=0;i<Math.floor((palindrome.length)/2);i++) {
        if (palindrome[i] != "a") {
            updatedString[i] = "a"
            return updatedString.join("");
        }
    }
    for (let i=palindrome.length-1;i>=0;i--) {
        if (palindrome[i] != "b") {
            updatedString[i] = "b"
            return updatedString.join("")
        }
    }
    
    
    
};