// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
if(x<0)
{
    return false;
}
let y = 0, i = 10;
let a = x, b = x;

while(b>0)
{
    y = y*i + (b%10);
    b = Math.floor(b/10);
    
}
    
if(x == y)
{
    return true;
} 
return false;

};