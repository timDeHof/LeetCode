/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices ={}
    for(let i = 0; i < nums.length; i++){
        const result = target - nums[i]
        if( indices.hasOwnProperty(result)){
            return [i, indices[result]];
        } else {
            indices[nums[i]] = i;
        }
            }
};