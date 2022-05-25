/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const s_arr = [...s];
  const matched = {};

  for (let i = 0; i < upper.length; i++) {
    matched[upper[i]] = lower[i];
  }

  for (let i = 0; i < s.length; i++) {
    if ('A' <= s[i] && s[i] <= 'Z') {
      let lowerCase = matched[s[i]];
      s_arr.splice(i, 1, lowerCase);
    }
  }

  return s_arr.join('');
};
