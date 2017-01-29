/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

console.log(twoSumUsingTypeScript([2, 7, 11, 15], 9));
console.log(twoSumUsingTypeScript([3, 2, 4], 6));
console.log(twoSumUsingTypeScript([3, 3], 6));

export function twoSumUsingTypeScript(
  nums: number[],
  target: number
): number[] {
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
