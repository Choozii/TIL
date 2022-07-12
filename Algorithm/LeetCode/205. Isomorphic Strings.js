/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], t[i]);
    }

    let val = map.get(s[i]);
    if (val !== t[i]) return false;
  }
  return true;
};
