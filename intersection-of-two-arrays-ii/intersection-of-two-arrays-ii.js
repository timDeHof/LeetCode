/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const intersection = {}
    const result = []
    for (const num of nums1){
        intersection[num] = (intersection[num] || 0) + 1;
    }

    for ( const num of nums2){
        if (intersection[num] > 0){
            result.push(num)
            intersection[num]--
        }
    }
    return result
};