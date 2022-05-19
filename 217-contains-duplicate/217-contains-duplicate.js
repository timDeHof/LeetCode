/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false;
    for(let i = 0; i < nums.length; i++){
        for(let k = 0; k < nums.length; k++){
            if(i !== k){
                if(nums[i]===nums[k]){
                return result = true;
                break;
            }
            }
          
        }
    }
    return result;  
};