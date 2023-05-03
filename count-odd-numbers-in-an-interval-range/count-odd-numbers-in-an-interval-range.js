/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
   const isLowOdd = low % 2 === 1;
   const isHighOdd = high % 2 === 1;
   const count = Math.floor((high - low + isLowOdd + isHighOdd) / 2)
   return count 
};