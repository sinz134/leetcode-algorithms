// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
if(strs.length == 0) {
    return "";
}
    let res = strs[0];
    for(let i = 1; i< strs.length; i++){
    while (strs[i].indexOf(res) != 0) {
        res = res.slice(0, -1);
        if(res == "") {
        return "";
        }
    }
    }
    return res;
};