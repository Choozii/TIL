/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    let val = s[i];
    if (map.get(val)) {
      map.set(val, [map.get(val)[0] + 1, i]);
    } else {
      map.set(val, [1, i]);
    }
  }
  let small_idx = Infinity;
  for (let v of map.values()) {
    if (v[0] == 1) small_idx = Math.min(v[1], small_idx);
  }
  return small_idx == Infinity ? -1 : small_idx;
};
