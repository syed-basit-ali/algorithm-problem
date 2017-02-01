/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

export function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];
  const sortedArray = mergedArray.sort((a, b) => a - b);

  let median;
  const mod = sortedArray.length % 2;
  const middle = sortedArray.length / 2;
  if (mod === 1) {
    median = sortedArray[~~middle];
    return median;
  }

  let first = ~~middle - 1;
  median = sortedArray[first] + sortedArray[~~middle];
  median = median / 2;
  return median;
}
