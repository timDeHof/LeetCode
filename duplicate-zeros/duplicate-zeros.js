/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const n = arr.length
    let zeros = 0
    while (zeros < n) {
    if (arr[zeros] === 0) {
      for (let j = n - 1; j > zeros; j--) {
        arr[j] = arr[j - 1];
      }
      zeros += 2;
    } else {
      zeros++;
    }
  }
};