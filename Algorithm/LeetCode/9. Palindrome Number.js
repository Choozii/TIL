/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let l = 0;
  let h = x.toString().length - 1;
  let strx = x.toString();
  while (l < h) {
    if (strx[l] !== strx[h]) return false;
    l++;
    h--;
  }
  return true;
};
