/**
 * @param {string} s
 * @return {number}
 */
let romanList = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
let romanToInt = function (s) {
  let sArr = s.split('');
  console.log(sArr);
  let result = 0;
  while (sArr.length > 0) {
    let currentChar = romanList[sArr[0]];
    let nextChar = romanList[sArr[1]];

    if (nextChar && nextChar > currentChar) {
      result += nextChar - currentChar;
      sArr.splice(0, 2);
    } else {
      result += currentChar;
      sArr.splice(0, 1);
    }
  }
  return result;
};