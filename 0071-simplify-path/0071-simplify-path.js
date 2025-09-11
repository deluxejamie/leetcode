/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const simplified = [];
    for (const section of path.split("/")) {
        // an empty section which would be created by //
        if (!section || section == ".") continue;
        if (section == "..") {
            if (simplified.length > 0) simplified.pop();
        } else {
            simplified.push(section)
        }
    }
    return "/" + simplified.join("/")
    
};