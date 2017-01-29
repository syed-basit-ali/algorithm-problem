/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

console.log(twoSumUsingJavaScript([2, 7, 11, 15], 9));
console.log(twoSumUsingJavaScript([3, 2, 4], 6));
console.log(twoSumUsingJavaScript([3, 3], 6));

function twoSumUsingJavaScript(nums, target) {
  for (let row = 0; row < nums.length; row++) {
    for (let col = row; col < nums.length; col++) {
      if (col !== row) {
        const sum = nums[row] + nums[col];
        if (sum === target) {
          return [row, col];
        }
      }
    }
  }

  return [];
}
