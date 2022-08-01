/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < -(2 ** 31)) return 0;
  else if (x >= 2 ** 31) return 0;

  const reverseStr = s => {
    let left = 0,
      right = s.length - 1;
    str = s.split('');
    while (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      right--;
      left++;
    }
    return str.join('');
  };

  const result = x < 0 ? -1 * reverseStr((x * -1).toString()) : 1 * reverseStr(x.toString());

  if (result < -(2 ** 31)) return 0;
  else if (result >= 2 ** 31) return 0;

  return result;
};
