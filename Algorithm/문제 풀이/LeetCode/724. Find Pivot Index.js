/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum_left = 0,
    pivot_idx = 0;
  let sum_right = nums.reduce((prev, curr) => prev + curr, 0) - nums[0];

  while (pivot_idx < nums.length) {
    if (sum_left === sum_right) return pivot_idx;

    sum_left += nums[pivot_idx];
    pivot_idx++;
    sum_right -= nums[pivot_idx];
  }
  return -1;
};
