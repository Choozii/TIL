/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const ans = [];
  const obj = {};

  for (let el of nums1) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  }

  for (let el of nums2) {
    if (!obj[el]) continue;
    ans.push(el);
    obj[el]--;
  }
  return ans;
};

//sol2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();

  for (let el of nums1) {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  }

  const ans = [];

  for (let el of nums2) {
    if (map.has(el) && map.get(el) > 0) {
      ans.push(el);
      map.set(el, map.get(el) - 1);
    }
  }
  return ans;
};

