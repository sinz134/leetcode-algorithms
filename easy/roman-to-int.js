
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.


/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let inte = [1, 5, 10, 50, 100, 500, 1000];
let sub = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
let res = 0;

while(s.length>1){
    let tmp = s.slice(-2);
        
    if(sub.includes(tmp)){
        res += inte[roman.indexOf(tmp.slice(1))] - inte[roman.indexOf(tmp.slice(0,1))];
        s = s.slice(0, -2);
    } else {
        res += inte[roman.indexOf(tmp.slice(1))];    
        s = s.slice(0, -1);   
    }
}

if(s.length == 1)
{
    res += inte[roman.indexOf(s)];
}

return res;
};
