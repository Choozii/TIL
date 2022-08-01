/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let first_idx = 0;
  let last_idx = numbers.length - 1;

  while (first_idx < last_idx) {
    let sum = numbers[first_idx] + numbers[last_idx];

    if (sum === target) return [first_idx + 1, last_idx + 1];

    if (sum < target) first_idx++;
    else if (sum > target) last_idx--;
  }
};
