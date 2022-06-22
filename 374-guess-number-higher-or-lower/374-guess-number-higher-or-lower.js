/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
     if (n === 1) return 1
    let start = 0;
    let end = n
    let middle = Math.floor((start+end) / 2)
    
    while(guess(middle) !== 0 && start <= end){
        if(guess(middle) === 1) start = middle + 1 
        else end = middle - 1
        
        middle = Math.floor((start + end) / 2)
    }
    
    return middle
};