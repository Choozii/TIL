/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  let sorted = arr.sort((a, b) => a - b);
  let difference = sorted[1] - sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== difference) return false;
  }
  return true;
};
