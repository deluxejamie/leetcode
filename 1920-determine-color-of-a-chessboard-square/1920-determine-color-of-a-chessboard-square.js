/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let offset = coordinates.charCodeAt(0) - "a".charCodeAt(0);
    offset+= parseInt(coordinates[1]) +1
    return offset%2
    
};