/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    let index = 0
    while (index <= nums.length -1){
        let num = nums[index]
        let diff = target - num
        let diffIndex = nums.findIndex((element, i) => element === diff && i !== index)
        if(diffIndex !== -1){
            return [index,diffIndex]
        }
        index++
    }
};