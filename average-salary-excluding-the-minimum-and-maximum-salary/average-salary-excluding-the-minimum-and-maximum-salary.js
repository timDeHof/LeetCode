/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSalary = salary[0]
    let maxSalary = salary[0]
    let sum = 0
    for (let i = 0; i < salary.length; i++){
        if(salary[i] < minSalary){
            minSalary = salary[i]
        }
        if(salary[i] > maxSalary){
            maxSalary = salary[i]
        }
        sum += salary[i]
    }
    return (sum - minSalary - maxSalary) / (salary.length - 2)
}    