/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);
  let low = 0;
  let high = n1;
  while (low <= high) {
    const partition1 = Math.floor((low + high) / 2);
    const partition2 = Math.floor((n1 + n2 + 1) / 2) - partition1;
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === n1 ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      const maxLeft = Math.max(maxLeft1, maxLeft2);
      const minRight = Math.min(minRight1, minRight2);
      return (n1 + n2) % 2 === 0 ? (maxLeft + minRight) / 2 : maxLeft;
    } else if (maxLeft1 > minRight2) {
      high = partition1 - 1;
    } else {
      low = partition1 + 1;
    }
  }
  return 0;
};