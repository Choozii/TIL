/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length == 1 || nums.length == 2) return true;
  let tendency = 'neutral';
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (tendency == 'neutral') {
      if (nums[p1] - nums[p2] < 0) tendency = 'decreasing';
      else if (nums[p1] - nums[p2] > 0) tendency = 'increasing';
    } else if (tendency == 'increasing') {
      if (nums[p1] - nums[p2] < 0) return false;
    } else if (tendency == 'decreasing') {
      if (nums[p1] - nums[p2] > 0) return false;
    }

    p1++;
    p2++;
  }
  return true;
};
