/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const sortedSalarySum = salary.sort((a,b) => a-b).slice(1,salary.length-1)
    return sortedSalarySum.reduce((acc, current) => acc + current, 0) / sortedSalarySum.length
}    