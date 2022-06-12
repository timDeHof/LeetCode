/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let reversedNum = x.toString().split('').reverse().join('')
   if (reversedNum === x.toString()){
       return true
   }else{
       return false
   }
};