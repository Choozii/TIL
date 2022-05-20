/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negative_cnt = 0;
  for (let el of nums) {
    if (el == 0) return 0;
    else if (el < 0) negative_cnt++;
  }
  if (negative_cnt % 2 !== 0) return -1;
  else return 1;
};
