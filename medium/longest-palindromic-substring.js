// Given a string s, return the longest
// palindromic
// substring
// in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";
        let start = 0, end = 0;
        for (let i = 0; i < s.length; i++) {
            let len1 = expandAroundCenter(s, i, i);
            let len2 = expandAroundCenter(s, i, i + 1);
            let len = Math.max(len1, len2);
            if (len > end - start) {
                start = (i - (len/2)) + 1 ;
                end = (i+1 + (len/2)) -1 ;
            }
        }
        return s.slice(start, end + 1);
};

function expandAroundCenter(s, L, R) {
        while (L >= 0 && R < s.length && s[L] == s[R]) {
            L--;
            R++;
        }
        return R - L - 1;
    }