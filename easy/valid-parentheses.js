// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true


/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
    if(s.length <2){
      return false;
    }
    
    let check = ["()", "{}", "[]"];
    let open = ["(", "{", "["];
    let close = [")", "}", "]"];
    
    for(let i = 0; i < s.length; i++)
    {
      if(close.includes(s.slice(i, i+1))){
        if( i == 0) {
          return false;
        } 
        
        for( let j = i-1; j>=0; j--)
        {
          let tmp = s.slice(j, j+1);
          if(open.includes(tmp) && open.indexOf(tmp) != close.indexOf(s.slice(i,i+1))) {
            return false;
          }
          if(check.includes(tmp + s.slice(i,i+1) )){
            s = s.slice(0, j) + s.slice(j+1, i) + s.slice(i+1); 
            i -=2;
            break ;
          } 
  
        if(j== 0) {
          return false;
        }    
        }
      } 
    }
    if(s != ""){
      return false;
    }
    return true;
  };