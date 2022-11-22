/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = nums.map(num => num**2)
    return squaredNums.sort((a, b) => a - b)
};